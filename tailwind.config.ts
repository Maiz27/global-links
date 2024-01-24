import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'triangle-pattern': "url('/imgs/backgrounds/1.png')",
      },
    },
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
  plugins: [
    require('daisyui'),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.clip-triangle-down': {
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
        },
        '.clip-triangle-left': {
          clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
        },
        '.clip-triangle-right': {
          clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['wireframe'],
          primary: '#2d3394',
          secondary: '#106536',
          accent: '#de0f3f',
        },
      },
    ],
  },
};
export default config;
