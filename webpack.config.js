const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const PROD = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        app: path.join(__dirname, 'src/app.js')
    },
    output: {
        path: path.join(__dirname, '.build/js/'),
        publicPath: "js/",
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash].js",
        libraryTarget: 'var',
        library: 'App'
    },
    devtool: PROD ? 'source-map' : 'eval',
    watch: !PROD,
    cache: false,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
            ]
        },
        {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [],
    resolve: {
        modules: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "src")
        ]
    }
};

if(PROD) {
    config.plugins.push(new UglifyJsPlugin({}))
}

module.exports = config;