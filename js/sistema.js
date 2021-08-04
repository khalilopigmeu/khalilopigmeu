"use strict";
app["sys"] = new Vue({
    el: '#SysConsole',
    data: {

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
        }
    }
});
