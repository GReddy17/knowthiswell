'use client';

import { useMemo, useState } from 'react';

export interface CalcField {
  key: string;
  label: string;
  defaultValue: number;
  step?: number;
  suffix?: string; // e.g. "%" or "yrs", shown as a hint, not enforced
}

/**
 * Named formula registry. A `compute` function prop CANNOT be passed from
 * an MDX post body (a Server Component) into this Client Component —
 * React strips functions at the RSC serialization boundary, which fails
 * the static export build entirely. Authors instead select a formula by
 * name; add new formulas here as new calculator types are needed across
 * topics (loan amortization, BMI, rule of 72, etc.).
 */
const FORMULAS: Record<string, (values: Record<string, number>) => number> = {
  compoundGrowth: (v) => v.principal * Math.pow(1 + v.rate / 100, v.years),
  simpleInterest: (v) => v.principal * (1 + (v.rate / 100) * v.years),
  ruleOf72: (v) => 72 / v.rate, // years to double
  loanMonthlyPayment: (v) => {
    const monthlyRate = v.rate / 100 / 12;
    const numPayments = v.years * 12;
    if (monthlyRate === 0) return v.principal / numPayments;
    return (
      (v.principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  },
  estimateBoilingPointFromAltitude: (v) => {
    // Approximate formula: boiling point drops by ~1C every 300m
    return 100 - (v.altitudeMeters / 285);
  },
  latentHeatOfFusionEnergy: (v) => {
    // Water's latent heat of fusion: ~334 joules per gram to melt ice at 0°C
    return v.iceMassGrams * 334;
  },
  shareOfEarthSurface: (v) => {
    // Earth's total surface area (land + ocean): ~510,072,000 km²
    return (v.areaKm2 / 510072000) * 100;
  },
  shareOfWorldPopulation: (v) => {
    // World population reference point: ~8.2 billion (UN World Population Prospects, mid-2020s estimate)
    return (v.populationCount / 8200000000) * 100;
  },
  forceFromMassAcceleration: (v) => v.mass * v.acceleration, // F = ma
  thousandsPlaceValue: (v) => Math.floor(Math.abs(v.wholeNumber) / 1000) % 10 * 1000,
  mountainUpliftProjection: (v) => v.currentHeightM + (v.upliftMmPerYear * v.years) / 1000,
  isPrimeCheck: (v) => {
    const n = Math.floor(Math.abs(v.candidate));
    if (n < 2) return 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return 0;
    }
    return 1;
  },
  kineticEnergy: (v) => 0.5 * v.mass * v.velocity * v.velocity, // KE = 1/2 m v^2
  gravitationalPotentialEnergy: (v) => v.mass * 9.8 * v.height, // PE = m g h
  countFactors: (v) => {
    const n = Math.floor(Math.abs(v.target));
    if (n < 1) return 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) count++;
    }
    return count;
  },
  hotspotIslandAge: (v) => {
    // distance (km) -> cm, divided by plate speed (cm/yr) -> years -> millions of years
    return (v.distanceFromHotspotKm * 100000) / v.plateSpeedCmPerYear / 1000000;
  },
  gcdOfTwo: (v) => {
    let a = Math.floor(Math.abs(v.a));
    let b = Math.floor(Math.abs(v.b));
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  },
  ohmsLawCurrent: (v) => v.voltage / v.resistance, // I = V / R
  electricalPower: (v) => v.voltage * v.current, // P = V * I
  simplifyFractionNumerator: (v) => {
    let a = Math.floor(Math.abs(v.num));
    let b = Math.floor(Math.abs(v.denom));
    let x = a, y = b;
    while (y !== 0) { [x, y] = [y, x % y]; }
    return x === 0 ? a : a / x;
  },
  riverDailyDischarge: (v) => v.dischargeCubicMPerSec * 86400, // seconds per day
  atomicMassNumber: (v) => v.protons + v.neutrons,
  leverMechanicalAdvantage: (v) => v.effortArmLength / v.loadArmLength,
  wheelAndAxleMechanicalAdvantage: (v) => v.wheelRadius / v.axleRadius,
  wedgeMechanicalAdvantage: (v) => v.wedgeLength / v.wedgeThickness,
  screwMechanicalAdvantage: (v) => (2 * Math.PI * v.handleRadius) / v.threadPitch,
  densityFromMassVolume: (v) => v.massGrams / v.volumeCm3,
  buoyantForce: (v) => v.fluidDensityKgM3 * 9.8 * v.volumeM3, // F = rho * g * V (Archimedes)
  pressureFromForceArea: (v) => v.forceNewtons / v.areaM2, // P = F / A
  waveSpeed: (v) => v.frequencyHz * v.wavelengthM, // v = f * lambda
  specificHeatEnergy: (v) => v.massGrams * v.specificHeatJPerGC * v.tempChangeC, // Q = mcT
  phFromHydrogenConcentration: (v) => -Math.log10(v.hydrogenConcentrationMolar), // pH = -log10[H+]
  molarity: (v) => v.molesOfSolute / v.volumeLiters, // M = mol / L
  lensPowerDiopters: (v) => 1 / v.focalLengthMeters, // P = 1/f, corrective lens power
  cardiacOutputMlPerMin: (v) => v.heartRateBpm * v.strokeVolumeMl, // CO = HR x SV
  estimatedMaxHeartRateBpm: (v) => 220 - v.ageYears, // commonly cited age-predicted max HR estimate
  yearsRemainingToLifeExpectancy: (v) => v.lifeExpectancyYears - v.currentAgeYears,
  yearsSinceHistoricalEvent: (v) => v.currentYear - v.eventYear, // simple elapsed-time span between a dated historical event and a reference year
  latentHeatOfVaporizationEnergy: (v) => v.waterMassGrams * 2260, // water's latent heat of vaporization: ~2260 J/g at 100°C
  massPercentConcentration: (v) => (v.massSoluteG / v.massSolutionG) * 100, // mass % concentration = mass of solute / mass of solution * 100
  polymerMolecularWeight: (v) => v.numberOfMonomers * v.monomerMolarMassGPerMol, // approx. polymer MW = number of repeat units * monomer molar mass
  combustionEnergyReleased: (v) => v.fuelMassGrams * v.heatOfCombustionJPerGram, // heat released = fuel mass * heat of combustion per gram
  targetHeartRateAtIntensity: (v) => (220 - v.ageYears) * (v.intensityPercent / 100), // % of age-predicted max HR
  bmiFromWeightHeight: (v) => v.weightKg / Math.pow(v.heightCm / 100, 2), // BMI = kg / m^2
  sleepCyclesFromHours: (v) => (v.hoursInBed * 60) / 90, // ~90 minutes per sleep cycle
  herdImmunityThreshold: (v) => (1 - 1 / v.r0) * 100, // 1 - 1/R0, as a percentage
  bacterialPopulationGrowth: (v) => v.startingCells * Math.pow(2, v.elapsedMinutes / v.doublingTimeMinutes), // exponential growth by binary fission, N = N0 * 2^(t / doubling time)
  trophicEnergyRemaining: (v) => v.producerEnergyKcal * Math.pow(0.10, v.trophicLevelsUp), // ecological 10% rule: usable energy drops ~90% per trophic level
  populationDeclineProjection: (v) => v.currentPopulation * Math.pow(1 - v.annualDeclinePercent / 100, v.years), // exponential population decline used in extinction-risk projections
  dewPointApproxC: (v) => v.temperatureC - ((100 - v.relativeHumidityPercent) / 5), // Lawrence (2005) simple approximation, most accurate above ~50% RH
  earthquakeEnergyRatio: (v) => Math.pow(10, 1.5 * (v.magnitudeB - v.magnitudeA)), // Gutenberg-Richter energy-magnitude relation
  solarNoonAltitudeDegrees: (v) => 90 - Math.abs(v.latitudeDegrees - v.solarDeclinationDegrees), // sun altitude above horizon at solar noon
  radioactiveDecayRemainingPercent: (v) => Math.pow(0.5, v.elapsedYears / v.halfLifeYears) * 100, // exponential decay by half-life
  resourceDepletionYears: (v) => v.reserveQuantity / v.annualConsumptionRate, // reserve-to-production ratio
  weightOnOtherPlanet: (v) => v.weightOnEarthKg * v.surfaceGravityRatio, // weight elsewhere = Earth weight * (other planet's surface gravity / Earth's)
  orbitalPeriodFromSemiMajorAxisAU: (v) => Math.pow(v.semiMajorAxisAU, 1.5), // Kepler's third law, T (years) = a (AU) ^ 1.5, for solar orbits
  lightYearsToKm: (v) => v.lightYears * 9460730472580.8, // 1 light-year = 9,460,730,472,580.8 km (Julian year, exact)
  radioSignalTravelTimeSeconds: (v) => v.distanceKm / 299792.458, // travel time = distance / speed of light (km/s)
  budgetAllocationAmount: (v) => v.monthlyIncome * (v.allocationPercent / 100), // e.g. 50/30/20 rule: income * category share
  recipeScaledQuantity: (v) => v.originalQuantity * (v.desiredServings / v.originalServings), // scale an ingredient amount to a new serving count
  dayOfWeekAfterDays: (v) => (((v.startDayIndex + v.daysElapsed) % 7) + 7) % 7, // modular arithmetic: 0=Sun...6=Sat, wraps around the week
  currencyConversionAfterFee: (v) => v.amount * v.exchangeRate * (1 - (v.feePercent || 0) / 100), // converted amount net of a conversion fee/spread
  travelTimeHours: (v) => v.distanceKm / v.speedKmh, // time = distance / speed
  stackedDiscountPrice: (v) => v.originalPrice * (1 - v.discount1Percent / 100) * (1 - v.discount2Percent / 100), // two sequential percentage discounts multiply, not add
  unitConversionByFactor: (v) => v.value * v.conversionFactor, // generic multiply-by-factor conversion (length, weight, volume, etc.)
  polygonInteriorAngleSumDegrees: (v) => (v.sides - 2) * 180, // sum of interior angles of a simple polygon
  polygonDiagonalCount: (v) => (v.sides * (v.sides - 3)) / 2, // number of diagonals in a simple polygon
  rectangleArea: (v) => v.length * v.width,
  rectanglePerimeter: (v) => 2 * (v.length + v.width),
  triangleArea: (v) => 0.5 * v.base * v.height,
  rectangularPrismVolume: (v) => v.length * v.width * v.height,
  complementaryAngleDegrees: (v) => 90 - v.angleDegrees,
  supplementaryAngleDegrees: (v) => 180 - v.angleDegrees,
  triangleThirdAngleDegrees: (v) => 180 - v.angleADegrees - v.angleBDegrees,
  pythagoreanHypotenuse: (v) => Math.sqrt(v.legA * v.legA + v.legB * v.legB), // c = sqrt(a^2 + b^2)
  pythagoreanMissingLeg: (v) => Math.sqrt(Math.max(v.hypotenuse * v.hypotenuse - v.knownLeg * v.knownLeg, 0)), // a = sqrt(c^2 - b^2)
  regularPolygonRotationalSymmetryAngleDegrees: (v) => 360 / v.sides, // smallest rotation (degrees) that maps a regular n-gon onto itself
  regularPolygonLinesOfSymmetry: (v) => v.sides, // a regular n-gon has exactly n lines of reflective symmetry
  circleCircumferenceFromRadius: (v) => 2 * Math.PI * v.radius, // C = 2*pi*r
  circleAreaFromRadius: (v) => Math.PI * v.radius * v.radius, // A = pi*r^2
  evaluateLinearExpressionAxPlusB: (v) => v.a * v.x + v.b, // evaluate ax + b at a given x
  solveLinearEquationForX: (v) => (v.c - v.b) / v.a, // solve ax + b = c for x
  slopeFromTwoPoints: (v) => (v.y2 - v.y1) / (v.x2 - v.x1), // slope m = (y2 - y1) / (x2 - x1)
  arithmeticSequenceNthTerm: (v) => v.firstTerm + (v.n - 1) * v.commonDifference, // a_n = a1 + (n-1)d
  geometricSequenceNthTerm: (v) => v.firstTerm * Math.pow(v.commonRatio, v.n - 1), // a_n = a1 * r^(n-1)
  zenoRemainingDistancePercent: (v) => Math.pow(0.5, v.steps) * 100, // % of distance left after n halvings
  yearsToCountToNumber: (v) => v.targetNumber / v.countsPerSecond / 31557600, // seconds in a Julian year
  handshakeProblemCount: (v) => (v.people * (v.people - 1)) / 2, // n(n-1)/2 unique pairs
  probabilitySingleEvent: (v) => (v.favorableOutcomes / v.totalOutcomes) * 100, // P(event) as a percentage = favorable / total outcomes
  requiredSampleSizeForMarginOfError: (v) => 0.9604 / Math.pow(v.marginOfErrorPercent / 100, 2), // n = z^2 * p(1-p) / E^2, z=1.96 (95% conf.), worst-case p=0.5
  discountedPrice: (v) => v.originalPrice * (1 - v.discountPercent / 100), // price after a single percentage discount
  priceWithTax: (v) => v.preTaxPrice * (1 + v.taxPercent / 100), // price after adding sales tax
  tipAmount: (v) => v.billAmount * (v.tipPercent / 100), // tip amount from bill total and tip percent
  decimalToBinaryDigits: (v) => {
    // Converts a decimal integer into its binary representation, expressed
    // as a base-10 sequence of the binary digits (e.g. 13 -> 1101).
    const n = Math.floor(Math.abs(v.decimalNumber));
    return n === 0 ? 0 : parseInt(n.toString(2), 10);
  },
  fibonacciNthTerm: (v) => {
    // Returns the nth term of the Fibonacci sequence (0-indexed: F(0)=0, F(1)=1).
    const n = Math.floor(Math.abs(v.n));
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      [a, b] = [b, a + b];
    }
    return a;
  },
  continuousCompoundGrowth: (v) => v.principal * Math.exp((v.rate / 100) * v.years), // A = P * e^(rt)
  goldenRatioFromDimensions: (v) => v.longSideCm / v.shortSideCm, // phi check = long side / short side
  squareOfNumberEndingIn5: (v) => {
    // Vedic "Ekadhikena Purvena" shortcut: (10a+5)^2 = 100*a*(a+1) + 25
    const a = Math.floor(Math.abs(v.leadingDigits));
    return 100 * a * (a + 1) + 25;
  },
  signedNumberSum: (v) => v.a + v.b,
  bodmasExpressionResult: (v) => v.a + v.b * v.c - v.d, // demonstrates order of operations: multiplication before addition/subtraction
  multiplyByEleven: (v) => v.number * 11,
  roundToNearestMultiple: (v) => Math.round(v.number / v.nearest) * v.nearest,
  squareOfNumber: (v) => v.number * v.number,
  cubeOfNumber: (v) => v.number * v.number * v.number,
  squareRootOfNumber: (v) => Math.sqrt(v.number),
  powerOfBase: (v) => Math.pow(v.base, v.exponent),
  meanOfFive: (v) => (v.n1 + v.n2 + v.n3 + v.n4 + v.n5) / 5,
  percentOfNumber: (v) => (v.percent / 100) * v.number,
  arithmeticSequenceSum: (v) => {
    // Gauss's shortcut: sum of consecutive integers 1..n = n(n+1)/2
    const n = Math.floor(Math.abs(v.n));
    return (n * (n + 1)) / 2;
  },
  shareOfEarthLandArea: (v) => (v.areaKm2 / 148940000) * 100, // Earth's total land area: ~148,940,000 km²
  mapScaleRealDistanceKm: (v) => (v.mapDistanceCm * v.scaleDenominator) / 100000, // 1 map cm at 1:X scale = X real cm; /100,000 converts cm to km
  latitudeDegreesToKm: (v) => v.degreesLatitude * 111, // ~111 km per degree of latitude everywhere on Earth
  longitudeDegreesToKmAtLatitude: (v) => v.degreesLongitude * 111.32 * Math.cos((v.latitudeDegrees * Math.PI) / 180), // longitude degrees shrink toward the poles by cos(latitude)
  utcOffsetFromLongitude: (v) => v.longitudeDegrees / 15, // Earth rotates 360deg/24hr = 15deg per hour, the basis of theoretical time zones
  trueBearingFromMagneticDeclination: (v) => (((v.magneticBearingDegrees + v.declinationDegrees) % 360) + 360) % 360, // true bearing = magnetic bearing + signed declination (east positive, west negative)
  elevationDifferenceMeters: (v) => v.elevationAMeters - v.elevationBMeters, // vertical relief between two points on Earth's surface
  borderSinuosityRatio: (v) => v.actualBorderLengthKm / v.straightLineDistanceKm, // coastline-paradox-style measure of how "wiggly" a border is vs. a straight line
  mercatorScaleFactorAtLatitude: (v) => 1 / Math.cos((v.latitudeDegrees * Math.PI) / 180), // Mercator projection's linear distortion factor = sec(latitude); area distortion is roughly this squared
  populationDensityPerKm2: (v) => v.population / v.areaKm2, // people per square kilometer, given a region's population and land area
  urbanizationRateProjection: (v) => Math.min(100, v.currentUrbanPercent + v.percentagePointsPerYear * v.years), // linear projection of % of population living in urban areas, capped at 100%
  agriculturalYieldEstimate: (v) => v.areaHectares * v.yieldPerHectareTons, // total harvest = field area * yield per hectare
  freefallTimeFromHeight: (v) => Math.sqrt((2 * v.heightMeters) / 9.8), // t = sqrt(2h/g), time to fall a given height in seconds
  heightInUnitsOf: (v) => v.totalHeightM / v.unitHeightM, // how many "unit" heights stack to reach a total height/depth
  yearsSinceYear: (v) => new Date().getFullYear() - v.year, // years elapsed since a given calendar year (e.g. a historical event)
  historicalDurationYears: (v) => Math.abs(v.endYear - v.startYear), // length in years between a historical start and end year (e.g. an empire's founding and dissolution)
  elevationTemperatureDrop: (v) => v.baseTemperatureC - (v.elevationMeters / 1000) * 6.5, // average tropospheric lapse rate: ~6.5°C cooler per 1,000m of elevation gain

  // --- Units & Measurement Conversions (topic 7) ---
  heightFeetInchesToCm: (v) => (v.feet * 12 + v.inches) * 2.54, // combined feet+inches height to centimeters
  massWeightForceNewtons: (v) => v.massKg * v.gravityMPerS2, // weight (a force) = mass * local gravitational acceleration
  dimensionalWeightLbs: (v) => (v.lengthIn * v.widthIn * v.heightIn) / v.dimFactor, // carrier dimensional-weight formula, dimFactor commonly 166 for domestic air
  medicineDoseMgFromWeight: (v) => v.doseMgPerKg * v.weightKg, // general-literacy weight-based dosing illustration, not medical advice
  celsiusToFahrenheit: (v) => (v.celsius * 9) / 5 + 32,
  celsiusToKelvin: (v) => v.celsius + 273.15,
  ovenGasMarkToCelsius: (v) => v.gasMark * 14 + 121, // approximate UK gas mark to Celsius
  windChillApproxC: (v) => 13.12 + 0.6215 * v.tempC - 11.37 * Math.pow(v.windKmh, 0.16) + 0.3965 * v.tempC * Math.pow(v.windKmh, 0.16), // Environment Canada / NWS wind chill formula
  electricityCostFromKwh: (v) => (v.powerWatts / 1000) * v.hours * v.ratePerKwh,
  decimalHoursFrom24h: (v) => v.hour24 + v.minute / 60,
  mpgToLPer100km: (v) => 235.214 / v.mpg, // reciprocal-style conversion between fuel economy systems
  isLeapYearFlag: (v) => {
    const y = Math.floor(v.year);
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 1 : 0;
  },
  unitRatePerQuantity: (v) => v.totalValue / v.totalQuantity, // price/speed/pace per single unit
  durationMinutesBetweenClockTimes: (v) => (v.endHour * 60 + v.endMinute) - (v.startHour * 60 + v.startMinute),
  clockShiftHours: (v) => v.newUtcOffset - v.oldUtcOffset,
  combinedWorkRateHours: (v) => 1 / (1 / v.hoursA + 1 / v.hoursB), // classic combined work-rate ("pipes filling a tank") formula
  mbpsToMBps: (v) => v.mbps / 8, // bits to bytes: divide by 8
  usToEuShoeSizeApprox: (v) => v.usSize + 33, // rough men's US-to-EU approximation; brands vary
  screenPpiFromResolution: (v) => Math.sqrt(v.widthPx * v.widthPx + v.heightPx * v.heightPx) / v.diagonalInches,
};

