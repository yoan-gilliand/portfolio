/** @type {{optimizeFonts: boolean, fontLoaders: [{loader: string, options: {weight: string[], subsets: string[]}}], images: {domains: string[]}, experimental: {appDir: boolean}}} */
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com", "citygem.app", "static-00.iconduck.com", "media2.dev.to"],
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = withNextIntl(nextConfig);
