/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#00072d",
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
        "blue-one-color": "#445bc4",
      },
    },
  },
  plugins: [],
}
