/** @type {{optimizeFonts: boolean, fontLoaders: [{loader: string, options: {weight: string[], subsets: string[]}}], images: {domains: string[]}, experimental: {appDir: boolean}}} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com", "citygem.app"],
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

module.exports = nextConfig;
