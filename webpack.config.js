const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    entry: './src/index',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'moment': 'moment',
        'lodash': 'lodash'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-timo.js',
        library: 'ReactTimo',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.css', '.less']
    },
    plugins: [
        new ExtractTextPlugin('react-timo.css')
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular|iconfont)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(css|less)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader?-autoprefixer'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}), precss];
                            }
                        }
                    },
                    'less-loader'
                ]
            })
        }]
    }
};
