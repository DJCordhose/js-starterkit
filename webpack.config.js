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
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}
        //     // {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader?{fix: true}'}
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
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

};
