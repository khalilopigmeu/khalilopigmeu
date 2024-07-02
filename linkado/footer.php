<div class="container-fluid">
    <div class="row text-center justify-content-center">
        <div class="col-7 mx-auto mt-3">
            <div class="card">
                <div class="card-header">
                    Obrigado por utilizar nossas soluções!
                </div>
                <div class="card-body">
                    <h5 class="card-title">Centralize seus dados</h5>
                    <p class="card-text">Centralize seus links, diminua suas urls e acompanhe o resultado de seu marketing</p>
                    <a  class="btn btn-sm btn-primary" data-backdrop="false" data-toggle="modal" data-target="#Cadastro" href='#'>Link já!</a>
                </div>
            </div>
        </div>
    </div>
</div>
<p class="text-white text-center justify-content-center">
    Todos os direitos reservados. <br>
    Desenvolvido por RTI Empresarial® <br>
    CNPJ: 05.575.304.0001-09
</p>
<br>
</div>
<div id="SysConsole">
    <!-- <div id='loader'>
         <div class="progress">
             <div class="progress-bar progress-bar-striped" role="progressbar" v-bind:style="'width:'+progress+'%'" v-bind:aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
     </div>-->
</div>
<div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="modalInputError">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Aviso</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <p v-if="errors.length">
                    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul class="my-4 py-4">
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>
<script src=" https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.js"></script>
<script src="https://cdn.pongongo.com.br/js/mask.js"></script>
<script src="https://cdn.pongongo.com.br/jsapi/currency.min.js"></script>
<script src="js/start.js"></script>
<script src="js/lista.js"></script>
<script src="js/tagLista.js"></script>
<!--QRCodes-->
<script src='https://cdn.pongongo.com.br/jsapi/easy.qrcode.min.js'></script>
<!--Notify-->
<script src="https://rawgit.com/notifyjs/notifyjs/master/dist/notify.js"></script>
<!--Google OAuth2-->
<script async defer src="https://apis.google.com/js/api.js"></script>
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@^3"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@next/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@1.2.1"></script>
</body>
</html>
