module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fade-out': 'linear-gradient(to right, transparent, white, transparent)',
      })
    }
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
