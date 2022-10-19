"use strict",
//Curriculum
app["Curriculum"] = new Vue({
    el: '#Curriculum',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-archive"></i>',
        pesqTbl: "",
        Host: "Bienestar/Site/Curriculum/",
        paginate: [],

        Sobre: null,
        IdCliente: null,
        IdFuncionario: null,
        Foto: null,

        Clientesrc: null,
        Funcionariosrc: null,
    },
    methods: {
        populate: function () {
            this.biencode = {};
            this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
            var data = {
                biencode: encrypt(JSON.stringify(this.biencode))
            };
            app.sys.crud(app.Curriculum.href, "listar", data);
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.id = null;
            this.IdCliente = null;
            this.IdFuncionario = null;
            this.IdFoto = null;
            this.IdSobre = null;
        },
        autocomplete: function () {
            this.id = this.row[0];
            this.IdFuncionario = this.row[1];
            this.IdCliente = this.row[2];
            this.Foto = this.row[3];
            this.Sobre = this.row[4];
            CKEDITOR.instances['sobrecurriculo'].setData(unescapeHTML(this.Sobre));
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.id = this.id;
            this.Sobre = CKEDITOR.instances['sobrecurriculo'].getData();
            this.biencode.Sobre = this.Sobre;
            this.biencode.Foto = this.Foto;
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.IdFuncionario = this.IdFuncionario;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            app.sys.crud(this.href, "edt", null);
        },
        excluir: function () {
            app.sys.crud(this.href, "exc", null);
        },
        relatorio: function () {
            app.sys.crud(this.href, "rel", null);
        },
        cad: function () {

            this.evtDataCal = "cad";
        },
        alt: function () {
            this.evtDataCal = "alt";
        },
        rel: function () {
            this.evtDataCal = "rel";
        },
        exc: function () {
            this.evtDataCal = "exc";
        },
        pesq: function (arr, pesq) {
            let filteredList = arr.filter(field => app.Curriculum.valida(field, pesq));
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src,this.pesqTbl),'DESC','_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
            if (nulo(app.Funcionarios)) {
                this.Funcionariosrc = [];
            } else {
                this.Funcionariosrc = app.Funcionarios.src;
            }
            
        },
    }
});