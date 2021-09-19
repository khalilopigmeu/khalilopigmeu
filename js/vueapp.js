"use strict";
app["SocialMedia"] = new Vue({
    el: '#navbar',
    data: {
        fblog: false,
        fbsai: false,
        gglog: false,
        ggsai: false,
        imgurl: null,
        socialName: null,
        FB: null,
        appid: "",
        googleapikey: "",
        cliente_oauth: "",
        chave: "",
        empresa:null,
        login:null,
    },
    created: function () {
    },
    methods: {
        keys: function () {
            var dm = window.location.hostname;
            if (dm.includes("rtiempresarial")) {
                sandBox(true);
                this.appid = '1607193979399894';
                this.chave = 'AIzaSyAUT8YQFgJ85nrSahisKSSZQ5erBmZV9L0';
                this.cliente_oauth = '91606339338-741njeru9v3ur60o2bhsofsiaccs8l10.apps.googleusercontent.com';
                this.googleapikey = 'Ww8izv4t2LvrZMAV2OC8RKz0';
            } else {
                sandBox(false);
                this.appid = '512327409163791';
                this.chave = 'AIzaSyAUT8YQFgJ85nrSahisKSSZQ5erBmZV9L0';
                this.cliente_oauth = '91606339338-741njeru9v3ur60o2bhsofsiaccs8l10.apps.googleusercontent.com';
                this.googleapikey = 'Ww8izv4t2LvrZMAV2OC8RKz0';
            }
        },
        Conectado: function () {
            this.fblog = true;
            this.fbcad = false;
            this.fbsai = true;
            if (window.localStorage.getItem("firstLogin") === true) {
                window.localStorage.setItem("firstLogin", false);
                $("#modal").modal();
                $("#modal").avisoMsg("Seja Bem Vindo(a)!");
            }
            this.empresa = window.localStorage.getItem("Empresa");
            this.login = window.localStorage.getItem("Nome");
            /*this.profileImageFB();
             this.profileNameFB();
             app.sidebarR.fblog = this.fblog;
             app.sidebarR.imgurl = this.imgurl;
             app.sidebarR.socialName = this.socialName;*/
        },
        Status: function () {
            $(function () {
                app.SocialMedia.FB.getLoginStatus(function (response) {
                    if (response.status === "connected") {
                        app.SocialMedia.Conectado();
                    } else {
                        app.SocialMedia.conectaFB();
                    }
                });

            })
        },
        apiFB: function (fn, el) {
            $(function () {
                app.SocialMedia.FB.getLoginStatus(function (response) {
                    if (response.status === "connected") {
                        fn(response, el);
                    }
                });
            })
        },
        profileImageFB: function () {
            $(function () {
                return app.SocialMedia.FB.api('/' + app.SocialMedia.FB.getAuthResponse().userID + "/picture?redirect=false&width=600&height=600", function (response) {
                    app.SocialMedia.imgurl = response.data.url;
                });
            });
        },
        profileNameFB: function () {
            $(function () {
                return app.SocialMedia.FB.api('/' + app.SocialMedia.FB.getAuthResponse().userID + "/?fields=name", function (response) {
                    app.SocialMedia.socialName = response.name;
                });
            });
        },
        conectaFBManual: function (app, redirect, param) {
            return "https://www.facebook.com/v4.0/dialog/oauth?"
                    + "client_id=" + app
                    + "&redirect_uri=" + redirect
                    + "&state=" + "{st=state123abc,ds=123456789}";
        },
        conectaFB: function () {
            $(function () {
                app.SocialMedia.FB.login(function (response) {
                    if (response.status === 'connected') {
                        app.SocialMedia.Conectado();
                    } else {
                        app.SocialMedia.fblog = false;
                        app.SocialMedia.fbcad = true;
                        app.SocialMedia.fbsai = false;
                    }
                    //}, {scope: 'public_profile,email,user_birthday'});
                }, {scope: 'public_profile,email'});
            });
        },
        desconectaFB: function () {
            $(function () {
                app.SocialMedia.FB.logout(function (response) {
                    app.SocialMedia.fblog = false;
                    app.SocialMedia.fbcad = true;
                    app.SocialMedia.fbsai = false;
                    $("#modal").modal();
                    $("#modal").avisoMsg("Obrigado por usar o Bienestar Clube, volte Sempre!");
                    bsclose = false;
                });
            });
        },
        mascara: function () {
            $("input.telefone").attr("maxlength", "15");
            $("input.celular").attr("maxlength", "15");
            $("input.cep").attr("maxlength", "9");
            $("input.cpf").attr("maxlength", "14");
            $("input.cnpj").attr("maxlength", "18");
            $("input.rg").attr("maxlength", "12");
            $("input.data").attr("maxlength", "10");
            $("input.datepicker").attr("maxlength", "10");
            $("input.datas").attr("maxlength", "10");
            $("input.hora").attr("maxlength", "5");
            $("input.tempo").attr("maxlength", "8");
            $("input.valor").attr("maxlength", "15");
            $("input.money").attr("maxlength", "15");
            $("input.numero").attr("maxlength", "15");
            $("input.validCard").attr("maxlength", "5");
            $(".cnpj").on("blur", function () {
                if (!validarCNPJ($(this).val())) {
                    $(this).val("");
                }
            });
            $(".cpf").on("blur", function () {
                if (!validarCPF($(this).val())) {
                    $(this).val("");
                }
            });
            $(".IEstate").on("change", function () {
                $(".ie").val("");
                $(".ie").setAttribute("maxlength", $(this).val().length);
                $(".ie").setAttribute("placeholder", $(this).val());
                var mask = $(this).val().replace(/x/g, "9");
                $(".ie").mask(mask);
            });
            mask();
        },
        randomList: function (array) {
            var currentIndex = array.length;
            var temporaryValue;
            var randomIndex;
            var myRandomizedList;
            myRandomizedList = array.slice(0)
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = myRandomizedList[currentIndex];
                myRandomizedList[currentIndex] = myRandomizedList[randomIndex];
                myRandomizedList[randomIndex] = temporaryValue;
            }
            return myRandomizedList;
        },
        foreignKey: function (arrayid, arraynome, field) {
            var fk = null;
            var i = 0;
            while (fk === null) {
                if (arrayid === arraynome[i]._id.$oid) {
                    fk = arraynome[i][field];
                }
                i++;
            }
            return fk;
        }
    }
});
app["Host"] = new Vue({
    el: '#host',
    data: {
        path: null,
        op: null,
        ac: null,
        url: null
    },
    created: function () {
    },
    methods: {
        send: function () {
            $(function () {
                app.Host.url = $(window).Decrypt(host(app.Host.path, app.Host.op, app.Host.ac));
            });
        }
    }
});
$(function () {
    $("body").on("focus", ".form-control", function () {
        app.SocialMedia.mascara();
    });
});