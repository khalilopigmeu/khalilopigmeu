<script>
    app.sys.paginar('<?php echo $pageName; ?>');
</script>
<nav aria-label="Page navigation">
    <ul class="pagination text-center justify-content-center">
        <li class="page-item">
            <span class="page-link" @click="app.sys.setPage(0,'<?php echo $pageName; ?>')"><i class="fas fa-angle-double-left"></i></span>
        </li>
        <li class="page-item mr-1">
            <span class="page-link" v-if="(app.sys.currentPage['<?php echo $pageName; ?>']-1)>-1" @click="app.sys.setPage(app.sys.currentPage['<?php echo $pageName; ?>']-1,'<?php echo $pageName; ?>')"><i class="fas fa-chevron-left"></i></span>
        </li>
        <li class="page-item" v-for="pageNumber in app.sys.totalPages('<?php echo $pageName; ?>')" v-if="Math.abs(pageNumber - app.sys.currentPage['<?php echo $pageName; ?>']) < 3 || pageNumber == app.sys.totalPages('<?php echo $pageName; ?>') || pageNumber == 0">
            <span class="page-link"  @click="app.sys.setPage(pageNumber-1,'<?php echo $pageName; ?>')"  :class="{current: app.sys.currentPage['<?php echo $pageName; ?>'] === pageNumber-1, last: (pageNumber == app.sys.totalPages('<?php echo $pageName; ?>') - 1 && Math.abs(pageNumber - app.sys.currentPage['<?php echo $pageName; ?>']) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - app.sys.currentPage['<?php echo $pageName; ?>']) > 3)}">{{ pageNumber }}</span>
        </li>
        <li class="page-item ml-1">
            <span class="page-link" v-if="(app.sys.currentPage['<?php echo $pageName; ?>']+1)<app.sys.totalPages('<?php echo $pageName; ?>')"  @click="app.sys.setPage(app.sys.currentPage['<?php echo $pageName; ?>']+1,'<?php echo $pageName; ?>')"><i class="fas fa-chevron-right"></i></span>
        </li>
        <li class="page-item">
            <span class="page-link" @click="app.sys.setPage(app.sys.totalPages('<?php echo $pageName; ?>')-1,'<?php echo $pageName; ?>')"><i class="fas fa-angle-double-right"></i></span>
        </li>
    </ul>
</nav>