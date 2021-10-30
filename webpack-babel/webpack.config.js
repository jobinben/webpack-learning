const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'out.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, 
        ]
    },
    plugins: [
        new CleanWebpackPlugin() // 删除打包目录 清楚打包缓存
    ]
}