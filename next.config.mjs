/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lwenqo73dswk8lu2.public.blob.vercel-storage.com',
          },
        ],
      },
};

export default nextConfig;
