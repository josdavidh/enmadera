const HtmlWepackPlugin = require ("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: {
        entry: "./src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
                // loader: "file-loader",
                // options: {
                //     name: "../ img / [name]. [ext]? [hash]" //../img es la ubicación de almacenamiento del archivo, name es el nombre del archivo
                // },
            }
        ]
    },
    plugins: [
        new HtmlWepackPlugin({
            template: "src/index.html"
        })
    ]
}