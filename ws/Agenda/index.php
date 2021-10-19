<?php include"../../header.php"; ?>

<div class="container">
    <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#sistema"><i class="fas fa-puzzle-piece"></i> Sistema</a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane container active" id="sistema">
            <div class="row justify-content-center">
                <div class="col-sm-3 col-sm-push-3 my-3 d-flex align-items-stretch justify-content-center">
                    <a href="categorias.php" class="btn btn-secondary wd-10">
                        <i class="fas fa-angle-double-right"></i> Categorias
                    </a>
                </div>
                <hr>
                <div class="col-sm-3 col-sm-push-3 my-3 d-flex align-items-stretch justify-content-center">
                    <a href="eventos.php" class="btn btn-secondary wd-10">
                        <i class="fas fa-angle-double-right"></i> Eventos
                    </a>
                </div>
                <hr>
            </div>
        </div>
    </div>
</div>

<?php include"../../footer.php"; ?>