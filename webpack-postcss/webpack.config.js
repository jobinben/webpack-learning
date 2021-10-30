const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'xxx.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            // {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, 
        ]
    },
    // 配置插件
    plugins: [
        // new webpack.HotModuleReplacementPlugin(), // webpack4.0以上不用热跟新插件
      
        new htmlWebpackPlugin({
            // 配置html模板的路径以及名称
            // 因为服务器打开自动寻找index文件，所以命名为index文件才会被访问到
            // 创建的html都是存在内存中 无法在物理盘看到
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),

        
    ],
}