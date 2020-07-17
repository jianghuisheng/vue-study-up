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
    // {
    //     path: '/',
    //     components: {
    //         index: {
    //             template: `
    //             <div>
    //                 <h1>首页</h1>
    //             </div>
    //         `
    //         }
    //     }
    // },
    {
        path: '/user',
        components: {
            sidebar: {
                template: `
                <div>
                    <h1>用户管理</h1>
                </div>
            `
            },
            content: {
                template: `
                <div>
                    <h1>权限管理</h1>
                </div>      
            `
            }
        }
    },
    {
        path: '/post',
        components: {
            sidebar: {
                template: `
                <div>
                    <h1>帖子管理</h1>
                </div>
            `
            },
            content: {
                template: `
                <div>
                    <h1>标签管理</h1>
                </div>      
            `
            }
        }
    },
]

let router = new VueRouter({
    routes: routes
});

new Vue({
    el: '#vue-app',
    router
})