"use strict",
//FichaAtendimento
app["FichaAtendimento"] = new Vue({
    el: '#FichaAtendimento',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="far fa-clipboard"></i>',
        pesqTbl: "",
        Host: "Bienestar/Agenda/FichaAtendimento/",

        Procedimentosrc: null,
        Consultasrc: null,

        Clientesrc: null,
        pesqCliente: "",

        IdCliente: null,
        Consulta: [],
        Procedimento: [],
        DataAtendimento: null,
        Valor: null,
        LinkAnamnese: null,
        Observacao: null,
        Status: null,
        Registrado: null,
    },
    created: function (e) {
        //this.populate();
    },
    methods: {
        populate: function () {
            $(function () {
                this.biencode = {};
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: $(window).Encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.FichaAtendimento.href, "listar", data);
                app.LancamentoFinanceiro.FichaAtendimentoSrc = app.FichaAtendimento.src;
                app.Eventos.FichaAtendimentoSrc = app.FichaAtendimento.src;
            });
            app.sys.tabs(this.href);
        },
        clear: function () {
            this.IdCliente = null;
            this.Consulta = null;
            this.Procedimento = null;
            this.Observacao = null;
            this.DataAtendimento = null;
            this.Valor = null;
            this.LinkAnamnese = null;
            this.Status = null;
            this.Registrado = null;
        },
        autocomplete: function () {
            this.IdCliente = this.row[1];
            this.Consulta = this.row[2];
            this.Procedimento = this.row[3];
            this.Observacao = this.row[4];
            CKEDITOR.instances['observacaoatendimento'].setData(unescapeHTML(this.Observacao))
            this.DataAtendimento = this.row[5];
            this.Valor = this.row[6];
            this.LinkAnamnese = this.row[7];
            this.Status = parseBoolean(this.row[8]);
            this.Registrado = parseBoolean(this.row[9]);
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.Consulta = this.Consulta;
            this.biencode.Procedimento = this.Procedimento;
            this.Observacao = CKEDITOR.instances['observacaoatendimento'].getData();
            this.biencode.Observacao = this.Observacao;
            this.biencode.DataAtendimento = this.DataAtendimento;
            this.biencode.Valor = this.Valor;
            this.biencode.LinkAnamnese = this.LinkAnamnese;
            this.biencode.Status = false;
            this.biencode.Registrado = false;
            this.biencode.id = this.id;
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
        ravec: function (nivel) {
            if (typeof app.Ravec.acesso[this.stepkey] !== "undefined" && app.Ravec.acesso[this.stepkey] !== null) {
                if (app.Ravec.acesso[this.stepkey].nivel >= nivel) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        calcPreco: function () {
            var value = 0;
            for (var j = 0; j <= this.Procedimento.length - 1; j++) {
                for (var i = 0; i <= this.Procedimentosrc.length - 1; i++) {
                    if (this.Procedimentosrc[i]._id.$oid === this.Procedimento[j]) {
                        value = Real(value).add(this.Procedimentosrc[i].Valor);
                    }
                }
            }
            for (var j = 0; j <= this.Consulta.length - 1; j++) {
                for (var i = 0; i <= this.Consultasrc.length - 1; i++) {
                    if (this.Consultasrc[i]._id.$oid === this.Consulta[j]) {
                        value = Real(value).add(this.Consultasrc[i].Valor);
                    }
                }
            }
            this.Valor = Real(value).format();
        },
    }
});