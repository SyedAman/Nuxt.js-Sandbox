module.exports = {
    entry: './src/reactApp.js',
    output: {
        path: __dirname,
        filename: 'reactApp-output.js'
    },
    module: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
    }]
};
