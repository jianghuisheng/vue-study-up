new Vue({
    el: '#vue-app',
    data() {
        return {
           mrChangeColor:false,
           mrChangeLength:false
        }
    },
    methods: {
        
    },
    computed:{
        compClasses(){
            return {
                changeColor:this.mrChangeColor,
                changeLength:this.mrChangeLength
            };
        }
    }
    
})