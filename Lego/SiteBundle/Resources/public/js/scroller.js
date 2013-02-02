$(document).ready(function(){

	$(window).bind("load", function() {
																	
 	var $scrollPane = $( "#scroller" );
	var $scroller   = $( "#scroller div.scroll_container" );
	var $slider     = $( "#slider" );
	var $items		= $( '#scroller div.item' ).length;
	var $thumbs 	= $( '#scroller_thumbnails' );

	if ( $scrollPane.size() > 0 ){		
	
		$scroller.css({ opacity : 0, visibility: 'visible', marginLeft: 0 });
			
			var $new_width = 0;
			
			$('#scroller div.item').each(function(){ 
												  
				var $_img = $(this).find('.item-overflow img');
												  
				$(this).find('.item-caption').css({ opacity : 0 });
				
				$(this).width( $_img.width() );
				
				$new_width = $new_width + $(this).outerWidth(true);
				
			}).hover(
				
				function(){					
					$(this).find('img').stop().animate({ opacity : 0.2 });
					$(this).stop().animate({ opacity : 1, top : -10 });
					$(this).find('.item-caption').stop().animate({ opacity : 1 });
				},
				
				function(){ 
					$(this).find('img').stop().animate({ opacity : 1 });
					
					if( !$(this).hasClass( 'ui-tabs-hide' ) ){
						$(this).stop().animate({ opacity : 1, top: 0 });
					}
					
					$(this).find('.item-caption').stop().animate({ opacity : 0 });
				}
			);
			
			$scroller.width( $new_width );
			
			$scroller.parent().animate({ height: $('#scroller div.item').outerHeight(true) }, 500, function(){

				$scrollPane.css({ backgroundImage : 'none' });
			
				$scroller.animate({ opacity: 1 }, 750, function(){
				});
			})	
			
			var $initValue 	= $( "#scroller div.item" ).size() / 2 ;
			var $firstElem  = $( "#scroller div.item" ).eq( $initValue );
			
			$i = $initValue;
			
			$margin = 0;
			
			while($i >= 0){
				var $cur_item = $( '#scroller div.item' ).eq($i);
				$margin =  $margin + $cur_item.outerWidth(true);
				$i--;
			}			
			
			$scroller.css({ marginLeft: -$margin  + $(window).width() / 2 + $( '#scroller div.item' ).eq( $initValue ).outerWidth( true ) / 2 });		
	}


	var $tabs = $scroller.tabs({
							   
		select: function( event, ui ) {			
			
			$slider.slider( "value", ui.index );
			
			$i = ui.index;
			
			$margin = 0;
			
			while($i >= 0){
				var $cur_item = $( '#scroller div.item' ).eq($i);
				$margin =  $margin + $cur_item.outerWidth(true);
				$i--;
			}
							
			$scroller.stop().animate({ 
				marginLeft: -$margin  + $(window).width() / 2 + $( '#scroller div.item' ).eq( ui.index ).outerWidth( true ) / 2 
				}, {
					duration: 1000,
					specialEasing: { 
						marginLeft: "easeInOutCirc" 
					},
					complete: function() {
						$('div.item:not(.ui-tabs-hide)',$scroller).animate({ opacity: 1 });
						$('div.ui-tabs-hide',$scroller).animate({ opacity: 1 });
					}
				}
			);
		},
		
		show : function( event, ui ) {
			$('li',$thumbs).removeClass( 'current' );
			$thumbs.find(" a[rel='"+ (ui.index + 1) +"'] ").parent().addClass( 'current' );			
		}
		
	});
	
	$tabs.tabs( "option", "selected", $( "#scroller div.item" ).size() / 3 );


	$('li a',$thumbs).click(function() {
									
		$tabs.tabs('select', $(this).attr( 'rel' ) );
		return false;		
	});	

	var $scrollbar = $slider.slider({
		value: $( "#scroller div.item" ).size() / 3,
		animate: true,
		min: 0,
		max: $scroller.tabs( "length" ) - 1,
			slide: function( event, ui ) {
				$tabs.tabs( "select", ui.value );
			}
	});
		
	var handleHelper = $scrollbar.find( ".ui-slider-handle" ).wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
		
	$thumbs.css({ opacity : 0, visibility: 'visible' });
	$slider.css({ opacity : 0, visibility: 'visible' });
	
	function sizeScrollbar() {
		
		
		$w_thumb = 0;
		$thumbs.find('li').each(function(){
			$w_thumb = $w_thumb + $(this).outerWidth(true);																				  
		})
		
		$thumbs.width( $w_thumb ).css({ margin: '0 auto'} ).animate({ opacity : 1 });
		
		$slider.width( $thumbs.outerWidth() ).css({ margin: '0 auto'} ).animate({ opacity : 1 });
		
		handleHelper.width( "" ).width( $scrollbar.outerWidth() - ( $(".ui-slider-handle").outerWidth() * 2 - 12 ) );		
			
	}

	$(window).load( sizeScrollbar() );

	$( 'a.scroll-buttons' , $thumbs ).click(function(event){		
		
		var $selected = $tabs.tabs('option', 'selected');

		if( $(this).hasClass('next') && $selected <= $('li',$thumbs).length ) {
			$tabs.tabs( "select", $selected + 1 );
		}

		if( $(this).hasClass('prev') && $selected >= 0 ) {
			$tabs.tabs( "select", $selected - 1 );
		}
		
		event.preventDefault();

	});
});

});