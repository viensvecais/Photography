const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};

module.exports = config;