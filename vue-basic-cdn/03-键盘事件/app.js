new Vue({
    el: '#vue-app',
    data(){
        return {
            age:28, 
            X:0,
            Y:0
        }
    },
    methods:{
        logName(){
            console.log('%c'+'名字','color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)')
        },
        logAge(){
            console.log('%c'+'年龄','color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)')
        }
    }
})