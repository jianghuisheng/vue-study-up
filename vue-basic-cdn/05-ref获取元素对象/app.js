 new Vue({
    el: '#vue-app',
    data(){
        return {
            age:'', 
            name:''
        }
    },
    methods:{
        getName(){
            // console.log(this.$refs);
            this.name = this.$refs.name.value;
        },
        getAge(){
            this.age = this.$refs.age.value;
        }
    },
    watch:{
        name(newVal,oldVal){
            console.log(newVal,oldVal);
        },
        age(newVal,oldVal){
            console.log(newVal,oldVal);
        }
    }
})