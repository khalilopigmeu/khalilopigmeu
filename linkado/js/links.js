"use strict",
//Tags
app["links"] = new Vue({
    el: '#links',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: "links",
        ELtitle: null,

        pesqTbl: "",
        Host: "Linkado/Link/",
        paginate: [],

        id: null,
        Nome: null,
        Descricao: null,
        Url: null,
        Reduzida: null,
        Icon: null,

    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.IdUsuario = eval(window.localStorage.getItem("Linkado"))[0]._id["$oid"];
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.links.Host + "listar";
            var p = post(ws, data);
            app.links.src = eval(decrypt(p));
            app.Linka.src = eval(decrypt(p));
            if (typeof app.links.Criarpaginas === "function") {
                app.links.Criarpaginas();
            }
            $(function () {
                $("#" + app.links.href + " .modal-body .nav-link").removeClass("active show");
                $("#" + app.links.href + " .modal-body .tab-pane").removeClass("active show");
                $("#" + app.links.href + " .modal-body .nav-link").eq(0).addClass("active show");
                $("#" + app.links.href + " .modal-body .tab-pane").eq(0).addClass("active show");
            });
        },
        clear: function () {
            this.id = null;
            this.Nome = null;
            this.Descricao = null;
            this.Url = null;
            this.Reduzida = null;
            this.Icon = null;
        },
        autocomplete: function () {
            this.Icon = this.row[5];
            this.Reduzida = this.row[4];
            this.Url = this.row[3];
            this.Descricao = this.row[2];
            this.Nome = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.Icon = this.Icon;
            this.biencode.Reduzida = this.Reduzida;
            this.biencode.Url = this.Url;
            this.biencode.Descricao = this.Descricao;
            this.biencode.Nome = this.Nome;
            this.biencode.id = this.id;
            this.biencode.IdUsuario = eval(window.localStorage.getItem("Linkado"))[0]._id["$oid"];
        },
        cadastrar: function () {
            app.links.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.links.Host + "add";
            var p = post(ws, data);
            app.links.clear();
            $(window).NotifyInfo(decrypt(p));
        },
        alterar: function () {
            app.links.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.links.Host + "edt";
            var p = post(ws, data);
            app.links.clear();
            $(window).NotifyInfo(decrypt(p));
        },
        excluir: function () {
            app.links.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.links.Host + "exc";
            var p = post(ws, data);
            app.links.clear();
            $(window).NotifyInfo(decrypt(p));
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
        reduzida: function () {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < 7) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            $(window).NotifyInfo("Gerando Link Reduzido");
            this.verificar(result);
        },
        verificar: function (reduzida) {
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.reduzida = reduzida;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.links.Host + "reduzir";
            $(window).NotifyInfo("Veficando exclusividade!");
            var p = post(ws, data);
            var rs = eval(decrypt(p));
            if (rs.length > 0) {
                $(window).NotifyInfo("Revalidando processo");
                this.reduzida();
            } else {
                $(window).NotifyInfo("Finalizado");
                this.Reduzida = reduzida;
            }
        }
    }
});