
import $ from "jquery"


// 导入css文件，需要安装loader加载器去处理
// 1.安装style-loader 和 css-loader 
// 2.配置导入
import './css/index.css'
import './css/index.less'


$(function() {
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', function() {
        return 'pink'
    }) 
})

class Person{

    static  p = {
        name: 'jojo',
        age: 18,
    }
}

console.log(Person.p)