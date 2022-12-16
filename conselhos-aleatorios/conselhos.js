
const vm = new Vue({
    el: '#app',
    data() {
        return {
            conselho: null
        }
    },
    methods: {
        buscaConselho() {
            axios.get("https://api.adviceslip.com/advice")
                .then((res) => {
                    let result = res.data;
                    this.conselho = result.slip.advice
                    return " ' " + this.conselho + " '";
                }
                )
            this.conselho = null
        }
    }

})
