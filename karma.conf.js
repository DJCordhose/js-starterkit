const webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome', 'PhantomJS', 'Firefox'],
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