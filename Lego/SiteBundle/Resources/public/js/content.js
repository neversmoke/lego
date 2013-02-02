
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
    
});