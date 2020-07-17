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
        const todos = fetch('http://jsonplaceholder.typicode.com/todos').then(res => {
            // console.log(res);
            // console.log(res.json());
            return res.json();
        }).then(todos => {
            // console.log(todos);
            this.todos = todos;
        })
    },
    methods: {
        onSubmit() {
            console.log(this.todo);
            fetch('http://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(this.todo),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(todo => {
                    console.log(todo);
                    this.todos.unshift(todo)
                })
        }
    }
})
