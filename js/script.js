$(document).ready(function(){
$('.navbar').hide();
$(window).scroll(function () {
        // set distance user needs to scroll before we fadeIn navbar
        if ($(this).scrollTop() > 50) {
            console.log('k');
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });

})