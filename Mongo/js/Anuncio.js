"use strict",
//Anuncio
app["Anuncio"] = new Vue({
    el: '#Anuncio',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-bullhorn"></i>',
        pesqTbl: "",
        Host: "Bienestar/Anuncio/Anunciante/",

        IdCategoriaAnuncio: null,
        Conteudo: null,
        Descricao: null,
        Tipo: null,
        Keywords: null,
        Loginsrc: null,
        CategoriaAnuncioSrc: null,

    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Anuncio.href, "listar", data);
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Conteudo = null;
            this.IdCategoriaAnuncio = null;
            this.Keywords = null;
            this.Descricao = null;
            this.Tipo = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Conteudo = this.row[3];
            CKEDITOR.instances['conteudoanuncio'].setData(unescapeHTML(this.Conteudo))
            this.IdCategoriaAnuncio = this.row[1];
            this.Keywords = this.row[4];
            this.Descricao = this.row[5];
            CKEDITOR.instances['descricaoanuncio'].setData(unescapeHTML(this.Descricao))
            this.Tipo = this.row[2];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.Conteudo = CKEDITOR.instances['conteudoanuncio'].getData();
            this.biencode.Conteudo = this.Conteudo;
            this.biencode.IdCategoriaAnuncia = this.IdCategoriaAnuncio;
            this.biencode.Keywords = this.Keywords;
            this.Descricao = CKEDITOR.instances['descricaoanuncio'].getData();
            this.biencode.Descricao = this.Descricao;
            this.biencode.Tipo = this.Tipo;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            app.sys.crud(this.href, "edt", null);
        },
        excluir: function () {
            app.sys.crud(this.href, "exc", null);
        },
        relatorio: function () {
            app.sys.crud(this.href, "rel", null);
        },
        cad: function () {
            this.evtDataCal = "cad";
        },
        alt: function () {
            this.evtDataCal = "alt";
        },
        rel: function () {
            this.evtDataCal = "rel";
        },
        exc: function () {
            this.evtDataCal = "exc";
        },
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});
