app["sidebar"] = new Vue({
    el: '#sidebar-wrapper',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: [],
        newmenu: [],
        pesqmenu: null,
        empresa: null,
        login: null,
    },
    created: function () {
    },
    methods: {
        atualizaFBBar: function () {
            this.fblog = app.sys.fblog;
            this.imgurl = app.sys.imgurl;
            this.imgemp = app.sys.imgemp;
            this.socialName = app.sys.socialName;
        }
    }
});
app["sidebarR"] = new Vue({
    el: '#sidebar-wrapper-R',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: [],
        newmenu: [],
        pesqmenu: null,
    },
    created: function () {
    },
    methods: {
        atualizaFBBar: function () {
            this.fblog = app.sys.fblog;
            this.imgurl = app.sys.imgurl;
            this.imgemp = app.sys.imgemp;
            this.socialName = app.sys.socialName;
        }
    }
});