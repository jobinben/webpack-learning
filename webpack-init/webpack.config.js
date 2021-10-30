/**
 * 因为webpack是基于Node.js开发的
 * 所以我们可以使用Node.js的语法进行编程
 */


const path = require('path')
// 热跟新需要的插件在webpack包里
// const webpack = require('webpack')

// 引用html-webpack-plugin插件, 让我们不用手动添加bundle.js,也就是webpack生成后的js文件
// 我们的页面会自动追加需要的js文件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: 'production', // 提供 mode 配置选项，告知 webpack 使用相应环境的内置优化
    entry: './src/main.js', // 入口文件
    output: { // 出口文件
        path: path.join(__dirname, 'dist'), // 输出的目录
        filename: 'bundle.js' // 输出后的文件名
    },

    
    // // 通过在配置文件中 配置webpack-dev-server
    // devServer: {
    //     port: 3000, // 指定端口
    //     open: 'Chrome.exe', // 传入字符串打开指定浏览器， 传入true打开默认浏览器
    //     contentBase: 'src', // 指定打开的url路径
    //     // 还4webpack4.0以下的版本需要配置热跟新
    //     // 1. 开启热跟新  2.导入webpack包 3.实例后webpack的热跟新
    //     // 4.0以上的版本直接开启即可
    //     hot: true
    // },
    // plugins: [ // 配置插件节点
        
    //     new webpack.HotModuleReplacementPlugin() // webpack4.0以上不用热跟新插件

    // ]

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

    module: { // 配置所有 第三方模块 加载器

        // 所有 第三方模块 匹配规则
        rules: [
            // use属性下的数组调用第三方的 加载器顺序是 从右到左。
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 第一个参数是匹配的正则表达式, 配置加载 .css文件
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, // 配置加载 .less文件

            // 配置转换js文件的babel
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, // 排除node_modules里面的js文件编译

            // 配置Vue
            {test: /\.vue$/, use: 'vue-loader'},
        ]

    }
}