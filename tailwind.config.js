module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'body-pattern': "url('/img/pattern.png')",
            }),
            colors: {
                'azul-claro': '#37bcf9',
                'azul-oscuro': '#0370b9',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
