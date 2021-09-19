"use strict",
//ChamadoAnuncio
app["ChamadoAnuncio"] = new Vue({
    el: '#ChamadoAnuncio',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fab fa-cloudscale"></i>',
        pesqTbl: "",
        Host: "Bienestar/Anuncio/ChamadoAnuncio/",

        Link: null,
        Titulo: null,
        Mensagem: null,
        Background: null,
        Acessos: null,
        Loginsrc: null,
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                this.biencode.acesso = window.localStorage.getItem("IdLogin");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.ChamadoAnuncio.href, "listar", data);
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.Acessos = null;
            this.Link = null;
            this.Titulo = null;
            this.Mensagem = null;
            this.Background = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Link = this.row[3];
            this.Titulo = this.row[1];
            CKEDITOR.instances['titulochamada'].setData(unescapeHTML(this.Titulo))
            this.Mensagem = this.row[2];
            CKEDITOR.instances['mensagemchamada'].setData(unescapeHTML(this.Mensagem))
            this.Background = this.row[4];
            var x = String(app.sys.foreignKeyRestore(this.Loginsrc, "Login", this.row[5]));
            this.Acessos = eval(x.split(","));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.id = this.id;
            var ac = "";
            for (var i = 0; i <= this.Acessos.length - 1; i++) {
                ac += this.Acessos[i];
                if (i < this.Acessos.length - 1) {
                    ac += ";";
                }
            }
            this.biencode.Acessos = ac;
            this.biencode.Link = this.Link;
            this.Titulo = CKEDITOR.instances['titulochamada'].getData();
            this.biencode.Titulo = this.Titulo;
            this.Mensagem = CKEDITOR.instances['mensagemchamada'].getData();
            this.biencode.Mensagem = this.Mensagem;
            this.biencode.Background = this.Background;
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
        },
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.ChamadoAnuncio.valida(field, pesq));
            return filteredList;
        },
        valida: function (field, pesq) {
            var keys = Object.keys(field);
            var flag = false;
            for (var i = 0; i <= keys.length - 1; i++) {
                try {
                    var p = field[keys[i]].toLowerCase().indexOf(pesq.toLowerCase());
                    if (p >= 0) {
                        flag = true;
                    }
                } catch (e) {

                }
            }
            return flag;
        }

    }
});
function update(picker) {
    app.ChamadoAnuncio.Cor = picker.dataset.currentColor;
}