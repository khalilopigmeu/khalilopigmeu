"use strict",
app["LoginsOauth"] = new Vue({
    el: '#LoginsOauth',
    data: {
        src: null,
        Host: "Bienestar/Sistema/Login/",
    },
    methods: {
        buscar: function (id, flag) {
            var biencode;
            var key = decrypt(app.sys.bien, "encodedstring");
            if (!nulo(id)) {
                biencode = {};
                captchaSys(app.sys.keysite);
                biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle");
                biencode.id = id;
                var data = {
                    "biencode": encrypt(JSON.stringify(biencode), key)
                };
                var p = (post(app.LoginsOauth.Host + "RAVEC", data));
                var rav = decrypt(p, key);
                if (!rav.includes("JSONException")) {
                    app.LoginsOauth.src = eval(decrypt(p, key));
                    var auth = getAuth();
                    if (window.localStorage.getItem("uuid") !== null) {
                        var uid = window.localStorage.getItem("uuid");
                        window.localStorage.setItem("uuid", uid);
                        setAuth(auth);
                    } else {
                        setAuth(auth);
                    }
                    app.configuracaosite.buscar(app.LoginsOauth.src[0].IdEmpresa);
                    window.localStorage.setItem("RAVEC", app.LoginsOauth.src[0].RAVEC);
                    window.localStorage.setItem("IdLogin", app.LoginsOauth.src[0]._id["$oid"]);
                    app.sys.acessar(window.localStorage.getItem("IdLogin"), window.localStorage.getItem("RAVEC"));
                } else {
                    setAuth(decrypt(app.sys.bien, "encodedstring"));
                    window.localStorage.setItem("IdLogin", id);
                }
                app.sys.setColorSystem();
            } else {
                biencode = {};
                captchaSys(app.sys.keysite);
                biencode.all = "";
                var data = {
                    biencode: encrypt(JSON.stringify(biencode), key)
                };
                app.sys.crud("LoginsOauth", "listar", data);
                app.sys.setColorSystem();
            }
            if (nulo(flag)) {
                var dm = window.location.hostname;
                if (dm.includes("ws/")) {
                    app.sys.ravecUpdate();
                } else {
                    app.sys.setColorSystem();
                    urlRead();
                }
            }
        },
        atualizar(id) {
            var biencode;
            var key = decrypt(app.sys.bien, "encodedstring");
            if (!nulo(id)) {
                biencode = {};
                captchaSys(app.sys.keysite);
                biencode.id = id;
                var data = {
                    "biencode": encrypt(JSON.stringify(biencode), key)
                };
                var p = (post(app.LoginsOauth.Host + "RAVEC", data));
                app.LoginsOauth.src = eval(decrypt(p, key));
                window.localStorage.setItem("RAVEC", app.LoginsOauth.src[0].RAVEC);
                window.localStorage.setItem("IdLogin", app.LoginsOauth.src[0]._id["$oid"]);
                app.sys.acessar(window.localStorage.getItem("IdLogin"), window.localStorage.getItem("RAVEC"));
            } else {
                biencode = {};
                captchaSys(app.sys.keysite);
                biencode.all = "";
                var data = {
                    biencode: encrypt(JSON.stringify(biencode), key)
                };
                app.sys.crud("LoginsOauth", "listar", data);
            }
        },
        clear: function () {
            this.src = null;
        },
        ravec: function (nivel) {
            return true;
        },
        conectar: function (device) {
            var biencode = {};
            captchaSys(app.sys.keysite);
            biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            biencode.UUID = device.UUID;
            biencode.Modelo = "Google,Facebook,Dispositivo";
            var data = {
                "biencode": encrypt(JSON.stringify(biencode))
            };
            var ws = "Bienestar/Sistema/Login/appLogin";
            var p = (post(ws, data));
            var rs = decrypt(p);
            window.localStorage.setItem("Empresa", rs.Empresa);
            window.localStorage.setItem("IdEmpresa", rs.IdEmpresa);
            window.localStorage.setItem("IdLogin", rs.IdLogin);
            window.localStorage.setItem("Nome", rs.Nome);
            window.localStorage.setItem("RAVEC", rs.Ravec);
            window.localStorage.setItem("auth", rs.Credencial.replace(/(\r\n|\n|\r)/gm, ""));
            window.location.href = "/ws/Agenda/eventos.php";
        }

    }
});