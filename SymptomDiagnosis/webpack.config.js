const path = require('path');
module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve('wwwroot/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}