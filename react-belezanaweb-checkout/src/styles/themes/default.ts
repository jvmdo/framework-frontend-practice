export const defaultTheme = {
  breakpoints: {
    xxs: '20em',
    xs: '23.4375em',
    sm: '36em',
    md: '48em',
    lg: '62em',
  },

  colors: {
    black: '#000000',
    white: '#ffffff',

    background: '#F5F5F5',
    border: '#CCCCCC',
    label: '#515151',
    step: '#878787',
    strike: '#9B9B9B',

    primary: '#9222DC',
    error: '#DE1616',
  },

  font: {
    family: {
      primary: 'Arial, sans-serif',
      secondary: '"Helvetica Neue", Roboto, serif',
    },

    height: {
      body: 1,
      medium: 1.25,
      tall: 1.5,
      taller: 1.75,
    },

    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xlg: '1.375rem',
    },

    spacing: {
      regular: '0.016875em',
    },

    weight: {
      regular: 400,
      bold: 700,
    },
  },

  shadows: {
    primary: '0px 2px 4px 0px #0000001A',
  },
} as const
