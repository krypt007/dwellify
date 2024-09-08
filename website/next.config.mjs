/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['sequelize', 'pino', 'pino-pretty'],
};

export default nextConfig;
