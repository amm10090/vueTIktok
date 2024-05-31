/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  corePlugins: {
    preflight: false
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide"]),
    }),
  ],
}
