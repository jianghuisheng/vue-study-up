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
        path: '/login',
        component: {
            template: `
            <div>
                <h1>登陆</h1>
            </div>
            `
        }
    },
    {
        path: '/post',
        component: {
            template: `
            <div>
                <h1>帖子管理</h1>
            </div>
            `
        }
    },
]

let router = new VueRouter({
    routes: routes
});

// 中间件
console.log(router)
router.beforeEach(function (to, from, next) {
    // next();
    // next(false);

    // 登陆验证
    let logged_in = true;
    if (!logged_in && to.path == "/post") {
        next('/login')
    } else {
        next();
    }
})

// 例如发送一些异步的消息，可以放到钩子函数中
router.afterEach(function (to, from) {
    console.log('to', to);
    console.log('from', from);
})

new Vue({
    el: '#vue-app',
    router
})