const path =  require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: './src/index',
    devtool: "source-map",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: [/node_modules/],
            },
            {
                test: /\.(jsx?)$/,
                loaders: ['babel'],
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                     ],
                  }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}