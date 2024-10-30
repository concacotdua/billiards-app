import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        config.resolve.alias['@images'] = path.join(__dirname, 'src/assets/images');
        return config;
    },
};

export default nextConfig;
