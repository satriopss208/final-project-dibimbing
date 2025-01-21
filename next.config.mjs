/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'travel-journal-api-bootcamp.do.dibimbing.id',
        },
      ],
    },
  };
  
  export default nextConfig;
  