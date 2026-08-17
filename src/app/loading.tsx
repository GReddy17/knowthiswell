export default function Loading() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
      <div className="animate-pulse space-y-8">
        <div className="h-12 w-1/3 rounded bg-rule-soft" />
        <div className="h-6 w-full rounded bg-rule-soft" />
        <div className="h-6 w-full rounded bg-rule-soft" />
        <div className="h-6 w-2/3 rounded bg-rule-soft" />
      </div>
    </div>
  );
}
