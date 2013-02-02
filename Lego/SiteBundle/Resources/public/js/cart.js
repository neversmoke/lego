/******************************************************************************/
// Контроль правильности вводимых данных
/******************************************************************************/

// Константы: надо постоянно синхронизировать с php
var TYPE_FIO_MAXLENGTH = 80;
var TYPE_EMAIL_MAXLENGTH = 40;
var TYPE_COMMENT_MAXLENGTH = 5000;
var TYPE_LOGIN_MAXLENGTH = 10;
var TYPE_LOGIN_MINLENGTH = 2;
var TYPE_LOGIN_REGEXP = /^[a-zA-Z0-9]*$/;
var TYPE_PASSWORD_REGEXP = /^[a-zA-Z0-9]*$/;
var TYPE_PASSWORD_MAXLENGTH = 25;
var TYPE_PASSWORD_MINLENGTH = 6;
var TYPE_TEXT_MAXLENGTH = 255;
var TYPE_EMAIL_REGEXP = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@(([a-zA-Z0-9])+(([a-zA-Z0-9-])*([a-zA-Z0-9])+)*\.)+([a-zA-Z]{2,6})$/;
var TYPE_FULLYEAR_REGEXP = /^[0-9]{4}$/;
var TYPE_NUMBER_REGEXP = /^[0-9]{1,11}$/;
var TYPE_PRICE_REGEXP = /^[0-9]{0,10}([.][0-9]{2})?/;
var TYPE_TEXTSEARCH_MINLENGTH = 4;

// Префикс, который показывается перед сообщением об ошибке ввода данных
var inputErrorMsgPrefix = "Ошибка ввода данных: ";

/******************************************************************************/
// Функции для контоля правильности вводимых данных
/*
	Эти функции работают немного отлично от их php аналогов:
	1) вместо значения им передается id инпута;
	2) Если все в порядке (проверка успешна), ф-ции возвращают true;
	3) Если ошибка, то ф-ция  устанавливает фокус в соответствующий инпут,
	   показывает сообщение об ошибке и возвращает false;
*/
/******************************************************************************/
// Пустое поле или нет
function chEmpty($name, $id) {
	var e = xGetElementById($id);
	if (e.value.length > 0) {
		return true;
	}
	else {
		e.focus();
		alert(inputErrorMsgPrefix + "пустое поле '" + $name + "'!");
		return false;
	}
}

/******************************************************************************/
// Максимальная длина
function chMaxLength($name, $id, $maxlength) {
	var e = xGetElementById($id);
	if (e.value.length <= $maxlength) {
		return true;
	}
	else {
		e.focus();
		alert(inputErrorMsgPrefix + "превышена максимальная длина, поле '" + $name + "'!");
		return false;
	}
}

/******************************************************************************/
// Минимальная длина
function chMinLength($name, $id, $minlength) {
	var e = xGetElementById($id);
	if (e.value.length >= $minlength) {
		return true;
	}
	else {
		e.focus();
		alert(inputErrorMsgPrefix + "минимальная длина (символов) - " + $minlength + ", поле '" + $name + "'!");
		return false;
	}
}

/******************************************************************************/
// Регулярное выражение
function chRegexep($name, $id, $regexp) {
	var e = xGetElementById($id);
	if ($regexp.test(e.value)) {
		return true;
	}
	else {
		e.focus();
		alert(inputErrorMsgPrefix + "недопустимый формат, поле '" + $name + "'!");
		return false;
	}
}

/******************************************************************************/
// Совпадение двух полей (обычно пароль и его подтверждение)
function chMatch($name1, $id1, $name2, $id2) {
	var e1 = xGetElementById($id1);
	var e2 = xGetElementById($id2);
	if (e1.value == e2.value) {
		return true;
	}
	else {
		e1.focus();
		alert(inputErrorMsgPrefix + "поля '" + $name1 + "' и '" + $name2 + "' не совпадают!");
		return false;
	}
}

/******************************************************************************/
// Все проверки полей в одной функции
// Если какую-то проверку делать не надо, то передаем false или NULL вместо него
// Если надо, то "true" или значение
function chFormat($name, $id, $empty, $minlength, $maxlength, $regexp) {
	// Если поле пустое, и ему разрешено быть пустым, то дальнейшие проверки уже 
	// делать не нужно
	var e = xGetElementById($id);
	var isEmpty = (e.value.length == 0);
	return (!$empty || chEmpty($name, $id)) &&
		(isEmpty ||
		 ((!$minlength || chMinLength($name, $id, $minlength)) &&
		  (!$maxlength || chMaxLength($name, $id, $maxlength)) &&
		  (!$regexp || chRegexep($name, $id, $regexp))));
}


