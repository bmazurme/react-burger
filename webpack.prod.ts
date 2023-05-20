import { merge } from 'webpack-merge';
import type { Configuration } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import InterpolateHtmlPlugin from 'interpolate-html-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { SourceMapDevToolPlugin } from 'webpack';
import common from './webpack.common';

const configuration = merge<Configuration>(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$|tsx/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|ico|json)$/,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json',
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'static',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'static' },
        { from: 'src/server', to: 'server' },
      ],
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});

export default configuration;
