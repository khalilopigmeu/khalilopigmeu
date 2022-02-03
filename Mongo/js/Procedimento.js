"use strict",
//Procedimento
app["Procedimento"] = new Vue({
    el: '#Procedimento',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-tasks"></i>',
        pesqTbl: "",
        Host: "Bienestar/Agenda/Procedimento/",

        text: null,
        Descricao: null,
        Nome: null,
        Valor: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Procedimento.href, "listar", data);
                app.FichaAtendimento.Procedimentosrc = app.Procedimento.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.Nome = null;
            this.Valor = null;
            this.Descricao = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Nome = this.row[1];
            this.Valor = this.row[2];
            this.Descricao = this.row[3];
            CKEDITOR.instances['procedimentodescricao'].setData(unescapeHTML(this.Descricao));
            app.SocialMedia.mascara();
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.Nome = this.Nome;
            this.biencode.Valor = this.Valor;
            this.Descricao = CKEDITOR.instances['procedimentodescricao'].getData();
            this.biencode.Descricao = this.Descricao;
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
