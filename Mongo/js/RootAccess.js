"use strict",
//AnotacaoAgenda
app["RootAccess"] = new Vue({
    el: '#RootAccess',
    data: {
        evtDataCal: "",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-edit"></i>',
        pesqTbl: "",
        Host: "Bienestar/Gestao/Empresa/",
        paginate:[],
        
        selEmpresa: null,
        selLogin: null,
        SenhaAdmin: null,
        Rooted: false,
        opcoes: [],
        acesso: [],
        Acessos: null,

        EmpresaSrc: null,
        LoginSrc: null,
    },
    methods: {
        populate: function () {
            this.Host = "Bienestar/Gestao/Empresa/";
            this.biencode = {};
            this.biencode.all = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.RootAccess.href, "listar", data);
            app.RootAccess.EmpresaSrc = app.RootAccess.src;
            app.sys.tabs(this.href);
        },
        login: function () {
            this.Host = "Bienestar/Sistema/Login/";
            this.src = null;
            this.biencode = {};
            this.biencode.empresa = app.RootAccess.selEmpresa;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.RootAccess.href, "listar", data);
            app.RootAccess.LoginSrc = app.RootAccess.src;
            app.sys.RAVEC = null;
            app.sys.tabs(this.href);
        },
        solicitaRoot: function () {
            this.biencode = {};
            this.biencode.Modelo = "Root";
            this.biencode.SenhaAdmin = this.SenhaAdmin;
            var Empresa = null, Nome = null, Login = null, Ravec = null;
            for (var i = 0; i <= this.EmpresaSrc.length - 1; i++) {
                if (this.selEmpresa === this.EmpresaSrc[i]._id['$oid']) {
                    if (typeof (this.EmpresaSrc[i].cnpj) !== "undefined") {
                        this.biencode.Empresa = this.EmpresaSrc[i].NomeFantasia;
                        Empresa = this.EmpresaSrc[i].NomeFantasia;
                        Nome = this.EmpresaSrc[i].Nome;
                    } else {
                        this.biencode.Empresa = this.EmpresaSrc[i].Nome;
                        Empresa = this.EmpresaSrc[i].Nome;
                        Nome = this.EmpresaSrc[i].Nome;
                    }
                }
            }
            for (var i = 0; i <= this.LoginSrc.length - 1; i++) {
                if (this.selLogin === this.LoginSrc[i]._id['$oid']) {
                    this.biencode.Login = this.selLogin;
                    Login = this.LoginSrc[i].Login;
                    Ravec = this.LoginSrc[i].RAVEC;
                    this.biencode.Senha = this.selEmpresa;
                }
            }
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            var ws = "Bienestar/Sistema/Login/RootAccess";
            var p = (post(ws, data));
            var rs = decrypt(p);
            if (rs.indexOf("incorreta") < 0) {
                app.sys.RAVEC = encrypt(window.localStorage.getItem("IdEmpresa"));
                window.localStorage.setItem("Empresa", Empresa);
                window.localStorage.setItem("IdEmpresa", this.selEmpresa);
                window.localStorage.setItem("IdLogin", this.selLogin);
                window.localStorage.setItem("Nome", Nome);
                window.localStorage.setItem("RAVEC", Ravec);
                window.localStorage.setItem("auth", rs.replace(/(\r\n|\n|\r)/gm, ""));
                this.Rooted = true;
            }
        },
        clear: function () {

        },
        autocomplete: function () {

        },
        checkForm: function () {

        },
        cadastrar: function () {

        },
        alterar: function () {

        },
        excluir: function () {

        },
        relatorio: function () {

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
            for (var i = 0; i <= this.LoginSrc.length - 1; i++) {
                if (this.LoginSrc[i]._id['$oid'] === this.Acessos) {
                    if (typeof this.LoginSrc[i].RAVEC !== "undefined") {
                        this.acesso = eval(decrypt(this.LoginSrc[i].RAVEC, window.localStorage.getItem("IdLogin")));
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
                        this.acesso = eval(decrypt(window.localStorage.getItem("RAVEC")));
                        this.opcoes = [];
                        for (var i = 0; i <= Object.keys(app).length - 1; i++) {
                            var nomeOP = app[Object.keys(app)[i]].ELtitle;
                            if (typeof nomeOP !== "undefined") {
                                var nivel = 0;
                                if (this.acesso != null) {
                                    for (var j = 0; j <= this.acesso.length - 1; j++) {
                                        var nomeAC = this.acesso[j].nome;
                                        if (nomeOP === nomeAC) {
                                            nivel = this.acesso[j].nivel;
                                            break;
                                        }
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
            app.Login.biencode.RAVEC = encrypt(JSON.stringify(app.RootAccess.opcoes),app.RootAccess.Acessos);
            app.Login.biencode.id = String(app.RootAccess.Acessos);
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
            
        },
    }
});
