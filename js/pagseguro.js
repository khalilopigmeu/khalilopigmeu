var itens = {};
var hash;
function setItem(Item) {
    for (var i = 0; i <= Item.length - 1; i++) {
        itens["itemId" + (i + 1)] = Item[i][0];
        itens["itemDescription" + (i + 1)] = Item[i][1];
        itens["itemAmount" + (i + 1)] = Item[i][2];
        itens["itemQuantity" + (i + 1)] = Item[i][3];
        itens["itemWeight" + (i + 1)] = Item[i][4];
    }
    return itens;
}

function emailLoja(email) {
    var dados = {
        "receiverEmail": email
    };
    return dados;
}

function holder(Holder) {
    var dados = {
        "creditCardHolderName": Holder[0],
        "creditCardHolderCPF": Holder[1],
        "creditCardHolderBirthDate": Holder[2],
        "creditCardHolderAreaCode": Holder[3],
        "creditCardHolderPhone": Holder[4]
    };
    return dados;
}

function setCodPedido(id) {
    var dados = {
        "reference": id
    };
    return dados;
}

function getInstallments(valor, parcela) {
    PagSeguroDirectPayment.getInstallments({
        amount: valor,
        maxInstallmentNoInterest: parcela,
        brand: cardType(),
        success: function (response) {
            return response;
        },
        error: function (response) {
            return response;
        },
        complete: function (response) {
            return response;
        }
    });
}

function setInstallments(installments) {
    var dados = {
        "installmentQuantity": installments[0],
        "installmentValue=": installments[0],
        "noInterestInstallmentQuantity": installments[0],
    }
    return dados;
}

function sender(Send) {
    PagSeguroDirectPayment.onSenderHashReady(function (response) {
        if (response.status == 'error') {
            console.log(response.message);
            return false;
        }
        hash = response.senderHash; //Hash estará disponível nesta variável.
    });
    var Sends = {"senderName": Send[0],
        "senderAreaCode": Send[1],
        "senderPhone": Send[2],
        "senderEmail": Send[3],
        "senderHash": hash
    };
    return Sends;
}

function conecta(email, token) {
    var dados = {
        "email": email,
        "token": token
    };
    parser = new DOMParser();
    setCharset("charset=ISO-8859-1");
    var xml = postCross("https://ws.pagseguro.uol.com.br/v2/sessions", dados);
    xml = parser.parseFromString(xml, "text/xml");
    PagSeguroDirectPayment.setSessionId(xml.getElementsByTagName("id").nodeValue);
}

function boleto(extra) {
    var dados = {
        "paymentMode": "default",
        "paymentMethod": "boleto",
        "currency": "BRL",
        "extraAmount": extra//"0.00"
    };
    return dados;
}

function credito(extra) {
    var dados = {
        "paymentMode": "default",
        "paymentMethod": "creditCard",
        "currency": "BRL",
        "extraAmount": extra//"0.00"
    };
    return dados;
}

function debitoItau(extra) {
    var dados = {
        "paymentMode": "default",
        "paymentMethod": "eft",
        "bankName": "itau",
        "currency": "BRL",
        "extraAmount": extra//"0.00"
    };
    return dados;
}

function shipping(Comprador) {
    var dados = {
        "shippingAddressStreet": Comprador[0],
        "shippingAddressNumber": Comprador[1],
        "shippingAddressComplement": Comprador[2],
        "shippingAddressDistrict": Comprador[3],
        "shippingAddressPostalCode": Comprador[4],
        "shippingAddressCity": Comprador[5],
        "shippingAddressState": Comprador[6],
        "shippingAddressCountry": Comprador[7],
        "shippingType": Comprador[8],
        "shippingCost": Comprador[9]
    };
    return dados;
}

function billing(Comprador) {
    var dados = {
        "billingAddressStreet": Comprador[0],
        "billingAddressNumber": Comprador[2],
        "billingAddressComplement": Comprador[3],
        "billingAddressDistrict": Comprador[4],
        "billingAddressPostalCode": Comprador[5],
        "billingAddressCity": Comprador[6],
        "billingAddressState": Comprador[7],
        "billingAddressCountry": Comprador[8]
    };
    return dados;
}

function cardType(bin) {
    PagSeguroDirectPayment.getBrand({
        cardBin: bin,
        success: function (response) {
            return response;
        },
        error: function (response) {
            return response;
        },
        complete: function (response) {
            return response;
        }
    });
}

function cardtoken(numero, cvv, mes, ano) {
    PagSeguroDirectPayment.createCardToken({
        cardNumber: numero,
        brand: cardType(numero.substring(0, 5)),
        cvv: cvv,
        expirationMonth: mes,
        expirationYear: ano,
        success: function (response) {
            return response;
        },
        error: function (response) {
            return response;
        },
        complete: function (response) {
            return response;
        }
    });
}

function HostsPs(host) {
    switch (host) {
        case 1:
            return "https://ws.pagseguro.uol.com.br/v2/checkout";
            break;
        case 2:
            return "https://ws.pagseguro.uol.com.br/v2/transactions/cancels";
            break;
        case 3:
            return "https://ws.pagseguro.uol.com.br/v2/transactions/refunds";
            break;
        case 4:
            return "https://ws.pagseguro.uol.com.br/v2/transactions/";
            break;
        case 5:
            return "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout";
            break;
        case 6:
            return "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/cancels";
            break;
        case 7:
            return "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/refunds";
            break;
        case 8:
            return "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/";
            break;

    }
}