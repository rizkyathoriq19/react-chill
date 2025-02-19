/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "auth-bg": "hsla(210, 8%, 10%, 0.84)",
        primary: {
          DEFAULT: "hsla(230, 100%, 60%, 1)",
          100: "hsla(231, 72%, 50%, 1)",
          200: "hsla(232, 76%, 41%, 1)",
          300: "hsla(233, 81%, 32%, 1)",
          400: "hsla(234, 86%, 26%, 1)",
        },
        dark: {
          primary: "hsla(265, 10%, 23%, 0.87)",
          secondary: "hsla(265, 10%, 23%, 0.68)",
          disabled: "hsla(265, 10%, 23%, 0.38)",
        },
        light: {
          primary: "hsla(0, 0%, 100%, 1)",
          secondary: "hsla(250, 81%, 94%, 0.68)",
          disabled: "hsla(225, 2%, 62%, 1)",
        },
        other: {
          paperBg: "hsla(195, 11%, 15%, 1)",
          bodyBg: "hsla(192, 5%, 19%, 1)",
          pageHeaderBg: "hsla(210, 8%, 10%, 1)",
          extraBg: "hsla(192, 4%, 25%, 1)",
          outlineBorder: "hsla(250, 81%, 94%, 0.23)",
          inputBorder: "hsla(250, 81%, 94%, 0.22)",
          inputFieldBg: "hsla(250, 81%, 94%, 0.04)",
          chipBg: "hsla(250, 81%, 94%, 0.08)",
        },
        info: {
          pressed: "hsla(215, 98%, 36%, 1)",
          hover: "hsla(212, 97%, 44%, 1)",
          DEFAULT: "hsla(209, 100%, 51%, 1)",
          bg: "hsla(197, 100%, 90%, 0.3)",
        },
        success: {
          pressed: "hsla(91, 63%, 39%, 1)",
          hover: "hsla(89, 56%, 48%, 1)",
          DEFAULT: "hsla(86, 71%, 58%, 1)",
          bg: "hsla(76, 89%, 93%, 0.8)",
        },
        warning: {
          pressed: "hsla(53, 93%, 37%, 1)",
          hover: "hsla(53, 91%, 45%, 1)",
          DEFAULT: "hsla(54, 100%, 53%, 1)",
          bg: "hsla(56, 100%, 91%, 0.8)",
        },
        error: {
          pressed: "hsla(1, 73%, 42%, 1)",
          hover: "hsla(5, 71%, 51%, 1)",
          DEFAULT: "hsla(10, 100%, 61%, 1)",
          bg: "hsla(29, 100%, 92%, 0.5)",
        },
        greyscale: {
          900: "hsla(0, 0%, 13%, 1)",
          800: "hsla(0, 0%, 26%, 1)",
          700: "hsla(0, 0%, 38%, 1)",
          600: "hsla(0, 0%, 46%, 1)",
          500: "hsla(0, 0%, 62%, 1)",
          400: "hsla(0, 0%, 74%, 1)",
          300: "hsla(0, 0%, 88%, 1)",
          200: "hsla(0, 0%, 93%, 1)",
          100: "hsla(0, 0%, 96%, 1)",
          50: "hsla(0, 0%, 98%, 1)",
        },
        linear: {
          from: "hsla(0, 0%, 0%, 0)",
          via: "hsla(210, 8%, 7%, 0.86)",
          to: "hsla(210, 8%, 10%, 1)",
          "from-image": "hsla(0, 0%, 0%, 0)",
          "to-image": "hsla(0, 0%, 0%, 1)",
        },
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
        "title-mb": [
          "1.805rem",
          {
            letterSpacing: "0%",
            lineHeight: "1.986rem",
          },
        ],
        title: [
          "3.125rem",
          {
            letterSpacing: "0%",
            lineHeight: "3.438rem",
          },
        ],
        "heading-2xl": [
          "3rem",
          {
            letterSpacing: "0%",
            lineHeight: "3.3rem",
            fontWeight: 700,
          },
        ],
        "heading-xl": [
          "2.5rem",
          {
            letterSpacing: "0%",
            lineHeight: "2.75rem",
            fontWeight: 700,
          },
        ],
        "heading-l": [
          "2rem",
          {
            letterSpacing: "0%",
            lineHeight: "2.2rem",
            fontWeight: 700,
          },
        ],
        "heading-m": [
          "1.5rem",
          {
            letterSpacing: "0%",
            lineHeight: "1.8rem",
            fontWeight: 700,
          },
        ],
        "heading-s": [
          "1.25rem",
          {
            letterSpacing: "0%",
            lineHeight: "1.5rem",
            fontWeight: 700,
          },
        ],
        "heading-xs": [
          "1.125rem",
          {
            letterSpacing: "0%",
            lineHeight: "1.35rem",
            fontWeight: 700,
          },
        ],
        "l-bold": [
          "1.125rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.575rem",
            fontWeight: 700,
          },
        ],
        "l-semibold": [
          "1.125rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.575rem",
            fontWeight: 600,
          },
        ],
        "l-medium": [
          "1.125rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.575rem",
            fontWeight: 500,
          },
        ],
        l: [
          "1.125rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.575rem",
            fontWeight: 400,
          },
        ],
        "m-bold": [
          "1rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.4rem",
            fontWeight: 700,
          },
        ],
        "m-semibold": [
          "1rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.4rem",
            fontWeight: 600,
          },
        ],
        "m-medium": [
          "1rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.4rem",
            fontWeight: 500,
          },
        ],
        m: [
          "1rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.4rem",
            fontWeight: 400,
          },
        ],
        "s-bold": [
          "0.875rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.225rem",
            fontWeight: 700,
          },
        ],
        "s-semibold": [
          "0.875rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.225rem",
            fontWeight: 600,
          },
        ],
        "s-medium": [
          "0.875rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.225rem",
            fontWeight: 500,
          },
        ],
        s: [
          "0.875rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.225rem",
            fontWeight: 400,
          },
        ],
        "xs-bold": [
          "0.75rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.05rem",
            fontWeight: 700,
          },
        ],
        "xs-semibold": [
          "0.75rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.05rem",
            fontWeight: 600,
          },
        ],
        "xs-medium": [
          "0.75rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.05rem",
            fontWeight: 500,
          },
        ],
        xs: [
          "0.75rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "1.05rem",
            fontWeight: 400,
          },
        ],
        "2xs-bold": [
          "0.625rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "0.875rem",
            fontWeight: 700,
          },
        ],
        "2xs-semibold": [
          "0.625rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "0.875rem",
            fontWeight: 600,
          },
        ],
        "2xs-medium": [
          "0.625rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "0.875rem",
            fontWeight: 500,
          },
        ],
        "2xs": [
          "0.625rem",
          {
            letterSpacing: "0.2%",
            lineHeight: "0.875rem",
            fontWeight: 400,
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
