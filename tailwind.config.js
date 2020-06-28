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
      body: ['"Hammersmith One"', 'Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        backgroundInverted: 'var(--background-inverted)',
        textMain: 'var(--text-main)',
        textOnInverted: 'var(--text-on-inverted)',
      },
    },
  },
  variants: {},
  plugins: [],
};
