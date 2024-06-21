"use strict",
//Tags
app["tags"] = new Vue({
    el: '#tags',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: "tags",
        ELtitle: null,
        Icon: '<i class="far fa-folder-open"></i>',
        pesqTbl: "",
        Host: "Linkado/Tags/",
        paginate: [],

        IdTags: null,
        Segmento: null,
        Dados: []
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                /*   this.biencode = {};
                 this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                 this.biencode.id = eval(window.localStorage.getItem("Linkado"))[0]._id["$oid"];
                 var data = {
                 biencode: encrypt(JSON.stringify(this.biencode))
                 };
                 var ws = app.Cadastro.Host + "listar";
                 var p = post(ws, data);
                 app.tags.src = eval(decrypt(p));
                 if (typeof app.tags.Criarpaginas === "function") {
                 app.tags.Criarpaginas();
                 }
                 $(function () {
                 $("#" + app.tags.href + " .modal-body .nav-link").removeClass("active show");
                 $("#" + app.tags.href + " .modal-body .tab-pane").removeClass("active show");
                 $("#" + app.tags.href + " .modal-body .nav-link").eq(0).addClass("active show");
                 $("#" + app.tags.href + " .modal-body .tab-pane").eq(0).addClass("active show");
                 });*/
            }
        },
        clear: function () {
            this.NomeTags = null;
            this.DescricaoTags = null;
        },
        autocomplete: function () {
            this.Dados = this.row[3];
            this.DescricaoTags = this.row[2];
            this.NomeTags = this.row[1];
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.DescricaoTags = this.DescricaoTags;
            this.biencode.NomeTags = this.NomeTags;
            for (var i = 0; i <= document.getElementsByName("data[]").length - 1; i++) {
                if (i === 0) {
                    app.tags.Dados = [];
                }
                app.tags.Dados.push({
                    "data": document.getElementsByName("data[]")[i].value,
                    "visualizacao": document.getElementsByName("visualizacao[]")[i].value,
                    "likes-mediana": this.mediana(document.getElementsByName("likes[]")[i].value.split(";")),
                    "likes-media": this.media(document.getElementsByName("likes[]")[i].value.split(";")),
                    "comentario-mediana": this.mediana(document.getElementsByName("comentarios[]")[i].value.split(";")),
                    "comentario-media": this.media(document.getElementsByName("comentarios[]")[i].value.split(";")),
                    "vistas-mediana": this.mediana(document.getElementsByName("vistas[]")[i].value.split(";")),
                    "vistas-media": this.media(document.getElementsByName("vistas[]")[i].value.split(";"))
                });
            }
            this.biencode.Dados = this.Dados;
            this.biencode.id = this.id;
            this.biencode.IdUsuario = eval(window.localStorage.getItem("Linkado"))[0]._id["$oid"];
        },
        cadastrar: function () {
            app.tags.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.tags.Host + "add";
            var p = post(ws, data);
            app.tags.clear();
            $(window).NotifyInfo(decrypt(p));
        },
        alterar: function () {
            app.tags.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.tags.Host + "edt";
            var p = post(ws, data);
            app.tags.clear();
            $(window).NotifyInfo(decrypt(p));
        },
        excluir: function () {
            app.tags.checkForm();
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = app.tags.Host + "exc";
            var p = post(ws, data);
            app.tags.clear();
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
        addDados: function () {
            $("#TagDados").append('<label>Data de análise:</label>' +
                    '<input class="form-control" type="date" name="data[]" placeholder="Data de análise...">' +
                    '<label>Visualizações:</label>' +
                    '<input class="form-control" name="visualizacao[]" placeholder="Visualizações...">' +
                    '<label>Primeiros Likes:</label>' +
                    '<input class="form-control" name="likes[]" placeholder="Separar por ;">' +
                    '<label>Primeiros comentários:</label>' +
                    '<input class="form-control" name="comentarios[]" placeholder="Separar por ;">' +
                    '<label>Primeiras visualizações:</label>' +
                    '<input class="form-control" name="vistas[]" placeholder="Separar por ;">');
        },
        removerDados: function () {
            $("#TagDados input:last").remove();
            $("#TagDados input:last").remove();
            $("#TagDados input:last").remove();
            $("#TagDados input:last").remove();
            $("#TagDados input:last").remove();
            $("#TagDados label:last").remove();
            $("#TagDados label:last").remove();
            $("#TagDados label:last").remove();
            $("#TagDados label:last").remove();
            $("#TagDados label:last").remove();
        },
        mediana: function (numbers) {
            const sorted = Array.from(numbers).sort((a, b) => a - b);
            const middle = Math.floor(sorted.length / 2);
            if (sorted.length % 2 === 0) {
                return (sorted[middle - 1] + sorted[middle]) / 2;
            }

            return sorted[middle];
        },
        media: function (numbers) {
            const sorted = Array.from(numbers);
            var total;
            for (var i = 0; i <= sorted.length - 1; i++) {
                total += sorted[i];
            }
            return total / sorted.length;
        }
    }
});