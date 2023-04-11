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

    lineHeight: {
      stepper: 1.714, // 24 / 14
      itemName: 1.333, // 16 / 12
      amount: 1.143, // 16 / 14
      total: 1,
      button: 0.888, // 16 / 18
      heading: 1.2, // 24 / 20
      heading2: 1.273, // 28 / 22
      card: 1.25, // 20 / 16
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

  radii: {
    r: 4,
  },

  shadows: {
    primary: '0px 2px 4px 0px #0000001A',
  },
} as const
