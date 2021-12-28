var app = new Vue({
    el: '#app',
    data: {
        classParagrafo: 'none' ,
        message: 'Hello Vue!'

    },
    methods: {
        styleP(style) {
            this.classParagrafo = style;
        }
    },
})