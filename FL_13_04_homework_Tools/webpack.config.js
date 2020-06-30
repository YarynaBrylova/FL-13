const path = require('path')

const HTMLWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/buttonshandlers.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpeg|svg|gif)$/,
            use: ['file-loader']
        }]
    }
}