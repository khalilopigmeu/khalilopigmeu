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
        }
    }
});
