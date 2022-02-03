"use strict";
var ancestor;
var table = {};
var qrcode;
var urlSite = window.location.href;
var path;
const Real = value => currency(value, {symbol: 'R$', decimal: '.', separator: ''});
var cdn;
$(function () {
    if (getParameterByName('uuid') !== null) {
        window.localStorage.setItem("uuid", getParameterByName('uuid'));
        if (urlSite.includes("rtiempresarial")) {
            window.location.href = "https://www.rtiempresarial.com.br/index.php";
        } else {
            window.location.href = "https://www.bienclube.com.br/index.php";
        }
    }

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
    if (urlSite.includes("#") || urlSite.includes("?")) {
        var urlclean = urlSite.split("?");
        var element = urlclean[0].split("#");
        if ($("#" + element[1]).hasClass("modal")) {
            $("#" + element[1]).modal('show');
        } else {
            app.sys.page = element[1];
        }
    }
    if (app.sys.page === "promocao") {
        app.paginasite.buscar();
        app.sys.seo(urlSite, getParameterByName('pgid'));
    }
    if (app.sys.page === "anunciante") {
        if (getParameterByName('pgid')) {
            app.anunciante.pgid = getParameterByName('pgid');
            app.anunciante.buscar();
            app.configuracaosite.buscar();
            app.paginasite.buscar();
            app.sys.seo(urlSite, getParameterByName('pgid'));
            app.FamiliaProdutosSite.buscar();
            app.ClasseProdutosSite.buscar();
            app.CategoriaProdutosSite.buscar();
            app.SubcategoriaProdutosSite.buscar();
            app.ProdutosSite.buscar();
        } else {
            app.anunciante.buscar();
            app.sys.seo(urlSite);
        }
    }
    if (app.sys.page === "paginas") {
        if (getParameterByName('pg')) {
            app.paginasite.pg = getParameterByName('pg');
            app.paginasite.buscar();
            app.sys.seo(urlSite);
        } else {
            app.paginasite.buscar();
            app.sys.seo(urlSite);
        }
    }
    qrcode.makeCode(urlSite);
}