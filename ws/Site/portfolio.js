"use strict";
app["portfolio"] = new Vue({
    el: '#portfolio',
    data: {
        src: null,
        Host: "Bienestar/Portfolio/Portfolios/",
        catport: null,
        catselect: [],
        escolha: null,
        photos: "",
        href: "Portfolio"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("Portfolio")) {
                this.src = app.sys.system["Portfolio"];
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.empresa = refid;
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("portfolio", "listar", data);
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        modal: function (obj, id) {
            switch (obj) {
                case "job":
                    this.escolha = app.sys.searchByID(this.src, id)[0].Job
                    break;
                case "case":
                    this.escolha = app.sys.searchByID(this.src, id)[0].CaseEmpresa
                    break;
                case "fotos":
                    this.escolha = "";
                    app.midias.buscar();
                    var img = app.sys.search(app.midias.src, "IdAlbum", app.sys.searchByID(this.src, id)[0].IdAlbum);
                    for (var i = 0; i <= img.length - 1; i++) {
                        this.photos += '<div class="col-sm-6 col-md-4 col-lg-3 item"><a href="' + img[i].UrlMidia + '" data-lightbox="photos"><img class="img-fluid" src="' + img[i].UrlMidia + '"></a></div>'
                    }
                    break;
            }
            $("#portfoliomodal").modal('show');
        },
        catport: function () {
            if (nulo(app.categoriaportfolio)) {
                return [];
            } else {
                return app.categoriaportfolio.src;
            }
        }
    }
});
        