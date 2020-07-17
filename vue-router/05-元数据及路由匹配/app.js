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
        // 元数据～自定义数据
        meta: {
            login_required: true
        },
        component: {
            template: `
            <div>
                <h1>帖子管理</h1>
                <router-link to="rain" append>新上映电影</router-link>
                <router-view></router-view>
            </div>
            `
        },
        children: [
            {
                path: 'rain',
                component: {
                    template: `<h2>雨天后座</h2>`
                }
            }
        ]
    },
]

let router = new VueRouter({
    routes: routes
});

// 中间件
router.beforeEach(function (to, from, next) {
    // next();
    // next(false);

    // 登陆验证
    let logged_in = true;
    if (!logged_in && to.matched.some(function (item) {
        // return item.path == '/post';
        return item.meta.login_required;
    })) {
        next('/login')
    } else {
        next();
    }
})

new Vue({
    el: '#vue-app',
    router
})