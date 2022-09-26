var v_obj, v_fun, valida;

$(function () {
    mask();
});

function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("execmascara()", 1);
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}

function mcep(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{5})(\d)/, "$1-$2"); //Esse é tão fácil que não merece explicações
    return v;
}

function mtel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function cnpj(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
    return v;
}

function mcpf(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}

function mdata(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d{2})$/, "$1$2");
    return v;
}

function mnumber(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d)(\d{2})$/, "$1,$2");
    return v;
}

function mya(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    return v;
}

function mtempo(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{1})(\d{2})(\d{2})/, "$1:$2:$3");
    return v;
}

function mhora(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2");
    return v;
}

function mrg(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d)(\d{7})$/, "$1.$2"); //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
    v = v.replace(/(\d)(\d{4})$/, "$1.$2"); //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
    v = v.replace(/(\d)(\d)$/, "$1-$2"); //Coloca o - antes do último dígito
    return v;
}

function mnum(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    return v;
}

function mvalor(v) {
    //return  Real(v).value;
    return v;
}

function id(el) {
    return document.getElementById(el);
}

function clas(el) {
    return document.getElementsByClassName(el);
}

window.onload = mask();

function mask() {
    if (document.getElementsByClassName('validCard') !== null) {
        for (var i = 0; i <= clas('validCard').length - 1; i++) {
            clas('validCard')[i].onkeypress = function () {
                mascara(this, mya);
            };
        }
    }
    if (document.getElementsByClassName('numero') !== null) {
        for (var i = 0; i <= clas('numero').length - 1; i++) {
            clas('numero')[i].onkeypress = function () {
                mascara(this, mnumber);
            };
        }
    }
    if (document.getElementsByClassName('telefone') !== null) {
        for (var i = 0; i <= clas('telefone').length - 1; i++) {
            clas('telefone')[i].onkeypress = function () {
                mascara(this, mtel);
            };
        }
    }
    if (document.getElementsByClassName('celular') !== null) {
        for (var i = 0; i <= clas('celular').length - 1; i++) {
            clas('celular')[i].onkeypress = function () {
                mascara(this, mtel);
            };
        }
    }
    if (document.getElementsByClassName('cep') !== null) {
        for (var i = 0; i <= clas('cep').length - 1; i++) {
            clas('cep')[i].onkeypress = function () {
                mascara(this, mcep);
            };
        }
    }
    if (document.getElementsByClassName('cep2') !== null) {
        for (var i = 0; i <= clas('cep2').length - 1; i++) {
            clas('cep2')[i].onkeypress = function () {
                mascara(this, mcep);
            };
        }
    }
    if (document.getElementsByClassName('cpf') !== null) {
        for (var i = 0; i <= clas('cpf').length - 1; i++) {
            clas('cpf')[i].onkeypress = function () {
                mascara(this, mcpf);
            };
        }
    }
    if (document.getElementsByClassName('cnpj') !== null) {
        for (var i = 0; i <= clas('cnpj').length - 1; i++) {
            clas('cnpj')[i].onkeypress = function () {
                mascara(this, cnpj);
            };
        }
    }
    if (document.getElementsByClassName('rg') !== null) {
        for (var i = 0; i <= clas('rg').length - 1; i++) {
            clas('rg')[i].onkeypress = function () {
                mascara(this, mrg);
            };
        }
    }
    if (document.getElementsByClassName('data') !== null) {
        for (var i = 0; i <= clas('data').length - 1; i++) {
            clas('data')[i].onkeypress = function () {
                mascara(this, mdata);
            };
        }
    }
    if (document.getElementsByClassName('datepicker') !== null) {
        for (var i = 0; i <= clas('data').length - 1; i++) {
            clas('data')[i].onkeypress = function () {
                mascara(this, mdata);
            };
        }
    }
    if (document.getElementsByClassName('datas') !== null) {
        for (var i = 0; i <= clas('datas').length - 1; i++) {
            clas('datas')[i].onkeypress = function () {
                mascara(this, mdata);
            };
        }
    }
    if (document.getElementsByClassName('hora') !== null) {
        for (var i = 0; i <= clas('hora').length - 1; i++) {
            clas('hora')[i].onkeypress = function () {
                mascara(this, mhora);
            };
        }
    }
    if (document.getElementsByClassName('tempo') !== null) {
        for (var i = 0; i <= clas('tempo').length - 1; i++) {
            clas('tempo')[i].onkeypress = function () {
                mascara(this, mtempo);
            };
        }
    }
    if (document.getElementsByClassName('valor') !== null) {
        for (var i = 0; i <= clas('valor').length - 1; i++) {
            clas('valor')[i].onkeypress = function () {
                mascara(this, mvalor);
            };
        }
    }
    if (document.getElementsByClassName('money') !== null) {
        for (var i = 0; i <= clas('money').length - 1; i++) {
            clas('money')[i].onkeypress = function () {
                mascara(this, mvalor);
            };
        }
    }
}
;

function validarCNPJ(cnpj) {
    valida = "";
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj === '') {
        valida = "CNPJ vazio";
        $(window).NotifyErr(valida);
        return false;
    }

    if (cnpj.length !== 14) {
        valida = "Qtd. de caracteres inválidos";
        $(window).NotifyErr(valida);
        return false;
    }

// Elimina CNPJs invalidos conhecidos
    if (cnpj === "00000000000000" ||
            cnpj === "11111111111111" ||
            cnpj === "22222222222222" ||
            cnpj === "33333333333333" ||
            cnpj === "44444444444444" ||
            cnpj === "55555555555555" ||
            cnpj === "66666666666666" ||
            cnpj === "77777777777777" ||
            cnpj === "88888888888888" ||
            cnpj === "99999999999999") {
        valida = "caracteres repetidos";
        $(window).NotifyErr(valida);
        return false;
    }

    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        valida = "Digito validador 1 incorreto";
        $(window).NotifyErr(valida);
        return false;
    }
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        valida = "Digito validador 2 incorreto";
        $(window).NotifyErr(valida);
        return false;
    }
    $(window).NotifySucesso("CNPJ Válido");
    return true;
}
function validarCPF(cpf) {
    valida = ""
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') {
        valida = "CPF vazio";
        $(window).NotifyErr(valida);
        return false;
    }
// Elimina CPFs invalidos conhecidos    
    if (cpf.length !== 11) {
        valida = "Qtd. de caracteres inválido";
        $(window).NotifyErr(valida);
        return false;
    }
    if (cpf === "00000000000" ||
            cpf === "11111111111" ||
            cpf === "22222222222" ||
            cpf === "33333333333" ||
            cpf === "44444444444" ||
            cpf === "55555555555" ||
            cpf === "66666666666" ||
            cpf === "77777777777" ||
            cpf === "88888888888" ||
            cpf === "99999999999") {
        valida = "Caracteres repetidos";
        $(window).NotifyErr(valida);
        return false;
    }
// Valida 1o digito 
    var add = 0;
    for (var i = 0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) {
        valida = "Digito validador 1 inválido";
        $(window).NotifyErr(valida);
        return false;
    }
// Valida 2o digito 
    add = 0;
    for (var i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) {
        valida = "Digito validador 2 inválido";
        $(window).NotifyErr(valida);
        return false;
    }
    $(window).NotifySucesso("CPF Válido");
    return true;
}

function logsValidacao() {
    if (urlSys) {
        console.log(valida);
    }
    return valida;
}