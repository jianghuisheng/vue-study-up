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
        path: '/user/:name',
        component: {
            template: `
            <div>
                <div>我是：{{$route.params.name}}</div>
                <div>我今年 {{$route.query.age}} 岁了</div>
            </div>
            `
        }
    }
]

const router = new VueRouter({
    routes
});

new Vue({
    el: '#vue-app',
    router
})