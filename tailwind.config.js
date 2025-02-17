/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-white": "#E7E3FC",
        "auth-bg": "hsla(210, 8%, 10%, 0.84)",
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
        "linear-from": "hsla(0, 0%, 0%, 0)",
        "linear-via": "hsla(210, 8%, 7%, 0.86)",
        "linear-to": "hsla(210, 8%, 10%, 1)",
      },
      backgroundImage: {
        login: "url('/src/assets/images/login-bg.jpeg')",
        register: "url('/src/assets/images/register-bg.jpeg')",
        "main-bg": "url('/src/assets/images/main-bg.png')",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        londrina: ["Londrina"],
      },
      fontSize: {
        "title-mb": "28.88px",
        title: "50px",
        "large-1": "26px",
        "large-2": "32px",
        "heading-xl": [
          "2.625rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "3.563rem",
            fontWeight: 700,
          },
        ],
        "heading-l": [
          "2.25rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "3.563rem",
            fontWeight: 700,
          },
        ],
        "heading-m": [
          "1.875rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "3.563rem",
            fontWeight: 700,
          },
        ],
        "heading-s": [
          "1.5rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "2.438rem",
            fontWeight: 700,
          },
        ],
        xl: [
          "1.25rem",
          {
            letterSpacing: "0.15%",
            lineHeight: "2.063rem",
          },
        ],
        "xl-medium": [
          "1.25rem",
          {
            letterSpacing: "0.15%",
            lineHeight: "2.063rem",
            fontWeight: 500,
          },
        ],
        "xl-bold": [
          "1.188rem",
          {
            letterSpacing: "0.15%",
            lineHeight: "2.063rem",
            fontWeight: 700,
          },
        ],
        l: [
          "1.125rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.813rem",
          },
        ],
        "l-medium": [
          "1.125rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.813rem",
            fontWeight: 500,
          },
        ],
        m: [
          "1rem",
          {
            letterSpacing: "0.5%",
            lineHeight: "1.625rem",
          },
        ],
        "m-medium": [
          "1rem",
          {
            letterSpacing: "0.5%",
            lineHeight: "1.625rem",
            fontWeight: 500,
          },
        ],
        s: [
          "0.875rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "1.375rem",
          },
        ],
        "s-medium": [
          "0.875rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "1.375rem",
            fontWeight: 500,
          },
        ],
        xs: [
          "0.688rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "1.188rem",
          },
        ],
        "xs-medium": [
          "0.688rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "1.188rem",
            fontWeight: 500,
          },
        ],
        "2xs": [
          "0.563rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "1rem",
          },
        ],

        "2xs-medium": [
          "0.563rem",
          {
            letterSpacing: "0.25%",
            lineHeight: "0.4375rem",
            fontWeight: 500,
          },
        ],
      },
      boxShadow: {
        placeholder: "1px 2px 2px rgba(0, 0, 0, 0.08)",
        "floating-button": "16px 16px 40px rgba(122, 121, 136, 0.2)",
        "floating-button-small": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "card-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
        navigation: "16px 0px 40px rgba(122, 121, 136, 0.2)",
        drawer: "4px 0px 4px rgba(0,0,0,0.15)",
        floating: "16px 16px 40px rgba(122, 121, 136, 0.2)",
      },
      gap: {
        0.1: "2.31px",
        1.1: "4.62px",
        9.25: "37px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
