/* eslint-disable no-param-reassign */
// const withSass = require('@zeit/next-sass');

// module.exports = withSass();

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const path = require('path');

const Dotenv = require('dotenv-webpack');

module.exports = {
    // This will be available on both server and client

  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
	
  target: "serverless",


};
