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
        Host: "Bienestar/Clinica/FichaAtendimento/",
        paginate: [],

        pesqCliente: "",

        IdCliente: null,
        Consulta: [],
        Procedimento: [],
        DataAtendimento: null,
        HoraAtendimento: null,
        Valor: null,
        LinkAnamnese: null,
        Observacao: null,
        Status: null,
        Registrado: null,
        Evento: null,
        flag: true,

        Procedimentosrc: null,
        Clientesrc: null,
        Consultasrc: null,
        eventos: null,

        PromocaoSrc: null,
        Promocao: null,
    },
    methods: {
        populate: function () {
            if (!nulo(app.sys.system) && app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
                if (!nulo(window.localStorage.getItem("post"))) {
                    window.localStorage.removeItem("post");
                    this.updateEventos(true);
                }
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.FichaAtendimento.href, "listar", data);
                app.sys.tabs(this.href);
                if (!nulo(window.localStorage.getItem("post"))) {
                    window.localStorage.removeItem("post");
                    this.updateEventos(true);
                }
            }
        },
        clear: function () {
            this.IdCliente = null;
            this.Consulta = null;
            this.Procedimento = null;
            this.Observacao = null;
            this.DataAtendimento = null;
            this.HoraAtendimento = null;
            this.Valor = null;
            this.LinkAnamnese = null;
            this.Status = null;
            this.Registrado = null;
        },
        autocomplete: function () {
            this.IdCliente = (app.sys.foreignKeyRestore(this.Clientesrc, "Nome", this.row[1]));
            this.row[1];
            var x = String(app.sys.foreignKeyRestore(this.Consultasrc, "Nome", this.row[2]));
            this.Consulta = eval(x.split(","));
            var x = String(app.sys.foreignKeyRestore(this.Procedimentosrc, "Nome", this.row[3]));
            this.Procedimento = eval(x.split(","));
            this.Observacao = this.row[4];
            CKEDITOR.instances['observacaoatendimento'].setData(unescapeHTML(this.Observacao))
            this.DataAtendimento = this.row[5];
            this.HoraAtendimento = this.row[6];
            this.Valor = this.row[7];
            this.LinkAnamnese = this.row[8];
            this.Status = parseBoolean(this.row[9]);
            this.Registrado = parseBoolean(this.row[10]);
            this.id = this.row[0];
        },
        checkForm: function () {
            app.erros.errors = {};
            this.biencode = {};
            captchaSys(app.sys.keysite);
            this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
            this.biencode.IdCliente = this.IdCliente;
            this.biencode.Consulta = this.Consulta;
            this.biencode.Procedimento = this.Procedimento;
            this.Observacao = CKEDITOR.instances['observacaoatendimento'].getData();
            this.biencode.Observacao = this.Observacao;
            if (this.Evento !== null) {
                window.localStorage.setItem("evento", this.Evento);
                this.biencode.DataAtendimento = DataISO(formatadata(app.sys.searchByID(this.eventos, this.Evento)[0].start));
                this.biencode.HoraAtendimento = formatahora(app.sys.searchByID(this.eventos, this.Evento)[0].start);
                this.biencode.Registrado = true;
            } else {
                this.biencode.DataAtendimento = this.DataAtendimento;
                this.biencode.HoraAtendimento = this.HoraAtendimento;
                this.biencode.Registrado = this.Registrado;
            }
            this.biencode.Valor = this.Valor;
            this.biencode.LinkAnamnese = this.LinkAnamnese;
            this.biencode.Status = this.Status;
            this.biencode.id = this.id;
            this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
        },
        cadastrar: function () {
            if (this.Evento !== null) {
                window.localStorage.setItem("post", this.Evento)
            }
            app.sys.crud(this.href, "add", null);
        },
        alterar: function () {
            if (this.Evento !== null) {
                this.updateEventos(false);
            }
            app.sys.crud(this.href, "edt", null);
        },
        atualizadatas: function () {
            this.DataAtendimento = DataISO(formatadata(app.sys.searchByID(this.eventos, this.Evento)[0].start));
            this.HoraAtendimento = formatahora(app.sys.searchByID(this.eventos, this.Evento)[0].start);
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
        calcPreco: function () {
            var value = 0;
            var item = 0;
            if (!nulo(this.Procedimento)) {
                for (var j = 0; j <= this.Procedimento.length - 1; j++) {
                    for (var i = 0; i <= this.Procedimentosrc.length - 1; i++) {
                        if (this.Procedimentosrc[i]._id.$oid === this.Procedimento[j]) {
                            if (nulo(this.Promocao) || this.Promocao === false) {
                                value = Real(value).add(this.Procedimentosrc[i].Valor);
                            } else {
                                var prices = 0;
                                item = app.sys.search(this.PromocaoSrc, this.Procedimentosrc[i]._id.$oid, "Procedimento");
                                if (item.length > 0) {
                                    switch (String(item[0].LoteAtivo)) {
                                        case "1":
                                            prices = item[0].lote1;
                                        case "2":
                                            prices = item[0].lote2;
                                        case "3":
                                            prices = item[0].lote3;
                                        case "4":
                                            prices = item[0].lote4;
                                        case "5":
                                            prices = item[0].lote5;
                                        default :
                                            prices = item[0].lote5;
                                    }
                                    value = Real(value).add(prices);
                                } else {
                                    value = Real(value).add(this.Procedimentosrc[i].Valor);
                                }
                            }
                        }
                    }
                }
            }
            if (!nulo(this.Consulta)) {
                for (var j = 0; j <= this.Consulta.length - 1; j++) {
                    for (var i = 0; i <= this.Consultasrc.length - 1; i++) {
                        if (this.Consultasrc[i]._id.$oid === this.Consulta[j]) {
                            if (nulo(this.Promocao) || this.Promocao === false) {
                                value = Real(value).add(this.Consultasrc[i].Valor);
                            } else {
                                var prices = 0;
                                item = app.sys.search(this.PromocaoSrc, this.Consultasrc[i]._id.$oid, "Consulta");
                                if (item.length > 0) {
                                    switch (String(item[0].LoteAtivo)) {
                                        case "1":
                                            prices = item[0].lote1;
                                        case "2":
                                            prices = item[0].lote2;
                                        case "3":
                                            prices = item[0].lote3;
                                        case "4":
                                            prices = item[0].lote4;
                                        case "5":
                                            prices = item[0].lote5;
                                        default :
                                            prices = item[0].lote5;
                                    }
                                    value = Real(value).add(prices);
                                } else {
                                    value = Real(value).add(this.Consultasrc[i].Valor);
                                }
                            }
                        }
                    }
                }
            }
            this.Valor = Real(value).format();
        },
        updateEventos: function (op) {
            var el;
            if (op) {
                el = app.sys.searchByID(this.eventos, window.localStorage.getItem("evento"));
                if (el.extendedProps.FichaAtendimento.isArray()) {
                    el.extendedProps.FichaAtendimento.push(this.src[this.src.length - 1]._id['$oid']);
                } else {
                    el.extendedProps.FichaAtendimento = [this.src[this.src.length - 1]._id['$oid']];
                }
            } else {
                el = app.sys.searchByID(this.eventos, this.Evento);
                if (el.extendedProps.FichaAtendimento.isArray()) {
                    el.extendedProps.FichaAtendimento.push(this.id);
                } else {
                    el.extendedProps.FichaAtendimento = [this.id];
                }
            }
            app.Eventos.atualizaEx(el);
            app.Eventos.alterar();
            window.localStorage.removeItem("evento");
        },
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {
            if (nulo(app.Procedimento)) {
                this.Procedimentosrc = [];
            } else {
                this.Procedimentosrc = app.Procedimento.src;
            }
            if (nulo(app.Cliente)) {
                this.Clientesrc = [];
            } else {
                this.Clientesrc = app.Cliente.src;
            }
            if (nulo(app.Consulta)) {
                this.Consultasrc = [];
            } else {
                this.Consultasrc = app.Consulta.src;
            }
            if (nulo(app.Eventos)) {
                this.eventos = [];
            } else {
                this.eventos = eval(app.Eventos.eventos);
            }
            if (nulo(app.PromocaoItem)) {
                this.PromocaoSrc = [];
            } else {
                this.PromocaoSrc = app.PromocaoItem.src;
            }

        },
    }
});