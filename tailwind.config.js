

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("daisyui")
    ],
    daisyui: {
      themes: true, // This enables all themes
      darkTheme: "dark",
      base: true,
      styled: true,
      utils: true,
      logs: true // Enable logging for debugging
    }
  }