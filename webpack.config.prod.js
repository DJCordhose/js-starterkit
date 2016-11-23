const path = require('path');
const outputPath = path.resolve(__dirname, 'public/dist');

module.exports = {
    entry: "./src/main.js",
    output:  {
        path:       outputPath,
        filename:   'bundle.js',
        publicPath: '/dist'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader"}
        ],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/,  loader: 'babel'}
        ]
    }

};
