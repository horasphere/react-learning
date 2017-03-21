var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./../webpack.config.js");
var server = new webpackDevServer(webpack(config), {
    hot: false,
    inline: false,
});

server.listen(3000);

console.log('App is runnning at http://localhost:3000')