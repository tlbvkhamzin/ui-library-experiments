module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false,
  content: [],
  theme: {
    colors: {
      'white': '#ffffff',
      'primary': {
        150: '#E65100',
        100: '#FF5A00',
        65: '#FF9459',
        30: '#FFD3B2',
        10: '#FFEDE7',
        4: '#FFF9F5',
      },
      'secondary': {
        100: '#000FFF',
        30: '#B2B7FF',
        10: '#E5E7FF',
        4: '#F5F6FF',
      },
      'success': {
        10: '#E5F5EC',
      },
      'warning': {
        10: '#FFF9E5',
      },
      'neutral': {
        100: `#262626`,
        70: `#676767`,
        55: `#838383`,
        35: `#A6A6A6`,
        10: `#E5E5E5`,
        4: `#F5F5F5`,
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'DM Sans',
        ]
      },
    },
  },
  plugins: [],
}
