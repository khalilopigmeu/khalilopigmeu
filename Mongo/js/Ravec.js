app["Ravec"] = new Vue({
    el: '#Ravec',
    data: {
        evtDataCal: null,
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-lock-open"></i>',
        pesqTbl: "",
        Host: "Bienestar///",
        paginate:[],

        opcoes: [],
        acesso: [],
        Acessos: null,

        Loginsrc: null,
    },
    methods: {
        /*acessar: function (idlogin, ravec) {
         app.Ravec.acesso = eval(decrypt(ravec, idlogin));
         app.sys.Conectado();
         },
         atualizar: function () {
         this.acesso = eval(app.Ravec.acesso = eval(decrypt(window.localStorage.getItem("RAVEC"),window.localStorage.getItem("IdLogin"))));
         },*/
        populate: function (e) {
            this.clear();
        },
        clear: function () {
        },
        autocomplete: function () {
        },
        checkForm: function () {
            app.erros.errors = {};
        },
        cadastrar: function () {
            if (!this.ravec(2)) {
                $(window).NotifyRavec(this.ELtitle);
            } else {

            }
        },
        alterar: function () {
            if (!this.ravec(3)) {
                $(window).NotifyRavec(this.ELtitle);
            } else {
            }
        },
        excluir: function () {
            if (!this.ravec(4)) {
                $(window).NotifyRavec(this.ELtitle);
            } else {
            }
        },
        relatorio: function () {
            if (!this.ravec(5)) {
                $(window).NotifyRavec(this.ELtitle);
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
        check: function (nivel, index, event) {
            if (event.target.checked) {
                this.opcoes[index].nivel = nivel;
            } else {
                this.opcoes[index].nivel = parseInt(nivel) - 1;
            }
        },
        updateAcesso: function () {
            for (var i = 0; i <= this.Loginsrc.length - 1; i++) {
                if (this.Loginsrc[i]._id['$oid'] === this.Acessos) {
                    if (typeof this.Loginsrc[i].RAVEC !== "undefined") {
                        this.acesso = eval(decrypt(this.Loginsrc[i].RAVEC, window.localStorage.getItem("IdLogin")));
                        this.opcoes = [];
                        for (var i = 0; i <= Object.keys(app).length - 1; i++) {
                            var nomeOP = app[Object.keys(app)[i]].ELtitle;
                            if (typeof nomeOP !== "undefined") {
                                var nivel = 0;
                                for (var j = 0; j <= this.acesso.length - 1; j++) {
                                    var nomeAC = this.acesso[j].nome;
                                    if (nomeOP === nomeAC) {
                                        nivel = this.acesso[j].nivel;
                                        break;
                                    }
                                }
                                this.opcoes.push({nome: nomeOP, nivel: nivel});
                            }
                        }
                        break;
                    } else {
                        this.acesso = eval(decrypt(window.localStorage.getItem("RAVEC"), "tufsqulu"));
                        this.opcoes = [];
                        for (var i = 0; i <= Object.keys(app).length - 1; i++) {
                            var nomeOP = app[Object.keys(app)[i]].ELtitle;
                            if (typeof nomeOP !== "undefined") {
                                var nivel = 0;
                                for (var j = 0; j <= this.acesso.length - 1; j++) {
                                    var nomeAC = this.acesso[j].nome;
                                    if (nomeOP === nomeAC) {
                                        nivel = this.acesso[j].nivel;
                                        break;
                                    }
                                }
                                this.opcoes.push({nome: nomeOP, nivel: 1});
                            }
                        }
                        break;
                    }
                }
            }
        },
        updateRAVEC: function () {
            app.Login.biencode = {};
            app.Login.biencode.RAVEC = encrypt(JSON.stringify(app.Ravec.opcoes),app.Ravec.Acessos);
            app.Login.biencode.id = String(app.Ravec.Acessos);
            app.Login.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                "biencode": encrypt(JSON.stringify(app.Login.biencode))
            };
            var ws = "Bienestar/Sistema/Login/edt";
            var p = (post(ws, data));
            var rs = decrypt(p);
            $(window).NotifyInfo(rs);
            app.Login.populate();
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Login)) {
                this.Loginsrc = [];
            } else {
                this.Loginsrc = app.Login.src;
            }
            
        }
    }
});
