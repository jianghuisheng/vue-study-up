new Vue({
    el: '#vue-app',
    data() {
        return {
            a: 0,
            b: 0,
            age: 18
        }
    },
    methods: {
        // addToA() {
        //     console.log("addToA");
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log("addToB");
        //     return this.b + this.age;
        // }
    },
    computed:{
        addToA() {
            console.log("addToA");
            return this.a + this.age;
        },
        addToB() {
            console.log("addToB");
            return this.b + this.age;
        }
    }
    
})