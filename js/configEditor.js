CKEDITOR.editorConfig = function (config) {
    config.toolbar = [
        ['Source', '-', 'ExportPdf', 'Preview', 'Print', '-', 'Templates' ],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
        ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'],
        ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['Link', 'Unlink'],
        ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak'],
        ['Styles', 'Format', 'Font', 'FontSize'],
        ['TextColor', 'BGColor'],
        ['Maximize', 'ShowBlocks'],
        ['About'],
    ];
    config.entities_latin = false;
    config.removePlugins = "elementspath";
    config.removePlugins= 'exportpdf';
    config.resize_enabled = false;
    config.extraPlugins = 'autogrow';
    config.font_names = 'GoogleWebFonts;' + config.font_names;
    config.autoGrow_minHeight = 250;
    config.autoGrow_maxHeight = 800;
    config.startupFocus = true;
    config.placeHolder = "digite o seu texto aqui";
    CKEDITOR.env.isCompatible = true;
};
