module.exports = {
  purge: [
    './components/**/*.js',
    './pages/**/*.js',
    './components/**/*.jsx',
    './pages/**/*.jsx',
    './components/**/*.ts',
    './pages/**/*.ts',
    './components/**/*.tsx',
    './pages/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      body: [
        'Montserrat',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      margin: {
        '0.5': '0.15rem',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        backgroundInverted: 'var(--background-inverted)',
        textMain: 'var(--text-main)',
        textLighter: 'var(--text-lighter)',
        textLightest: 'var(--text-lightest)',
        textOnInverted: 'var(--text-on-inverted)',
      },
    },
  },
  variants: {},
  plugins: [],
};
