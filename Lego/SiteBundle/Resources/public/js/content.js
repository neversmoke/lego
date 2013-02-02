	//**************************************************************************************************
	// Константы
	__AUTH_FORM_AUTH_SUBMIT__ = 'authfrm';
	__FORM_PSW_PARAM__ = 'psw';
	__FORM_PSW_PARAM_OPEN__  = 'pswo';

	//**************************************************************************************************
	// Yen:28-04-2010
	// Дескриптор Ajax-реквестов. Используется для прерывания реквеста.
	ajax_request = null;


//-------------------------------------------------------------------------------------------------
// Поддержка Ajax
	is_supported_ajax = function() {
		return (typeof XMLHttpRequest != "undefined" || typeof window.ActiveXObject != "undefined");
	}
	
	
	//**************************************************************************************************
	// Обработчики событий
	handlers = [];
	handlers[__AUTH_FORM_AUTH_SUBMIT__] = function(e) {
		var pswo = $('#' + __FORM_PSW_PARAM_OPEN__).attr("value");
		// Хешируем пароль
		
		var psw = hex_sha1(pswo);
		
	 	$('#psw' ).attr({'value':psw});
	//	alert ($('#psw' ).val());
		$('#' + __FORM_PSW_PARAM_OPEN__).attr({'value':'***********'});

		return true;
	}
	
	
	handlers["signfrm"] = function(e) {
		 
		var psw1o = $('#psw1o').attr("value");
		var psw2o = $('#psw2o').attr("value");
		//alert (psw2o);
		// Хешируем пароль
		var psw1 = hex_sha1(psw1o);
		var psw2 = hex_sha1(psw2o);
 
	 /*
		alert (psw1);
		alert (psw2);
		*/
		$('#signfrm #psw1').attr({'value':psw1});
		
		
		$('#signfrm #psw1o').attr({'value':'***********'});
		$('#signfrm #psw2').attr({'value':psw2});
		$('#signfrm #psw2o').attr({'value':'***********'});

		return true;
	}
	
 

function cartProduct_byChk(is_del_id) {
refreshCart();
	//window.alert ("swq");
	return true;
}

// Добавить (удалить) товар из корзины
function cartProduct(id, idpr, price, q, nm) {

			addItemCart(id, idpr, price,q, nm);

			refreshCart();
	//window.alert ("swq");
	return true;
}

 
// Обновить информацию корзины
function refreshCart() {
	//$("#cart_poz").text(  getCartSize()+" позиций");
	//xGetElementById("cart_poz").innerHTML = getCartSize();	
	//xGetElementById("shortcartDiscount").innerHTML = getTotalCartDiscont().toFixed(2);	
	//xGetElementById("shortcartCost").innerHTML = getTotalCartCost().toFixed(2);	
}

// Добавить (удалить) товар массива сравнения
function compareProduct(id, price, q, nm) {

if(isItemInCompare(id)) {
		// Удаляем из массива сравнения
		deleteItemCompare(id);
		//window.alert ("Товар '"+nm+"' удален из массива сравнения!");
	} else {
		// Добавляем в массив сравнения
		addItemCompare(id,price,q, nm);
		//window.alert ("Товар '"+ nm+"' добавлен в массив сравнения!");
	}
	
	//refreshCart();
	return true;
}

function isItemInCompare(id)
{
  if (getCookie('Compare[' + id + ']') == null) return false;
	return true;
}

function deleteItemCompare(id)
{
	deleteCookie('Compare[' + id + ']');
}

function addItemCompare(id, price, q, nm)
{	// Если товар уже есть в корзине - ничего не делаем
  if (getCookie('Compare[' + id + ']') == null)
	{
	  setCookie('Compare[' + id + ']',  q, CartTimeToLive);
	}
}
//-------------------------------------------------------------------------------------------------
// Разбор строки url и формирования хеша параметров
function get_content_params() {
	var params = new Object();
	var href = document.location.href.replace(/#.*$/, '');
	if (href.indexOf("?") != -1) {
		var vars = href.substring(href.indexOf("?") + 1,href.length).split(/\?|&/);
		for (var v in vars) {
				var p = vars[v].split('=');
				params[p[0]] = p[1];
		}
	}
	return params;
}

	//**************************************************************************************************
	// Инициализация
	function init() {
	  // Параметры контента в одном массиву
		set_html_handlers();
		
		// refreshCart();
		
		if(is_supported_ajax()) {
	 	set_ajax_handlers();
	 	// Индикатор загрузки Ajax
	 	//$('#ajax_loader').ajaxStart(function(){$(this).show();});
	 	//$('#ajax_loader').ajaxStop(function(){$(this).hide();});
		//load_ajax_content("http://www.ityre.com/", "ityre");
		  
		
		}
		
	}

	//**************************************************************************************************
	// Обычные обработчики HTML-елементов
function set_html_handlers() {
    
$(".bigfoto").fancybox({'zoomSpeedIn':	0, 'zoomSpeedOut':	0,  'overlayShow':	true}); 
$('ul.sf-menu').superfish({
				delay:       1000, 		// one second delay on mouseout 
				animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
				speed:       'normal',  // faster animation speed 
				autoArrows:  false,   // generation of arrow mark-up (for submenu) 
				dropShadows: false   // drop shadows (for submenu)
			});

} //END HTML HANDLERS
	

	   
//-------------------------------------------------------------------------------------------------
// Ajax-Обработчики
function set_ajax_handlers() {
 	$(".a_compare").click(
		function() {
			//alert ("dwew" );
			load_ajax_content("index.php?id=1" , "g_compare");
		}
	);
  
 
	  
				
			
 
}
//-------------------------------------------------------------------------------------------------
// Загрузка контента
function load_ajax_content(url,blck) {


 // Yen:28-04-2010 Прерывание запроса Ajax, если такой выполнялся.
	if(ajax_request) {ajax_request.abort();}
	// Yen:28-04-2010 Выполнение запроса Ajax
	ajax_request = $.ajax({
  type: "GET",
  url: url + '&ajax=1&blck=' + blck,
  dataType: "html",
  complete: function() {
  	// Yen:28-04-2010 Выполнение реквеста закончено
		ajax_request = null;
  },
  success: function(data,textS,xhr) {
  		if(xhr.status) {
  			// Yen:28-04-2010 Workaround. Пустой div id="content"
  			// складывается, если внутри нет данных. Добавим br для такого случая.
  			(data) ? true : data = "<br/>";
	  		$('#' + blck).empty().append(data);
			//set_html_handlers();
			set_ajax_handlers();
	  	}
	  	// Yen:28-04-2010 Для случая, когда нужно
	  	// определить обработчки снова - иначе добавляются новые обработчики и
	  	// дублируются.
			//set_html_handlers();
			//set_ajax_handlers();
		 }
	})

 
}
 
 
 
 
