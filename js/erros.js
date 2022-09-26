"use strict";
app["erros"] = new Vue({
    el: '#modalInputError',
    data: {
        errors: [],
        flag: true
    },
    methods:{
        valida(){
            /*if(this.errors.length>0){
                return true;
            }else{
                return false;
            }*/
            return false;
        }
    }
});
