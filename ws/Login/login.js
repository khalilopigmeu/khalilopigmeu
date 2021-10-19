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
        loginbtn: null
    },
    created: function () {
        this.getRandomNumber();
    },
    methods: {
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
            app.SocialMedia.mascara();
        },
        cadastro: function (e) {
            setAuth("UkdWdGIwVlNVQT09DQotUkdWdGIwVlNVQT09DQotWkdWdGJ6RXlNdz09DQot");
            var biencode = {};
            if (this.optCad === "fisica") {
                biencode.Nome = this.Nome;
                biencode.Cpf = this.Cpf;
                biencode.Rg = this.Rg;
                biencode.DataNasc = this.DataNasc;
            } else {
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
                "biencode": $(window).Encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Gerenciamento/Login/CadCliente";
            var p = (post(ws, data));
            alert("cadastrado com sucesso! A administração irá entrar em contato com você.");
            window.location.href = "https://www.bienclube.com.br/index.php#modalLoginSys";
        },
        recuperar: function () {
            var biencode = {};
            biencode.Modelo = "Empresa";
            biencode.Empresa = this.Empresa;
            biencode.Login = this.Login;
            biencode.Cod = window.atob("MDc3eEY=");
            biencode.Posicao = this.posicao;
            var data = {
                "biencode": $(window).Encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Gerenciamento/Login/RecuperaSenha";
            var p = (post(ws, data));
            var rs = $(window).Decrypt(p);
            alert(rs);
            $(window).NotifySucesso(rs);
        },
        login: function (e) {
            setAuth("UkdWdGIwVlNVQT09DQotUkdWdGIwVlNVQT09DQotWkdWdGJ6RXlNdz09DQot");
            e.preventDefault();
            var flag = true;
            if (!this.Empresa && this.Empresa.length > 0) {
                $(window).NotifyErr("Informe a Empresa");
                flag = false;
            }
            if (!this.Login && this.Login.length > 0) {
                $(window).NotifyErr("Informe o Login");
                flag = false;
            }
            if (!this.Senha && this.Senha.length > 0) {
                $(window).NotifyErr("Informe o Senha");
                flag = false;
            }
            if (flag) {
                var biencode = {};
                biencode.Modelo = "Empresa";
                biencode.Empresa = this.Empresa;
                biencode.Login = this.Login;
                biencode.Senha = this.Senha;
                biencode.Cod = window.atob("MDc3eEY=");
                biencode.Posicao = this.posicao;
                var data = {
                    "biencode": $(window).Encrypt(JSON.stringify(biencode))
                };
                var ws = "Bienestar/Gerenciamento/Login/loginSistema";
                var p = (post(ws, data));
                var rs = $(window).Decrypt(p);
                if (rs.indexOf("erro:") > 0) {
                    alert("Acesso inválido contate o administrador");
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
            }
        }
    }
});
