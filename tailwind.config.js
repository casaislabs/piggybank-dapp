/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Incluye todos los archivos relevantes
    "./components/**/*.{js,jsx,ts,tsx}", // Incluye los componentes personalizados
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8", // Azul principal
          light: "#3B82F6", // Azul claro
          dark: "#1E40AF", // Azul oscuro
        },
        secondary: {
          DEFAULT: "#9333EA", // Morado secundario
          light: "#A855F7", // Morado claro
          dark: "#7E22CE", // Morado oscuro
        },
        neutral: {
          DEFAULT: "#F3F4F6", // Fondo neutro
          light: "#FFFFFF", // Blanco
          dark: "#D1D5DB", // Gris oscuro
        },
      },
    },
  },
  plugins: [],
};