const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            inject: true
        }),
        new VueLoaderPlugin(),
        new CssMinimizerWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1000,
                            esModule: false
                        }
                    }
                ]
            },
            // {
            //   test: /\.(html)$/,
            //     use: ['html-loader']
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     use: [
            //         {
            //             loader: "url-loader"
            //         }
            //     ]
            // },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(process.cwd(), 'src')
        }
    }
}