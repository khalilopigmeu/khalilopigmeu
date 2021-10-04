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

        opcoes: [],
        acesso: [],
        Loginsrc: null,
        Acessos: null,
    },
    created: function () {
        $(function () {
            var authbkp = getAuth();
            var newAuth = window.localStorage.getItem("IdLogin");
            setAuth(newAuth);
            $(window).Decrypt(window.localStorage.getItem("RAVEC"), "tufsqulu")
            app.Ravec.acesso = eval($(window).Decrypt(window.localStorage.getItem("RAVEC"), "tufsqulu"));
            setAuth(authbkp);
            console.log(app.Ravec.acesso);
            app.SocialMedia.Conectado();
        });
    },
    methods: {
        atualizar: function () {
            var authbkp = getAuth();
            var newAuth = this.Acessos;
            setAuth(newAuth);
            this.acesso = eval($(window).Decrypt(window.localStorage.getItem("RAVEC"), "tufsqulu"));
            setAuth(authbkp);
        },
        populate: function (e) {
            this.clear();
            if (!this.ravec(1)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
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
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });

            } else {

            }
        },
        alterar: function () {
            if (!this.ravec(3)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
            }
        },
        excluir: function () {
            if (!this.ravec(4)) {
                $(function () {
                    $(window).NotifyRavec(this.ELtitle);
                });
            } else {
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
        check: function (nivel, index, event) {
            if (event.target.checked) {
                this.opcoes[index].nivel = nivel;
            } else {
                this.opcoes[index].nivel = parseInt(nivel) - 1;
            }
        },
        ravecmenu: function (index, nivel) {
            if (typeof this.acesso[index] !== "undefined" && this.acesso[index] !== null) {
                if (this.acesso[index].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        ravec: function (nivel) {
            if (typeof this.acesso[this.stepkey] !== "undefined" && typeof this.acesso[this.stepkey][this.href] !== "undefined" && this.acesso[this.stepkey] !== null && this.acesso[this.stepkey][this.href] !== null) {
                if (this.acesso[this.stepkey][this.href].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        ravecUpdate: function () {
            for (var i = 0; i <= Object.keys(app).length - 1; i++) {
                try {
                    app[Object.keys(app)[i]].populate();
                } catch (e) {
                    console.log(e)
                }
            }
        },
        updateAcesso: function () {
            for (var i = 0; i <= this.Loginsrc.length - 1; i++) {
                if (this.Loginsrc[i]._id['$oid'] === this.Acessos) {
                    if (typeof this.Loginsrc[i].RAVEC !== "undefined") {
                        var authbkp = getAuth();
                        var newAuth = window.localStorage.getItem("IdLogin");
                        setAuth(newAuth);
                        this.acesso = eval($(window).Decrypt(this.Loginsrc[i].RAVEC, "tufsqulu"));
                        setAuth(authbkp);
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
                    }else{
                        this.acesso = eval($(window).Decrypt(window.localStorage.getItem("RAVEC"), "tufsqulu"));
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
            $(function () {
                app.Login.biencode = {};
                var authbkp = getAuth();
                var newAuth = app.Ravec.Acessos;
                setAuth(newAuth);
                app.Login.biencode.RAVEC = $(window).Encrypt(JSON.stringify(app.Ravec.opcoes), "tufsqulu");
                setAuth(authbkp);
                app.Login.biencode.id = String(app.Ravec.Acessos);
                app.Login.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    "biencode": $(window).Encrypt(JSON.stringify(app.Login.biencode))
                };
                var ws = "Bienestar/Gerenciamento/Login/edt";
                var p = (post(ws, data));
                var rs = $(window).Decrypt(p);
                $(window).NotifyInfo(rs);
                app.Login.populate();
            });
        }
    }
});