/******************************************************************************/
// Корзина, регистрация, профиль
/******************************************************************************/
/*
	Корзина представляет собой 3 массива, хранимых в куках: товары, цены и скидки.
	C[id товара] - тут хранится количество данного товара. Если товара нет в
	  корзине, то элемент массива с индексом [id товара] не установлен
	Price[id товара] - цена товара
	Discont[id товара] - скидка
*/

// Время сохранения товаров в корзине
var CartTimeToLive = 1 * 24 * 60 * 60; // Сутки

/******************************************************************************/
// Добавление товара в корзину
// id - id товара
// price - цена товара
// q - скидка на товар
function addItemCart(id, prid, price, q, nm)
{
		
	// Если товар уже есть в корзине - ничего не делаем
  if (getCookie('C[' + id + ']') == null)
	{
		
	  setCookie('C[' + id + ']',  q, CartTimeToLive);
	  setCookie('I[' + id + ']',  prid, CartTimeToLive);
	  setCookie('P[' + id + ']',   price, CartTimeToLive);
	  //setCookie('Q[' + id + '],q , CartTimeToLive);
	  setCookie('N[' + id + ']',  nm , CartTimeToLive);
	}
}
  
/******************************************************************************/
// Удаление товара из корзины
// id - id товара
function noDeleteItemCart(id)
{
	//deleteCookie('C[' + id + ']');
	//deleteCookie('Price[' + id + ']');
	//deleteCookie('Q[' + id + ']');
	//deleteCookie('Nm[' + id + ']')
}  
  
/******************************************************************************/
// Удаление товара из корзины
// id - id товара
function deleteItemCart(id)
{
	deleteCookie('C[' + id + ']');
	deleteCookie('I[' + id + ']');
	deleteCookie('P[' + id + ']');
	//deleteCookie('Q[' + id + ']');
	deleteCookie('N[' + id + ']')
}
  
/******************************************************************************/
// Очистка корзины
function emptyCart()
{
  deleteCookiesArray('C');
  deleteCookiesArray('I');
  deleteCookiesArray('P');
   deleteCookiesArray('N');
  //deleteCookiesArray('Q');
}

/******************************************************************************/
// Проверяет, находится ли товар в корзине
// id - id товара
// Возвращает true, если товар в корзине, false - иначе
function isItemInCart(id)
{
  if (getCookie('C[' + id + ']') == null) return false;
	return true;
}

/******************************************************************************/
// Возвращает количество данного товара, положенное в корзину
// id - id товара
// Если товара нет в корзине - возвращает 0 (ноль)
function getItemCount(id)
{	
	var cnt = getCookie('C[' + id + ']');
if (cnt == null) 
{
	return 0;
}
else
{
	return cnt;
}

}

/******************************************************************************/
// Устанавливает количество данного товара, положенное в корзину
// id - id товара
// cnt - количество товара
// Если товара нет в корзине - ничего не делает
function setItemCount(id, cnt)
{	
	var oldCnt = getCookie('C[' + id + ']');
  if (oldCnt != null)
	{
	  setCookie('C[' + id + ']', cnt, CartTimeToLive);
	}
}

/******************************************************************************/
// Возвращает цену товара, положенного в корзину
// id - id товара
// Если товара нет в корзине - возвращает null
function getItemPrice(id)
{	
	var prEl = xGetElementById('pr'+ id  );
	if (prEl) 
	{
	var pr = prEl.value;
	return pr;
	}
	else
	{
		return 1;
	
	}
}

/******************************************************************************/
// Возвращает скидку товара, положенного в корзину
// id - id товара
// Если товара нет в корзине - возвращает null
function getItemDiscont(id)
{	
	return getCookie('Discont[' + id + ']');
}

/******************************************************************************/
// Возвращает скидку товара, положенного в корзину
// id - id товара
// Если товара нет в корзине - возвращает null
/*function getItemQ(id)
{	
	return getCookie('Q[' + id + ']');
}*/