interface EntryCalculatorProps {
  title: string;
  fields: CalcField[];
  resultLabel: string;
  formula: keyof typeof FORMULAS;
  formatResult?: 'currency' | 'years' | 'number';
}

function formatValue(v: number, format: EntryCalculatorProps['formatResult']): string {
  if (Number.isNaN(v) || !Number.isFinite(v)) return '—';
  if (format === 'years') return `${v.toFixed(1)} years`;
  if (format === 'number') return v.toLocaleString('en-US', { maximumFractionDigits: 2 });
  return '$' + Math.round(v).toLocaleString('en-US');
}

/**
 * Generic interactive calculator. Each entry selects a named formula
 * (see FORMULAS above) and its own field set, so the same component
 * serves compound growth, loan payments, rule-of-72, etc. Pure
 * client-side — no network call, safe for static export.
 */
export function EntryCalculator({
  title,
  fields,
  resultLabel,
  formula,
  formatResult = 'currency',
}: EntryCalculatorProps) {
  const normalizedFields = Array.isArray(fields) ? fields :
    typeof fields === 'string' ? JSON.parse(fields) : [];

  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(normalizedFields.map((f: CalcField) => [f.key, f.defaultValue]))
  );

  const result = useMemo(() => {
    const compute = FORMULAS[formula];
    if (!compute) return NaN;
    try {
      return compute(values);
    } catch {
      return NaN;
    }
  }, [values, formula]);

  if (normalizedFields.length === 0) return null;

  return (
    <div className="my-5 border border-rule bg-white p-5 rounded-lg">
      <div className="mb-3 font-utility text-xs uppercase tracking-wider text-ink-soft">
        {title}
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        {normalizedFields.map((f: CalcField) => (
          <div key={f.key} className="min-w-[130px] flex-1">
            <label
              htmlFor={f.key}
              className="mb-1.5 block font-utility text-xs text-ink-soft"
            >
              {f.label}{f.suffix ? ` (${f.suffix})` : ''}
            </label>
            <input
              id={f.key}
              type="number"
              step={f.step ?? 1}
              value={values[f.key]}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.key]: parseFloat(e.target.value) || 0 }))
              }
              className="w-full rounded-[3px] border border-rule bg-paper px-2.5 py-2 font-body text-base text-ink focus:border-forest focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-forest"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-rule pt-3.5">
        <span className="mb-1.5 block font-utility text-[11px] uppercase tracking-wide text-ink-soft">
          {resultLabel}
        </span>
        <span className="font-display text-[28px] text-forest">
          {formatValue(result, formatResult)}
        </span>
      </div>
    </div>
  );
}
