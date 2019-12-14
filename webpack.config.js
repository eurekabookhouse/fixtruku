/*** webpack.config.js ***/const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
              },
        ]
    },
    devServer: {
        contentBase: './public',
        hot: true
      },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 8080
    }
};