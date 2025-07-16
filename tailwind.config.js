/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors:{
        red400: 'hsl(7, 99%, 70%)',
        yellow500: 'hsl(51, 100%, 49%)',
        green800: 'hsl(167, 40%, 24%)', // graphic design text
        blue800: 'hsl(198, 62%, 26%)',  // photography text
        green500: 'hsl(167, 34%, 41%)', // footer 
      },
      backgroundImage:{
        'header-image': "url('/images/desktop/image-header.jpg')",
        'cherry-image': "url('/images/desktop/image-graphic-design.jpg')",
        'orange-image': "url('/images/desktop/image-photography.jpg')",
        'header-mobile': "url('/images/mobile/image-header.jpg')",
      },
      fontFamily:{
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}

