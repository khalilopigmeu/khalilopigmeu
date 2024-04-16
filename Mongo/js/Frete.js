"use strict",
//Frete
app["Frete"] = new Vue({
    el: '#Frete',
    data: {
        evtDataCal: "cad",
        src: null,
        biencode: null,
        row: null,
        id: null,
        stepkey: 0,
        href: null,
        ELtitle: null,
        Icon: '<i class="fas fa-list-ol"></i>',
        pesqTbl: "",
        Host: "Bienestar/Loja/Frete/",
        paginate: [],
        nCdEmpresa: null,
        sDsSenha: null,
        nCdServico: null,
        sCepOrigem: null,
        nCdFormato: null,
        nVlComprimento: null,
        nVlAltura: null,
        nVlLargura: null,
        nVlDiametro: null,
        sCdMaoPropria: null,
        nVlValorDeclarado: null,
        sCdAvisoRecebimento: null,
    },
    methods: {
        populate: function () {
            if (app.sys.system.hasOwnProperty(this.href)) {
                this.src = app.sys.system[this.href];
                app.sys.tabs(this.href);
            } else {
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.empresa = window.localStorage.getItem("IdEmpresa");
                var data = {
                    biencode: encrypt(JSON.stringify(this.biencode))
                };
                app.sys.crud(app.Frete.href, "listar", data);
                app.sys.tabs(this.href);
            }
        },
        clear: function () {
            this.nCdEmpresa = null;
            this.sDsSenha = null;
            this.nCdServico = null;
            this.sCepOrigem = null;
            this.nCdFormato = null;
            this.nVlComprimento = null;
            this.nVlAltura = null;
            this.nVlLargura = null;
            this.nVlDiametro = null;
            this.sCdMaoPropria = null;
            this.nVlValorDeclarado = null;
            this.sCdAvisoRecebimento = null;
        },
        autocomplete: function () {
            this.nCdEmpresa = this.row[1];
            this.sDsSenha = this.row[2];
            this.nCdServico = this.row[3];
            this.sCepOrigem = this.row[4];
            this.nCdFormato = this.row[5];
            this.nVlComprimento = this.row[6];
            this.nVlAltura = this.row[7];
            this.nVlLargura = this.row[8];
            this.nVlDiametro = this.row[9];
            this.sCdMaoPropria = this.row[10];
            this.nVlValorDeclarado = this.row[11];
            this.sCdAvisoRecebimento = this.row[12];
            this.id = this.row[0];
        },
        checkForm: function () {
            if (this.validaFrete() === true) {
                app.erros.errors = {};
                this.biencode = {};
                captchaSys(app.sys.keysite);
                this.biencode.tokenCaptcha = window.localStorage.getItem("tokenGoogle")
                this.biencode.nCdEmpresa = this.nCdEmpresa;
                this.biencode.sDsSenha = this.sDsSenha;
                this.biencode.nCdServico = this.nCdServico;
                this.biencode.sCepOrigem = this.sCepOrigem;
                this.biencode.nCdFormato = this.nCdFormato;
                this.biencode.nVlComprimento = this.nVlComprimento;
                this.biencode.nVlAltura = this.nVlAltura;
                this.biencode.nVlLargura = this.nVlLargura;
                this.biencode.nVlDiametro = this.nVlDiametro;
                this.biencode.sCdMaoPropria = this.sCdMaoPropria;
                this.biencode.nVlValorDeclarado = this.nVlValorDeclarado;
                this.biencode.sCdAvisoRecebimento = this.sCdAvisoRecebimento;
                this.biencode.id = this.id;
                this.biencode.IdEmpresa = window.localStorage.getItem("IdEmpresa");
            }
        },
        validaFrete: function () {
            if (this.nCdServico === '') {
                alert('Selecione o tipo de serviço desejado.');
                return false;
            }
            if (this.sCepOrigem === '') {
                alert('Informe o CEP de Origem e de Destino.');
                return false;
            }
            if (this.nCdServico === "04065" || this.nCdServico === "04707") {
                if (this.nVlValorDeclaradovalue === '') {
                    alert('O Valor Declarado é obrigatório para esse serviço.');
                    return false;
                }
                if (this.nCdFormato === '1') {
                    return validarCaixa();
                }
                if (this.nCdFormato === '2') {
                    if (this.validarPrisma() === false)
                    {
                        return false;
                    }
                    this.nVlLarguravalue = this.nVlDiametro;
                    this.nVlAltura = this.nVlDiametro;
                }
                if (this.nCdFormato === '3') {
                    return this.validarEnvelope();
                }
            }
            if (this.nVlValorDeclaradovalue !== '') {
                var vd = this.nVlValorDeclaradovalue;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert('Valor Declarado inválido');
                    return false;
                } else {
                    if (vd > 10000) {
                        alert('O valor declarado não deve ultrapassar R$ 10.000,00');
                        return false;
                    }
                    if (vd < 18.5) {
                        alert('O valor declarado não deve ser menor que R$ 18,50');
                        return false;
                    }
                }
            }
            if (this.nCdServico === '04014' || this.nCdServico === '40215' || this.nCdServico === '40290' || this.nCdServico === '04804' || this.nCdServico === '03662' || this.nCdServico === '03670' || this.nCdServico === '04065' || this.nCdServico === '40045' || this.nCdServico === '40169'
                    || this.nCdServico === '04782' || this.nCdServico === '04707' && this.nCdServico !== '81019') {
                if ((this.nCdServico === '40169' || this.nCdServico === '04782')) {
                    alert('O serviço SEDEX 12 só permite encomendas até 10 Kg.');
                    return false;
                }
                if (this.nCdFormato === '1') {
                    return this.validarCaixa();
                }
                if (this.nCdFormato === '2') {
                    if (this.validarPrisma() === false) {
                        return false;
                    }
                    this.nVlLarguravalue = this.nVlDiametro;
                    this.nVlAltura = this.nVlDiametro;
                }
                if (this.nCdFormato === '3') {
                    if (this.validarEnvelope() === false) {
                        return false;
                    }
                }

                if (this.nCdFormato === '3' && (this.nCdServico === '40169' || this.nCdServico === '04782')) {
                    return this.validarEnvelope();
                }
            }
            if (this.nCdServico === "04510") {
                if (this.nCdFormato === '1') {
                    return this.validarCaixa();
                }

                if (this.nCdFormato === '2') {
                    if (this.validarPrisma() === false) {
                        return false;
                    }
                    this.nVlLarguravalue = this.nVlDiametro;
                    this.nVlAltura = this.nVlDiametro;
                }

            }
            if (this.nCdServico === "43010") {
                if (this.nVlValorDeclaradovalue === '') {
                    alert('O Valor Declarado é obrigatório para esse serviço.');
                    return false;
                }
                if (this.nCdFormato === '1') {
                    return this.validarCaixa();
                }
                if (this.nCdFormato === '2') {
                    if (this.validarPrisma() === false)
                    {
                        return false;
                    }
                    this.nVlLarguravalue = this.nVlDiametro;
                    this.nVlAltura = this.nVlDiametro;
                }
            }
            if ((this.sCdMaoPropria === "S" || this.nVlValorDeclaradovalue !== "" || this.nVlValorDeclarado === "S")
                    && this.nCdServico !== "85480" && this.nCdServico !== "10014" && this.nCdServico !== "10030" && this.nCdServico !== "16012"
                    && this.nCdServico !== "81019" && this.nCdServico !== "14036" && this.nCdServico !== "14010" && this.nCdServico !== "14028" && this.nCdServico !== "44105" && this.nCdServico !== "41300")
            {
                alert('Informe o peso para o cálculo de preços da sua encomenda.');
                return false;
            }
        },
        validaFreteConsulta: function (peso) {

            if (this.nVlValorDeclaradovalue !== '') {
                var sv = this.nCdServico;
                var vd = this.nVlValorDeclaradovalue;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert('Valor Declarado inválido');
                    return false;
                } else {
                    if (sv === '04014' || sv === '40215' || sv === '40169' || sv === '04782' || sv === '40290' || sv === '04804' || sv === '03670' || sv === '04065') {
                        if (vd > 10000) {
                            alert('O valor declarado dos serviços SEDEX não deve ultrapassar R$ 10.000,00');
                            return false;
                        }
                        if (vd < 20.5) {
                            alert('O valor declarado dos serviços SEDEX não deve ser menor que R$ 20,50');
                            return false;
                        }
                    } else {
                        if (vd > 3000) {
                            alert('O valor declarado dos serviços PAC não deve ultrapassar R$ 3.000,00');
                            return false;
                        }
                        if (vd < 20.5) {
                            alert('O valor declarado dos serviços PAC não deve ser menor que R$ 20,50');
                            return false;
                        }
                    }
                }
            }
            if (this.nCdServico === '') {
                alert('Selecione o tipo de serviço desejado.');
                return false;
            }
            if (peso !== '') {
                if (this.nCdServico === "04065" || this.nCdServico === "04707") {
                    if (this.nVlValorDeclaradovalue === '') {
                        alert('O Valor Declarado é obrigatório para esse serviço.');
                        this.nVlValorDeclaradofocus();
                        return false;
                    }

                    if (this.nCdFormato === '1') {
                        return this.validarCaixa();
                    }
                    if (this.nCdFormato === '2') {
                        if (this.validarPrisma() === false) {
                            return false;
                        }
                        this.nVlLarguravalue = this.nVlDiametro;
                        this.nVlAltura = this.nVlDiametro;
                    }
                    if (this.nCdFormato === '3') {
                        return this.validarEnvelope();
                    }
                }
                if (this.nVlValorDeclaradovalue !== '')
                {
                    var vd = this.nVlValorDeclaradovalue;
                    vd = vd.replace(".", "");
                    vd = vd.replace(",", ".");
                    if (isNaN(vd)) {
                        alert('Valor Declarado inválido');
                        return false;
                    } else {
                        if (vd > 10000) {
                            alert('O valor declarado não deve ultrapassar R$ 10.000,00');
                            return false;
                        }
                        if (vd < 18.5) {
                            alert('O valor declarado não deve ser menor que R$ 18,50');
                            return false;
                        }
                    }
                }
                if (this.nCdServico === '04014' || this.nCdServico === '40215' || this.nCdServico === '40290' || this.nCdServico === '04804' || this.nCdServico === '03662' || this.nCdServico === '03670' || this.nCdServico === '04065' || this.nCdServico === '40045' || this.nCdServico === '40169'
                        || this.nCdServico === '04782' || this.nCdServico === '04707' && this.nCdServico !== '81019') {
                    if (peso > 10 && (this.nCdServico === '40169' || this.nCdServico === '04782')) {
                        alert('O serviço SEDEX 12 só permite encomendas até 10 Kg.');
                        return false;
                    }

                    if (this.nCdFormato === '1') {
                        return this.validarCaixa();
                    }

                    if (this.nCdFormato === '2') {
                        if (this.validarPrisma() === false) {
                            return false;
                        }
                        this.nVlLarguravalue = this.nVlDiametro;
                        this.nVlAltura = this.nVlDiametro;
                    }

                    if (this.nCdFormato === '3')
                    {
                        if (this.validarEnvelope() === false) {
                            return false;
                        }
                    }

                    if (this.nCdFormato === '3' && (this.nCdServico === '40169' || this.nCdServico === '04782')) {
                        if (peso > 1) {
                            alert('O serviço SEDEX 12 (Envelope) só permite encomendas até 1 Kg.');
                            return false;
                        } else {
                            return this.validarEnvelope();
                        }
                    }
                }
                if (this.nCdServico === "04510") {
                    if (this.nCdFormato === '1') {
                        return this.validarCaixa();
                    }

                    if (this.nCdFormato === '2') {
                        if (this.validarPrisma() === false) {
                            return false;
                        }
                        this.nVlLarguravalue = this.nVlDiametro;
                        this.nVlAltura = this.nVlDiametro;
                    }

                }
                if (this.nCdServico === "43010") {
                    if (this.nVlValorDeclaradovalue === '') {
                        alert('O Valor Declarado é obrigatório para esse serviço.');
                        return false;
                    }

                    if (this.nCdFormato === '1') {
                        return this.validarCaixa();
                    }
                    if (this.nCdFormato === '2') {
                        if (this.validarPrisma() === false) {
                            return false;
                        }
                        this.nVlLarguravalue = this.nVlDiametro;
                        this.nVlAltura = this.nVlDiametro;
                    }
                }

            } else {
                if ((this.sCdMaoPropria === "S" || this.nVlValorDeclaradovalue !== "" || this.nVlValorDeclarado === "S") && peso === ""
                        && this.nCdServico !== "85480" && this.nCdServico !== "10014" && this.nCdServico !== "10030" && this.nCdServico !== "16012"
                        && this.nCdServico !== "81019" && this.nCdServico !== "14036" && this.nCdServico !== "14010" && this.nCdServico !== "14028" && this.nCdServico !== "44105" && this.nCdServico !== "41300") {
                    alert('Informe o peso para o cálculo de preços da sua encomenda.');
                    return false;
                }
            }
        },
        validarCaixa: function () {

            if (trim(this.nVlComprimento) === "" || trim(this.nVlLargura) === "" || trim(this.nVlAltura) === "") {
                alert("(Caixa) Por definição, para o cálculo de preço desse serviço deverão ser informados, também, o comprimento, a largura e altura do objeto em centímetros).");
                return false;
            }
            if (trim(this.nVlComprimento) !== "") {
                var vd = this.nVlComprimento;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert("Comprimento inválido.");
                    return false;
                }
                var fComprimento = parseFloat(vd);
            }

            if (trim(this.nVlLargura) !== "") {
                var vd = this.nVlLargura;
                if (isNaN(vd)) {
                    alert("Largura inválida.");
                    return false;
                }

                var fLargura = parseFloat(vd);
            }

            if (trim(this.nVlAltura) !== "") {
                var vd = this.nVlAltura;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert("Altura inválida.");
                    return false;
                }

                var fAltura = parseFloat(vd);
            }
            if (this.nCdServico === "04510") {
                if (fComprimento > 100) {
                    alert("O comprimento não pode ser maior que 100 cm.");
                    return false;
                }

                if (fLargura > 100) {
                    alert("A largura não pode ser maior que 100 cm.");
                    return false;
                }

                if (fAltura > 100) {
                    alert("A altura não pode ser maior que 100 cm.");
                    return false;
                }

                if (fAltura < 1) {
                    alert("A altura não pode ser inferior a 1 cm.");
                    return false;
                }

                if (fLargura < 10) {
                    alert("A largura não pode ser inferior a 10 cm.");
                    return false;
                }

                if (fComprimento < 15) {
                    alert("O comprimento não pode ser inferior a 15 cm.");
                    return false;
                }

                if ((fComprimento + fLargura + fAltura) > 200) {
                    alert("A soma resultante do comprimento + largura + altura não deve superar a 200 cm.");
                    return false;
                }
                return true;
            } else {
                if (fComprimento > 100) {
                    alert("O comprimento não pode ser maior que 100 cm.");
                    return false;
                }

                if (fLargura > 100) {
                    alert("A largura não pode ser maior que 100 cm.");
                    return false;
                }

                if (fAltura > 100) {
                    alert("A altura não pode ser maior que 100 cm.");
                    return false;
                }

                if (fAltura < 1) {
                    alert("A altura não pode ser inferior a 1 cm.");
                    return false;
                }


                if (fLargura < 10) {
                    alert("A largura não pode ser inferior a 10 cm.");
                    return false;
                }

                if (fComprimento < 15) {
                    alert("O comprimento não pode ser inferior a 15 cm.");
                    return false;
                }

                if ((fComprimento + fLargura + fAltura) > 200) {
                    alert("A soma resultante do comprimento + largura + altura não deve superar a 200 cm.");
                    return false;
                }
                return true;
            }
        },
        validarPrisma: function () {
            var iCtd = 0;
            if (trim(this.nVlComprimento) === "" || trim(this.nVlDiametro) === "") {
                alert("(Rolo/Prisma) Por definição, para o cálculo de preço desse serviço deverão ser informados, também, o comprimento, e o diâmetro do objeto em centímetros.");
                return false;
            }

            if (trim(this.nVlComprimento) !== "") {
                var vd = this.nVlComprimento;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert("Comprimento inválido.");
                    return false;
                }
                var fComprimento = parseFloat(vd);
                iCtd = iCtd + 1;
            }

            if (trim(this.nVlDiametro) !== "") {
                var vd = this.nVlDiametro;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert("Diâmetro inválido.");
                    return false;
                }
                var fDiametro = parseFloat(vd);
                iCtd = iCtd + 1;
            }

            if (iCtd > 0 && iCtd < 2) {
                if (trim(this.nVlComprimento) === "")
                {
                    alert("Informe o comprimento.");
                    return false;
                }

                if (trim(this.nVlDiametro) === "") {
                    alert("Informe o diâmetro.");
                    return false;
                }
            }

            if (iCtd === 2) {
                if ((fComprimento + fDiametro) > 0) {
                    if (this.nCdServico === "04510") {
                        if (fComprimento > 100) {
                            alert("O comprimento não pode ser maior que 100 cm.");
                            return false;
                        }

                        if (fDiametro > 91) {
                            alert("O diâmetro não pode ser maior que 91 cm.");
                            return false;
                        }
                    } else {
                        if (fComprimento > 100) {
                            alert("O comprimento não pode ser maior que 100 cm.");
                            return false;
                        }

                        if (fDiametro > 91) {
                            alert("O diâmetro não pode ser maior que 91 cm.");
                            return false;
                        }
                    }
                }

                if (fComprimento < 18) {
                    alert("O comprimento não pode ser inferior a 18 cm.");
                    return false;
                }

                if (fDiametro < 5) {
                    alert("O diâmetro não pode ser inferior a 5 cm.");
                    return false;
                }

                if ((fComprimento + 2 * fDiametro) > 200) {
                    alert("A soma resultante do comprimento + o dobro do diâmetro não deve superar a 200 cm.");
                    return false;
                }
            }
            return true;
        },
        validarEnvelope: function () {
            if (trim(this.nVlLargura) === "" || trim(this.nVlComprimento) === "") {
                alert("(Envelope) Por definição, para o cálculo de preço desse serviço deverão ser informados, também, a largura e comprimento do objeto em centímetros.");
                return false;
            }
            if (trim(this.nVlLargura) !== "") {
                var vd = this.nVlLargura;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert("Largura inválida.");
                    return false;
                }

                var fLargura = parseFloat(vd);
            }

            if (trim(this.nVlComprimento) !== "") {
                var vd = this.nVlComprimento;
                vd = vd.replace(".", "");
                vd = vd.replace(",", ".");
                if (isNaN(vd)) {
                    alert("Comprimento inválido.");
                    return false;
                }

                var fComprimento = parseFloat(vd);
            }

            if (fComprimento < 16) {
                alert("O comprimento não pode ser inferior a 16 cm.");
                return false;
            }
            if (fLargura < 11) {
                alert("A largura não pode ser inferior a 11 cm.");
                return false;
            }

            if (fLargura > 60) {
                alert("A largura não pode ser maior que 60 cm.");
                return false;
            }

            if (fComprimento > 60) {
                alert("O Comprimento não pode ser maior que 60 cm.");
                return false;
            }

            return true;
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
        Criarpaginas: function () {
            app.sys.paginate(app.sys.sorter(app.sys.searchall(this.src, this.pesqTbl), 'DESC', '_id.$oid'), this.href, [this.href, "paginate"]);
        },
        load: function () {

        },
        listaServicos: function () {
            var headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            var x = getCross("ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/ListaServicos", "", headers);
            console.log(x);
            var x = postCross("ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/ListaServicos", "", headers);
            console.log(x);
        }
    }
});
