module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx|\.es6$/,
                loader: 'babel-loader',
                exclude: function(modulePath) {
                    return /node_modules/.test(modulePath) &&
                        !/node_modules\/cfer-toolkit/.test(modulePath);
                  },
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/, loader: "json-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!raw-loader!sass-loader"
            },
            {
                test: /\.css$/, loader: "style!css"
            }
        ]
    }
};
