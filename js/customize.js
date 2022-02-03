"use strict";
var app = {};
app["Customizar"] = new Vue({
    el: '#Customizar',
    data: {
        dark: null,
        medium: null,
        light: null,
        fssistema: null,
        fundoform: null,
        fsform: null,
        cabecalhotabela: null,
        fscabecalho: null,
        rodapetabela: null,
        fsrodape: null,
        fstabela: null,
        linhaeven: null,
        linhaodd: null,
    },
    created: {
        defaultColor: function () {
            if (urlSite.includes("borealmystic")) {
                this.dark = "#011006";
                this.medium = "#ededed";
                this.light = "#636464";
            } else {
                this.dark = "#226C3B";
                this.medium = "#38B261";
                this.light = "#73D393";
            }
            this.changeColorSystem();
        }
    },
    methods: {
        changeColorSystem: function () {
            var cor1 = window.localStorage.getItem("dark");
            var cor2 = window.localStorage.getItem("medium");
            var cor3 = window.localStorage.getItem("light");
            if (typeof cor1 === "undefined" || cor1 !== null) {
                if (this.dark === null) {
                    if (urlSite.includes("borealmystic")) {
                        this.dark = "#011006";
                    } else {
                        this.dark = "#226C3B";
                    }
                } else {
                    cor1 = this.dark;
                    window.localStorage.setItem("dark", this.dark);
                }
            }
            if (typeof cor2 === "undefined" || cor2 !== null) {
                cor2 = this.medium;
                if (this.medium === null) {
                    if (urlSite.includes("borealmystic")) {
                        this.medium = "#ededed";
                    } else {
                        this.medium = "#38B261";
                    }
                } else {
                    cor2 = this.medium;
                    window.localStorage.setItem("medium", this.medium);
                }
            }
            if (typeof cor3 === "undefined" || cor3 !== null) {
                cor3 = this.light;
                if (this.light === null) {
                    if (urlSite.includes("borealmystic")) {
                        this.light = "#636464";
                    } else {
                        this.light = "#73D393";
                    }
                } else {
                    cor3 = this.light;
                    window.localStorage.setItem("light", this.light);
                }
            }
            document.getElementsByTagName("style")[0].textContent = ":root{"
                    + "--dark:" + dark + ";"
                    + "--medium:" + medium + ";"
                    + "--light:" + light + ";"
                    + ""
                    + "}";
        },
        clearColor: function () {
            window.localStorage.removeItem("dark");
            window.localStorage.removeItem("medium");
            window.localStorage.removeItem("light");
        },
    }
});