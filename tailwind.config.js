/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-white": "#E7E3FC",
        "primary-default": "hsla(230, 100%, 60%, 1)",
        "primary-100": "hsla(231, 72%, 50%, 1)",
        "primary-200": "hsla(232, 76%, 41%, 1)",
        "primary-300": "hsla(233, 81%, 32%, 1)",
        "primary-400": "hsla(234, 86%, 26%, 1)",

        "text-dark-primary": "hsla(265, 10%, 23%, 0.87)",
        "text-dark-secondary": "hsla(265, 10%, 23%, 0.68)",
        "text-dark-disabled": "hsla(265, 10%, 23%, 0.38)",

        "text-light-primary": "hsla(0, 0%, 100%, 1)",
        "text-light-secondary": "hsla(250, 81%, 94%, 0.68)",
        "text-light-disabled": "hsla(225, 2%, 62%, 1)",

        "other-paper-bg": "hsla(195, 11%, 15%, 1)",
        "other-body-bg": "hsla(192, 5%, 19%, 1)",
        "other-page-header-bg": "hsla(210, 8%, 10%, 1)",
        "other-extra-bg": "hsla(192, 4%, 25%, 1)",
        "other-outline-border": "hsla(250, 81%, 94%, 0.23)",
        "other-input-border": "hsla(250, 81%, 94%, 0.22)",
        "other-input-field-bg": "hsla(250, 81%, 94%, 0.04)",
        "other-chip-bg": "hsla(250, 81%, 94%, 0.08)",

        "info-passed": "hsla(215, 98%, 36%, 1)",
        "info-hover": "hsla(212, 97%, 44%, 1)",
        "info-default": "hsla(209, 100%, 51%, 1)",
        "info-bg": "hsla(197, 100%, 90%, 0.3)",

        "success-passed": "hsla(91, 63%, 39%, 1)",
        "success-hover": "hsla(89, 56%, 48%, 1)",
        "success-default": "hsla(86, 71%, 58%, 1)",
        "success-bg": "hsla(76, 89%, 93%, 0.8)",

        "warning-passed": "hsla(53, 93%, 37%, 1)",
        "warning-hover": "hsla(53, 91%, 45%, 1)",
        "warning-default": "hsla(54, 100%, 53%, 1)",
        "warning-bg": "hsla(56, 100%, 91%, 0.8)",

        "error-passed": "hsla(1, 73%, 42%, 1)",
        "error-hover": "hsla(5, 71%, 51%, 1)",
        "error-default": "hsla(10, 100%, 61%, 1)",
        "error-bg": "hsla(29, 100%, 92%, 0.5)",

        "grey-scale-900": "hsla(0, 0%, 13%, 1)",
        "grey-scale-800": "hsla(0, 0%, 26%, 1)",
        "grey-scale-700": "hsla(0, 0%, 38%, 1)",
        "grey-scale-600": "hsla(0, 0%, 46%, 1)",
        "grey-scale-500": "hsla(0, 0%, 62%, 1)",
        "grey-scale-400": "hsla(0, 0%, 74%, 1)",
        "grey-scale-300": "hsla(0, 0%, 88%, 1)",
        "grey-scale-200": "hsla(0, 0%, 93%, 1)",
        "grey-scale-100": "hsla(0, 0%, 96%, 1)",
        "grey-scale-50": "hsla(0, 0%, 98%, 1)",
      },
      backgroundImage: {
        login: "url('/src/assets/images/login-bg.jpeg')",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        londrina: ["Londrina"],
      },
      fontSize: {
        title: "50px",
      },
    },
  },
  plugins: [],
};
