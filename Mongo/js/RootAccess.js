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
        paginate: [],
        selEmpresa: null,
        selLogin: null,
        SenhaAdmin: null,
        Rooted: false,
        opcoes: [],
        acesso: [],
        Acessos: null,
        EmpresaSrc: null,
        LoginSrc: null,
        padrao: null,
    },
    methods: {
        populate: function () {

        },
        listar: function () {
            this.Host = "Bienestar/Gestao/Empresa/";
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
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
            captchaSys(app.sys.keysite);
            app.Login.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            app.Login.biencode.RAVEC = encrypt(JSON.stringify(app.RootAccess.opcoes), app.RootAccess.Acessos);
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
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
        padronizar: function () {
            switch (this.padrao) {
                case "Empresa":
                    this.acesso = eval("[{\"nome\": \"Controle de acesso\",\"nivel\": 4}, {\"nome\": \"Categorias de eventos\",\"nivel\": 4}, {\"nome\": \"Anotações\",\"nivel\": 4}, {\"nome\": \"Consulta\",\"nivel\": 4}, {\"nome\": \"Procedimento\",\"nivel\": 4}, {\"nome\": \"Eventos\",\"nivel\": 4}, {\"nome\": \"Empresa\",\"nivel\": 4}, {\"nome\": \"Cliente\",\"nivel\": 4}, {\"nome\": \"Departamento\",\"nivel\": 4}, {\"nome\": \"Cargo\",\"nivel\": 4}, {\"nome\": \"Plano Odontológico\",\"nivel\": 4}, {\"nome\": \"Plano de saúde\",\"nivel\": 4}, {\"nome\": \"Controle de Ponto\",\"nivel\": 4}, {\"nome\": \"Impressão digital\",\"nivel\": 4}, {\"nome\": \"Ponto\",\"nivel\": 4}, {\"nome\": \"E-tag\",\"nivel\": 4}, {\"nome\": \"Manutenção\",\"nivel\": 4}, {\"nome\": \"Categorias de Dispositivos\",\"nivel\": 4}, {\"nome\": \"Dispositivos\",\"nivel\": 4}, {\"nome\": \"Componente\",\"nivel\": 4}, {\"nome\": \"Sub Componente\",\"nivel\": 4}, {\"nome\": \"Dependentes\",\"nivel\": 4}, {\"nome\": \"Reserva de Produto\",\"nivel\": 4}, {\"nome\": \"Categorias de Planos de sistema\",\"nivel\": 4}, {\"nome\": \"Planos de Sistema\",\"nivel\": 4}, {\"nome\": \"Funcionários\",\"nivel\": 4}, {\"nome\": \"Currículo\",\"nivel\": 4}, {\"nome\": \"Fornecedor\",\"nivel\": 4}, {\"nome\": \"Vendedor\",\"nivel\": 4}, {\"nome\": \"Revenda\",\"nivel\": 4}, {\"nome\": \"Transportadora\",\"nivel\": 4}, {\"nome\": \"Configuração\",\"nivel\": 4}, {\"nome\": \"Família de produtos\",\"nivel\": 4}, {\"nome\": \"Classe de produtos\",\"nivel\": 4}, {\"nome\": \"Categoria de produtos\",\"nivel\": 4}, {\"nome\": \"Sub-categoria de produtos\",\"nivel\": 4}, {\"nome\": \"Produtos\",\"nivel\": 4}, {\"nome\": \"Álbum\",\"nivel\": 4}, {\"nome\": \"Mídia\",\"nivel\": 4}, {\"nome\": \"Categorias de Anúncio\",\"nivel\": 4}, {\"nome\": \"Anúncio\",\"nivel\": 4}, {\"nome\": \"Categoria De Texto\",\"nivel\": 4}, {\"nome\": \"Textos\",\"nivel\": 4}, {\"nome\": \"Páginas\",\"nivel\": 4}, {\"nome\": \"Seo\",\"nivel\": 4}, {\"nome\": \"Voucher\",\"nivel\": 4}, {\"nome\": \"Categoria de Portfólio\",\"nivel\": 4}, {\"nome\": \"Portfolio\",\"nivel\": 4}, {\"nome\": \"Mural\",\"nivel\": 4}, {\"nome\": \"Login\",\"nivel\": 4}, {\"nome\": \"Controle de Mensalidade\",\"nivel\": 4}, {\"nome\": \"Ficha de Atendimento\",\"nivel\": 4}, {\"nome\": \"Comissão\",\"nivel\": 4}, {\"nome\": \"Lançamento Financeiro\",\"nivel\": 4}, {\"nome\": \"Pedido de Venda\",\"nivel\": 4}, {\"nome\": \"Anúncios rápidos\",\"nivel\": 4}, {\"nome\": \"Chamado\",\"nivel\": 4}, {\"nome\": \"Dicionário\",\"nivel\": 4}, {\"nome\": \"Dicas\",\"nivel\": 4}, {\"nome\": \"Formas de Pagamento\",\"nivel\": 4}, {\"nome\": \"Ordem de serviço\",\"nivel\": 4}, {\"nome\": \"Fórmula\",\"nivel\": 4}, {\"nome\": \"Profissional\",\"nivel\": 4}, {\"nome\": \"Itens em Promoção\",\"nivel\": 4}, {\"nome\": \"Promoção recorrente\",\"nivel\": 4}, {\"nome\": \"Smails\",\"nivel\": 4}, {\"nome\": \"Frete de produtos\",\"nivel\": 4}]");
                    this.opcoes = this.acesso;
                    break;
                case "Ecommerce":
                    this.acesso = eval("[{\"nome\": \"Controle de acesso\",\"nivel\": 4}, {\"nome\": \"Empresa\",\"nivel\": 4}, {\"nome\": \"Cliente\",\"nivel\": 4}, {\"nome\": \"Departamento\",\"nivel\": 4}, {\"nome\": \"Cargo\",\"nivel\": 4}, {\"nome\": \"Plano Odontológico\",\"nivel\": 4}, {\"nome\": \"Plano de saúde\",\"nivel\": 4}, {\"nome\": \"Controle de Ponto\",\"nivel\": 4}, {\"nome\": \"Impressão digital\",\"nivel\": 4}, {\"nome\": \"Ponto\",\"nivel\": 4}, {\"nome\": \"E-tag\",\"nivel\": 4}, {\"nome\": \"Categorias de Dispositivos\",\"nivel\": 4}, {\"nome\": \"Dispositivos\",\"nivel\": 4}, {\"nome\": \"Dependentes\",\"nivel\": 4}, {\"nome\": \"Reserva de Produto\",\"nivel\": 4}, {\"nome\": \"Funcionários\",\"nivel\": 4}, {\"nome\": \"Currículo\",\"nivel\": 4}, {\"nome\": \"Fornecedor\",\"nivel\": 4}, {\"nome\": \"Vendedor\",\"nivel\": 4}, {\"nome\": \"Revenda\",\"nivel\": 4}, {\"nome\": \"Transportadora\",\"nivel\": 4}, {\"nome\": \"Configuração\",\"nivel\": 4}, {\"nome\": \"Família de produtos\",\"nivel\": 4}, {\"nome\": \"Classe de produtos\",\"nivel\": 4}, {\"nome\": \"Categoria de produtos\",\"nivel\": 4}, {\"nome\": \"Sub-categoria de produtos\",\"nivel\": 4}, {\"nome\": \"Produtos\",\"nivel\": 4}, {\"nome\": \"Álbum\",\"nivel\": 4}, {\"nome\": \"Mídia\",\"nivel\": 4}, {\"nome\": \"Categorias de Anúncio\",\"nivel\": 4}, {\"nome\": \"Anúncio\",\"nivel\": 4}, {\"nome\": \"Categoria De Texto\",\"nivel\": 4}, {\"nome\": \"Textos\",\"nivel\": 4}, {\"nome\": \"Páginas\",\"nivel\": 4}, {\"nome\": \"Seo\",\"nivel\": 4}, {\"nome\": \"Voucher\",\"nivel\": 4}, {\"nome\": \"Categoria de Portfólio\",\"nivel\": 4}, {\"nome\": \"Portfolio\",\"nivel\": 4}, {\"nome\": \"Mural\",\"nivel\": 4}, {\"nome\": \"Login\",\"nivel\": 4}, {\"nome\": \"Controle de Mensalidade\",\"nivel\": 4}, {\"nome\": \"Ficha de Atendimento\",\"nivel\": 4}, {\"nome\": \"Comissão\",\"nivel\": 4}, {\"nome\": \"Lançamento Financeiro\",\"nivel\": 4}, {\"nome\": \"Pedido de Venda\",\"nivel\": 4}, {\"nome\": \"Anúncios rápidos\",\"nivel\": 4}, {\"nome\": \"Chamado\",\"nivel\": 4}, {\"nome\": \"Dicionário\",\"nivel\": 4}, {\"nome\": \"Dicas\",\"nivel\": 4}, {\"nome\": \"Formas de Pagamento\",\"nivel\": 4}, {\"nome\": \"Ordem de serviço\",\"nivel\": 4}, {\"nome\": \"Itens em Promoção\",\"nivel\": 4}, {\"nome\": \"Promoção recorrente\",\"nivel\": 4}, {\"nome\": \"Smails\",\"nivel\": 4}, {\"nome\": \"Frete de produtos\",\"nivel\": 4}]");
                    this.opcoes = this.acesso;
                    break;
                case "Atendimento":
                    this.acesso = eval("[{\"nome\": \"Controle de acesso\",\"nivel\": 4}, {\"nome\": \"Categorias de eventos\",\"nivel\": 4}, {\"nome\": \"Anotações\",\"nivel\": 4}, {\"nome\": \"Consulta\",\"nivel\": 4}, {\"nome\": \"Procedimento\",\"nivel\": 4}, {\"nome\": \"Eventos\",\"nivel\": 4}, {\"nome\": \"Empresa\",\"nivel\": 4}, {\"nome\": \"Cliente\",\"nivel\": 4}, {\"nome\": \"Departamento\",\"nivel\": 4}, {\"nome\": \"Cargo\",\"nivel\": 4}, {\"nome\": \"Plano Odontológico\",\"nivel\": 4}, {\"nome\": \"Plano de saúde\",\"nivel\": 4}, {\"nome\": \"Controle de Ponto\",\"nivel\": 4}, {\"nome\": \"Impressão digital\",\"nivel\": 4}, {\"nome\": \"Ponto\",\"nivel\": 4}, {\"nome\": \"E-tag\",\"nivel\": 4}, {\"nome\": \"Categorias de Dispositivos\",\"nivel\": 4}, {\"nome\": \"Dispositivos\",\"nivel\": 4}, {\"nome\": \"Dependentes\",\"nivel\": 4   }, {\"nome\": \"Categorias de Planos de sistema\",\"nivel\": 4   }, {\"nome\": \"Planos de Sistema\",\"nivel\": 4  }, {\"nome\": \"Funcionários\",\"nivel\": 4  }, {\"nome\": \"Currículo\",\"nivel\": 4}, {\"nome\": \"Fornecedor\",\"nivel\": 4}, {\"nome\": \"Configuração\",\"nivel\": 4}, {\"nome\": \"Álbum\",\"nivel\": 4}, {\"nome\": \"Mídia\",\"nivel\": 4}, {\"nome\": \"Categorias de Anúncio\",\"nivel\": 4}, {\"nome\": \"Anúncio\",\"nivel\": 4   }, {\"nome\": \"Categoria De Texto\",\"nivel\": 4}, {\"nome\": \"Textos\",\"nivel\": 4   }, {\"nome\": \"Páginas\",\"nivel\": 4   }, {\"nome\": \"Seo\",\"nivel\": 4}, {\"nome\": \"Voucher\",\"nivel\": 4}, {\"nome\": \"Categoria de Portfólio\",\"nivel\": 4}, {\"nome\": \"Portfolio\",\"nivel\": 4}, {\"nome\": \"Mural\",\"nivel\": 4}, {\"nome\": \"Login\",\"nivel\": 4}, {\"nome\": \"Controle de Mensalidade\",\"nivel\": 4}, {\"nome\": \"Ficha de Atendimento\",\"nivel\": 4}, {\"nome\": \"Comissão\",\"nivel\": 4}, {\"nome\": \"Lançamento Financeiro\",\"nivel\": 4}, {\"nome\": \"Anúncios rápidos\",\"nivel\": 4}, {\"nome\": \"Chamado\",\"nivel\": 4}, {\"nome\": \"Dicionário\",\"nivel\": 4}, {\"nome\": \"Dicas\",\"nivel\": 4}, {\"nome\": \"Formas de Pagamento\",\"nivel\": 4}, {\"nome\": \"Itens em Promoção\",\"nivel\": 4}, {\"nome\": \"Promoção recorrente\",\"nivel\": 4}, {\"nome\": \"Smails\",\"nivel\": 4}]");
                    this.opcoes = this.acesso;
                    break;
                case "Site":
                    this.acesso = eval("[{\"nome\": \"Empresa\",\"nivel\": 4'}, {\"nome\": \"Cliente\",\"nivel\": 4}, {\"nome\": \"Categorias de Dispositivos\",\"nivel\": 4}, {\"nome\": \"Dispositivos\",\"nivel\": 4}, {\"nome\": \"Currículo\",\"nivel\": 4}, {\"nome\": \"Configuração\",\"nivel\": 4}, {\"nome\": \"Álbum\",\"nivel\": 4}, {\"nome\": \"Mídia\",\"nivel\": 4}, {\"nome\": \"Categorias de Anúncio\",\"nivel\": 4}, {\"nome\": \"Anúncio\",\"nivel\": 4}, {\"nome\": \"Categoria De Texto\",\"nivel\": 4}, {\"nome\": \"Textos\",\"nivel\": 4}, {\"nome\": \"Páginas\",\"nivel\": 4}, {\"nome\": \"Seo\",\"nivel\": 4}, {\"nome\": \"Voucher\",\"nivel\": 4}, {\"nome\": \"Categoria de Portfólio\",\"nivel\": 4}, {\"nome\": \"Portfolio\",\"nivel\": 4}, {\"nome\": \"Mural\",\"nivel\": 4}, {\"nome\": \"Login\",\"nivel\": 4}, {\"nome\": \"Controle de Mensalidade\",\"nivel\": 4}, {\"nome\": \"Lançamento Financeiro\",\"nivel\": 4}, {\"nome\": \"Dicionário\",\"nivel\": 4}, {\"nome\": \"Dicas\",\"nivel\": 4}, {\"nome\": \"Formas de Pagamento\",\"nivel\": 4}, {\"nome\": \"Itens em Promoção\",\"nivel\": 4}, {\"nome\": \"Promoção recorrente\",\"nivel\": 4}, {\"nome\": \"Smails\",\"nivel\": 4}]")
                    this.opcoes = this.acesso;
                    break;
                case "Cliente":
                    this.acesso = eval("[{\"nome\": \"Eventos\",\"nivel\": 3}, {\"nome\": \"Cliente\",\"nivel\": 3}, {\"nome\": \"Categorias de Dispositivos\",\"nivel\": 3}, {\"nome\": \"Dispositivos\",\"nivel\": 3}, {\"nome\": \"Currículo\",\"nivel\": 3}, {\"nome\": \"Login\",\"nivel\": 3}, {\"nome\": \"Ficha de Atendimento\",\"nivel\": 3}, {\"nome\": \"Pedido de Venda\",\"nivel\": 3}, {\"nome\": \"Chamado\",\"nivel\": 3}]");
                    this.opcoes = this.acesso;
                    break;
            }
        }
    }
});
