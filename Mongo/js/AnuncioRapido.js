"use strict",
//ChamadoAnuncio
app["AnuncioRapido"] = new Vue({
    el: '#AnuncioRapido',
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
        paginate: [],

        Link: null,
        Titulo: null,
        Mensagem: null,
        Background: null,
        Acessos: null,

        Loginsrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.AnuncioRapido.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.Link = null;
            this.Titulo = null;
            this.Mensagem = null;
            this.Background = null;
            CKEDITOR.instances['mensagemchamada'].setData("");
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.Link = this.row[3];
            this.Titulo = this.row[1];
            this.Mensagem = this.row[2];
            CKEDITOR.instances['mensagemchamada'].setData(unescapeHTML(this.Mensagem))
            this.Background = this.row[4];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.id = this.id;
            this.biencode.Link = this.Link;
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
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Login)) {
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src;
            }

        },
    }
});
function update(picker) {
    app.ChamadoAnuncio.Cor = picker.dataset.currentColor;
}