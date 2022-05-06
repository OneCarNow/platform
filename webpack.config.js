var webpack = require("webpack");
module.exports = {
    entry: "./src/assets/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query: {
                    presets: ["latest", "react", "stage-0"]
                }
            }
        ]
    }
}