/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Agrega la regla para manejar archivos Markdown
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;