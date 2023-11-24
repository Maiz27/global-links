import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-\w+/,
    },
    {
      pattern: /btn-\w+/,
    },
    {
      pattern: /text-\w+/,
    },
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#2d3394',
          secondary: '#106536',
          accent: '#ed1b2f',
        },
      },
    ],
  },
};
export default config;
