var FileContent;
function alertCallback() {
}
function mensagem(mensagem, cb, titulo, botao) {
    navigator.notification.alert(mensagem, cb, titulo, botao);
}
function CriarArquivo(arquivo) {
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, successCallback, errorCallback);
    function successCallback(fs) {
        fs.getFile(arquivo, {create: true}, function (fileEntry) {
            mensagem("Arquivo Criado: " + fileEntry.name + ', ' + fileEntry.fullPath, alertCallback, "Aviso", "ok");
        }, errorCallback);
    }
}
function EscreverArquivo(arquivo, dataObj, conteudo, isAppend, tipo) {
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, successCallback, errorCallback);
    function successCallback(fs) {
        fs.getFile(arquivo, {}, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function () {
                    mensagem("Escrito com Sucesso", alertCallback, "Aviso", "ok");
                    readFile(fileEntry);
                };
                fileWriter.onerror = function (e) {
                    mensagem("Falha ao Escrever: " + e.toString(), alertCallback, "Aviso", "ok");
                };
                if (!dataObj) {
                    dataObj = new Blob([conteudo], {type: tipo});
                }
                if (isAppend) {
                    try {
                        fileWriter.seek(fileWriter.length);
                    } catch (e) {
                        mensagem("file doesn't exist!", alertCallback, "Aviso", "ok");
                    }
                }
                fileWriter.write(dataObj);
            });
        }, errorCallback);
    }
}
function LerArquivo(arquivo) {
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, successCallback, errorCallback);
    function successCallback(fs) {
        fs.getFile(arquivo, {}, function (fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    //mensagem("Leitura realizada com sucesso: " + this.result, alertCallback, "Aviso", "ok");
                    //displayFileData(fileEntry.fullPath + ": " + this.result);
                    mensagem("Leitura realizada com sucesso", alertCallback, "Aviso", "ok");
                    FileContent = this.result;
                };
                reader.readAsText(file);
            }, errorCallback);
        }, errorCallback);
    }
}
function ConteudoArquivo() {
    return FileContent();
}
function DeletarArquivo(arquivo) {
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, successCallback, errorCallback);
    function successCallback(fs) {
        fs.getFile(arquivo, {}, function (fileEntry) {
            fileEntry.remove(function () {
                mensagem('Arquivo Removido', alertCallback, "Aviso", "ok")
            }, errorCallback);
        }, errorCallback);
    }
}
function errorCallback(error) {
    mensagem("Erro: " + error.code, alertCallback, "Aviso", "ok");
}
function textToJson(text) {
    return JSON.parse(text);
}