/******************************************************************************/
// Возвращает количество различных товаров, положенных в корзину
function getCartSize()
{	
	return getCookiesArraySize('C');
}

/******************************************************************************/
// Возвращает массив id товаров, положенных в корзину
function getCartItems()
{	
	return getCookiesArrayIndexes('C');
}

/******************************************************************************/
// Возвращает суммарную стоимость всех товаров, положенных в корзину
// Пока стоимость рассчитывается по формуле: стоимость = кол-во * (цена - скидка)
function getTotalCartCost()
{	
	var cost  = 0;
	var items = getCartItems();
	
	var rateEl = xGetElementById('inrate' );
	var rate = rateEl.value;
		
	
	for (var i = 0; i <= items.length; i++)
	{
		var id = items[i];
		cost  += getItemCount(id) * getItemPrice(id)  ;
	}
	return cost;
}

/******************************************************************************/
// Возвращает суммарную скидку для всех товаров, положенных в корзину
// Пока скидка рассчитывается по формуле: общая скидка = кол-во * скидка
function getTotalCartDiscont()
{	
	var discont = 0;
	var items   = getCartItems();
	for (var i = 0; i <= items.length; i++)
	{
		var id   = items[i];
		discont += getItemCount(id) * getItemDiscont(id);
	}
	return discont;
}

/******************************************************************************/
// Обработчик удаления товара из корзины
// id - id товара
function formDeleteItemCart(id)
{
	// Удаляем из корзины
	deleteItemCart(id);//Удаляем куки
	// Удаляем с экрана строку таблицы
	var e = xGetElementById('product' + id);
	e.parentNode.removeChild(e);
	// Переномеруем элементы корзины. Могла появиться дырка в номерации
	// Регулярное выражение для поиска ячеек с номерами 
	var re_number = /\bnumber(\d)+/;
	// Заглубляемся в табилцу...
	var tbody = xGetElementsByTagName('tbody', xGetElementById('cart'));
	var tr = xGetElementsByTagName('tr', tbody[0]);
	for(var i = 0; i < tr.length; i++)
	{
		var td = xGetElementsByTagName('td', tr[i]);
		for(var j = 0; j < td.length; j++)
		{
			if (td[j].id.search(re_number) != -1)
			{
				td[j].innerHTML = i;
				break;
			}
		}
	}
	// Обновляем общую цену заказа
	xGetElementById('totalCost').innerHTML = getTotalCartCost().toFixed(2);
	// Если корзина пуста - правим вид
	if (getCartSize() == 0)
		xGetElementById('zCart').innerHTML = '<p class="zPCenter">Корзина пуста!</p>';
	// Обновляем шапку
	refreshCart();
}
  
/******************************************************************************/
// Обработчик очистки корзины
function formEmptyCart()
{
	var items = getCartItems();
	for(var i = 0; i < items.length; i++) formDeleteItemCart(items[i]);
	// Отменим стандартное действие
	return false;
}

/******************************************************************************/
// Обработчик пересчета корзины
function formRecountCart()
{
	var items = getCartItems();
	for(var i = 0; i < items.length; i++)
	{
		var id = items[i];
		var rateEl = xGetElementById('inrate' );
		var rate = rateEl.value;
		
		var cntEl = xGetElementById('count' + id);
		var cnt = cntEl.value;
		var prEl = xGetElementById('pr' + id);
		var pr = prEl.value;
		
		
		/**/
		
			
		// Если ввели фигню - установим количество в 1
		if (isNaN(cnt) || cnt < 0) cnt = 1;
		// Мы продаем товары только целиком
		//cnt = Number(cnt).toFixed(2);//toFixed(2) количество чисел после запятой 
		// Меняем количество в корзине
		setItemCount(id, cnt);
		// Запишем исправленое количество назад
		cntEl.value = cnt;
		// Меняем суммарную стоимость товара getItemPrice
		//xGetElementById('totalPrice' + id).innerHTML =
			//(cnt * rate * pr ).toFixed(2);
		var tot = (cnt * pr ).toFixed(2);
		//alert(rate);
	}
	// Обновляем общую цену заказа
	xGetElementById('totalCost').innerHTML = getTotalCartCost().toFixed(2);
	//xGetElementById('totalCost').innerHTML = tot;
	// Обновляем шапку
	refreshCart();
	// Отменим стандартное действие
	return false;
}
/*
function getTotalCartCost()
{	
	var cost  = 0;
	var items = getCartItems();
	
	var rateEl = xGetElementById('inrate' );
	var rate = rateEl.value;
		
	
	for (var i = 0; i <= items.length; i++)
	{
		var id = items[i];
		cost  += getItemCount(id) *  rate * getItemPrice(id)  ;
	}
	return cost;
}


function getItemPrice(id)
{	
	var prEl = xGetElementById('pr'+ id  );
	if (prEl) 
	{
	var pr = prEl.value;
	return pr;
	}
	else
	{
		return 1;
	
	}
}
*/
/******************************************************************************/
// Обработчик изменения галочки "хочу зарегистрироваться"
function formChangeRegister()
{
	xGetElementById('regInfo').className = (xGetElementById('zRegister').checked) ? '' : 'hide';
	// En: Обновим размеры полей
	bodyimgResize();	
}

