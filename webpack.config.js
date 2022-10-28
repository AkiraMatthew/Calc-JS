const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'Dist')
        },
        compress: true,
        port: 8080
    },
    entry: {
        main: ['./src/index.js',
         './src/calculate.js',
         './src/clear-handler.js',
         './src/copy-to-clipboard.js',
         './src/key-handlers-events.js',
         './src/theme-switcher.js'],
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.js$/,
            use: ['babel-loader'],
        }]
    },
    output: {
        path: path.resolve(__dirname, 'Dist'),
        filename: '[name].min.js'
    },
}