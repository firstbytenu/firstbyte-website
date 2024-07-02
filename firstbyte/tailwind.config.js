/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "firstbyte-green": "#546c4",
      },
    },
  },
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [flowbitePlugin, "babel-plugin-macros"],
};
