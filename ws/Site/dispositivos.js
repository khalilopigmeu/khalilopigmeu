"use strict",
//Dispositivos
app["Dispositivos"] = new Vue({
    el: '#Dispositivos',
    data: {
        src: null,
        LoginSrc: null,
        AuthSrc: [],
        Host: "Bienestar/Dispositivos/Dispositivos/",
        UUID: null,
        FBID: null,
        GGID: null,
        flag: null,
        busca: false,
        href: "Dispositivos"
    },
    methods: {
        buscar: function (refid) {
            if (app.sys.system.hasOwnProperty("Dispositivos")) {
                this.src = app.sys.system["Dispositivos"];
                $(window).NotifyInfo("Dispositivo conectado");
                this.busca = true;
            } else {
                var key = decrypt(app.sys.bien, "encodedstring");
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                if (!nulo(refid)) {
                    this.biencode.id = refid;
                    app.empresasanunciando.Anunciante(this.biencode.id);
                } else {
                    this.biencode.all = "";
                }
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode), key)
                };
                app.sys.crud("Dispositivos", "listar", data);
                $(window).NotifyInfo("Dispositivo conectado");
                this.busca = true;
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        listagem: function () {
            app.empresasanunciando.buscar();
            app.funcionariosite.all();
            app.clientesite.all();

            this.AuthSrc = [];
            app.LoginsOauth.atualizar(null);
            this.LoginSrc = app.LoginsOauth.src;
            var count = 0;
            switch (this.flag) {
                case "Facebook":
                    for (var i = 0; i <= this.LoginSrc.length - 1; i++) {
                        if (this.LoginSrc[i].UserIdFB === this.FBID) {
                            this.AuthSrc.push(this.LoginSrc[i]);
                            count++;
                        }
                    }
                    $(window).NotifyInfo(count + " Contas encontradas");
                    break;
                case "Google":
                    for (var i = 0; i <= this.LoginSrc.length - 1; i++) {
                        if (this.LoginSrc[i].UserIdGG === this.GGID) {
                            this.AuthSrc.push(this.LoginSrc[i]);
                            count++;
                        }
                    }
                    $(window).NotifyInfo(count + " Contas encontradas");
                    break;
                case "Dispositivo":
                    for (var j = 0; j <= this.src.length - 1; j++) {
                        for (var i = 0; i <= this.LoginSrc.length - 1; i++) {
                            if (this.LoginSrc[i]._id["$oid"] === this.src[j].IdLogin) {
                                if (this.src[j].UUID.toUpperCase() === window.localStorage.getItem("uuid").toUpperCase()) {
                                    this.AuthSrc.push(this.LoginSrc[i]);
                                    count++;
                                }
                            }
                        }
                    }
                    $(window).NotifyInfo(count + " Contas encontradas");
                    break;
            }
        },
        getEmpresa: function (id) {
            var lst = app.sys.searchByID(app.empresasanunciando.src, id);
            if (lst.length > 0) {
                return lst[0].NomeFantasia;
            } else {
                return "";
            }
        },
        getFunc: function (id) {
            if (!nulo(id)) {
                var lst = app.sys.searchByID(app.funcionariosite.src, id);
                if (lst.length > 0) {
                    return lst[0].Nome;
                } else {
                    return "";
                }
            } else {
                return "Não Possui";
            }
        },
        getCliente: function (id) {
            if (!nulo(id)) {
                var lst = app.sys.searchByID(app.clientesite.src, id);
                if (lst.length > 0) {
                    return lst[0].Nome;
                } else {
                    return "";
                }
            } else {
                return "Não Possui";
            }
        },
        conectarSistema: function (idlog) {
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.Formato = this.flag;
            switch (this.flag) {
                case "Facebook":
                    biencode.id = idlog;
                    biencode.FBID = this.FBID;
                    break;
                case "Google":
                    biencode.id = idlog;
                    biencode.GGID = this.GGID;
                    break;
                case "Dispositivo":
                    biencode.IdLogin = idlog;
                    biencode.UUID = window.localStorage.getItem("uuid").toUpperCase();
                    break;
            }
            biencode.Modelo = "Empresa";
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Sistema/Login/appLoginSistema";
            var p = (post(ws, data));
            var rs = decrypt(p);
            if (rs.includes("erro")) {
                alert("Acesso inválido contate o administrador");
                $(window).NotifyErr("Acesso inválido contate o administrador");
            } else {
                rs = JSON.parse(rs);
                window.localStorage.setItem("Empresa", rs.Empresa);
                window.localStorage.setItem("IdEmpresa", rs.IdEmpresa);
                window.localStorage.setItem("IdLogin", rs.IdLogin);
                window.localStorage.setItem("Nome", rs.Nome);
                window.localStorage.setItem("RAVEC", rs.Ravec);
                window.localStorage.setItem("auth", rs.Credencial.replace(/(\r\n|\n|\r)/gm, ""));
                window.location.href = "/ws/Agenda/eventos.php";
            }
        },
        conectarCliente: function (idlog) {
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.Modelo = this.flag;
            switch (this.flag) {
                case "Facebook":
                    biencode.id = idlog;
                    biencode.FBID = this.FBID;
                    break;
                case "Google":
                    biencode.id = idlog;
                    biencode.GGID = this.GGID;
                    break;
                case "Dispositivo":
                    biencode.id = idlog;
                    biencode.UUID = window.localStorage.getItem("uuid");
                    break;
            }
            biencode.Modelo = "Cliente";
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Sistema/Login/appLoginCliente";
            var p = (post(ws, data));
            var rs = decrypt(p);

            if (rs.includes("erro")) {
                alert("Acesso inválido contate o administrador");
                $(window).NotifyErr("Acesso inválido contate o administrador");
            } else {
                rs = JSON.parse(rs);
                window.localStorage.setItem("Empresa", rs.Empresa);
                window.localStorage.setItem("IdEmpresa", rs.IdEmpresa);
                window.localStorage.setItem("IdLogin", rs.IdLogin);
                window.localStorage.setItem("Nome", rs.Nome);
                window.localStorage.setItem("RAVEC", rs.Ravec);
                window.localStorage.setItem("auth", rs.Credencial.replace(/(\r\n|\n|\r)/gm, ""));
                window.location.href = "/ws/Agenda/eventos.php";
            }
        },
        conectarFB: function () {
            app.Dispositivos.flag = 'Facebook';
            app.sys.Status();
            app.Dispositivos.FBID = app.sys.FB.getUserID();
            this.busca = true;
        },
        setGG: function (e) {
            app.Dispositivos.GGID = e.clientId;
        },
        conectarGG: function () {
            app.Dispositivos.flag = 'Google';
            sapp.sys.oauthGoogle(app.Dispositivos.setGG);
            this.busca = true;
        },
        mobile: function () {
            if (window.localStorage.getItem('uuid') === null) {
                return false;
            } else {
                return true;
            }
        }
    }
});