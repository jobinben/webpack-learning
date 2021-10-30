# 基础目录介绍

|目录 |描述 |
| --- | --- |
|dist| 这是`webpack`编译转化`src`入口文件后的输出文件存放的目录 |
|src| 这个是源文件目录并包含入口文件 |
|webpack| 配置文件可以webpack指令输入后进行的输入输出模式|


# 热跟新工具(webpack-dev-server)
通过webpack-dev-server工具生成的js文件都存放在内存中。不存在物理盘，无法在物理盘看到

webpack-dev-server的使用:

   1. 如果安装在本地，需要在package.json的script属性下配置添加一个启动脚本的命令 
   ```json 
   "scripts": {
    "dev": "webpack serve --open Chrome.exe"
  },
  ```
    然后再终端执行webpack热更新工具 `npm run dev`

   2. 全局安装的话，直接在终端运行 `webpack-dev-server` 指令


#### 在`package.json`配置`scripts`属性时的`webpack-dev-server`的启动属性

|参数(parameter)|描述(describe)|
|---|---|
|--open | 指定打开的浏览器|
|--port|指定端口号|
|--contentBase|指定打开后的路径 如打开`index`页 ` [--content-base src] `|

#### 在`webpack.config.js`配置文件的`devServer`属性下配置`webpack-dev-server`的启动属性

```json

// 热跟新需要的插件在webpack包里
const webpack = require('webpack')

module.exports={
   
    // 通过在配置文件中 配置webpack-dev-server
    devServer: {
        port: 3000, // 指定端口
        open: 'Chrome.exe', // 传入字符串打开指定浏览器， 传入true打开默认浏览器
        contentBase: 'src', // 指定打开的url路径
        // 还4webpack4.0以下的版本需要配置热跟新
        // 1. 开启热跟新  2.导入webpack包 3.实例后webpack的热跟新
        // 4.0以上的版本直接开启即可
        hot: true
    },
    plugins: [ // 配置插件节点
        
        // new webpack.HotModuleReplacementPlugin() // webpack4.0以上不用实例热跟新插件

    ]
}

```
### 哪个配置方式更好？
1. 如果实现一个简单的启动，建议直接在package.json里配置比较快速简单。
2. 如果项目需求需要在webpack.config.js配置文件配置的话，就在配置文件配置。
3. 两种各有各的优势和用法


# 自动创建html模板工具(html-webpack-plugin)

通过html-webpack-plugin工具生成的html文件都存放在内存中。不存在物理盘，无法在物理盘看到


```json
/**
 * 因为webpack是基于Node.js开发的
 * 所以我们可以使用Node.js的语法进行编程
 */


// 引用html-webpack-plugin插件, 让我们不用手动添加bundle.js,也就是webpack生成后的js文件
// 我们的页面会自动追加需要的js文件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
   

    // 配置插件
    plugins: [
        new htmlWebpackPlugin({
            // 配置html模板的路径以及名称
            // 因为服务器打开自动寻找index文件，所以命名为index文件才会被访问到
            // 创建的html都是存在内存中 无法在物理盘看到
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ]
}

```




# 总结
    以上的工具都是提供开发中的效率，生成的文件大部分都是存放在内存中。
    而不是在物理磁盘。
