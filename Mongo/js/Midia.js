"use strict",
//Midia
app["Midia"] = new Vue({
    el: '#Midia',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-file"></i>',
        pesqTbl: "",

        UrlMidia: null,
        DescricaoMidia: null,
        IdAlbum: null,
        Tipo: null,
        NomeMidia: null,
        Categorias: null,
        IdProduto: null,
        Ativo: null,
        nomes: [],
        descricao: [],
        files: [],
        fileBox: [],
        AlbumSrc: null,
        CategoriaSrc: null,
        ProdutoSrc: null,
    },
    created: function (e) {
        this.populate();
        $(function () {
            $("#Midia .modal-body .nav-link").removeClass("active show");
            $("#Midia .modal-body .tab-pane").removeClass("active show");
            $("#Midia .modal-body .nav-link").eq(0).addClass("active show");
            $("#Midia .modal-body .tab-pane").eq(0).addClass("active show");
        });
    },
    methods: {
        populate: function (e) {
            this.clear();
            if (!this.ravec(1)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                $(function () {
                    this.biencode = {};
                    this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                    this.biencode.data = app.AnotacaoAgenda.datapesq;
                    var data = {
                        biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Midia", "listar"));
                    var p = (post(ws, data));

                    app.Midia.src = eval($(window).Decrypt(p));
                });
            }
        },
        clear: function () {
            this.UrlMidia = null;
            this.DescricaoMidia = null;
            this.IdAlbum = null;
            this.Tipo = null;
            this.NomeMidia = null;
            this.Categorias = null;
            this.IdProduto = null;
            this.Ativo = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdAlbum = app.sys.foreignKeyRestore(this.AlbumSrc, "Nome", this.row[1]);
            this.Categorias = app.sys.foreignKeyRestore(this.CategoriaSrc, "NomeCategoria", this.row[2]);
            this.IdProduto = app.sys.foreignKeyRestore(this.ProdutoSrc, "NomeProduto", this.row[3]);
            this.NomeMidia = this.row[4];
            this.UrlMidia = this.row[5];
            this.DescricaoMidia = this.row[6];
            this.Tipo = this.row[7];
            this.Ativo = this.row[8];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.UrlMidia = this.UrlMidia;
            this.biencode.DescricaoMidia = this.DescricaoMidia;
            this.biencode.IdAlbum = this.IdAlbum;
            this.biencode.Tipo = this.Tipo;
            this.biencode.NomeMidia = this.NomeMidia;
            this.biencode.Categorias = this.Categorias;
            this.biencode.IdProduto = this.IdProduto;
            this.biencode.Ativo = this.Ativo;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            if (!this.ravec(2)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                if (!app.erros.valida()) {
                    this.biencode = {};
                    this.biencode.nomes = {};
                    this.biencode.descricao = {};
                    this.biencode.files = {};
                    for (var i = 0; i <= app.Midia.fileBox.length - 1; i++) {
                        this.biencode.nomes[i] = (app.Midia.fileBox[i].name);
                        this.biencode.descricao[i] = (app.Midia.fileBox[i].lastModifiedDate);
                        this.biencode.files[i] = (this.files[i]);
                    }
                    this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Midia", "add"));
                    var p = (post(ws, data));
                    var rs = $(window).Decrypt(p);
                    if (rs.indexOf("Erro:") > 0) {
                        $(window).NotifyInfo(rs);
                    } else {
                        $(window).NotifyInfo(rs);
                        this.populate();
                    }
                }
            }
        },
        alterar: function () {
            if (!this.ravec(3)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                this.checkForm();
                if (!app.erros.valida()) {
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Midia", "edt"));
                    var p = (post(ws, data));
                    var rs = $(window).Decrypt(p);
                    $(window).NotifyInfo(rs);

                    this.populate();
                }
            }
        },
        excluir: function () {
            if (!this.ravec(4)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
                this.checkForm();
                if (!app.erros.valida()) {
                    var data = {
                        "biencode": $(window).Encrypt(JSON.stringify(this.biencode))
                    };
                    var ws = $(window).Decrypt(host("Bienestar", "Midia", "exc"));
                    var p = (post(ws, data));
                    var rs = $(window).Decrypt(p);
                    $(window).NotifyInfo(rs);

                    this.populate();
                }
            }
        },
        relatorio: function () {
            if (!this.ravec(5)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
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
        previewFiles: function (event) {
            for (var i = 0; i <= event.target.files.length - 1; i++) {
                this.fileBox[i] = event.target.files[i];
                this.nomes[i] = this.fileBox[i].name;
                this.getBase64(this.fileBox[i]);
                this.descricao[i] = "";
            }
        },
        getBase64: function (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                app.Midia.files.push(reader.result);
            };
        },
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && typeof app.Ravec.acesso[this.stepkey][this.href] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null && app.Ravec.acesso[this.stepkey][this.href] !== null) {
                if (app.Ravec.acesso[this.stepkey][this.href].nivel >= nivel) {
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