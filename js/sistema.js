"use strict";
var app = {};
app["sys"] = new Vue({
    el: '#SysConsole',
    data: {
        refid: "613e9d1fb8f611d6e202902b",
        bien: "SFBQZ29BWjhuRUhBdldCTHdCdnp6ZWdFRmoxVCtSZVRoSmR3QVZ3eTNJMEg0WlNkRHRNVFc2dEJCNU9pUW40c294TFcrcjQzT0lqUURnL282U1c5S29oM1htYkxyMTFoTkpoaEdTZ0JWZkpDS2daMW9CeTlMNHR5WDlFNk1zdE4vS1NCUmJtVVVZa0lwdk9oSG9xMVNBPT0jRjYwRjgxNjRCMDg2MzdFNEMyRjdCMjg1MzBDOUU2REYjQjI3RThEOTc3NjY4QkNBNkFFQTVEQjczOEY5MzA0MkM=",
        page: "index",
    },
    methods: {
        sorter: function (arr, model, field) {
            if (arr !== null) {
                if (model === "ASC") {
                    return arr.slice().sort(function (a, b) {
                        return a[field] - b[field];
                    });
                } else {
                    return arr.slice().sort(function (a, b) {
                        return b[field] - a[field];
                    });
                }
            }
        },
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.sys.valida(field, pesq));
            return filteredList;
        },
        valida: function (field, pesq) {
            if (pesq !== null || pesq !== "") {
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
        }, mascara: function () {
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
        },
        foreignKeyReplace: function (array, field, td) {
            if (array !== null) {
                for (var i = 0; i <= array.length - 1; i++) {
                    td = replaceAll(array[i]._id.$oid, array[i][field], String(td));
                }
            }
            return td;
        },
        foreignKeyRestore: function (array, field, td) {
            if (array !== null) {
                for (var i = 0; i <= array.length - 1; i++) {
                    td = replaceAll(array[i][field], array[i]._id.$oid, td);
                }
            }
            return td;
        },
        tabs: function (appcontrol) {
            if (typeof app[appcontrol] !== "undefined") {
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
            if (typeof app[appcontrol] !== "undefined") {
                if (op.includes("listar")) {
                    app[appcontrol].clear();
                    if (!app[appcontrol].ravec(1)) {
                        $(function () {
                            $(window).NotifyRavec(app[appcontrol].ELtitle);
                        });
                    } else {
                        var data = param;
                        var ws = app[appcontrol].Host + "listar";
                        var p = (post(ws, data));
                        if (appcontrol === "Eventos") {
                            app[appcontrol].src = $(window).Decrypt(p);
                        } else {
                            app[appcontrol].src = eval($(window).Decrypt(p));
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
                    if (!app[appcontrol].ravec(nivel)) {
                        $(function () {
                            $(window).NotifyRavec(app[appcontrol].ELtitle);
                        });
                    } else {
                        app[appcontrol].checkForm();
                        if (!app.erros.valida()) {
                            var data;
                            if (param === null) {
                                var data = {
                                    "biencode": $(window).Encrypt(JSON.stringify(app[appcontrol].biencode))
                                };
                            } else {
                                data = param;
                            }
                            var ws = app[appcontrol].Host + op;
                            var p = (post(ws, data));
                            var rs = $(window).Decrypt(p);
                            $(window).NotifyInfo(rs);
                            app[appcontrol].populate();
                        } else {
                            $(window).NotifyInfo("Erro ao executar a operação");
                        }
                    }
                }
            }
        },
        pgUrl: function (url) {
            var ref = window.location.href;
            return ref.replace(/(pg=)[^\&]+/, '$1' + url);
        },
        pgidUrl: function (url) {
            var ref = window.location.href;
            return ref.replace(/(pgid=)[^\&]+/, '$1' + url);
        },
        ravec: function (appcontrol, nivel) {
            if (typeof app.Ravec.acesso[app[appcontrol].stepkey] !== "undefined" && app.Ravec.acesso[app[appcontrol].stepkey] !== null) {
                if (app.Ravec.acesso[app[appcontrol].stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
});
