"use strict";
var ancestor;
var table = {};
var qrcode;
var urlSite = window.location.href;
var path;
const Real = value => currency(value, {symbol: 'R$', decimal: ',', separator: '.'});
var cdn;
$(function () {
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: urlSite,
        logo: "/img/sobre.png",
        width: 155,
        height: 155,
        logoWidth: undefined,
        logoHeight: undefined,
        logoBackgroundColor: '#ffffff',
        logoBackgroundTransparent: false
    });

    window.onhashchange = function () {
        urlRead();
    };
    
    window.onchange = function () {
        urlRead();
    };

    window.onload = function () {
        urlRead();
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
        var preauth = getAuth();
        setAuth("encodedstring");
        var auth = $(window).Decrypt(app.sys.bien);
        setAuth(auth);
        var CEP = $(this).val();
        var biencode = {};
        biencode.CEP = CEP;
        var data = {
            "biencode": $(window).Encrypt(JSON.stringify(biencode))
        };
        var appVue = $(this).attr("data-vue");
        var rs = $(window).Decrypt(post("Bienestar/Correio/BuscaCEP/busca", data));
        setAuth(preauth);
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
    app.anunciante.pgid = null;
    app.paginasite.pg = null;
    urlSite = window.location.href;
    app.Customizar.defaultColor();
    app.sys.seo("anuncio");
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
        app.Dispositivos.buscar();
        var device = app.sys.search(app.Dispositivos.src, getParameterByName('uuid'), "UUID");
        if (device.length > 0) {
            if (device.length > 1) {

            } else {
                var biencode = {};
                biencode.UUID = device[0].UUID;
                biencode.Login = device[0].IdLogin;
                var data = {
                    "biencode": $(window).Encrypt(JSON.stringify(biencode))
                };
                var ws = "Bienestar/Gerenciamento/Login/appLogin";
                var p = (post(ws, data));
                var rs = $(window).Decrypt(p);
                window.localStorage.setItem("Empresa", rs.Empresa);
                window.localStorage.setItem("IdEmpresa", rs.IdEmpresa);
                window.localStorage.setItem("IdLogin", rs.IdLogin);
                window.localStorage.setItem("Nome", rs.Nome);
                window.localStorage.setItem("RAVEC", rs.Ravec);
                window.localStorage.setItem("auth", rs.Credencial.replace(/(\r\n|\n|\r)/gm, ""));
                window.location.href = "/ws/Agenda/eventos.php";
            }
        } else {
            if (urlSite.includes("rtiempresarial")) {
                window.location.href = "https://www.rtiempresarial.com.br/index.php";
            } else {
                window.location.href = "https://www.bienclube.com.br/index.php";
            }
        }
    }
    if (app.sys.page == "promocaoespacobienestar") {
        window.location.href = "https://www.bienclube.com.br/index.php#promocao?pgid=61fbb5a965ac59817653d77c";
    }
    if (app.sys.page === "promocao") {
        if (getParameterByName('pgid') !== null) {
            app.anunciante.pgid = getParameterByName('pgid');
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.paginasite.buscar();
            app.sys.seo("anuncio");
            app.Promocao.servicos = eval("app.Promocao.servicos_" + getParameterByName('pgid'));
            app.Promocao.pacotes = null
        } else {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.paginasite.buscar();
            app.sys.seo("anuncio");
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
            app.sys.seo("anuncio");
        } else {
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.categoriaportfolio.buscar();
            app.portfolio.buscar();
            app.sys.seo("anuncio");
        }
    }
    if (app.sys.page === "videos") {
        app.anunciante.buscar();
        app.empresasanunciando.video = true;
        app.empresasanunciando.buscar();
    }
    if (app.sys.page === "anunciante") {
        if (getParameterByName('pgid') !== null) {
            app.anunciante.pgid = getParameterByName('pgid');
            app.empresasanunciando.pgid = getParameterByName('pgid');
            app.anunciante.buscar();
            app.empresasanunciando.buscar();
            app.configuracaosite.buscar();
            app.paginasite.buscar();
            app.sys.seo("anuncio", getParameterByName('pgid'));
            app.FamiliaProdutosSite.buscar();
            app.ClasseProdutosSite.buscar();
            app.CategoriaProdutosSite.buscar();
            app.SubcategoriaProdutosSite.buscar();
            app.ProdutosSite.buscar();
        } else {
            app.empresasanunciando.pesquisa = getParameterByName('q');
            app.anunciante.pgid = null;
            app.empresasanunciando.pgid = null;
            app.configuracaosite.buscar();
            app.empresasanunciando.buscar();
            app.anunciante.buscar();
            app.sys.seo("anuncio");
        }
    }
    if (app.sys.page === "paginas") {
        if (getParameterByName('pg')) {
            app.paginasite.pg = getParameterByName('pg');
            app.paginasite.buscar();
            app.sys.seo("anuncio");
        } else {
            app.paginasite.buscar();
            app.sys.seo("anuncio");
        }
    }
    qrcode.makeCode(urlSite);
}