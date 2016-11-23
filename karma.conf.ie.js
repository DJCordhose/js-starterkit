const webpack = require('webpack');

module.exports = function (config) {
    config.set({
        // Ensure your hostname is set to the publicly accessible IP and not localhost
        hostname: '192.168.1.10',
        port: 9876,

        // Add the IEBrowsers host path to the VM controller
        iebrowsers: {
            host: 'http://192.168.1.11/ie-browsers/iecontrol.php',
        },

        // Set the IE Browsers you wish to test against
        browsers: ['IE8', 'IE9', 'IE10'],

        // browsers: ['Chrome', 'PhantomJS', 'Firefox'],
        // browsers: ['PhantomJS'],
        // browsers: ['PhantomJS'],
        frameworks: ['mocha'],
        reporters: ['mocha'],

        files: [
            "test/karma/**.karma.js"
        ],
        preprocessors: {
            ["test/karma/**.karma.js"]: ["webpack", "sourcemap"]
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('test')
                })
            ]
        },

        webpackMiddleware: {
            noInfo: true
        }
    });
};