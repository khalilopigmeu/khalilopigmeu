"use strict",
//LoginsOauth
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
                biencode.all = "";
                var data = {
                    biencode: encrypt(JSON.stringify(biencode), key)
                };
                app.sys.crud("LoginsOauth", "listar", data);
            }
            if (nulo(flag)) {
                var dm = window.location.hostname;
                if (dm.includes("ws/")) {
                    app.sys.ravecUpdate();
                } else {
                    urlRead();
                }
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