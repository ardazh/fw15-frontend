/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
    },
    daisyui: {
        themes: [
            {
                defaultTheme: {
                    "primary": "#E14D2A",
                    "secondary": "#FD841F",
                    "info": "#E5E7EB"
                }
            }
        ]
    },
    plugins: [
        require("daisyui"),
        require("tailwind-scrollbar-hide")
    ]
}
