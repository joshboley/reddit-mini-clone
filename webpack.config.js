const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Are we in prod mode?
const isProd = (process.env.NODE_ENV === 'production');

// Config values that are shared between dev and prod
const commonConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [ 'css-loader', 'sass-loader' ]
                })
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].bundle.js'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
}

// Dev only config.  Includes the webpack dev server
const devConfig = Object.assign({}, commonConfig, {
    entry: {
        app: [
            './src/index.js',
            'webpack/hot/only-dev-server'
        ],
        vendor: [
            'react',
            'react-dom',
            'react-bootstrap',
        ],
        client: 'webpack-dev-server/client?http://localhost:8080'
    },
    output: {
        path: path.resolve(__dirname, 'tmp'),
        filename: '[name].bundle.js'
    },
});

// Prod only config
const prodConfig = Object.assign({}, commonConfig, {
    entry: {
        app: [
            './src/index.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'react-bootstrap',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
});

module.exports = isProd ? prodConfig : devConfig;