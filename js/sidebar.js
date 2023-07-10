app["sidebar"] = new Vue({
    el: '#sidebar-wrapper',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: [],
        newmenu: [],
        pesqmenu: null,
        empresa: null,
        login: null,
    },
    created: function () {
    },
    methods: {
        atualizaFBBar: function () {
            this.fblog = app.sys.fblog;
            this.imgurl = app.sys.imgurl;
            this.imgemp = app.sys.imgemp;
            this.socialName = app.sys.socialName;
        }
    }
});
app["sidebarR"] = new Vue({
    el: '#sidebar-wrapper-R',
    data: {
        fblog: null,
        imgurl: null,
        imgemp: null,
        socialName: null,
        itens: null,
        smenu: [],
        newmenu: [],
        pesqmenu: null,
        loja: false,
        qtdProd: {},
    },
    created: function () {
        if (!urlSite.includes('ws')) {
            if (!nulo(window.localStorage.getItem("CarroCompra")) && app.sys.page === "anunciante") {
                var itens = JSON.parse(window.localStorage.getItem("CarroCompra"));
                this.qtdProd = itens;
                app.empresasanunciando.qtdProd = itens;
                $("#menu-toggle-R .badge").html(Object.keys(app.empresasanunciando.qtdProd).length);
                $("#menu-toggle-R").popover('show');
                this.loja = false;
                this.loja = true;
            }
        }
    },
    methods: {
        atualizaFBBar: function () {
            this.fblog = app.sys.fblog;
            this.imgurl = app.sys.imgurl;
            this.imgemp = app.sys.imgemp;
            this.socialName = app.sys.socialName;
        },
        carroCompra: function () {
            return this.qtdProd;
        },
        listar: function (id) {
            var item = app.sys.searchByID(app.empresasanunciando.produtos, id);
            return item[0];
        },
        HasPromo: function (id, preco) {
            var search = app.sys.searchall(app.empresasanunciando.Itemsrc, id)[0];
            if (!nulo(search)) {
                if (!nulo(search.LoteAtivo)) {
                    switch (search.LoteAtivo) {
                        case "1":
                            return  search.lote1;
                        case "2":
                            return  search.lote2;
                        case "3":
                            return  search.lote3;
                        case "4":
                            return  search.lote4;
                        case "5":
                            return  search.lote5;
                        default :
                            return  search.lote5;
                    }
                } else {
                    return  search.lote5;
                }
            } else {
                return preco;
            }
        },
        total: function (preco, qtd) {
            return parseFloat(preco) * parseFloat(qtd);
        },
        alteraQtd: function (key) {
            this.qtdProd[key] = document.getElementById('c' + key).value;
            app.empresasanunciando.qtdProd = this.qtdProd;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.empresasanunciando.qtdProd));
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        },
        salvarLista: function () {

        },
        finalizar: function () {
            app.checkoutvenda.qtdProd = this.qtdProd;
            app.checkoutvenda.flag = false;
            app.checkoutvenda.flag = true;
            $("#FinalizarCompra").modal("show");
        },
        dec: function (id) {
            var item = parseFloat(document.getElementById('c' + id).value);
            if (isNaN(item) || item === "") {
                item = 0;
            }
            if (item > 0) {
                item = item - 1;
            } else {
                item = 0;
            }
            this.qtdProd[id] = item;
            app.empresasanunciando.qtdProd = this.qtdProd;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.empresasanunciando.qtdProd));
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        },
        inc: function (id) {
            var item = parseFloat(document.getElementById('c' + id).value);
            if (isNaN(item) || item === "") {
                item = 0;
            }
            item = item + 1;
            this.qtdProd[id] = item;
            app.empresasanunciando.qtdProd = this.qtdProd;
            window.localStorage.setItem("CarroCompra", JSON.stringify(app.empresasanunciando.qtdProd));
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        },
        remover: function (id) {
            delete this.qtdProd[id];
            app.empresasanunciando.qtdProd = this.qtdProd;
            $("#menu-toggle-R .badge").html(Object.keys(app.empresasanunciando.qtdProd).length);
            app.sidebarR.loja = false;
            app.sidebarR.loja = true;
        }
    }
});