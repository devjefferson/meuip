import { createStitches } from '@stitches/react';

export const gridGutter = {
  width: 15,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  prefix,
  reset,
} = createStitches({
  // Prefix
  prefix: 'stitches-style',

  // Theme
  theme: {
    fonts: {
      base: 'Heineken Serif',
      highlight: 'Heineken Serif',
    },

    fontWeights: {
      regular: 400,
      bold: 700,
    },

    fontStyles: {
      normal: 'normal',
      italic: 'italic',
    },

    letterSpacings: {
      xtight: '-.04em',
      tight: '-.02em',
      normal: 0,
      loose: '.02em',
      xloose: ' .04em',
    },

    lineHeights: {
      xloose: 2,
      loose: 1.75,
      medium: 1.5,
      tight: 1.2,
      xtight: 1,
    },

    fontSizes: {
      xsmall: '10.8px',
      small: '13.3px',
      medium: '16px',
      large: '19.2px',
      xlarge: '23px',
      xxlarge: '27.6px',
      huge: '33.1px',
      xhuge: '39.7px',
      xxhuge: '47.6px',
      giant: '57.1px',
      xgiant: '68.5px',
    },

    borderWidths: {
      none: 0,
      hairline: '1px',
      thin: '2px',
      thick: '4px',
      heavy: '8px',
    },

    radii: {
      none: 0,
      small: '4px',
      medium: '8px',
      large: '16px',
      pill: '500px',
      circle: '50%',
    },

    shadows: {
      level1X: '0px',
      level1Y: '4px',
      level1B: '8px',
      level1Stack: '0px 4px 8px',
      level2X: '0px',
      level2Y: '8px',
      level2B: '24px',
      level2Stack: '0px 8px 24px',
      level3X: '0px',
      level3Y: '16px',
      level3B: '32px',
      level3Stack: '0px 16px 32px',
      level4X: '0px',
      level4Y: '16px',
      level4B: '48px',
      level4Stack: '0px 16px 48px',
    },

    aspectRatios: {
      '16x9': '56.25%',
      '3x2': '66.67%',
      '4x3': '75%',
      square: '100%',
      '3x4': '133.34%',
      '2x3': '150%',
      '9x16': '177.78%',
    },

    space: {
      xsmall: '6.1px',
      small: '10.4px',
      medium: '13.5px',
      large: '17.5px',
      xlarge: '22.7px',
      xxlarge: '29.5px',
      huge: '38.3px',
    },

    colors: {
      bgDefault: '#fff',
    },

    gridGutter: {
      default: 16,
    },
  },

  // Breakpoints
  media: {
    lgUp: '(min-width: 992px)',
    lgDown: '(max-width: 991px)',
  },

  // Utils
  utils: {
    // Grid Col
    gridCol: (number: number) => {
      return {
        flex: `0 0 ${parseFloat(((number / 12) * 100).toFixed(5))}%`,
        maxWidth: `${parseFloat(((number / 12) * 100).toFixed(5))}%`,
        position: 'relative',
        width: '100%',
        paddingRight: gridGutter.width,
        paddingLeft: gridGutter.width,
      };
    },
  },
});

export const globalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: '81px',
  },

  body: {
    fontFamily: '$base',
    fontSize: '$medium',
    fontWeight: '$normal',
    backgroundColor: '$bgDefault',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  },

  '[data-hidden="onDesktop"]': {
    '@lgUp': {
      display: 'none !important',
    },
  },

  '[data-hidden="onMobile"]': {
    '@lgDown': {
      display: 'none !important',
    },
  },

  // React Modal
  '.ReactModalPortal': {
    '.ReactModal__Overlay': {
      zIndex: 9999,
      backgroundColor: 'rgba(000, 000, 000, 0.80) !important',
    },
  },

  '.ReactModal__Body--open': {
    overflow: 'hidden',
  },

  // '@import': [
  //   "url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap')",
  //   "url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap')",
  // ],

  '@font-face': [
    // {
    //   fontFamily: 'name',
    //   fontWeight: 400,
    //   src: 'url()',
    //   fontDisplay: 'swap',
    // },
  ],
});
