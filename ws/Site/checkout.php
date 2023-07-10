<section id="checkoutvenda">
    <div class="modal fade" role="dialog" aria-labelledby="" aria-hidden="true" id="FinalizarCompra">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Finalizar Compra</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <section class="checkout spad">
                        <div class="container">
                            <div class="checkout__form">
                                <div class="row justify-content-center">
                                    <div class="col-8 mx-auto">
                                        <div v-if="flag==true" class="checkout__order">
                                            <h4>Dados do pedido</h4>
                                            <div class="checkout__order__products">Produtos <span>Total</span></div>
                                            <ul>
                                                <li v-for="(item,key) in carroCompra()">
                                                    <div class="row  align-items-center">
                                                        <img class="col-3 img-thumbnail" v-bind:src="app.empresasanunciando.Midias(listar(key).IdAlbum)[0].UrlMidia">
                                                        <div class="col-9 text-center">
                                                            <div class="row">
                                                                <div class="col-6 text-center">
                                                                    {{item}} x {{listar(key).NomeProduto}} 
                                                                </div>
                                                                <div class="col-6">
                                                                    <span>R$ {{total(HasPromo(listar(key)._id['$oid'],listar(key).Preco),item)}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                            <button onclick="$('#modalLoginSys').modal()" class="btn">Acesse para finalizar o pedido</button>

                                            <div class="checkout__order__subtotal">Subtotal <span>R$ {{SubTotal}}</span></div>
                                            <div class="checkout__order__subtotal">Frete <span>R$ 0</span></div>
                                            <div class="checkout__order__total">Total + Frete<span>R$ {{SubTotal}}</span></div>
                                            <br>
                                            <div v-if='logado===true'>
                                                <div class="row">
                                                    <div class="checkout__input__checkbox col-12">
                                                        <label for="diff-acc">
                                                            Enviar em um endereço diferente?
                                                            <input type="checkbox" v-model="outroEndereco" id="diff-acc">
                                                            <span class="checkmark"></span>
                                                        </label>
                                                        <fieldset v-if="outroEndereco===true">
                                                            <legend>Endereço de entrega</legend>
                                                            <div class="checkout__input">
                                                                <p>CEP<span>*</span></p>
                                                                <input type="text" v-on:focus="app.sys.mascara" class="cep"  v-on:blur="app.sys.buscaCEP('checkoutvenda')" v-model="CEP">
                                                            </div>
                                                            <div class="checkout__input">
                                                                <p>Logradouro<span>*</span></p>
                                                                <input type="text" v-model="Rua">
                                                            </div>
                                                            <div class="checkout__input">
                                                                <p>Numero<span>*</span></p>
                                                                <input type="text" v-model="Num">
                                                            </div>
                                                            <div class="checkout__input">
                                                                <p>complemento<span>*</span></p>
                                                                <input type="text" v-model="Complemento">
                                                            </div>
                                                            <div class="checkout__input">
                                                                <p>Bairro<span>*</span></p>
                                                                <input type="text" v-model="Bairro">
                                                            </div>
                                                            <div class="checkout__input">
                                                                <p>Cidade<span>*</span></p>
                                                                <input type="text" v-model="Cidade">
                                                            </div>
                                                            <div class="checkout__input">
                                                                <p>Estado<span>*</span></p>
                                                                <input type="text" v-model="UF">
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div class='row'>
                                                    <div class="col-12">
                                                        <p>Observação<span>*</span></p>
                                                        <textarea type="text" class="form-control"
                                                                  placeholder="Observação" v-model="observacao"></textarea>
                                                        <p>Método de pagamento</p>
                                                        <div>
                                                            <label for="boleto">
                                                                <input v-model="metodo" value="boleto" type="radio" id="boleto"> Boleto <i class="fas fa-receipt"></i>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label for="pix">
                                                                <input v-model="metodo" value="pix" type="radio" id="pix"> Pix <i class="fas fa-qrcode"></i>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label for="cartao">
                                                                <input v-model="metodo" value="credito" type="radio" id="cartao"> Crédito <i class="far fa-credit-card"></i>
                                                            </label>
                                                            <fieldset v-if="metodo==='credito'">
                                                                <div class="checkout__input">
                                                                    <p>Nome<span>*</span></p>
                                                                    <input v-model="Nome" type="text">
                                                                </div>
                                                                <div class="checkout__input">
                                                                    <p>Cartão<span>*</span></p>
                                                                    <input v-model="cartao" type="text">
                                                                </div>
                                                                <div class="checkout__input">
                                                                    <p>Validade<span>*</span></p>
                                                                    <input v-model="expiracao" type="text">
                                                                </div>
                                                                <div class="checkout__input">
                                                                    <p>CVV<span>*</span></p>
                                                                    <input v-model="cvv" type="text">
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                        <button type="submit" v-on:click="SalvarPedido()" class="site-btn">Salvar Pedido <i class="fab fa-gratipay"></i></button>
                                                        <br><br>
                                                        <button type="submit" v-on:click="FinalizarPedido()" class="site-btn">Realizar Compra <i class="fas fa-shopping-bag"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="ws/Site/checkout.js"></script>