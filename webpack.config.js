const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        contentBase:  [path.join(__dirname, 'public'),path.join(__dirname, 'build'), path.join(__dirname, 'assets')]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
<<<<<<< HEAD
                  },
=======
                  }
>>>>>>> 5c70ec95aa91b33f33272ff2bab27ae74b305872
                ]
                }
                
            ]
        
    }
};