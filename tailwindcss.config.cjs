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
                // 'sm': '576px',
                'min-md': {
                    'min': '768px'
                },
                'max-md': {
                    'max': '768px'
                },
                'min-lg': {
                    'min': '1024px'
                },
            }
        },
        colors: {
            '#CCCCCC': '#CCCCCC',
            '#F0E9D2': '#F0E9D2',
            '#FFFFFF': '#FFFFFF',
            '#EEEEEE': '#EEEEEE',
            '#EDEDED': '#EDEDED',
            '#551A8B': '#551A8B',
            'testColor': '#7fcfff',
        }
    },
    plugins: []
}