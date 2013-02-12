
$( document ).ready(function() {
    $('.fancybox').fancybox();
 $('.btn-contact').live('click', function(){
     if($('.contact-main').hasClass('show'))
        $('.contact-main').removeClass('show');
    else
        $('.contact-main').addClass('show');
    });
    
   $('.filter_sort_open').live('click', function(){
        $('.filter_sort ul').toggle() ;
    });  
   $('.filter_limit_open').live('click', function(){
        $('.filter_limit ul').toggle() ;
    });  

   $('.btn-log').live('click', function(){
     if($('.account-login-home').hasClass('show'))
        $('.account-login-home').removeClass('show');
    else
        $('.account-login-home').addClass('show');
    });

 $('.slider').jcarousel({auto: 1, scroll: 1, wrap: 'circular' });
 $('#slider_in_tov').jcarousel({auto: 1, scroll: 1, wrap: 'circular' });
 $('#s4').before('<div id="nav_slides"><div id="nav_sl_wrap"></div></div>') .cycle({
            fx: 'fade',
            speed: '1000',
            timeout: 8000,
            pager: '#nav_sl_wrap'
        });
 
 $('.nav_sl_wrap a').each(function(index) {
        var number = parseInt(index);
        var number2 = index+1;
        $(this).text('#' + number + ' '+$(this).text());
}); 

 $(function() {
        function split( val ) {
            return val.split( /,\s*/ );
        }
        function extractLast( term ) {
            return split( term ).pop();
        }
        var parameter;
        $( ".search_with_param" )
        // don't navigate away from the field on tab when selecting an item
        .bind( "keydown", function( event ) {
            search_route = $(this).data("route");
            search_link = $(this).data("link");
            search_type_link = $(this).data("type-link");
            after_search_action = $(this).data("after-search");
            parameter = $(this).data("parameter");
        if ($(this).val().length == 0){
            if (search_type_link == 'input'){
                $(search_link).val("");
                if (after_search_action !== undefined)
                        $(after_search_action).trigger("click");
            }
        }
        if ( event.keyCode === $.ui.keyCode.TAB &&
        $( this ).data( "autocomplete" ).menu.active ) {
        event.preventDefault();
        }
        })
        .autocomplete({
            source: function( request, response ) {
                $.getJSON( "/itc/ru/"+search_route+".json", {
                    term: extractLast( request.term ),
                    parameter: parameter
                }, response );
            },
           search: function() {
                var term = extractLast( this.value );
                if ( term.length < 1 ) {
                    return false;
                }
            },
            focus: function() {
                return false;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                terms.pop();
                terms.push( ui.item.label );
                this.value = terms;
                console.log('fd')
                $('.auto_prod_id').val($("span[role=status]").html());
                    $(search_link).val(ui.item.value);
                    $(after_search_action).trigger("click");
                return false;
            }
        });
        
        var search_route;
        var search_link;
        var search_type_link;
        var after_search_action;
        
        $( ".entity_search" )
        .bind( "keydown", function( event ) {
            search_route = $(this).data("route");
            search_link = $(this).data("link");
            search_type_link = $(this).data("type-link");
            after_search_action = $(this).data("after-search");
        if ($(this).val().length == 0){
            if (search_type_link == 'input'){
                $(search_link).val("");
                if (after_search_action !== undefined)
                        $(after_search_action).trigger("click");
            }
        }
        if ( event.keyCode === $.ui.keyCode.TAB &&
        $( this ).data( "autocomplete" ).menu.active ) {
        event.preventDefault();
        }
        })
        .autocomplete({
            source: function( request, response ) {
                $.getJSON( "/itc/ru/"+search_route+".json", {
                    term: extractLast( request.term )
                }, response );
            },
            search: function() {
                var term = extractLast( this.value );
                if ( term.length < 1 ) {
                    return false;
                }
            },
            focus: function() {
                return false;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                terms.pop();
                terms.push( ui.item.label );
                if (search_type_link != 'input'){
                    terms.push( "" );
                    terms.join( ", " );
                }
                this.value = terms;
                
                if (search_type_link == 'input'){
                    $(search_link).val(ui.item.value);
                }else if (search_type_link == 'select'){
// $(search_link).empty().append( '<option value="'+ui.item.value+'" selected="selected">'+ui.item.label+'</option>')
                }else{
                    $(search_link).append( '<option value="'+ui.item.value+'" selected="selected">'+ui.item.label+'</option>');
                    
                }
                if (after_search_action !== undefined)
                        $(after_search_action).trigger("click");
                return false;
            }
        });
        
    });






});
function Amount(edit){
    var value = edit.val();
    var classes = edit.attr('name');
    var href=$("#product_"+classes).attr('href');
    str = href.substring(0, href.length - href.split("/").slice(-1).length)
    $("#product_"+classes).attr('href', str+value);
}
function InputReset(input){
    input.val('');
};