"use strict";
var contype = "application/x-www-form-urlencoded";
var urlSys = false;
var auth = "";
var preAuth = null;
var tac = "";

function authenticate() {
    auth = window.localStorage.getItem("auth");
}

function post(url, data) {
    authenticate();
    logSandBox(WebServer(urlSys) + url);
    return $.ajax({
        type: "POST",
        url: WebServer(urlSys) + url,
        crossDomain: true,
        async: false,
        data: data,
        headers: {
            "Authorization": auth,
            "Content-Type": contype,
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function get(url, data) {
    authenticate();
    return $.ajax({
        type: "GET",
        url: WebServer(urlSys) + url,
        crossDomain: true,
        async: false,
        data: data,
        headers: {
            "Authorization": auth,
            "Content-Type": contype,
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function host(path, op, ac) {
    authenticate();
    var link = $.ajax({
        type: "POST",
        url: WebServer(urlSys) + "Hosts/pHost",
        crossDomain: true,
        async: false,
        data: {
            "path": $(window).Encrypt(path),
            "op": $(window).Encrypt(op),
            "ac": $(window).Encrypt(ac)
        },
        headers: {
            "Authorization": auth,
            "Content-Type": contype,
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
    return link;
}

function gost(path, op, ac) {
    authenticate();
    var link = $.ajax({
        type: "GET",
        url: WebServer(urlSys) + "Hosts/gHost",
        crossDomain: true,
        async: false,
        data: {
            "authorization": getAuth(),
            "path": $(window).Encrypt(path),
            "op": $(window).Encrypt(op),
            "ac": $(window).Encrypt(ac)
        },
        headers: {
            "Authorization": auth,
            "Content-Type": contype,
        }
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
    return link;
}

function postCross(url, data) {
    return $.ajax({
        type: "POST",
        url: url,
        crossDomain: true,
        async: false,
        data: data,
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function getCross(url, data) {
    return $.ajax({
        type: "GET",
        url: url,
        crossDomain: true,
        async: false,
        data: data,
    }).done(function (result) {
        logSandBox(result);
        return result;
    }).fail(function (result) {
        logSandBox(result);
        return result;
    }).responseText;
}

function setAuth(key) {
    window.localStorage.setItem("auth", key);
}

function getAuth() {
    return window.localStorage.getItem("auth");
}

function setCharset(char) {
    contype = contype + ";" + char;
}

function setContentType(con) {
    contype = con;
}

function DefaultContentType() {
    contype = "application/x-www-form-urlencoded";
}

function sandBox(amb) {
    urlSys = amb;
}

function WebServer(amb) {
    var host = window.location.hostname;
    if (host.includes("rtiempresarial")) {
        if (window.localStorage.getItem("sandbox") !== null) {
            amb = window.localStorage.getItem("sandbox");
        }
        if (amb) {
            return "https://rtiempresarial.com.br:8080/staging/api/";
        } else {
            return "https://rtiempresarial.com.br:8080/webservice/api/";
        }
    } else {
        if (window.localStorage.getItem("sandbox") !== null) {
            amb = window.localStorage.getItem("sandbox");
        }
        if (amb) {
            return "https://bienclube.com.br:8080/staging/api/";
        } else {
            return "https://bienclube.com.br:8080/webservice/api/";
        }
    }
}

function logSandBox(logs) {
    if (urlSys === true || app.sys.sandbox === true) {
        console.log($(window).Decrypt(logs));
        console.log(logs);
    }
}