const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{htm,md,njk}'],
  theme: {
    fontSize: {
      'xs-d': ['12px', '18px'],
      's-d': ['16px', '24px'],
      'm-d': ['18px', '27px'],
      'l-d': ['24px', '36px'],
      'xl-d': ['36px', '54px'],
      'xs-m': ['8px', '12px'],
      's-m': ['12px', '18px'],
      'm-m': ['14px', '21px'],
      'l-m': ['20px', '30px'],
      'xl-m': ['32px', '48px'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl':'1440px',
    },
    extend: {
      fontFamily: {
      },
      letterSpacing: {
        normal:'0.145em',
      },
      borderRadius: {
      },
      backgroundSize: {
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        inherit: 'inherit',
        'rum-swizzle' : '#FBF8EC',
        'desert-storm-1' : '#F4F4F2',
        'mikado' : '#291E0F',
        'desert-storm-2' : '#F3F2F1',
        'tropical-rain-forest' : '#008C49',
        'tundora':'#414141',
        'silver':'#BFBFBF',
        'dodger-blue' : '#1CB9FC',
        'outrageous-orange':'#FF6633',
        'special-gray':'#8F8F8F',
        'tree-poppy':'#FCA21C',
        'mantis':'#70C05B',
        'scorpion':'#606060',
        'guardsman-red':'#D80000',
        'rice-flower':'#E5FFDE',
        'apricot-peach':'#FCD5BA',
        'your-pink':'#FFC7C7',

      },
      gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
      },
      gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
      },
      textShadow: {
      },
      dropShadow: {
        'default_xs': '1px 2px 4px rgba(0, 0, 0, 0.1)',
        'default_s': '2px 4px 8px rgba(0, 0, 0, 0.1)',
        'default_m': '14px 8px 16px rgba(0, 0, 0, 0.1)',
        'default_l': '8px 16px 32px rgba(0, 0, 0, 0.1)',
        'default_xl': '16px 32px 64px rgba(0, 0, 0, 0.1)',
        'primary_xs': '1px 2px 4px rgba(255, 102, 51, 0.2)',
        'primary_s': '2px 4px 8px rgba(255, 102, 51, 0.2)',
        'primary_m': '4px 8px 16px rgba(255, 102, 51, 0.2)',
        'primary_l': ' 8px 16px 32px rgba(255, 102, 51, 0.2)',
        'primary_lx': '16px 32px 64px rgba(255, 102, 51, 0.2)',
        'secondary_xs': '1px 2px 4px rgba(112, 192, 91, 0.2)',
        'secondary_s': '2px 4px 8px rgba(112, 192, 91, 0.2)',
        'secondary_m': '4px 8px 16px rgba(112, 192, 91, 0.2)',
        'secondary_l': '8px 16px 32px rgba(112, 192, 91, 0.2)',
        'secondary_xl': '16px 32px 64px rgba(112, 192, 91, 0.2)', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwindcss-textshadow')
  ],
}
