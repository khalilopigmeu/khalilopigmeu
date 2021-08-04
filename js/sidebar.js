app["sidebarR"] = new Vue({
    el: '#sidebar-wrapper-R',
    data: {
        fblog: null,
        imgurl: null,
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
            this.socialName = app.SocialMedia.socialName;
        },
        sorter: function (arr, model, field) {
            if (arr !== null) {
                if (model === "ASC") {
                    return arr.slice().sort(function (a, b) {
                        return a[field] - b[field];
                    });
                } else {
                    return arr.slice().sort(function (a, b) {
                        return b[field] - a[field];
                    });
                }
            }
        }
    }
});