/******************************************************************************/
// Обработчик отправки заказа
function formMakeOrder()
{
	// Вначалее пересчитаем корзину
	formRecountCart();
	return (
		chFormat('ФИО', 'zFio', true, false, TYPE_FIO_MAXLENGTH, null) &&
		chFormat('E-mail', 'zEmail', true, false, TYPE_EMAIL_MAXLENGTH, TYPE_EMAIL_REGEXP) &&
		chFormat('Контактный телефон', 'zPhone', true, false, 64, null) &&
		chFormat('Адрес доставки', 'zAddress', true, false, 256, null) &&
		chFormat('Код', 'kcap', true, false, 6, null) &&
		chMaxLength('Дополнительная информация', 'zAddinfo', 500) 
		);
}

/******************************************************************************/
// Обработчик регистрации
function formRegister()
{
	return (
		chFormat('Логин', 'zLn', true, TYPE_LOGIN_MINLENGTH, TYPE_LOGIN_MAXLENGTH, TYPE_LOGIN_REGEXP) &&
	  chFormat('Пароль', 'zPw', true, TYPE_PASSWORD_MINLENGTH, TYPE_PASSWORD_MAXLENGTH, TYPE_PASSWORD_REGEXP) &&
		chMatch('Пароль', 'zPw', 'Подтверждение пароля', 'zPwdconfirm') &&
		chFormat('ФИО', 'zFio', true, false, TYPE_FIO_MAXLENGTH, null) &&
		chEmpty('Дата рождения', 'zDay') &&
		chEmpty('Дата рождения', 'zMonth') &&
		chEmpty('Дата рождения', 'zYear') &&
		chEmpty('Пол', 'zGene') &&
		chFormat('E-mail', 'zEmail', true, false, TYPE_EMAIL_MAXLENGTH, TYPE_EMAIL_REGEXP));
}

/******************************************************************************/
// Обработчик изменения галочки "изменить пароль"
function formProfileChPw()
{
	xGetElementById('chPwInfo').className = (xGetElementById('zChpw').checked) ? '' : 'hide';
	// En: Обновим размеры полей
	bodyimgResize();	
}

/******************************************************************************/
// Обработчик изменения профиля
function formUpdateProfile()
{
	return (
		chFormat('ФИО', 'zFio', true, false, TYPE_FIO_MAXLENGTH, null) &&
		chEmpty('Дата рождения', 'zDay') &&
		chEmpty('Дата рождения', 'zMonth') &&
		chEmpty('Дата рождения', 'zYear') &&
		chEmpty('Пол', 'zGene') &&		
		chFormat('E-mail', 'zEmail', true, false, TYPE_EMAIL_MAXLENGTH, TYPE_EMAIL_REGEXP) &&
		((xGetElementById('zChpw') ? !xGetElementById('zChpw').checked : true) ||
     (chFormat('Старый пароль', 'zPwold', true, TYPE_PASSWORD_MINLENGTH, TYPE_PASSWORD_MAXLENGTH, TYPE_PASSWORD_REGEXP) &&
		  chFormat('Новый пароль', 'zPw', true, TYPE_PASSWORD_MINLENGTH, TYPE_PASSWORD_MAXLENGTH, TYPE_PASSWORD_REGEXP) &&
			chMatch('Новый пароль', 'zPw', 'Подтверждение нового пароля', 'zPwdconfirm'))));
}