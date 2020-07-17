new Vue({
    el: '#vue-app',
    data(){
        return {
            name:"Mr.yang",
            wechat:"1697965700",
            website:"https://www.baidu.com",
            websiteTag:'<a href="https://www.taobao.com">淘宝网</a>'
        }
    },
    methods:{
        // greet:function(){
        //     return "Goode night " + this.name;
        // }

        greet(time){
            // return "Goode night " + this.name;
            return `Good ${time} ${this.name}`
        },

        haveLunch:()=>{
            return `吃过午饭了吗?`
        }
    }
})