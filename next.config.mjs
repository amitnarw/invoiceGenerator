/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    experimental: {
        serverComponentsExternalPackages: ['sequelize'],
    },
};

export default nextConfig;
