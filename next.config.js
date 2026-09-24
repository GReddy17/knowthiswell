/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: false,
  // Old/mistaken URLs Google still crawls (Search Console "Not found (404)").
  // Subtopic paths have no page of their own, so they go to the category.
  async redirects() {
    return [
      {
        source: '/health-body-basics/everyday-hygiene-and-prevention',
        destination: '/health-body-basics',
        permanent: true,
      },
      {
        source: '/math-numbers/geometry-basics',
        destination: '/math-numbers',
        permanent: true,
      },
      {
        source: '/units-measurement-conversions/what-the-united-nations-actually-does',
        destination: '/general-awareness-basics/what-the-united-nations-actually-does',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
