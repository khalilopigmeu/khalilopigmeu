app["criptocontent"] = new Vue({
    el: '#criptocontent',
    data: {
        chave: null,
        text: null,
        result: null
    },
    methods: {
        encode: function () {
            this.result = encrypt(this.text,btoa(this.chave));
        },
        decode: function () {
            this.result = decrypt(this.text,btoa(this.chave));
        },
    }
});
