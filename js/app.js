var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        console.log(navigator.notification);
        console.log(cordova.device);
        console.log(cordova.file);
        /*cordova.plugins.notification.local.schedule({
         title: 'My first notification',
         text: 'Thats pretty easy...',
         foreground: true
         });*/
    }
};
app.initialize();

function populateSelectEmpresa(){
    
}