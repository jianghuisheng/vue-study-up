new Vue({
    el: '#vue-app',
    data() {
        return {
            todos: [],
            todo: {
                title: '',
                completed: false
            }
        }
    },
    mounted() {
        axios.get('http://jsonplaceholder.typicode.com/todos').then(todos => {
            this.todos = todos.data;
        })

    },
    methods: {
        onSubmit() {
            axios.post('http://jsonplaceholder.typicode.com/todos', this.todo).then(todo => {
                this.todos.unshift(todo.data);
            })
        }
    }
})
