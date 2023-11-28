"use strict";
app["clientLogin"] = new Vue({
    el: '#clientLogin',
    data: {
        min: 1,
        max: 25,
        posicao: 0,
        Empresa: null,
        Email: null,
        Login: null,
        Senha: null,
        Cod: null,
        UF: null,
        CNAE: null,
        CRT: null,
        DataNasc: null,
        IE: null,
        Rg: null,
        CEP: null,
        Bairro: null,
        Rua: null,
        Num: null,
        Complemento: null,
        RazaoSocial: null,
        NomeFantasia: null,
        Nome: null,
        Cnpj: null,
        Cpf: null,
        Telefone: null,
        IM: null,
        Celular: null,
        Cidade: null,
        optCad: "",
        eula: false,
        lgpd: false,
        loginbtn: null,
        Modelo: null,
        Host: "Bienestar/Dispositivos/Dispositivos/",
        UUID: null,
        FBID: null,
        GGID: null,
        flagDispositivo: null,
        buscaDispositivo: false,
        LoginSrc: null,
        AuthSrc: [],
    },
    created: function () {
        this.getRandomNumber();
    },
    methods: {
        buscar: function (refid) {
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
            app.sys.crud("clientLogin", "listar", data);
            $(window).NotifyInfo("Dispositivo conectado");
            this.busca = true;
        },
        listagem: function () {
            app.empresasanunciando.buscar();
            app.funcionariosite.all();
            app.clientesite.all();
            if (window.localStorage.hasOwnProperty("userinfoGG")) {
                this.flag = "Google";
                this.GGID = JSON.parse(window.localStorage.getItem("userinfoGG")).id;
            }
            this.FBID = app.sys.FB.getUserID();
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
        loadNum: function () {
            this.min = 1;
            this.max = 25;
            this.getRandomNumber();
        },
        getInput: function () {
            let min = Number(this.min);
            let max = Number(this.max);
            if (min > max) {
                [min, max] = [max, min];
            }
            this.min = min;
            this.max = max;
            this.getRandomNumber();
        },
        getRandomNumber: function () {
            this.posicao = this.generateNumber();
        },
        generateNumber: function () {
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
        mascara: function () {
            app.sys.mascara();
        },
        cadastro: function (e) {
            app.sys.onsys = false;
            setAuth(decrypt(app.sys.bien, "encodedstring"));
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            if (this.optCad === "usuario") {
                biencode.Nome = this.Nome;
                biencode.Cpf = this.Cpf;
                biencode.Rg = this.Rg;
                biencode.DataNasc = this.DataNasc;
                biencode.modelo = "Usuario";
            } else if (this.optCad === "fisica") {
                biencode.Nome = this.Nome;
                biencode.NomeFantasia = this.Nome;
                biencode.Cpf = this.Cpf;
                biencode.RazaoSocial = this.Rg;
                biencode.Rg = this.Rg;
                biencode.DataNasc = this.DataNasc;
                biencode.modelo = "Cliente";
            } else if (this.optCad === "juridica") {
                biencode.NomeFantasia = this.NomeFantasia;
                biencode.Cnpj = this.Cnpj;
                biencode.RazaoSocial = this.RazaoSocial;
                biencode.CNAE = this.CNAE;
                biencode.CRT = this.CRT;
                biencode.IE = this.IE;
                biencode.IM = this.IM;
                biencode.Nome = this.Nome;
                biencode.Cpf = this.Cpf;
                biencode.Rg = this.Rg;
                biencode.DataNasc = this.DataNasc;
                biencode.modelo = "Empresa";
            }
            biencode.CEP = this.CEP;
            biencode.UF = this.UF;
            biencode.Cidade = this.Cidade;
            biencode.Bairro = this.Bairro;
            biencode.Rua = this.Rua;
            biencode.Num = this.Num;
            biencode.Complemento = this.Complemento;
            biencode.Email = this.Email;
            biencode.Login = this.Login;
            biencode.Senha = this.Senha;
            biencode.Telefone = this.Telefone;
            biencode.Celular = this.Celular;
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Sistema/Login/CadPlataforma";
            var p = (post(ws, data));
            var rs = decrypt(p);
            if (rs.includes("erro")) {
                $(window).NotifyErr("Erro ao realizar o cadastro" + rs);
            } else {
                /*
                 * RS[0] - RAVEC
                 * RS[1] - EMPRESA
                 * RS[2] - LOGIN
                 */
                alert("Cadastrado com sucesso! A administração irá entrar em contato com você.");
                $(window).NotifyInfo("Cadastrado com sucesso! A administração irá entrar em contato com você.");
            }
        },
        conectarFB: function () {
            this.flagDispositivo = 'Facebook';
            app.sys.FB.login();
            app.sys.flag = "Facebook";
            this.buscaDispositivo = true;
        },
        conectarGG: function () {
            this.flagDispositivo = 'Google';
            app.sys.oauthGoogle("index.php");
        },
        recuperar: function () {
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.Modelo = this.Modelo;
            biencode.Empresa = this.Empresa;
            biencode.Login = this.Login;
            biencode.Cod = window.atob("MDc3eEY=");
            biencode.Posicao = this.posicao;
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Sistema/Login/RecuperaSenha";
            var p = (post(ws, data));
            var rs = decrypt(p);
            $(window).NotifySucesso(rs);
        },
        loginEmp: function (e) {
            setAuth(decrypt(app.sys.bien, "encodedstring"));
            e.preventDefault();
            var flag = true;
            if (!this.Login && this.Login.length > 0) {
                $(window).NotifyErr("Informe o Login");
                flag = false;
            }
            if (!this.Senha && this.Senha.length > 0) {
                $(window).NotifyErr("Informe o Senha");
                flag = false;
            }
            if (nulo(this.Modelo)) {
                this.Modelo = "Cliente";
            }
            if (flag) {
                var biencode = {};
                captchaSys(app.sys.keysite);
                biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                biencode.Modelo = this.Modelo;
                biencode.Empresa = this.Empresa;
                biencode.Login = this.Login;
                biencode.Senha = this.Senha;
                biencode.Cod = window.atob("MDc3eEY=");
                biencode.Posicao = this.posicao;
                var data = {
                    "biencode": encrypt(JSON.stringify(biencode))
                };
                var ws = "Bienestar/Sistema/Login/loginSistema";
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
                    if ("Chave" in rs) {
                        window.localStorage.setItem("Chave", rs.Chave);
                    }
                    if ("LoginFoto" in rs) {
                        window.localStorage.setItem("LoginFoto", rs.LoginFoto);
                    }
                    if ("UrlLogo" in rs) {
                        window.localStorage.setItem("UrlLogo", rs.UrlLogo);
                    }
                    switch (this.Modelo) {
                        case "Cliente":
                            window.location.href = "/index.php#anunciante";
                            break;
                        case "Empresa":
                            window.location.href = "/ws/Agenda/eventos.php";
                            break;
                        case "Vendedor":
                            window.location.href = "/ws/Agenda/eventos.php";
                            break;
                        case "Revendedor":
                            window.location.href = "/ws/Agenda/eventos.php";
                            break;
                    }
                }
            }
        },
        loginDevice: function (idlog, modelo) {
            setAuth(decrypt(app.sys.bien, "encodedstring"));
            e.preventDefault();
            biencode.Formato = this.flagDispositivo;
            this.Modelo = modelo;
            switch (this.flagDispositivo) {
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
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Sistema/Login/";
            switch (this.Modelo) {
                case "Cliente":
                    ws += "/appLoginSistema";
                    break;
                case "Empresa":
                    ws += "/appLoginCliente";
                    break;
            }
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
                if ("Chave" in rs) {
                    window.localStorage.setItem("Chave", rs.Chave);
                }
                if ("LoginFoto" in rs) {
                    window.localStorage.setItem("LoginFoto", rs.LoginFoto);
                }
                if ("UrlLogo" in rs) {
                    window.localStorage.setItem("UrlLogo", rs.UrlLogo);
                }
                switch (this.Modelo) {
                    case "Cliente":
                        window.location.href = "/index.php#anunciante";
                        break;
                    case "Empresa":
                        window.location.href = "/ws/Agenda/eventos.php";
                        break;
                    case "Vendedor":
                        window.location.href = "/ws/Agenda/eventos.php";
                        break;
                    case "Revendedor":
                        window.location.href = "/ws/Agenda/eventos.php";
                        break;
                }
            }
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
