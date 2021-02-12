jQuery(document).ready(function(){

    jQuery(".bt-topo").hide();

    jQuery('.bt-topo').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1000) {
            jQuery('.bt-topo').fadeIn();
        } else {
            jQuery('.bt-topo').fadeOut();
        }
    });
});