var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  mode: 'development', // development | production
  entry: './img.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:4].js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024000,
            quality: 50,
          }
        }]
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     },
      //     // {
      //     //   loader: 'image-webpack-loader',
      //     //   options: {
      //     //     mozjpeg: {
      //     //       progressive: true,
      //     //       quality: 65
      //     //     },
      //     //     // optipng.enabled: false will disable optipng
      //     //     optipng: {
      //     //       enabled: false,
      //     //     },
      //     //     pngquant: {
      //     //       quality: '65-90',
      //     //       speed: 4
      //     //     },
      //     //     gifsicle: {
      //     //       interlaced: false,
      //     //     },
      //     //     // the webp option will enable WEBP
      //     //     webp: {
      //     //       quality: 75
      //     //     }
      //     //   }
      //     // }
      //   ]
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        minimize: true,
        removeConments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: false,
      }
    }),
    // new ImageminPlugin({
    //   // disable: process.env.NODE_ENV !== 'production', // Disable during development
    //   pngquant: {
    //     quality: '50-60'
    //   }
    // }),
  ]
};
