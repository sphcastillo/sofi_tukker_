/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
                pathname: "**"
            },

        ]
    }
};

export default nextConfig;
