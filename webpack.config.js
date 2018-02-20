const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src'),

    output: {
        filename:'./dist/sidebarpopup.js',
        library: 'SidebarPopup',
        libraryTarget:'umd',
    },

    module: {
        loaders: [

            // Babel Loader
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            }
        ]   
    },
    resolve: {
        modules: ['src','node_modules']
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        inline: true
    }
}