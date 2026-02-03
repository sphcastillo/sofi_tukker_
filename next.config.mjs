/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
                pathname: "/vi/**"
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "/images/**"
            },

        ]
    }
};

export default nextConfig;
