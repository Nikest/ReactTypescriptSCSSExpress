const path = require('path');
const rules = require('./rules.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const environment = require('./scripts/environment');

const outputDirectory = 'public';

module.exports = {
  entry: {
      app: ['babel-polyfill', './src/index.tsx'],
  },

  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            exclude: ['node_modules'],
            use: [
                'style-loader',
                'css-loader?minimize=true&modules&importLoaders=1&localIdentName=[name]-[hash:base64:4]__[local]',
                {
                    loader: 'sass-loader',
                    options: {
                        data: '@import "parameters";',
                        includePaths: [
                            path.resolve(__dirname, './src/Themes/default'),
                        ],
                    }
                }],
        },
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(environment),
    }),
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
        template: './src/index.ejs'
    })
  ]
};
