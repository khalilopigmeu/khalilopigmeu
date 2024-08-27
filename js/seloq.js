"use strict";
var ancestor;
var table = {};
var qrcode;
var urlSite = window.location.href;
var path;
const Real = value => currency(value, {symbol: 'R$', decimal: ',', separator: ''});
var cdn;
var swiper;
$(function () {
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
    }
    };
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
    }
    };
    on('click', '.mobile-nav-toggle', function (e) {
        select('.navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('.navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
        }
    }, true);
    on('click', '.navbar .nav-link', function (e) {
        let navbar = select('.navbar');
        if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            let navbarToggle = select('.mobile-nav-toggle');
            navbarToggle.classList.toggle('bi-list');
            navbarToggle.classList.toggle('bi-x');
        }
    }, true);

    if (window.location.href.includes("bienclube")||window.location.href.includes("boreal")) {
        urlSys = false;
    } else {
        urlSys = true;
    }
    /*qrcode = new QRCode(document.getElementById("qrcode"), {
     text: urlSite,
     logo: "/img/sobre.png",
     width: 85,
     height: 85,
     logoWidth: undefined,
     logoHeight: undefined,
     logoBackgroundColor: '#ffffff',
     logoBackgroundTransparent: false
     });*/

    window.onhashchange = function () {
        urlRead();
    };

    window.onpopstate = function () {
        urlRead();
    };

    window.onload = function () {
        if (getAuth() === null) {
            app.sys.init();
            setAuth(decrypt(app.sys.bien, "encodedstring"));
        }
        app.sys.start();
    };

    if (urlSite.includes("rtiempresarial")) {
        if (urlSite.includes("sys") || urlSite.includes("ws")) {
            cdn = "../../"
        } else if (urlSite.includes("Mongo")) {
            cdn = "../"
        }
    } else {
        cdn = "https://cdn.pongongo.com.br/";
    }
    $("form").attr("autocomplete", "off");
    $("body").on("click", "#menu-toggle,.sidemenuitem", function () {
        $("#wrapper").toggleClass("toggled");
    });
    $("body").on("click", "#menu-toggle-R,#sidebar-wrapper-R a,.sidemenuitem-R", function () {
        $("#wrapper").toggleClass("toggled-R");
        $("#menu-toggle-R").popover("hide");
    });
    $(window).scroll(function () {
        if ($("#header").is(":visible") == false) {
            $("#menu-toggle,#menu-toggle-R").css({"top": ($(this).scrollTop() + 25) + "px"});
        } else {
            if ($(this).scrollTop() > $("nav").height()) {
                $("#menu-toggle,#menu-toggle-R").css({"top": ($(this).scrollTop() - 50) + "px"});
            } else {
                $("#menu-toggle,#menu-toggle-R").css({"top": ($("nav").height() - 25) + "px"});
            }
        }
    });
    $(".cep").blur(function () {
        var key = getAuth();
        var CEP = $(this).val();
        var biencode = {};
        captchaSys(app.sys.keysite);
        biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
        biencode.CEP = CEP;
        var data = {
            "biencode": encrypt(JSON.stringify(biencode), key)
        };
        var appVue = $(this).attr("data-vue");
        var rs = decrypt(post("Bienestar/Ferramentas/BuscaCEP/busca", data));
        if (rs.indexOf(";") > 0) {
            var k = acentuar(rs);
            var x = k.split(";");
            app[appVue].UF = x[4];
            app[appVue].Cidade = x[3];
            app[appVue].Bairro = x[2];
            app[appVue].Rua = x[1];
        } else {
            $("#modal").modal();
            $("#modal .modal-title").text("Problema com o CEP");
            $("#modal .modal-body").text(rs);
        }
    });

    $(".carousel.carousel-multi-item .carousel-item").eq(0).addClass("active");
    $("#Carousel,#Pricing").carousel();

    if (urlSite.includes("ws/Agenda")) {
        $("header h1").hide();
        app.sys.setDefault();
    }
    if (urlSite.includes("ws/Site")) {

    }

});
function urlRead() {
    $("#menu-toggle").hide();
    $("#menu-toggle-R").hide();
    app.anunciante.pgid = null;
    app.paginasite.pg = null;
    urlSite = window.location.href;
    app.sys.setColorSystem();
    if (urlSite.includes("access_token")) {
        var acs = urlSite.substr(urlSite.indexOf("access_token") + 13, urlSite.lastIndexOf("token_type") - 54);
        window.localStorage.setItem("access_token", acs);
        app.sys.getUser();
    }
    if (urlSite.includes("#") || urlSite.includes("?")) {
        var urlclean;
        var element;
        if (urlSite.includes("?")) {
            urlclean = urlSite.split("?");
            element = urlclean[1].split("#");
        } else {
            element = urlSite.split("#");
        }
        if ($("#" + element[1]).hasClass("modal")) {
            $("#" + element[1]).modal('show');
        } else {
            app.sys.page = element[1];
        }
    }
    if (!nulo(window.localStorage.getItem("uuid"))) {
        $(window).NotifyInfo(window.localStorage.getItem("uuid") + " Bem vindo");
    }
    if (getParameterByName('cli') !== null) {
        app.configuracaosite.buscaurl(getParameterByName('cli'));
    }
    if (getParameterByName('uuid') !== null) {
        window.localStorage.setItem("uuid", getParameterByName('uuid'));
        $(window).NotifyInfo(getParameterByName('uuid') + " Bem vindo");
    }
    if (app.sys.page === "promocaoespacobienestar") {
        window.location.href = "https://bienclube.com.br/index.php#anunciante?pgid=61fbb5a965ac59817653d77c&spy=promocao";
    }
    if (app.sys.page === "index") {
        app.Home.home = true;
    }
    if (app.sys.page === "dispositivos") {
        app.sys.keys();
        app.sys.gapi = gapi;
        app.sys.iniciar();
        app.sys.FB = FB;
    }
    if (app.sys.page === "promocao") {
        if (getParameterByName('pgid') !== null) {
            app.sys.site(getParameterByName('pgid'));
            app.anunciante.pgid = getParameterByName('pgid');
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.paginasite.buscar();
            app.Promocao.servicos = eval("app.Promocao.servicos_" + getParameterByName('pgid'));
            app.Promocao.pacotes = null
            $("#waiter").hide();
        } else {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.paginasite.buscar();
            app.Promocao.servicos = app.Promocao.servicosBienestar;
            app.Promocao.pacotes = app.Promocao.pacotesBienestar;
            $("#waiter").hide();
        }
    }
    if (app.sys.page === "portfolio") {
        if (getParameterByName('pgid') !== null) {
            app.sys.site(getParameterByName('pgid'));
            app.anunciante.pgid = getParameterByName('pgid');
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.categoriaportfolio.buscar();
            app.portfolio.buscar();
            $("#waiter").hide();
        } else {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.categoriaportfolio.buscar();
            app.portfolio.buscar();
            $("#waiter").hide();
        }
    }
    if (app.sys.page === "videos") {
        app.anunciante.buscar();
        app.empresasanunciando.video = true;
        app.empresasanunciando.buscar();
        $("#waiter").hide();
    }
    if (app.sys.page === "verproduto") {
        app.sys.loja(getParameterByName('pgid'));
        app.ProdutosLoja.buscar(getParameterByName('pdid'));
    }
    if (app.sys.page === "listacompra") {
        $("#byBien").show();
        $("#menu-toggle").show();

        app.sys.anuncio(getParameterByName('pgid'));

        app.configuracaosite.buscar(getParameterByName('pgid'));
        app.anunciante.buscar(getParameterByName('pgid'));
        app.PromocaoSite.buscaItens(getParameterByName('pgid'));
        app.PromocaoSite.buscaPacotes(getParameterByName('pgid'));
        app.paginasite.buscar(getParameterByName('pgid'));
        app.FamiliaProdutosSite.buscar(getParameterByName('pgid'));
        app.ClasseProdutosSite.buscar(getParameterByName('pgid'));
        app.CategoriaProdutosSite.buscar(getParameterByName('pgid'));
        app.SubcategoriaProdutosSite.buscar(getParameterByName('pgid'));
        app.ProdutosSite.buscar(getParameterByName('pgid'));
        app.albumsite.buscar(getParameterByName('pgid'));
        app.midiasite.buscar(getParameterByName('pgid'));
        app.consultasite.buscar(getParameterByName('pgid'));
        app.procedimentosite.buscar(getParameterByName('pgid'));
        app.textosite.buscar(getParameterByName('pgid'));
        app.categoriatextosite.buscar(getParameterByName('pgid'));
        app.empresasanunciando.pgid = getParameterByName('pgid');
        app.empresasanunciando.buscar(getParameterByName('pgid'));
        app.listacomprasite.buscar(null, getParameterByName('pgid'));
        app.empresasanunciando.load();

        $("#menu-toggle-R i").removeClass("fa-bars").addClass("fa-shopping-bag");
        $("#menu-toggle-R").show();
        $("#menu-toggle-R .badge").show();
        app.sidebarR.loja = true;
        app.sys.setColorSite();
    }
    if (app.sys.page === "anunciante") {
        if (getParameterByName('pgid') !== null) {
            $("#byBien").show();
            $("#menu-toggle").show();

            app.sys.anuncio(getParameterByName('pgid'));

            app.configuracaosite.buscar(getParameterByName('pgid'));
            app.anunciante.buscar(getParameterByName('pgid'));
            app.PromocaoSite.buscaItens(getParameterByName('pgid'));
            app.PromocaoSite.buscaPacotes(getParameterByName('pgid'));
            app.paginasite.buscar(getParameterByName('pgid'));
            app.FamiliaProdutosSite.buscar(getParameterByName('pgid'));
            app.ClasseProdutosSite.buscar(getParameterByName('pgid'));
            app.CategoriaProdutosSite.buscar(getParameterByName('pgid'));
            app.SubcategoriaProdutosSite.buscar(getParameterByName('pgid'));
            app.ProdutosSite.buscar(getParameterByName('pgid'));
            app.albumsite.buscar(getParameterByName('pgid'));
            app.midiasite.buscar(getParameterByName('pgid'));
            app.consultasite.buscar(getParameterByName('pgid'));
            app.procedimentosite.buscar(getParameterByName('pgid'));
            app.textosite.buscar(getParameterByName('pgid'));
            app.categoriatextosite.buscar(getParameterByName('pgid'));
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.empresasanunciando.buscar(getParameterByName('pgid'));
            app.empresasanunciando.load();

            $("#menu-toggle-R i").removeClass("fa-bars").addClass("fa-shopping-bag");
            $("#menu-toggle-R").show();
            $("#menu-toggle-R .badge").show();
            app.sidebarR.loja = true;
            app.sys.setColorSite();
            if (!urlSite.includes('ws') && !nulo(window.localStorage.getItem("IdLoginCliente"))) {
                $("#modalLoginSys").modal("hide");
                app.checkoutvenda.logado = true;
                app.clientLogin.logado = true;
                app.sidebarR.logado = true;

                app.sys.cliente(window.localStorage.getItem("IdLoginCliente"));

                app.clientLogin.getLogin(window.localStorage.getItem("IdLoginCliente"));
                app.usuariosite.buscar(null, window.localStorage.getItem("IdLoginCliente"));
                //app.eventossite.buscar(window.localStorage.getItem("IdLoginCliente"));
                app.pedidovendasite.buscar(window.localStorage.getItem("IdLoginCliente"));
                app.fichaatendimentosite.buscar(window.localStorage.getItem("IdLoginCliente"));
                app.listacomprasite.buscar(window.localStorage.getItem("IdLoginCliente"));
                app.sidebarR.loja = false;
                app.sidebarR.loja = true;
            }
            app.sys.sytem = "";
        } else {
            $("#header").show();
            $("#byBien").hide();
            $("#menu-toggle-R .badge").hide();
            $("#menu-toggle").hide();
            $("#menu-toggle-R i").removeClass("fa-shopping-bag").addClass("fa-bars");
            app.anunciante.pgid = null;
            app.configuracaosite.buscar();
            app.empresasanunciando.buscar();
            app.anunciante.buscar();
            app.PromocaoSite.buscaItens();
            app.PromocaoSite.buscaPacotes();
            app.empresasanunciando.pesquisa = getParameterByName('q');
            app.empresasanunciando.pgid = null;
            app.empresasanunciando.load();
        }
    }
    if (app.sys.page === "paginas") {
        app.sys.site();
        if (getParameterByName('pg')) {
            app.paginasite.pg = getParameterByName('pg');
            app.paginasite.buscar();
        } else if (getParameterByName('startpg')) {
            app.paginasite.startpg = getParameterByName('startpg');
            app.paginasite.buscar();
        } else if (getParameterByName('endpg')) {
            app.paginasite.endpg = getParameterByName('endpg');
            app.paginasite.buscar();
        } else {
            app.paginasite.buscar();
        }
        $("#waiter").hide();
    }
    //qrcode.makeCode(urlSite);
}
var widgetId1;
var onloadCallback = function () {
    var link = window.location.href;
    if (urlSite.includes("boreal")) {
        widgetId1 = grecaptcha.render('verify', {
            'sitekey': '6Le5e8okAAAAAEdekkQyeeNccNY30n0vw371NOjp',
            'theme': 'light'
        });
    }
    if (urlSite.includes("bienclube")) {
        widgetId1 = grecaptcha.render('verify', {
            'sitekey': '6LcdesokAAAAAI5PVILN-RC5XE5nWly8NoOG6Rwz',
            'theme': 'light'
        });
    }
    if (urlSite.includes("rtiempresarial")) {
        widgetId1 = grecaptcha.render('verify', {
            'sitekey': '6LfuesokAAAAALhocXeibo_YtoIkqvnb_yekLGjl',
            'theme': 'light'
        });
    }
}
;
