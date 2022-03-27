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
    },
    methods: {
        buscar: function () {
            $(function () {
                var preauth = getAuth();
                setAuth("encodedstring");
                var auth = $(window).Decrypt(app.sys.bien);
                setAuth(auth);
                this.biencode = {};
                if (typeof app.empresasanunciando !== 'undefined') {
                    if (app.empresasanunciando.pgid !== null) {
                        this.biencode.empresa = getParameterByName("pgid");
                    } else {
                        this.biencode.empresa = app.sys.refid;
                    }
                } else {
                    this.biencode.empresa = app.sys.refid;
                }
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud("portfolio", "listar", data);
                setAuth(preauth);
            });
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
        }
    }
});
        