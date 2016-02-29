module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  npm: {
    enabled: true
  },

  plugins: {
    babel: {presets: ['es2015']}
  }
};
