"use strict";
var url = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx";
DefaultContentType();
function CalcPrazo(nCdServico, sCepOrigem, sCepDestino) {
    var data = "nCdServico=" + nCdServico + "&sCepOrigem=" + sCepOrigem + "&sCepDestino=" + sCepDestino;
    return getCross(url + "/CalcPrazo", data);
}
function CalcPrazoData(nCdServico, sCepOrigem, sCepDestino, sDtCalculo) {
    var data = "nCdServico=" + nCdServico + "&sCepOrigem=" + sCepOrigem + ""
            + "&sCepDestino=" + sCepDestino + "&sDtCalculo=" + sDtCalculo;
    return getCross(url + "/CalcPrazoData", data);
}
function CalcPrazoObjeto(codigoObjeto) {
    var data = "codigoObjeto=" + codigoObjeto;
    return getCross(url + "/CalcPrazoObjeto", data);
}
function CalcPrazoRestricao(nCdServico, sCepOrigem, sCepDestino, sDtCalculo) {
    var data = "nCdServico=" + nCdServico + "&sCepOrigem=" + sCepOrigem + ""
            + "&sCepDestino=" + sCepDestino + "&sDtCalculo=" + sDtCalculo;
    return getCross(url + "/CalcPrazoRestricao", data);
}
function CalcPreco(nCdEmpresa, sDsSenha, nCdServico,
        sCepOrigem, sCepDestino, nVlPeso,
        nCdFormato, nVlComprimento, nVlAltura, nVlLargura,
        nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento) {
    var data = "nCdEmpresa=" + nCdEmpresa + "&sDsSenha=" + sDsSenha + ""
            + "&nCdServico=" + nCdServico + "&sCepOrigem=" + sCepOrigem + "&sCepDestino=" + sCepDestino + ""
            + "&nVlPeso=" + nVlPeso + "&nCdFormato=" + nCdFormato + "&nVlComprimento=" + nVlComprimento + ""
            + "&nVlAltura=" + nVlAltura + "&nVlLargura=" + nVlLargura + "&nVlDiametro=" + nVlDiametro + ""
            + "&sCdMaoPropria=" + sCdMaoPropria + "&nVlValorDeclarado=" + nVlValorDeclarado + ""
            + "&sCdAvisoRecebimento=" + sCdAvisoRecebimento + "";
    return getCross(url + "/CalcPreco", data);
}
function CalcPrecoData(nCdEmpresa, sDsSenha, nCdServico,
        sCepOrigem, sCepDestino, nVlPeso,
        nCdFormato, nVlComprimento, nVlAltura, nVlLargura,
        nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento,
        sDtCalculo) {
    var data = "nCdEmpresa=" + nCdEmpresa + "&sDsSenha=" + sDsSenha + "&nCdServico=" + nCdServico + ""
            + "&sCepOrigem=" + sCepOrigem + "&sCepDestino=" + sCepDestino + ""
            + "&nVlPeso=" + nVlPeso + "&nCdFormato=" + nCdFormato + "&nVlComprimento=" + nVlComprimento + ""
            + "&nVlAltura=" + nVlAltura + "&nVlLargura=" + nVlLargura + "&"
            + "nVlDiametro=" + nVlDiametro + "&sCdMaoPropria=" + sCdMaoPropria + ""
            + "&nVlValorDeclarado=" + nVlValorDeclarado + "&sCdAvisoRecebimento=" + sCdAvisoRecebimento + ""
            + "&sDtCalculo=" + sDtCalculo + "";
    return getCross(url + "/CalcPrecoData", data);
}
function CalcPrecoFAC(nCdServico, nVlPeso, strDataCalculo) {
    var data = "nCdServico=" + nCdServico + "&nVlPeso=" + nVlPeso + ""
            + "&strDataCalculo=" + strDataCalculo + "";
    return getCross(url + "/CalcPrecoFAC", data);
}
function CalcPrecoPrazo(nCdEmpresa, sDsSenha, nCdServico,
        sCepOrigem, sCepDestino, nVlPeso,
        nCdFormato, nVlComprimento, nVlAltura, nVlLargura,
        nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento) {
    var data = "nCdEmpresa=" + nCdEmpresa + "&sDsSenha=" + sDsSenha + "&nCdServico=" + nCdServico + ""
            + "&sCepOrigem=" + sCepOrigem + "&sCepDestino=" + sCepDestino + "&nVlPeso=" + nVlPeso + ""
            + "&nCdFormato=" + nCdFormato + "&nVlComprimento=" + nVlComprimento + "&nVlAltura=" + nVlAltura + ""
            + "&nVlLargura=" + nVlLargura + "&nVlDiametro=" + nVlDiametro + "&sCdMaoPropria=" + sCdMaoPropria + "&"
            + "nVlValorDeclarado=" + nVlValorDeclarado + "&sCdAvisoRecebimento=" + sCdAvisoRecebimento;
    return getCross(url + "/CalcPrecoPrazo", data);
}
function CalcPrecoPrazoData(nCdEmpresa, sDsSenha, nCdServico,
        sCepOrigem, sCepDestino, nVlPeso,
        nCdFormato, nVlComprimento, nVlAltura, nVlLargura,
        nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento,
        sDtCalculo) {
    var data = "nCdEmpresa=" + nCdEmpresa + "&sDsSenha=" + sDsSenha + "&nCdServico=" + nCdServico + ""
            + "&sCepOrigem=" + sCepOrigem + "&sCepDestino=" + sCepDestino + "&nVlPeso=" + nVlPeso + ""
            + "&nCdFormato=" + nCdFormato + "&nVlComprimento=" + nVlComprimento + "&nVlAltura=" + nVlAltura + ""
            + "&nVlLargura=" + nVlLargura + "&nVlDiametro=" + nVlDiametro + "&sCdMaoPropria=" + sCdMaoPropria + ""
            + "&nVlValorDeclarado=" + nVlValorDeclarado + "&sCdAvisoRecebimento=" + sCdAvisoRecebimento + ""
            + "&sDtCalculo=" + sDtCalculo + "";
    return getCross(url + "/CalcPrecoPrazoData", data);
}
function CalcPrecoPrazoRestricao(nCdEmpresa, sDsSenha, nCdServico,
        sCepOrigem, sCepDestino, nVlPeso,
        nCdFormato, nVlComprimento, nVlAltura, nVlLargura,
        nVlDiametro, sCdMaoPropria, nVlValorDeclarado, sCdAvisoRecebimento,
        sDtCalculo) {
    var data = "nCdEmpresa=" + nCdEmpresa + "&sDsSenha=" + sDsSenha + "&nCdServico=" + nCdServico + ""
            + "&sCepOrigem=" + sCepOrigem + "&sCepDestino=" + sCepDestino + "&nVlPeso=" + nVlPeso + ""
            + "&nCdFormato=" + nCdFormato + "&nVlComprimento=" + nVlComprimento + ""
            + "&nVlAltura=" + nVlAltura + "&nVlLargura=" + nVlLargura + "&nVlDiametro=" + nVlDiametro + ""
            + "&sCdMaoPropria=" + sCdMaoPropria + "&nVlValorDeclarado=" + nVlValorDeclarado + ""
            + "&sCdAvisoRecebimento=" + sCdAvisoRecebimento + "&sDtCalculo=" + sDtCalculo;
    return getCross(url + "/CalcPrecoPrazoRestricao", data);
}
function ListaServicosCorreio() {
    var data = "";
    return getCross(url + "/ListaServicos", data);
}
            