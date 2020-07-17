var one = new Vue({
    el: '#vue-app-one',
    data() {
        return {
            title: 'Vue App One'
        }
    },
    computed: {
        greet() {
            return 'Hello, from app one :)';
        }
    }
});
var two = new Vue({
    el: '#vue-app-two',
    data() {
        return {
            title: 'Vue App Two'
        }
    },
    methods: {
        changeTitleOne() {
            one.title = "Title Changed"
        }
    },
    computed: {
        greet: function () {
            return 'Yo dudes, this is app 2 speaking to ya';
        }
    },
});
