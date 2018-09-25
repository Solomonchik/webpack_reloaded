var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./main.js', './scss/main.scss', './css/plain_css.css'],
    output: {
        filename: 'dist/bundle.js'
    },

    module: {
        rules: [
            /*
            your other rules for JavaScript transpiling go in here
            */
            { // css / sass / scss loader for webpack
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: '../css/style.css',
            allChunks: true,
        }),
    ],
};
// var LiveReloadPlugin = require('webpack-livereload-plugin');
// module.exports = {
//     plugins: [
//         new LiveReloadPlugin(options)
//     ]
// };

//     TEST
// const path = require('path');
//
// module.exports = {
//     mode: 'development',
//     entry: {
//       index: './src/main.js'
// },
// output: {
//     filename: 'test.js',
//         path: path.resolve(__dirname, 'dist')
//     },
// };