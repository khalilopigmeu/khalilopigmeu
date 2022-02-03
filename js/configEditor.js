CKEDITOR.editorConfig = function (config) {
    config.toolbar = [
        ["Bold", "Italic", "Underline", "StrikeThrough", "-", "Undo", "Redo", "-", "Cut",
            "Copy", "Paste", "PasteText", "PasteFromWord", "Find", "Replace", "Scayt", "Print", "-",
            "Outdent", "Indent", "NumberedList", "BulletedList", "Blockquote", "CreateDiv"],
        ["-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"],
        ["Image", "Link", "TextColor", "BGColor", "Format", "Font", "FontSize"],
        ["Table", "-", "Maximize"], ["HorizontalRule", "-", "SpecialChar"]
    ];
    config.entities_latin = false;
    config.removePlugins = "elementspath";
    config.resize_enabled = false;
    config.extraPlugins = 'autogrow';
    config.font_names = 'GoogleWebFonts;' + config.font_names;
    config.autoGrow_minHeight = 250;
    config.autoGrow_maxHeight = 800;
    config.startupFocus = true;
    config.placeHolder = "digite o seu texto aqui";
    CKEDITOR.env.isCompatible = true;
};
