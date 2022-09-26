"use strict";
var app = {};
app["sys"] = new Vue({
    el: '#SysConsole',
    data: {
        refid: "613e9d1fb8f611d6e202902b",
        reflog: "613ea0cdb8f611d6e2029031",
        bien: "eXZGM2l1SjZ5TjErbzRMS1RsbXkwbmpaNk9FVTBwTlIzRjBXcHJab1lGSmZUVXVwbGRhMUFCMmU5MUVXSWEwR3NjQS9JOUtpM2tNcko5b1hKd2F5U242RmtnRE1MMnhBcDdINXFKejNKZG5GZ0p2RVdHRk94ZytBT01NaVRDMzljejltb2Z1M1U3bHBuRXBzM0NvbTBGOWc0SDNUNU5mTUxnOHhqaVpGYjdERlcyM2h5cXVIK3ViS25CcGl6Qzhpd2xVamhOZW9TUjdRbG9HV2N1ekRiSlJLUWlWVzk4dHQ5NmtjcllnR0NMMklWcUgyb3RNTTc0TE12VU5QemRJNyM4ZjA4NzQ4YzlkNWM3NWEzYjU3YTFkNGZiZjE0NzRjNiM1MjRkMzg3MmI3NTA1NGZlYWFkODdiNTk5NzEyYzgzZQ==",
        page: "index",
        gapi: null,
        fblog: false,
        fbsai: false,
        gglog: false,
        ggsai: false,
        imgemp: null,
        imgurl: null,
        socialName: null,
        FB: null,
        appid: "",
        googleapikey: "",
        cliente_oauth: "",
        chave: "",
        empresa: null,
        login: null,
        login_oauth: null,
        key_oauth: null,
        keycodeSecurity: "QnNvNndsSmtBaXdBVWJzWnVnNmxRdHNFUkI1UUxkQU1IVFdYaW0reWJEMD0jOWY5MzczNWNhOTdmOWM2NDQzOTBjMWFmNWU2ZmMwMWQjNmQ2NzkzNTBhMDU5NWNiYjkxMzlhOGIyYTg3NzQwMGY=",
        urlSite: window.location.href,
        sandbox: false,
        currentPage: 0,
        itemsPerPage: 6,
        resultCount: 0,
        steper: 0,
        count: 0,
        pallete: 0,
        emailmkt: atob("eGtleXNpYi1iZDIyMTYyYjQwMmViZjYxNWU0MzAzZDczZWNkZmQ4OWE4MTk0MmQ5ZDYzN2M3NzE3M2MxOTRiNTZiYWExMTVhLW4yMHNISkFkNkk4Z0NqUWg="),
        acesso: [],
    },
    created: function () {
        var dm = window.location.hostname;
        if (dm.includes("borealmystic")) {
            this.refid = "";
            this.reflog = "";
        } else {
            this.refid = "613e9d1fb8f611d6e202902b";
            this.reflog = "613ea0cdb8f611d6e2029031";
        }
    },
    computed: {
        totalPages: function () {
            return Math.ceil(this.resultCount / this.itemsPerPage)
        }
    },
    methods: {
        start: function () {
            var dm = window.location.href;
            if (dm.includes("ws")) {
                app.calendar.progress = 0;
                app.sys.acessar(window.localStorage.getItem("IdLogin"), window.localStorage.getItem("RAVEC"));
                app.sys.ravecUpdate();
            } else {
                app.LoginsOauth.buscar(app.sys.reflog);
            }
        },
        acessar: function (idlogin, ravec) {
            app.sys.acesso = eval(decrypt(ravec, idlogin));
        },
        ravecmenu: function (href, nivel) {
            if (typeof app[href] !== "undefined" && app[href] !== null) {
                if (app.sys.ravec(nivel, href)) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        ravecUpdate: function () {
            var ratio = 100 / Object.keys(app).length;
            app.sidebarR.newmenu = [];
            for (var i = 0; i <= Object.keys(app).length - 1; i++) {
                try {
                    if (app.sys.ravec(1, Object.keys(app)[i])) {
                        if (!nulo(app[Object.keys(app)[i]].stepkey)) {
                            app.sidebarR.newmenu.push({
                                nome: app.sidebarR.smenu[app[Object.keys(app)[i]].stepkey].nome,
                                href: app.sidebarR.smenu[app[Object.keys(app)[i]].stepkey].href,
                            });
                            app[Object.keys(app)[i]].populate();
                            if (typeof app[Object.keys(app)[i]].load === "function") {
                                app[Object.keys(app)[i]].load();
                            }
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
                app.calendar.progress += ratio;
                app.sidebarR.newmenu = app.sys.sorter(app.sidebarR.newmenu, 'ASC', 'nome');
            }
        },
        keys: function () {
            var dm = window.location.hostname;
            if (dm.includes("rtiempresarial")) {
                sandBox(true);
                this.appid = '1607193979399894';
                this.chave = 'AIzaSyDlhrMh7AvBhRx8FfjSYfkmhDWhr4oeYzE';
                this.cliente_oauth = '91606339338-741njeru9v3ur60o2bhsofsiaccs8l10.apps.googleusercontent.com';
                this.googleapikey = 'Ww8izv4t2LvrZMAV2OC8RKz0';
                this.login_oauth = '1067522805118-jloabvn8n7vqlnd8qd6gj2ut11ojck1m.apps.googleusercontent.com';
                this.key_oauth = atob('R09DU1BYLXgzQWRWdTlMSWY3ZFllSl93cDhYa1A2eVRRcnM=');
            }
            if (dm.includes("bienclube")) {
                sandBox(false);
                this.appid = '365287055582263';
                this.chave = 'AIzaSyAfBuZgg6rX2SlQQwe2HTIG3jreQLZaltk';
                this.cliente_oauth = '91606339338-741njeru9v3ur60o2bhsofsiaccs8l10.apps.googleusercontent.com';
                this.googleapikey = 'Ww8izv4t2LvrZMAV2OC8RKz0';
                this.login_oauth = '335814088949-4s5kvvptcpr76t2l23pkk7ptkfkmlapo.apps.googleusercontent.com';
                this.key_oauth = atob('R09DU1BYLVJvdm5FZFZnSzVsa3FBMDNIdGdkbmRDUXZxOHY=');
            }
            if (dm.includes("borealmystic")) {
                sandBox(false);
                this.appid = '175998843045297';
                this.chave = 'AIzaSyAL2E1pOH-1tCZdqkO4OkpmM8jHKWqGrfU';
                this.cliente_oauth = '91606339338-741njeru9v3ur60o2bhsofsiaccs8l10.apps.googleusercontent.com';
                this.googleapikey = 'Ww8izv4t2LvrZMAV2OC8RKz0';
                this.login_oauth = '1037020366638-h57ishvlsjfjv4rltepcdp62b431hur3.apps.googleusercontent.com';
                this.key_oauth = atob('R09DU1BYLTZNVG9tc29fSlhnZjZTTC1TX3dFbG1tWklLQXo=');
            }
        },
        sorter: function (arr, model, field) {
            if (typeof arr !== "undefined") {
                if (arr !== null) {
                    if (model === "ASC") {
                        if (typeof arr.slice === "function") {
                            if (typeof arr.slice.sort === "function") {
                                return arr.slice().sort(function (a, b) {
                                    if (isNaN(a[field])) {
                                        if (typeof a[field] !== "undefined" || typeof b[field] !== "undefined") {
                                            return a[field].localeCompare(b[field]);
                                        }
                                    } else {
                                        if (a[field] < b[field]) {
                                            return 1;
                                        }
                                    }
                                });
                            } else {
                                return arr;
                            }
                        } else {
                            return arr;
                        }
                    } else {
                        if (typeof arr.slice === "function") {
                            if (typeof arr.slice.sort === "function") {
                                return arr.slice().sort(function (a, b) {
                                    if (isNaN(a[field])) {
                                        if (typeof a[field] !== "undefined" || typeof b[field] !== "undefined") {
                                            return b[field].localeCompare(a[field]);
                                        }
                                    } else {
                                        if (b[field] < a[field]) {
                                            return -1;
                                        }
                                    }
                                });
                            } else {
                                return arr;
                            }
                        } else {
                            return arr;
                        }
                    }
                } else {
                    return [];
                }
            } else {
                return [];
            }
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
            if (!nulo(null)) {
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
            } else {
                return array;
            }
        },
        foreignKey: function (arrayid, arraynome, field) {
            var fk = null;
            var i = 0;
            while (nulo(fk)) {
                if (arrayid === arraynome[i]._id.$oid) {
                    fk = arraynome[i][field];
                }
                i++;
            }
            return fk;
        },
        foreignKeyReplace: function (array, field, td) {
            if (!nulo(array)) {
                for (var i = 0; i <= array.length - 1; i++) {
                    td = replaceAll(array[i]._id.$oid, array[i][field], String(td));
                }
            }
            return td;
        },
        foreignKeyRestore: function (array, field, td) {
            if (!nulo(array)) {
                for (var i = 0; i <= array.length - 1; i++) {
                    td = replaceAll(array[i][field], array[i]._id.$oid, td);
                }
            }
            return td;
        },
        tabs: function (appcontrol) {
            if (!nulo(app[appcontrol])) {
                if (typeof app[appcontrol].load === "function") {
                    app[appcontrol].load();
                }
                $(function () {
                    $("#" + app[appcontrol].href + " .modal-body .nav-link").removeClass("active show");
                    $("#" + app[appcontrol].href + " .modal-body .tab-pane").removeClass("active show");
                    $("#" + app[appcontrol].href + " .modal-body .nav-link").eq(0).addClass("active show");
                    $("#" + app[appcontrol].href + " .modal-body .tab-pane").eq(0).addClass("active show");
                });
                app.sys.mascara();
            }
        },
        crud: function (appcontrol, op, param) {
            if (!nulo(app[appcontrol])) {
                if (op.includes("listar")) {
                    app[appcontrol].clear();
                    if (!app.sys.ravec(1, appcontrol)) {
                        if (typeof app.erros.errors.push === "function")
                            app.erros.errors.push(app[appcontrol].ELtitle + ": Sem permissão de acesso de leitura");
                    } else {
                        var data = param;
                        var ws = app[appcontrol].Host + "listar";
                        var p = post(ws, data);
                        if (appcontrol === "Eventos") {
                            app[appcontrol].src = decrypt(p);
                        } else {
                            app[appcontrol].src = eval(decrypt(p));
                        }
                    }
                } else if (op.includes("add") || op.includes("edt") || op.includes("exc") || op.includes("rel")) {
                    var nivel = 0;
                    switch (op) {
                        case "add":
                            nivel = 2;
                            break;
                        case "edt":
                            nivel = 3;
                            break;
                        case "exc":
                            nivel = 4;
                            break;
                        case "rel":
                            nivel = 5;
                            break;
                    }
                    if (!app.sys.ravec(nivel, appcontrol)) {
                        if (typeof app.erros.errors.push === "function")
                            app.erros.errors.push(app[appcontrol].ELtitle + ": Sem permissão de acesso para operação: " + op);
                    } else {
                        app[appcontrol].checkForm();
                        if (!app.erros.valida()) {
                            var data;
                            if (param === null) {
                                var data = {
                                    "biencode": encrypt(JSON.stringify(app[appcontrol].biencode))
                                };
                            } else {
                                data = param;
                            }
                            var ws = app[appcontrol].Host + op;
                            var p = (post(ws, data));
                            var rs = decrypt(p);
                            $(window).NotifyInfo(rs);
                            app[appcontrol].clear();
                            app[appcontrol].populate();
                        } else {
                            if (typeof app.erros.errors.push === "function")
                                app.erros.errors.push(app[appcontrol].ELtitle + ": Erros");
                        }
                    }
                }
            }
        },
        pgUrl: function (url) {
            var ref = window.location.href;
            if (getParameterByName('pg')) {
                return ref.replace(/(pg=)[^\&]+/, '$1' + url);
            } else {
                if (ref.includes("?")) {
                    return ref + "&pg=" + url;
                } else {
                    return ref + "?pg=" + url;
                }
            }
        },
        pgidUrl: function (url) {
            var ref = window.location.href;
            if (getParameterByName('pgid')) {
                return ref.replace(/(pgid=)[^\&]+/, '$1' + url);
            } else {
                if (ref.includes("?")) {
                    return ref + "&pgid=" + url;
                } else {
                    return ref + "?pgid=" + url;
                }
            }
        },
        seo: function (url, id) {
            var key = decrypt(app.sys.bien, "encodedstring");
            this.biencode = {};
            if (typeof id === 'undefined') {
                this.biencode.empresa = app.sys.refid;
            } else {
                this.biencode.empresa = id;
            }
            this.biencode.urlpage = url;
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode), key)
            };
            var ws = "Bienestar/Site/SEO/site";
            var p = (post(ws, data));
            var rs = decrypt(p);
            $("head").append(rs);
        },
        infield: function (field, pesq) {
            if (!nulo(pesq) || pesq !== "") {
                var keys = Object.keys(field);
                var flag = false;
                for (var i = 0; i <= keys.length - 1; i++) {
                    try {
                        var p = field[keys[i]].toLowerCase().indexOf(pesq.toLowerCase());
                        if (p >= 0) {
                            flag = true;
                        }
                    } catch (e) {

                    }
                }
                return flag;
            } else {
                return true;
            }
        },
        searchall: function (arr, pesq) {
            if (!nulo(arr)) {
                if (!nulo(pesq)) {
                    if (typeof arr.filter === "function") {
                        let filteredList = arr.filter(field => app.sys.infield(field, pesq));
                        return filteredList;
                    } else {
                        return arr;
                    }
                } else {
                    return arr;
                }
            } else {
                return [];
            }
        },
        search: function (src, search, fieldname) {
            if (!nulo(src)) {
                if (!nulo(search)) {
                    var tempSrc = src.filter(i => i[fieldname] === search);
                    return tempSrc;
                } else {
                    return src;
                }
            } else {
                return [];
            }
        },
        searchAprox: function (src, search, fieldname) {
            if (!nulo(src)) {
                if (!nulo(search)) {
                    if (src.length > 0) {
                        var tempSrc = src.filter(i => i[fieldname].includes(search));
                        return tempSrc;
                    } else {
                        return src;
                    }
                } else {
                    return src;
                }
            } else {
                return [];
            }
        },
        searchinArray: function (src, search, fieldname) {
            if (!nulo(src)) {
                if (!nulo(search)) {
                    if (src.length > 0 || search.length > 0) {
                        var tempSrc = src.filter(i => search.includes(i[fieldname]));
                        return tempSrc;
                    } else {
                        return src;
                    }
                } else {
                    return src;
                }
            } else {
                return [];
            }
        },
        searchByID: function (src, search) {
            if (!nulo(src)) {
                if (!nulo(search)) {
                    if (src.length > 0 || search.length > 0) {
                        var tempSrc = src.filter(i => search.includes(i._id['$oid']));
                        return tempSrc;
                    } else {
                        return src;
                    }
                } else {
                    return src;
                }
            } else {
                return [];
            }
        },
        onlyUnique: function (value, index, self) {
            return self.indexOf(value) === index;
        },
        setPage: function (pageNumber) {
            this.currentPage = pageNumber
        },
        paginate: function (list) {
            if (!nulo(list)) {
                this.resultCount = list.length
                if (this.currentPage >= this.totalPages) {
                    this.currentPage = 0
                }
                var index = parseInt(this.currentPage) * parseInt(this.itemsPerPage);
                return list.slice(index, index + parseInt(this.itemsPerPage))
            } else {
                return [];
            }
        },
        timestamp(id) {
            var data = new Date(parseInt(id.toString().substring(0, 8), 16) * 1000),
                    dia = data.getDate().toString(),
                    diaF = (dia.length === 1) ? '0' + dia : dia,
                    mes = (data.getMonth() + 1).toString(),
                    mesF = (mes.length === 1) ? '0' + mes : mes,
                    anoF = data.getFullYear();
            return anoF + "/" + mesF + "/" + diaF + "T" + data.toLocaleString('pt-BR', {hour: 'numeric', minute: 'numeric'}) + ":00Z";
        },
        buscaCEP: function (appVue) {
            var key = decrypt(app.sys.bien, "encodedstring");
            var CEP = app[appVue].CEP;
            var biencode = {};
            biencode.CEP = CEP;
            var data = {
                "biencode": encrypt(JSON.stringify(biencode), key)
            };
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
        },
        oauthGoogle: function (func) {
            var cliente_oauth = app.sys.login_oauth;
            var googleapikey = app.sys.key_oauth;
            var CLIENT_ID = cliente_oauth;
            var API_KEY = googleapikey;
            var SCOPES = 'email profile openid';

            google.accounts.id.initialize({
                client_id: CLIENT_ID,
                ux_mode: 'redirect',
                callback: func
            });
            google.accounts.id.prompt();
            google.accounts.id.renderButton(
                    document.getElementById("googlebtn"),
                    {theme: "outline", size: "large"}
            );
        },
        parseJwt: function (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        },
        iniciar: function () {
            this.FB.init({
                appId: app.sys.appid,
                cookie: true,
                xfbml: true,
                version: 'v14.0'
            });
            this.FB.AppEvents.logPageView();
        },
        Conectado: function () {
            this.fblog = true;
            this.fbcad = false;
            this.fbsai = true;
            if (typeof app.navbar !== "undefined") {
                app.navbar.fblog = true;
                app.navbar.fbcad = false;
                app.navbar.fbsai = true;
            }
            if (typeof app.sidebarR !== "undefined") {
                app.sidebarR.fblog = true;
                app.sidebarR.fbcad = false;
                app.sidebarR.fbsai = true;
            }
            if (window.localStorage.getItem("firstLogin") === true) {
                window.localStorage.setItem("firstLogin", false);
                $("#modal").modal();
                $("#modal").avisoMsg("Seja Bem Vindo(a)!");
            }
            this.empresa = window.localStorage.getItem("Empresa");
            this.login = window.localStorage.getItem("Nome");
        },
        Status: function () {
            var rs = app.sys.FB.getLoginStatus(function (response) {
                if (response.status === "connected") {
                    return app.sys.FB.getUserID();
                } else {
                    return"Acesso não permitido via Facebook OAUTH";
                }
                return rs;
            });
        },
        apiFB: function (fn, el) {
            app.sys.FB.getLoginStatus(function (response) {
                if (response.status === "connected") {
                    fn(response, el);
                }
            });
        },
        profileImageFB: function () {
            return app.sys.FB.api('/' + app.sys.FB.getAuthResponse().userID + "/picture?redirect=false&width=600&height=600", function (response) {
                app.sys.imgurl = response.data.url;
            });
        },
        profileNameFB: function () {
            return app.sys.FB.api('/' + app.sys.FB.getAuthResponse().userID + "/?fields=name", function (response) {
                app.sys.socialName = response.name;
            });
        },
        conectaFBManual: function (app, redirect, param1, param2) {
            return "https://www.facebook.com/v4.0/dialog/oauth?"
                    + "client_id=" + app
                    + "&redirect_uri=" + redirect
                    + "&state=" + "{st=" + param1 + ",ds=" + param2 + "}";
        },
        conectaFB: function () {
            app.sys.FB.login(function (response) {
                if (response.status === 'connected') {
                    app.sys.Conectado();
                } else {
                    app.sys.fblog = false;
                    app.sys.fbcad = true;
                    app.sys.fbsai = false;
                }
            }, {scope: 'public_profile,email'});
        },
        desconectaFB: function () {
            app.sys.FB.logout(function (response) {
                app.sys.fblog = false;
                app.sys.fbcad = true;
                app.sys.fbsai = false;
                $("#modal").modal();
                var dm = window.location.hostname;
                if (dm.includes("rtiempresarial")) {
                    $("#modal").avisoMsg("Obrigado por usar o Bienestar Clube, volte Sempre!");
                }
                if (dm.includes("bienclube")) {
                    $("#modal").avisoMsg("Obrigado por usar o Bienestar Clube, volte Sempre!");
                }
                if (dm.includes("borealmystic")) {
                    $("#modal").avisoMsg("Obrigado por usar o Boreal Mystic, volte Sempre!");
                }
                bsclose = false;
            });
        },
        ravec: function (nivel, el) {
            if (nulo(app)) {
                return false;
            } else {
                if (nulo(app[el])) {
                    return false;
                } else {
                    if (nulo(app[el].stepkey)) {
                        return true;
                    } else if (nulo(app.sys.acesso[app[el].stepkey])) {
                        return false;
                    } else {
                        if (app.sys.acesso[app[el].stepkey].nivel >= nivel) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        },
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.sys.valida(field, pesq));
            return filteredList;
        },
        valida: function (field, pesq) {
            var keys = Object.keys(field);
            var flag = false;
            for (var i = 0; i <= keys.length - 1; i++) {
                try {
                    var p = field[keys[i]].toLowerCase().indexOf(pesq.toLowerCase());
                    if (p >= 0) {
                        flag = true;
                    }
                } catch (e) {

                }
            }
            return flag;
        },
        top: function () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        },
        hasId: function (td) {
            if (td.hasOwnProperty("$oid")) {
                return td["$oid"];
            } else {
                return 0;
            }
        }
    }
});
$(function () {
    $("body").on("focus", ".form-control", function () {
        app.sys.mascara();
    });
});