
$(function (e) {
    var table = $('#tblCategoriaEventos').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json"
        },
        "data": JSON.stringify(app.CategoriaEventos.src),
        "columns": [
            {"data": "NomeCategoria"}, {"data": "Cor"}, {"data": "Acessos"},
        ],
        "columnDefs": [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            }
        ],
        "scrollY": "30vh",
        "scrollX": true,
        "scrollCollapse": true,
        "paging": false,
        "stateSave": true,
        "deferRender": true,
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json",
            "decimal": ",",
            "thousands": "."
        },
        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select> < option value = "" > </option> < /select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex($(this).val());
                            column.search(val ? '^' + val + '$' : '', true, false).draw();
                        });
                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>');
                });
            });
        }
    });
    table.columns().every(function () {
        var that = this;
        $('input', this.footer()).on('keyup change clear', function () {
            if (that.search() !== this.value) {
                that.search(this.value).draw();
            }
        });
    });
    $('#tblCategoriaEventos tbody').on('click', 'tr', function () {
        app.CategoriaEventos.row = table.row(this).data();
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    $('#tblCategoriaEventos tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Buscar ' + title + '" />');
    });
    $('#tblCategoriaEventos a.toggle-vis').on('click', function (e) {
        e.preventDefault();
        var column = table.column($(this).attr('data-column'));
        column.visible(!column.visible());
    });
    $(document).on('show.bs.modal', '.modal', function (e) {
        app.CategoriaEventos.ac = e.currentTarget.id;
    });
    $(document).on('hide.bs.modal', '.modal', function (e) {
        app.CategoriaEventos.ac = e.currentTarget.id;
    });
    $('.tblCategoriaEventos tbody').on('click', 'tr', function () {
        
        app.CategoriaEventos.row = table.row(this).data();
    });
    $(".tblCategoriaEventos").on("click", ".btncadastrar", function (e) {
        e.preventDefault();
        app.CategoriaEventos.clear();
        app.CategoriaEventos.new();
        $("#nav-tab a[href='#tab-form']").tab("show");
    });
    $(".tblCategoriaEventos").on("click", ".btnalterar", function (e) {
        e.preventDefault();
        if (app.CategoriaEventos.row === null) {
            alert("Selecione uma linha na tabela");
        } else {
            $("#nav-tab a[href='#tab-form']").tab("show");
            app.CategoriaEventos.edt();
        }
    });
});