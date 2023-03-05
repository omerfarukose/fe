/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      medium: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        sans: ['BR Firma', 'sans-serif'],
      },
      colors: {
        "body": "#f4f5f7",
        "main-color": "#1f2937",
        "second-color": "#001c55",
        "third-color": "#0a2472",
        "fourth-color": "#0e6ba8",
        "fifth-color": "#a6e1fa",
        "platinum-color": "#e5e6e4",
        "layout-background": "#fbfdff",
        "navbar-gray": "#6b6d7c",
        "header": "#656464",
        "header-dark": "#05011e",
        "header-light": "#e3e5e8",
        "card-text": "#81858e",
        "footer-background": "#0e1b31",
        "profile-background": "#d7d8db",
        "purple-color": "#515fe1",
        "orange-color": "#ff6f00",
        "test-bg": "#ebf4fa",
        "spaceCadet": "#2b2d42",
        "onyx": "#32373b",
        "deepSpaceSparkle": "#4a5859",
        "teaGreen": "#ccf5ac",
        "manatee": "#8d99ae",
        "cosmicLatte": "#f9f5e3",
        "cultured": "#edf2e4",
        "oxfordBlue": "#0a1128",
        "royalBlueDark": "#001f54",
        "indigoDye": "#034078",
        "blue-one-color": "#445bc4",
        "tuftBlue": "#1a8fe3",
        "cgBlue": "#1282a2",
        "tartOrange": "#ff4b3e",
        "safetyOrange": "#f17105",
        "honeyYellow": "#ffb20f",
        "sunray": "#f4b860",
        "jonquil": "#e6c229",
        "minionYellow": "#ffe548",
        "crimson": "#d80032",
        "imperialRed": "#ef233c",
        "rufous": "#972d07",
        "darkPurple": "#1d1128",
        "plumpPurple": "#5941A9",
        "electricIndigo": "#6610f2",
        "violetBLueCrayola": "#6d72c3",
        "maximumPurple": "#7e2e84",
        "brickRed": "#c83e4d",
        "magentaPantone": "#d14081",
        "ultraRed": "#ef789a",
        "chinaPink": "#e36397",
        "unbleachedSilk": "#f4d6cc",
        "darkPastelGreen": "#3bc14a",
        "forestGreenCrayola": "#4da167",
        "hookersGreen": "#4E6E5D",
        "magicMint": "#9df7e5",
        "pastelPink": "#E5A9A9",
        "navbarColor": "#1f2937",
      },
    },
  },
  plugins: [],
}
