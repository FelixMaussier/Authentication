// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: {
        content: [
          "./src/**/*.{js,ts,jsx,tsx}",
          "./src/components/reactbits/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    },
  },
};

export default config;