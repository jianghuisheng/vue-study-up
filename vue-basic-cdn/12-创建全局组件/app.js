let data = {
    name: '杨文龙',
    wechat: '18332362257'
}

Vue.component("Greeting", {
    // htmle模版
    template: `
    <p>
    这是全局组件，可以在任何实例的容器中使用
    我的名字是：{{name}} - 我的微信是：{{wechat}}
    <button @click="changeName">改名</button>
    </p>
    `,
    data() {
        // return {
        //     name: '杨文龙',
        //     wechat: '18332362257'
        // }
        return data;
    },
    methods: {
        changeName() {
            this.name = "李晓璇"
        }
    }
})


const one = new Vue({
    el: '#vue-app-one'
});

const two = new Vue({
    el: '#vue-app-two'
});
