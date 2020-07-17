 new Vue({
    el: '#vue-app',
    data(){
        return {
            age:28, 
            X:0,
            Y:0,
            name:''
        }
    },
    methods:{
        logName(){
            console.log('正在输入姓名');
        },
        logAge(){
            console.log('正在输入年龄');
        }
    }
})