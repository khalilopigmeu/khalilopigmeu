"use strict";
var ancestor;
var table = {};
var qrcode;
var urlSite = window.location.href;
var path;
const Real = value => currency(value, {symbol: 'R$', decimal: '.', separator: ''});
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
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
        }
    }, true);
    on('click', '.navbar .nav-link', function (e) {
        let navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            let navbarToggle = select('.mobile-nav-toggle');
            navbarToggle.classList.toggle('bi-list');
            navbarToggle.classList.toggle('bi-x');
        }
    }, true);

    if (window.location.href.includes("bienclube")) {
        urlSys = false;
    } else {
        urlSys = true;
    }
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: urlSite,
        logo: "/img/sobre.png",
        width: 85,
        height: 85,
        logoWidth: undefined,
        logoHeight: undefined,
        logoBackgroundColor: '#ffffff',
        logoBackgroundTransparent: false
    });

    window.onhashchange = function () {
        urlRead();
    };

    window.onpopstate = function () {
        urlRead();
    };

    window.onload = function () {
        if (getAuth() === null) {
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
    $("body").on("click", "#menu-toggle", function () {
        $("#wrapper").toggleClass("toggled");
    });
    $("body").on("click", "#menu-toggle-R,#sidebar-wrapper-R a", function () {
        $("#wrapper").toggleClass("toggled-R");
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > $("nav").height()) {
            $("#menu-toggle,#menu-toggle-R").css({"top": ($(this).scrollTop() - 50) + "px"});
        } else {
            $("#menu-toggle,#menu-toggle-R").css({"top": ($("nav").height() - 25) + "px"});
        }
    });
    $(".cep").blur(function () {
        var key = decrypt(app.sys.bien, "encodedstring");
        var CEP = $(this).val();
        var biencode = {};
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

});
function urlRead() {
    $("#menu-toggle").hide();
    $("#menu-toggle-R").hide();
    app.anunciante.pgid = null;
    app.paginasite.pg = null;
    urlSite = window.location.href;
    app.Customizar.defaultColor();
    if (urlSite.includes("#") || urlSite.includes("?")) {
        var urlclean = urlSite.split("?");
        var element = urlclean[0].split("#");
        if ($("#" + element[1]).hasClass("modal")) {
            $("#" + element[1]).modal('show');
        } else {
            app.sys.page = element[1];
        }
    }
    if (getParameterByName('uuid') !== null) {
        window.localStorage.setItem("uuid", getParameterByName('uuid'));
        $(window).NotifyInfo(getParameterByName('uuid') + " Bem vindo");
    }
    if (app.sys.page == "promocaoespacobienestar") {
        window.location.href = "https://bienclube.com.br/index.php#anunciante?pgid=61fbb5a965ac59817653d77c&spy=promocao";
    }
    if (app.sys.page === "dispositivos") {
        app.sys.keys();
        app.sys.gapi = gapi;
        app.sys.iniciar();
        app.sys.FB = FB;
    }
    if (app.sys.page === "promocao") {
        if (getParameterByName('pgid') !== null) {
            app.anunciante.pgid = getParameterByName('pgid');
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.paginasite.buscar();
            app.Promocao.servicos = eval("app.Promocao.servicos_" + getParameterByName('pgid'));
            app.Promocao.pacotes = null
        } else {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.paginasite.buscar();
            app.Promocao.servicos = app.Promocao.servicosBienestar;
            app.Promocao.pacotes = app.Promocao.pacotesBienestar;
        }
    }
    if (app.sys.page === "portfolio") {
        if (getParameterByName('pgid') !== null) {
            app.anunciante.pgid = getParameterByName('pgid');
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.categoriaportfolio.buscar();
            app.portfolio.buscar();
        } else {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.categoriaportfolio.buscar();
            app.portfolio.buscar();
        }
    }
    if (app.sys.page === "videos") {
        app.anunciante.buscar();
        app.empresasanunciando.video = true;
        app.empresasanunciando.buscar();
    }
    if (app.sys.page === "anunciante") {
        if (getParameterByName('pgid') !== null) {
            $("#menu-toggle").show();
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
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.empresasanunciando.buscar(getParameterByName('pgid'));
            app.empresasanunciando.load();
            //app.sys.seo("anuncio", getParameterByName('pgid'));
        } else {
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
        if (getParameterByName('pg')) {
            app.paginasite.pg = getParameterByName('pg');
            app.paginasite.buscar();
        } else {
            app.paginasite.buscar();
        }
    }
    qrcode.makeCode(urlSite);
}