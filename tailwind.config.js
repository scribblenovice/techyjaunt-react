/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        founder: "url(./src/images/founder.webp)",
      },
      colors: {
        "tech-blue": "#0175FB;",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
      });
    },
  ],
});
