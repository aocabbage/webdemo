/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
            test: /\.txt$/,
            use: 'raw-loader'
        })
        return config
    },
};

export default nextConfig;