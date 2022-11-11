$(document).ready(function(){
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide()

        var activeTab = $(this).attr('href');
        $(activeTab).show()
        return false;
    });

    $('img.logo-inicio').click(function(){
        $('.secciones article').hide();
        $('.secciones article:first').show();
    });
});