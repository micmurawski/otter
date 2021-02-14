const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const isProduction = env.production ? true : false;

    var plugins = [];

    if (!isProduction) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    
    return {
        entry: path.resolve(__dirname, './src/index.jsx'),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
        },
        plugins: plugins,
        watch: true,
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            hot: true,
        },
    };
}