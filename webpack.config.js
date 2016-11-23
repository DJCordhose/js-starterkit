const path = require('path');
const outputPath = path.resolve(__dirname, 'public/dist');

module.exports = {
    entry: './src/main.js',
    // entry: './src/ts/main.ts',
    output:  {
        path:       outputPath,
        filename:   'bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'},
            {test: /\.tsx?$/, exclude: /node_modules/, loader: 'tslint-loader'}
        ],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/,  loader: 'babel'},
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, exclude: /node_modules/,  loader: 'ts-loader' }
        ]
    },
    devtool: 'inline-source-map',
    eslint: {
        failOnWarning: false,
        failOnError: true
        // fix: true
    },
    externals: {
        'jquery': 'jQuery'
    }
};
