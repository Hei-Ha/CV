module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
    theme: {
        extend: {
            width: {
                '1000px': '1000px',
                '240px': '240px',
                '36%': '36%'
            },
            padding: {
                '30px': '30px'
            },
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1200px',
                'xxl': '1600px'
            }
        },
        colors: {
            '#CCCCCC': '#CCCCCC',
            '#F0E9D2': '#F0E9D2',
            '#FFFFFF': '#FFFFFF',
            '#EEEEEE': '#EEEEEE',
            '#EDEDED': '#EDEDED',
            '#551A8B': '#551A8B'
        }
    },
    plugins: []
}