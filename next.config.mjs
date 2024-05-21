/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sdc4ziykeo7sml6s.public.blob.vercel-storage.com',
          },
        ],
      },
};

export default nextConfig;
