"use strict";
var ancestor;
var table = {};
const Real = value => currency(value, {symbol: 'R$', decimal: '.', separator: ''});
var cdn;
$(function () {
    var urlSite = window.location.href;
    window.onhashchange = function () {
        urlSite = window.location.href;
        var urlclean = urlSite.split("?");
        var modal = urlclean[0].split("#");
        if ($("#" + modal[1]).hasClass("modal")) {
            $("#" + modal[1]).modal('show');
        } else {
            app.sys.page = modal[1];
            app.paginabienclube.pg = getParameterByName('pg')
        }
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
        var CEP = $(this).val();
        var biencode = {};
        biencode.CEP = CEP;
        var data = {
            "biencode": $(window).Encrypt(JSON.stringify(biencode))
        };
        var appVue = $(this).attr("data-vue");
        var url = $(window).Decrypt(host("Bienestar", "BuscaCEP", "busca"));
        var rs = $(window).Decrypt(post(url, data));
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
            $("#modal .modal-body").text(result);
        }
    });

    $(".carousel.carousel-multi-item .carousel-item").eq(0).addClass("active");
    $("#Carousel,#Pricing").carousel();
});
