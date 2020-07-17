const routes = [
    {
        path: '/',
        component: {
            template: `
            <div>
                <h1>首页</h1>
            </div>
            `
        }
    },
    {
        path: '/about',
        component: {
            template: `
            <div>
                <h1>关于我们</h1>
            </div>
            `
        }
    },
    {
        name:'user',
        path: '/user/:name',
        component: {
            template: `
            <div>
                <div>我是：{{$route.params.name}}</div>
                <router-link :to="'/user/'+$route.params.name+'/more'">更多信息（拼接）</router-link>
                <router-link to="more" append>更多信息（追加）</router-link>
                <router-view></router-view>
            </div>
            `,
        },
        children:[
            {
                path:'more',
                component:{
                    template:`
                        <div>
                            用户：{{$route.params.name}} 的详细信息
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, laboriosam!
                        </div>
                    `
                }
            }
        ]
    }
]

let router = new VueRouter({
    routes:routes
});

new Vue({
    el: '#vue-app',
    router,
    methods:{
        handleTurn:function(){
            console.log(this.$router)
            setTimeout(()=>{
                console.log(this.$router)
                this.$router.push('/about');
                setTimeout(()=>{
                    // this.router.push('/user/李晓璇')
                    this.$router.push({name:'user',params:{name:'李晓璇'}})
                    this.$router.push({name:'user',query:{age:'26'}})
                },2000)
            },2000)
        }
    }
})