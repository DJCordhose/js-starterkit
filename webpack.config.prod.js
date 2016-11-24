const path = require('path');
const outputPath = path.resolve(__dirname, 'public/dist');

module.exports = {
    // entry: './src/main.js',
    entry: './src/ts/main.ts',
    output:  {
        path:       outputPath,
        filename:   'bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/,  loader: 'babel'},
            { test: /\.tsx?$/, exclude: /node_modules/,  loader: 'ts-loader' }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    }
};
