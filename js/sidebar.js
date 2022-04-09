app["sidebarR"] = new Vue({
    el: '#sidebar-wrapper-R',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: []
    },
    created: function () {
    },
    methods: {
        atualizaFBBar: function () {
            this.fblog = app.SocialMedia.fblog;
            this.imgurl = app.SocialMedia.imgurl;
            this.imgemp = app.SocialMedia.imgemp;
            this.socialName = app.SocialMedia.socialName;
        }
    }
});