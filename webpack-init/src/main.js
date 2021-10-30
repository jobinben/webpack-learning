
// 1. 导入vue, 默认导入是vue.runtime.common.js

import Vue from 'vue'

// 2. 引入login.vue组件，通过render渲染到html
import login from './login.vue'


const vm = new Vue({
    el: '#app',
    data: {},
    render: function(createElements) {
        return createElements(login)
    }
})

