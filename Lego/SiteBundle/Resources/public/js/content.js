
$( document ).ready(function() {
    
 $('.btn-contact').live('click', function(){
     if($('.contact-main').hasClass('show'))
        $('.contact-main').removeClass('show');
    else
        $('.contact-main').addClass('show');
    });
   $('.btn-log').live('click', function(){
     if($('.account-login-home').hasClass('show'))
        $('.account-login-home').removeClass('show');
    else
        $('.account-login-home').addClass('show');
    });  

 $('.slider').jcarousel({auto: 1, scroll: 1, wrap: 'circular' });
 $('#s4').before('<div id="nav_slides"><div id="nav_sl_wrap"></div></div>') .cycle({
            fx: 'fade',
            speed: '1000',
            timeout: 8000,
            pager: '#nav_sl_wrap'
        });
 
 $('.nav_sl_wrap a').each(function(index) {
        var number = parseInt(index);
        var number2 = index+1
        $(this).text('#' + number + ' '+$(this).text());
}); 
});