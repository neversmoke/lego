// Все, что объявлено в этой функции, видимо только в ее пределах. Только глобальные преременные,
// установленные в функции сохранают свое значение за ее пределами.
(function() {
/**
 * @fileoverview <b>jsQwerlib</b> - JavaScript-библиотека команды Qwer.<br/><br/>
 * <b>Разделы:</b>
 * <ul>
 * <li>Отладка</li>
 * <li>Бенчмаркинг</li>
 * <li>Работа с Cookies</li>
 * <li>Работа с DOM</li>
 * <li>Контроль пользовательского ввода</li>
 * </ul>
 * jsQwerlib независима от других библиотек. Для ее работы не требуются никакие сторонние библиотеки.
 * <br/><br/>
 * <b>Внимание!!!</b> Функции контроля правильности вводимых пользователем данных работают немного
 * отлично от их php-аналогов:<br/>
 * 1) Вместо значения им передается id инпута;<br/>
 * 2) Если все в порядке (проверка успешна), функции возвращают true;<br/>
 * 3) Если ошибка, то функции устанавливают фокус в соответствующий инпут, показывают сообщение
 * об ошибке и возвращают false.<br/><br/>
 * <b>Что нового:</b><br/><br/>
 * <i>Версия 0.1a:</i> начальный релиз.
 * @author Виктор Ененко, Фёдор Гавловский, Виктор Непийпа
 * @version 0.1a
 */
//**************************************************************************************************
// Класс jsQwerlib - контейнер для констант, функций и классов, сделан по принципу jQuery
//**************************************************************************************************

//**************************************************************************************************
// Конструктор и описание класса
//**************************************************************************************************
	/**
	 * Не делает ничего. Так как нет необходимости в создании экземпляров данного класса.
	 * @class Класс-контейнер для констант и функций. Сделан по принципу jQuery.<br/>
	 * Содержимое класса доступно через глобальные переменные <b><code>$Q</code></b> и
	 * <b><code>jsQwerlib</code></b> (точнее <b><code>window.$Q</code></b> и
	 * <b><code>window.jsQwerlib</code></b>).<br/><br/>
	 * <i>Например:</i>
	 * <pre>
	 * if ($Q.isCookiesSupported()) {
	 * 	$Q.setCookie("test", 1000);
	 * }</pre>
	 * @constructor
	 */
	function jsQwerlib() {
	};


//**************************************************************************************************
// Константы
//**************************************************************************************************
/**
 * Версия jsQwerlib.
 * <br/>Значение: <code>"0.1a"</code>
 * @type string
 */
	jsQwerlib.VERSION = "0.1a";

//**************************************************************************************************
// Контроль правильности вводимых данных
//**************************************************************************************************
// !!! Константы: надо постоянно синхронизировать с phpQwerlib
/**
 * Значение: <code>10</code>
 * @type int
 */
	jsQwerlib.TYPE_LOGIN_MAXLENGTH = 10;

/**
 * Значение: <code>2</code>
 * @type int
 */
	jsQwerlib.TYPE_LOGIN_MINLENGTH = 2;

/**
 * Значение: <code>/^[a-zA-Z0-9]*$/</code>
 * @type RegExp
 */
	jsQwerlib.TYPE_LOGIN_REGEXP = /^[a-zA-Z0-9]*$/;

/**
 * Значение: <code>/^[a-zA-Z0-9]*$/</code>
 * @type RegExp
 */
	jsQwerlib.TYPE_PASSWORD_REGEXP = /^[a-zA-Z0-9]*$/;

/**
 * Значение: <code>25</code>
 * @type int
 */
	jsQwerlib.TYPE_PASSWORD_MAXLENGTH = 25;

/**
 * Значение: <code>5</code>
 * @type int
 */
	jsQwerlib.TYPE_PASSWORD_MINLENGTH = 5;

/**
 * Значение: <code>80</code>
 * @type int
 */
	jsQwerlib.TYPE_FIO_MAXLENGTH = 80;

/**
 * Значение: <code>40</code>
 * @type int
 */
	jsQwerlib.TYPE_EMAIL_MAXLENGTH = 40;

/**
 * Значение: <code>/^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*&#64;(([a-zA-Z0-9])+(([a-zA-Z0-9-])*([a-zA-Z0-9])+)*\.)+([a-zA-Z]{2,6})$/;</code>
 * @type RegExp
 */
	jsQwerlib.TYPE_EMAIL_REGEXP = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@(([a-zA-Z0-9])+(([a-zA-Z0-9-])*([a-zA-Z0-9])+)*\.)+([a-zA-Z]{2,6})$/;

/**
 * Значение: <code>255</code>
 * @type int
 */
	jsQwerlib.TYPE_TEXT_MAXLENGTH = 255;

/**
 * Значение: <code>5000</code>
 * @type int
 */
	jsQwerlib.TYPE_COMMENT_MAXLENGTH = 5000;

/**
 * Значение: <code>/^[0-9]{4}$/</code>
 * @type RegExp
 */
	jsQwerlib.TYPE_FULLYEAR_REGEXP = /^[0-9]{4}$/;

/**
 * Значение: <code>/^[0-9]{1,11}$/</code>
 * @type RegExp
 */
	jsQwerlib.TYPE_NUMBER_REGEXP = /^[0-9]{1,11}$/;

/**
 * Значение: <code>/^[0-9]{0,10}([.][0-9]{1,2})?$/</code>
 * @type RegExp
 */
	jsQwerlib.TYPE_PRICE_REGEXP = /^[0-9]{0,10}([.][0-9]{1,2})?$/;

/**
 * Значение: <code>4</code>
 * @type int
 */
	jsQwerlib.TYPE_TEXTSEARCH_MINLENGTH = 4;

/**
 * Значение: <code>4</code>
 * @type int
 */
	jsQwerlib.TYPE_CAPTCHA_LENGTH = 4;

/**
 * Префикс, который показывается перед сообщением об ошибке ввода данных пользователем.
 * <br/>Значение: <code>"Ошибка ввода данных: "</code>
 * @type string
 */
	jsQwerlib.inputErrorMsgPrefix = "Ошибка ввода данных: ";


//**************************************************************************************************
// Отладка
//**************************************************************************************************
/**
 * Включение отладочного режима: <code>true</code> - включен, <code>false</code> - выключен.
 * <br/>Значение: <code>false</code>
 *
 * <br/><br/>В отладочном режиме разрешен вывод информации в отладочное окно.
 * @type boolean
 */
	jsQwerlib.__DEBUG__ = false;


//**************************************************************************************************
// Методы и внутренние классы
//**************************************************************************************************
// Отладка
//**************************************************************************************************

//**************************************************************************************************
// Класс jsQwerlib.DebugWin - работа с отладочным окном
//**************************************************************************************************
	/**
	 * Не делает ничего. Нет необходимости создавать экзампляры данного класса.
	 * @class Работа с отладочным окном. Приватный класс, чтобы объединить отладочные методы и
	 * переменный, а также скрыть от пользователя то, что ему не нужно видеть.
	 * @constructor
	 * @private
	 */
	jsQwerlib.DebugWin = function() {
	};

//**************************************************************************************************
// Константы и переменные
	// id элементов
	jsQwerlib.DebugWin.winId      = "jsQwerlib_DebugWin_winId";
	jsQwerlib.DebugWin.textId     = "jsQwerlib_DebugWin_textId";
	jsQwerlib.DebugWin.textContId = "jsQwerlib_DebugWin_textContId";
	jsQwerlib.DebugWin.toolContId = "jsQwerlib_DebugWin_toolContId";

	jsQwerlib.DebugWin.splitterId = "jsQwerlib_DebugWin_splitterId";
	jsQwerlib.DebugWin.bodyId     = "jsQwerlib_DebugWin_bodyId";
	jsQwerlib.DebugWin.bodyContId = "jsQwerlib_DebugWin_bodyContId";
	jsQwerlib.DebugWin.testId1    = "jsQwerlib_DebugWin_testId1";
	jsQwerlib.DebugWin.testId2    = "jsQwerlib_DebugWin_testId2";

	jsQwerlib.DebugWin.captionId  = "jsQwerlib_DebugWin_captionId";
	jsQwerlib.DebugWin.borderLId  = "jsQwerlib_DebugWin_borderLId";
	jsQwerlib.DebugWin.borderLTId = "jsQwerlib_DebugWin_borderLTId";
	jsQwerlib.DebugWin.borderTId  = "jsQwerlib_DebugWin_borderTId";
	jsQwerlib.DebugWin.borderRTId = "jsQwerlib_DebugWin_borderRTId";
	jsQwerlib.DebugWin.borderRId  = "jsQwerlib_DebugWin_borderRId";
	jsQwerlib.DebugWin.borderRBId = "jsQwerlib_DebugWin_borderRBId";
	jsQwerlib.DebugWin.borderBId  = "jsQwerlib_DebugWin_borderBId";
	jsQwerlib.DebugWin.borderLBId = "jsQwerlib_DebugWin_borderLBId";

	// Отладочное окно и элемент, в который выводятся сообщения
	jsQwerlib.DebugWin.win  = null;
	jsQwerlib.DebugWin.text = null;

	// Время хранение настроек в куках, в секундах
	jsQwerlib.DebugWin.cookieTime = 365 * 24 * 60 * 60;

	// Размеры и положение окна по умолчанию, а также названия cookie, в которых они хранятся
	// Высота и ширина области для вывода текста
	jsQwerlib.DebugWin.wWidth  = 500;
	jsQwerlib.DebugWin.wHeight = 200;
	jsQwerlib.DebugWin.wLeft = jsQwerlib.DebugWin.defaultWLeft = 0;
	jsQwerlib.DebugWin.wTop  = jsQwerlib.DebugWin.defaultWTop  = 0;
	jsQwerlib.DebugWin.wWidthCookie  = "jsQwerlib_DebugWin_wWidth";
	jsQwerlib.DebugWin.wHeightCookie = "jsQwerlib_DebugWin_wHeight";
	jsQwerlib.DebugWin.wLeftCookie   = "jsQwerlib_DebugWin_wLeft";
	jsQwerlib.DebugWin.wTopCookie    = "jsQwerlib_DebugWin_wTop";
	// Прозрачность окна в процентах
	jsQwerlib.DebugWin.opacity = 80;
	jsQwerlib.DebugWin.opacityCookie = "jsQwerlib_DebugWin_opacity";

	// Высота фрейма по умолчанию, cookie для хранения
	jsQwerlib.DebugWin.fHeight = 200;
	jsQwerlib.DebugWin.fHeightCookie = "jsQwerlib_DebugWin_fHeight";

	// Минимальные размеры
	jsQwerlib.DebugWin.minWWidth  = 100;
	// В Експлорере окно с высотой 0 открывается на всю реальную высоту содержимого
	jsQwerlib.DebugWin.minWHeight = 50;
	jsQwerlib.DebugWin.minFHeight = 20;

	// Наравление текста: -1 - снизу вверх, 1 - сверху вниз, cookie для хранения и id элемента
	jsQwerlib.DebugWin.direction       = -1;
	jsQwerlib.DebugWin.directionCookie = "jsQwerlib_DebugWin_direction";
	jsQwerlib.DebugWin.directionId     = "jsQwerlib_DebugWin_directionId";
	// Тип отладочного окна: 1 - фрейм, 2 - плавающее окошко, cookie для хранения и id элемента
	jsQwerlib.DebugWin.type       = 1;
	jsQwerlib.DebugWin.typeCookie = "jsQwerlib_DebugWin_type";
	jsQwerlib.DebugWin.typeId     = "jsQwerlib_DebugWin_typeId";
	// Размер и цвет сплиттера и рамки окна, за которую изменяется его размер
	jsQwerlib.DebugWin.splitterSize  = 3;
	jsQwerlib.DebugWin.splitterColor = "#A000A0";

	// Изначальные паддинг и маржин элемента body и курсор (заменяется при изменении размера окна)
	jsQwerlib.DebugWin.bodyMargin;
	jsQwerlib.DebugWin.bodyPadding;
	jsQwerlib.DebugWin.bodyCursor = null;

	// Разница между реальной высотой слоя, в котором будет распологаться body, и устанавливаемой
	// через свойство CSS height (используется только при фрейме)
	jsQwerlib.DebugWin.bodyDH;

	// Координаты мышки при изменении размеров отладочного окна: объект {x, y}
	jsQwerlib.DebugWin.mouseCoords;
	// Участок бордюра, за который производится изменение размеров или перемещение окна, и его курсор
	jsQwerlib.DebugWin.moveTarget = null;
	jsQwerlib.DebugWin.moveCursor = null;

	// Координаты страницы, соответствующие левому верхнему углу окна: объект {x, y}
	jsQwerlib.DebugWin.pageOffset;

	// Прирост размеров окна при нажатии мышки на бордюре (или заголовке) и передвижении курсора
	// в сторону увеличения координат на 1 пиксель по каждой координатной оси.
	// объект {dX, dY}
	// Например, если нажали мышку на левом верхнем угле, то при передвижении мышки на 1 пиксель вниз
	// и на один пиксель вправо размеры окна уменьшатся на 1 пиксель по ширине и на 1 пиксель по
	// высоте (отрицательный прирост): {-1, -1}, если тянем за низ окна (не угол) - {0, 1}, если тянем
	// за заголовок, то прирост равен нулю: {0, 0).
	jsQwerlib.DebugWin.dSize;

//**************************************************************************************************
	/**
	 * Создает отладочное окно.
	 */
	jsQwerlib.DebugWin.create = function()
	{
		// Показываем окно только если включен отладочный режим и окна еще нет
		if (this.win) return;

		// Загрузим настройки из cookies
		if (jsQwerlib.getCookie(this.wWidthCookie))
			this.wWidth = Number(jsQwerlib.getCookie(this.wWidthCookie));
		if (jsQwerlib.getCookie(this.wHeightCookie))
			this.wHeight = Number(jsQwerlib.getCookie(this.wHeightCookie));
		if (jsQwerlib.getCookie(this.wLeftCookie))
			this.wLeft = Number(jsQwerlib.getCookie(this.wLeftCookie));
		if (jsQwerlib.getCookie(this.wTopCookie))
			this.wTop = Number(jsQwerlib.getCookie(this.wTopCookie));
		if (jsQwerlib.getCookie(this.opacityCookie))
			this.opacity = Number(jsQwerlib.getCookie(this.opacityCookie));

		if (jsQwerlib.getCookie(this.fHeightCookie))
			this.fHeight = Number(jsQwerlib.getCookie(this.fHeightCookie));

		if (jsQwerlib.getCookie(this.directionCookie))
			this.direction = Number(jsQwerlib.getCookie(this.directionCookie));
		if (jsQwerlib.getCookie(this.typeCookie))
			this.type = Number(jsQwerlib.getCookie(this.typeCookie));

		// Стиль без отступов и бордюра и стиль линка
		var eStyle = "margin:0px; padding:0px; border:0;";
		var aStyle = "border:0; font-family:Arial,Helvetica,sans-serif; color:#000080; font-size:11px;";

		// Линки на команды
		var clearLink = '<a onClick="jsQwerlib.DebugWin.clear();" href="javascript:void(0)" style="' +
			aStyle + '" title="Clear debug window - Ctrl+Alt+Shift+C">Clear</a>';
		var directionLink = '<a id="' + this.directionId +'" onClick="jsQwerlib.DebugWin.changeMode();" href="javascript:void(0)" style="' +
			aStyle + '" title="Change output mode: prepend before or append after - Ctrl+Alt+Shift+M">' +
			((this.direction == 1) ? "Prepend" : "Append") + '</a>';
		var typeLink = '<a id="' + this.typeId +'" onClick="jsQwerlib.DebugWin.changeType();" href="javascript:void(0)" style="' +
			aStyle + '" title="Change debug window type: static frame or transparent floating window - Ctrl+Alt+Shift+T">' +
			((this.type == 1) ? "Window" : "Frame") + '</a>';
		var destroyLink = '<a onClick="jsQwerlib.DebugWin.destroy();" href="javascript:void(0)" style="' +
			aStyle + '" title="Close debug window - Ctrl+Alt+Shift+X">Close</a>';
		var opacityDownLink = '<a onClick="jsQwerlib.DebugWin.changeOpacity(true);" href="javascript:void(0)" ' +
			'style="' + aStyle + '" title="Fade out debug window - Ctrl+Alt+Shift+<">[-]</a>';
		var opacityUpLink = '<a onClick="jsQwerlib.DebugWin.changeOpacity(false);" href="javascript:void(0)" ' +
			'style="' + aStyle + '" title="Fade in debug window - Ctrl+Alt+Shift+>">[+]</a>';
		var winHelpText = "Hotkeys:\\nHide/show debug window - Ctrl+Alt+Shift+H\\n" +
			"Move debug window to default position - Ctrl+Alt+Shift+D\\n" +
			"Stop debug window moving/resizing - Esc";
		var winHelpLink = '<a onClick="alert(\'' + winHelpText + '\');" href="javascript:void(0)" ' +
			'style="' + aStyle + '" title="Show invisible hotkeys">?</a>';

		// Смотрим, у нас фрейм сверху страницы или плавающее прозрачное окно
		if (this.type == 1)
		{
			// Запомним маржин и паддинг body и бордюры, мы их обнулим.
			this.bodyMargin = jsQwerlib.getStyle(document.body, "margin-top") + " " +
				jsQwerlib.getStyle(document.body, "margin-right") + " " +
				jsQwerlib.getStyle(document.body, "margin-bottom") + " " +
				jsQwerlib.getStyle(document.body, "margin-left");
			this.bodyPadding = jsQwerlib.getStyle(document.body, "padding-top") + " " +
				jsQwerlib.getStyle(document.body, "padding-right") + " " +
				jsQwerlib.getStyle(document.body, "padding-bottom") + " " +
				jsQwerlib.getStyle(document.body, "padding-left");

			// Немного переформатируем содержимое документа
			var bodyHtml  = document.body.innerHTML;
			// Вычислим высоту и стиль элемента, который будет содержать контент body
			var docHeight = document.body.clientHeight - this.fHeight - this.splitterSize;
			var bodyStyle = "background:transparent; " +
				"margin:" +	this.bodyMargin +	"; padding:" + this.bodyPadding +	";";

			// Обнулим маржин, паддинг и бордюр документа
			document.body.style.margin  = "0px";
			document.body.style.padding = "0px";

			// Переделаем структуру: наверх добавим отладочное окно, а содержимое body вставим в окно под
			// ним
			document.body.innerHTML =
				'<div id="' + this.winId + '" style="' + eStyle + '">' +
					'<table border="0" cellpadding="0" cellspacing="0" style="' + eStyle + '">' +
						'<tr style="' + eStyle + '">' +
							'<td width="100%" style="' + eStyle + '">' +
								'<div id="' + this.textContId + '" style="height:' + this.fHeight + 'px; overflow:auto; ' +
									eStyle + ' background-color:#ffffff;">' +
									'<div id="' + this.textId + '" style="font-family: \'Courier New\',Courier,monospace;' +
										'color: #000000; font-size:13px; margin:3px; padding:0px; border:0; background: transparent;">' +
									'</div>' +
								'</div>' +
							'</td>' +
							'<td style="' + eStyle + '">' +
								'<div id="' + this.toolContId + '" style="height:' + this.fHeight + 'px; width:60px; overflow:hidden; ' +
									eStyle + ' border-left:1px solid #777777; background-color:#dddddd">' +
									'<div style="margin:3px; padding:0px; border:0; background: transparent;">' +
										clearLink + '<br/>' +	directionLink + '<br/>' +	typeLink + '<br/>' +	destroyLink +
									'</div>' +
								'</div>' +
							'</td>' +
						'</tr>' +
					'</table>' +
				'</div>' +
				'<div id="' + this.splitterId + '" style="height:' + this.splitterSize + 'px; cursor:s-resize;' +
					eStyle + ' background-color:' + this.splitterColor + ';"><!----></div>' +
				'<div id="' + this.bodyContId + '" style="height:' + docHeight + 'px; overflow:auto; ' + eStyle + ' background: transparent;">' +
					// Поскольку Експлорер выдаёт высоту элемента включая бордюры, падинги и маржины,
					// а Мозила и Опера нет, то чтобы не морочиться мы добавим слои сверху и снизу нужного нам
					// слоя, по разнице координат которых и определим высоту нашего слоя
					'<div id="' + this.testId1 + '" style="height:3px; ' + eStyle + '"><!----></div>' +
					'<div id="' + this.bodyId + '" style="height:100%; ' + bodyStyle + '"></div>' +
					'<div id="' + this.testId2 + '" style="height:3px; ' + eStyle + '"><!----></div>' +
				'</div>';

			// Разница между реальной высотой и той, которую устанавливали. Реальная высота элемента
			// получается больше, поэтому, чтобы получить высоту X, надо установить на эту разницу меньше
			this.bodyDH = jsQwerlib.getPosition(this.testId2).top -
				jsQwerlib.getPosition(this.testId1).top - 3 - docHeight;

			// Заменим измерительные элементы содержимым body
			jsQwerlib.getElementById(this.bodyContId).innerHTML =
				'<div id="' + this.bodyId + '" style="height:' + (docHeight - this.bodyDH) + 'px; ' + bodyStyle + '">' +
					bodyHtml +
				'</div>';

			// При изменении размеров окна броузера надо корректировать размеры
			jsQwerlib.addEvent(window, "resize", this.onResize);

			// Обработчик нажатия мышки на сплиттере
			jsQwerlib.addEvent(this.splitterId, "mousedown", this.mouseDown);
		}
		else
		{
			// Отладочное окно должно сохранять своё положение независимо от скроллирования окна броузера.
			// Поэтому к координатам отладочного окна надо прибавлять координаты страницы, соответствующие
			// левому верхнему углу окна броузера
			this.pageOffset = jsQwerlib.getPageOffset();

			var win = document.createElement('div');
			win.id = this.winId;
			// Експлорер не поддерживает аттрибут style, придется устанавливать стили поштучно
			win.style.border = "0";
			win.style.margin = "0px";
			win.style.padding = "0px";
			win.style.position = "absolute";
			win.style.width = this.wWidth + "px";
			win.style.top = (this.wTop + this.pageOffset.y) + "px";
			win.style.left = (this.wLeft + this.pageOffset.x) + "px";
			win.style.overflow = "visible";
			win.style.zIndex = "1000000";
			win.style.background = "transparent";
			win.style.opacity = this.opacity / 100;
			// Для Эксплорера прозрачность
			win.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.opacity + ")";

			// Стиль бордюра
			var bStyle = eStyle + " background-color:" + this.splitterColor + ";";

			win.innerHTML =
				'<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="' + eStyle + '">' +
					'<tr style="' + eStyle + 'height:' + this.splitterSize +'px;">' +
						'<td id="' + this.borderLTId + '" style="' + bStyle +	'cursor:nw-resize;">' +
							'<div style="' + eStyle + 'width:' + this.splitterSize + 'px;"><!----></div>' +
						'</td>' +
						'<td id="' + this.borderTId + '" width="100%" style="' + bStyle + 'cursor:n-resize;">' +
							'<div style="' + eStyle + '"><!----></div>' +
						'</td>' +
						'<td id="' + this.borderRTId + '" style="' + bStyle + 'cursor:ne-resize;">' +
							'<div style="' + eStyle + 'width:' + this.splitterSize + 'px;"><!----></div>' +
						'</td>' +
					'</tr>' +
					'<tr style="' + eStyle + 'height:100%;">' +
						'<td id="' + this.borderLId + '" style="' + bStyle +	'cursor:w-resize;">' +
							'<div style="' + eStyle + 'width:' + this.splitterSize + 'px;"><!----></div>' +
						'</td>' +
						'<td width="100%" style="' + eStyle + '">' +
							'<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="' + eStyle + '">' +
								'<tr style="' + eStyle + '">' +
									'<td id="' + this.captionId + '" style="' + eStyle + ' background-color:#FF0000;' +
										'color:#FFFFFF; padding:1px; font-family:Arial,Helvetica,sans-serif; font-size:12px;' +
										'font-weight:bold; text-align:center; cursor:move;">Debug Window' +
									'</td>' +
								'</tr>' +
								'<tr style="' + eStyle + 'height:100%;">' +
									'<td valign="top" style="' + eStyle + ' border:1px solid #000000;">' +
										'<div id="' + this.textContId + '" style="height:' + this.wHeight + 'px; width:' +
											this.wWidth + 'px; overflow:auto; ' + eStyle + ' background-color:#ffffff;">' +
											'<div id="' + this.textId + '" style="font-family: \'Courier New\',Courier,monospace;' +
												'color:#000000; font-size:13px; margin:3px; padding:0px; border:0; background:transparent;">' +
											'</div>' +
										'</div>' +
									'</td>' +
								'</tr>' +
								'<tr style="' + eStyle + '">' +
									'<td style="' + eStyle + 'text-align:center; padding:1px; background-color:#dddddd;">' +
										winHelpLink + ' ' + clearLink + ' ' + directionLink + ' ' + typeLink + ' ' +
										destroyLink + ' ' + opacityDownLink + ' ' + opacityUpLink +
									'</td>' +
								'</tr>' +
							'</table>' +
						'</td>' +
						'<td id="' + this.borderRId + '" style="' + bStyle + 'cursor:e-resize;">' +
							'<div style="' + eStyle + 'width:' + this.splitterSize + 'px;"><!----></div>' +
						'</td>' +
					'</tr>' +
					'<tr style="' + eStyle + 'height:' + this.splitterSize +'px;">' +
						'<td id="' + this.borderLBId + '" style="' + bStyle +	'cursor:sw-resize;">' +
							'<div style="' + eStyle + 'width:' + this.splitterSize + 'px;"><!----></div>' +
						'</td>' +
						'<td id="' + this.borderBId + '" width="100%" style="' + bStyle + 'cursor:s-resize;">' +
							'<div style="' + eStyle + '"><!----></div>' +
						'</td>' +
						'<td id="' + this.borderRBId + '" style="' + bStyle + 'cursor:se-resize;">' +
							'<div style="' + eStyle + 'width:' + this.splitterSize + 'px;"><!----></div>' +
						'</td>' +
					'</tr>' +
				'</table>';

			// Вставим окно в документ
			document.body.appendChild(win);

			// Обработчики нажатия мышки на заголовке и бордюре
			jsQwerlib.addEvent(this.captionId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderLId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderLTId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderTId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderRTId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderRId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderRBId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderBId, "mousedown", this.mouseDown);
			jsQwerlib.addEvent(this.borderLBId, "mousedown", this.mouseDown);
			// Обработчик скроллинга окна
			jsQwerlib.addEvent(window, "scroll", this.scroll);
		}

		jsQwerlib.addEvent(document, "keydown", this.keyDown);

		// Сохраним отладочное окно и элемент для вывода текста
		this.win  = jsQwerlib.getElementById(this.winId);
		this.text = jsQwerlib.getElementById(this.textId);
	};

//**************************************************************************************************
	/**
	 * Уничтожает отладочное окно.
	 */
	jsQwerlib.DebugWin.destroy = function()
	{
		with (jsQwerlib.DebugWin)
		{
			// Нет окна - нечего делать
			if (!win) return;

			// Если было перемещение окна - остановим его
			stopMovement();

			// Уберем общие обработчики событий
			jsQwerlib.removeEvent(document, "keydown", keyDown);

			if (type == 1)
			{
				// Уберем обработчик изменения размера и установим содержимое body и измененные стили назад
				jsQwerlib.removeEvent(window, "resize", onResize);
				document.body.innerHTML = jsQwerlib.getElementById(bodyId).innerHTML;
				document.body.style.margin  = bodyMargin;
				document.body.style.padding = bodyPadding;
			}
			else
			{
				jsQwerlib.removeEvent(window, "scroll", scroll);
				win.parentNode.removeChild(win);
			}

			// Окна уже нет
			win  = null;
			text = null;
		}
	};

//**************************************************************************************************
	/**
	 * Выводит текст в отладочное окно. Служебные HTML-символы (см. {@link jsQwerlib#htmlspecialchars})
	 * не экранируются!
	 * @param {string} str текст для вывода;
	 * @param {boolean} newline перевод строки: <code>true</code> - да. Необязательный параметр.
	 * Значение по умолчанию - <code>false</code>.
	 */
	jsQwerlib.DebugWin.write = function(str, newline)
	{
		with (jsQwerlib.DebugWin)
		{
			// Создадим окно, если его еще нет
			create();
			if (newline) str += "<br/>";
			if (direction < 0) {
				text.innerHTML = str + text.innerHTML;
			}
			else {
				text.innerHTML += str;
			}
		}
	};

//**************************************************************************************************
	/**
	 * Очистка окна.
	 */
	jsQwerlib.DebugWin.clear = function()
	{
		with (jsQwerlib.DebugWin)
		{
			if (text) text.innerHTML = "";
		}
	};

//**************************************************************************************************
	/**
	 * Изменение направления текста.
	 */
	jsQwerlib.DebugWin.changeMode = function()
	{
		with (jsQwerlib.DebugWin)
		{
			direction *= -1;
			jsQwerlib.setCookie(directionCookie, direction, cookieTime);
			var e = jsQwerlib.getElementById(directionId);
			if (e) {
				e.innerHTML = ((direction == 1) ? "Prepend" : "Append");
			}
		}
	};

//**************************************************************************************************
	/**
	 * Изменение типа окна.
	 */
	jsQwerlib.DebugWin.changeType = function()
	{
		with (jsQwerlib.DebugWin)
		{
			var html = text.innerHTML;
			destroy();
			(type == 2) ? type = 1 : type++;
			jsQwerlib.setCookie(typeCookie, type, cookieTime);
			create();
			text.innerHTML = html;
		}
	};

//**************************************************************************************************
	/**
	 * Пошаговое изменение прозрачности окна.
	 * @param {boolean} fadeOut уменьшать прозрачность: <code>true</code> - да.
	 */
	jsQwerlib.DebugWin.changeOpacity = function(fadeOut)
	{
		with (jsQwerlib.DebugWin)
		{
			if (fadeOut) {
				opacity -= 10;
				if (opacity < 20) opacity = 20;
			}
			else {
				opacity += 10;
				if (opacity > 100) opacity = 100;
			}
			win.style.opacity = opacity / 100;
			win.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=" + opacity + ")";
			jsQwerlib.setCookie(opacityCookie, opacity, cookieTime);
		}
	};


//**************************************************************************************************
	/**
	 * Устанавливает положение и размеры отладочного окна.
	 * @param {int} l лево;
	 * @param {int} t верх;
	 * @param {int} w ширина;
	 * @param {int} h высота.
	 */
	jsQwerlib.DebugWin.setPosition = function(l, t, w, h)
	{
		with (jsQwerlib.DebugWin)
		{
			// Отладочное окно должно сохранять своё положение независимо от скроллирования окна броузера.
			// Поэтому к координатам отладочного окна надо прибавлять координаты страницы, соответствующие
			// левому верхнему углу окна броузера
			po = jsQwerlib.getPageOffset();

			// Если какой-то параметр изменился - устанавливаем его и запоминаем в куках
			// Чтобы не было глюков с изменением размеров контейнера в Мозиле, будем устанавливать
			// размер размер окна равным размеру текстовой области. Всё равно на вид это не влияет:
			// либо контейнер растянется по размеру содержимого, либо содержимое будет немного
			// выглядывать за пределы контейнера
			if (w != wWidth) {
				wWidth = w;
				win.style.width = w + "px";
				jsQwerlib.getElementById(textContId).style.width = w + "px";
				jsQwerlib.setCookie(wWidthCookie, w, cookieTime);
			}
			if (h != wHeight) {
				wHeight = h;
				win.style.height = h + "px";
				jsQwerlib.getElementById(textContId).style.height = h + "px";
				jsQwerlib.setCookie(wHeightCookie, h, cookieTime);
			}
			if ((l != wLeft) || (po.x != pageOffset.x)) {
				wLeft = l;
				win.style.left = (l + po.x) + "px";
				jsQwerlib.setCookie(wLeftCookie, l, cookieTime);
			}
			if ((t != wTop) || (po.y != pageOffset.y)) {
				wTop = t;
				win.style.top = (t + po.y) + "px";
				jsQwerlib.setCookie(wTopCookie, t, cookieTime);
			}
			// Запомним новое смещение страницы
			pageOffset = po;
		}
	};

//**************************************************************************************************
	/**
	 * Обработчик скроллинга окна броузера.
	 */
	jsQwerlib.DebugWin.scroll = function(e)
	{
		with (jsQwerlib.DebugWin)
		{
			setPosition(wLeft, wTop, wWidth, wHeight);
		}
	};

//**************************************************************************************************
	/**
	 * Обработчик нажатия горячих клавиш.
	 *
	 * Событие генерируется циклически, пока клавиша не будет отпущена (исключение Опера, где данное
	 * событие генерируется только один раз при нажатии клавиши).
	 */
	jsQwerlib.DebugWin.keyDown = function(e)
	{
		with (jsQwerlib.DebugWin)
		{
			// Наши горячие клавиши содержат комбинацию Ctrl + Alt + Shift
			if (e.ctrlKey && e.altKey && e.shiftKey)
			{
				// Общие комбинации клавиш
				switch (e.keyCode)
				{
					// "С" - очистка окна
					case 67:
						clear();
						break;
					// "M" - изменение режима вывода: приписывать вереди или добавлять в конец
					case 77:
						changeMode();
						break;
					// "T" - переключение типа окна: фрейм/окно
					case 84:
						changeType();
						break;
					// "X" - закрыть отладочное окно
					case 88:
						destroy();
						break;
				}

				// Комбинации клавиш, которые есть только у окна
				if (type == 2)
				{
					switch (e.keyCode)
					{
						// "D" - двигаем окно на положение по умолчанию
						case 68:
							// Если было перемещение окна - остановим его
							stopMovement();
							setPosition(defaultWLeft, defaultWTop, wWidth, wHeight);
							break;
						// "H" - прячем/показываем окно
						case 72:
							// Если было перемещение окна - остановим его
							stopMovement();
							win.style.visibility =
								((jsQwerlib.getStyle(win, "visibility").toLowerCase() == "hidden") ? "visible" : "hidden");
							break;
						// "<" - уменьшаем прозрачность окна
						case 188:
							changeOpacity(true);
							break;
						// ">" - увеличиваем прозрачность окна
						case 190:
							changeOpacity(false);
							break;
					}
				}
			}

			// "Esc" - прекращаем изменение размеров/перемещение окна/фрейма
			if (e.keyCode == 27) stopMovement();
		}
	};

//**************************************************************************************************
	/**
	 * Обработчик старта drag&drop, поддерживается только IE.
	 */
	jsQwerlib.DebugWin.dragStart = function(e)
	{
		// Запрещаем drag&drop
		return false;
	};

//**************************************************************************************************
	/**
	 * Обработчик нажатия левой клавиши мышки на сплиттере, заголовке или рамке.
	 */
	jsQwerlib.DebugWin.mouseDown = function(e)
	{
		with (jsQwerlib.DebugWin)
		{
			// Нас интересует только левая кнопка мышки
			// У Мозилы и Оперы это e.which, у Експлорера - e.button
			if (((e.which != undefined) && e.which == 1) || ((e.button != undefined) && e.button == 1))
			{
				// Если в данный момент есть перемещение (изменение размеров) - остановим его
				stopMovement();
				// Установим глобальные обработчики на движение и отпускание мышки
				jsQwerlib.addEvent(document, "mousemove", mouseMove);
				jsQwerlib.addEvent(document, "mouseup", mouseUp);
				// В Експлорере будем отменять drag&drop, такое событие есть только там
				jsQwerlib.addEvent(document, "dragstart", dragStart);
				// Запомним координаты мышки в окне
				mouseCoords = {x: e.clientX, y: e.clientY};
				// Элемент, на котором произошло событие
				var moveTarget = jsQwerlib.getEventTarget(e);
				// Запомним курсор документа и заменим его на курсор элемента
				bodyCursor = jsQwerlib.getStyle(document.body, "cursor");
				moveCursor = document.body.style.cursor = moveTarget.style.cursor;

				// Если имеем дело с окном, надо определить на чем именно нажата мышка, и что с этим делать
				if (type == 2)
				{
					switch (moveTarget.id)
					{
						case borderLId:
							dSize = {dX: -1, dY: 0};
							break;
						case borderLTId:
							dSize = {dX: -1, dY: -1};
							break;
						case borderTId:
							dSize = {dX: 0, dY: -1};
							break;
						case borderRTId:
							dSize = {dX: 1, dY: -1};
							break;
						case borderRId:
							dSize = {dX: 1, dY: 0};
							break;
						case borderRBId:
							dSize = {dX: 1, dY: 1};
							break;
						case borderBId:
							dSize = {dX: 0, dY: 1};
							break;
						case borderLBId:
							dSize = {dX: -1, dY: 1};
							break;
						default:
							dSize = {dX: 0, dY: 0};
					}

					// Если была нажата клавиша Ctrl - двигаем окно
					if (e.ctrlKey) {
						dSize = {dX: 0, dY: 0};
						moveTarget.style.cursor = document.body.style.cursor = "move";
					}
				}
				// Отменяем действие по умолчанию
				jsQwerlib.cancelClick(e);
			}
		}
	};

//**************************************************************************************************
	/**
	 * Обработчик движения мышки.
	 */
	jsQwerlib.DebugWin.mouseMove = function(e)
	{
		with (jsQwerlib.DebugWin)
		{
			// Если нажата левая кнопка - идет изменение размера или перемещение
			if (((e.which != undefined) && e.which == 1) || ((e.button != undefined) && e.button == 1))
			{
				// Новые координаты курсора мышки в окне и приросты координат
				var c = {x: e.clientX, y: e.clientY};
				var dy = c.y - mouseCoords.y;
				var dx = c.x - mouseCoords.x;

				// Фрейм
				if (type == 1)
				{
					var h = fHeight + dy;
					if (h < minFHeight) {
						// Виртуально заморозим курсор на той координате, где устанавливается минимальная высота
						c.y += (minFHeight - h);
						h = minFHeight;
					}
					if (fHeight != h) {
						jsQwerlib.getElementById(textContId).style.height = h + "px";
						jsQwerlib.getElementById(toolContId).style.height = h + "px";
						fHeight = h;
						onResize(null);
						// Сохраним новую высоту в куках
						jsQwerlib.setCookie(fHeightCookie, h, cookieTime);
					}
				}
				// Окно
				else
				{
					// Новые значения
					var w = wWidth, h = wHeight, l = wLeft, t = wTop;
					// Вычисляем новые значения в зависимости от приростов размеров
					if (dSize.dX < 0) {
						w -= dx;
						l += dx;
					}
					if (dSize.dX > 0) {
						w += dx;
					}
					if (dSize.dY < 0) {
						h -= dy;
						t += dy;
					}
					if (dSize.dY > 0) {
						h += dy;
					}
					if (dSize.dX == 0 && dSize.dY == 0) {
						l += dx;
						t += dy;
					}

					// Минимальные размеры
					if (w < minWWidth) {
						// Вычислим, на сколько ширина меньше минимальной и установим ширину в минимум
						var d = minWWidth - w;
						w = minWWidth;
						// Виртуально заморозим курсор на той координате, где устанавливается минимальная ширина
						// При этом смотрим на направление прироста ширины
						if (dSize.dX > 0) {
							c.x += d;
						}
						else {
							c.x -= d;
							// Пересчитаем координату left с учетом нового положения курсора мышки
							l = wLeft + (c.x - mouseCoords.x);
						}
					}
					// Высота аналогично ширине
					if (h < minWHeight) {
						var d = minWHeight - h;
						h = minWHeight;
						if (dSize.dY > 0) {
							c.y += d;
						}
						else {
							c.y -= d;
							t = wTop + (c.y - mouseCoords.y);
						}
					}
					// Установим новое положение и размеры окна
					setPosition(l, t, w, h);
				}
				// Запомним новые координаты мышки в окне
				mouseCoords = c;
				// Отменяем действие по умолчанию
				jsQwerlib.cancelClick(e);
			}
			// Если левая кнопка не нажата - значит перемещение надо остановить - что-то произошло
			else
			{
				stopMovement();
			}
		}
	};

//**************************************************************************************************
	/**
	 * Останавливает перемещение (изменение размеров) окна
	 */
	jsQwerlib.DebugWin.stopMovement = function()
	{
		with (jsQwerlib.DebugWin)
		{
			// Если было перемещение - отменим его
			if (moveTarget) {
				jsQwerlib.removeEvent(document, "mousemove", mouseMove);
				jsQwerlib.removeEvent(document, "mouseup", mouseUp);
				jsQwerlib.removeEvent(document, "dragstart", dragStart);
				// Вернём курсоры на место
				document.body.style.cursor = bodyCursor;
				moveTarget.style.cursor = moveCursor;
				// Перемещение (изменение размеров окна) закончено
				moveTarget = moveCursor = bodyCursor = null;
			}
		}
	};

//**************************************************************************************************
	/**
	 * Обработчик отпускания клавиши мышки.
	 */
	jsQwerlib.DebugWin.mouseUp = function(e)
	{
		with (jsQwerlib.DebugWin)
		{
			// Если отпущена левая кнопка - перемещение (изменение размера) закончилось
			if (((e.which != undefined) && e.which == 1) || ((e.button != undefined) && e.button == 1))
			{
				stopMovement();
				// Отменяем действие по умолчанию
				jsQwerlib.cancelClick(e);
			}
		}
	};

//**************************************************************************************************
	/**
	 * Обработчик изменения размеров окна броузера. Используется только если тип окна фрейм.
	 * Корректирует размеры отладочного окна и контейнера тела документа.
	 */
	jsQwerlib.DebugWin.onResize = function(e)
	{
		with (jsQwerlib.DebugWin)
		{
			var docHeight = document.body.clientHeight - fHeight - splitterSize;
			// Высота не может быть отрицательной
			if (docHeight < bodyDH) docHeight = bodyDH;
			jsQwerlib.getElementById(bodyContId).style.height = docHeight + "px";
			jsQwerlib.getElementById(bodyId).style.height = (docHeight - bodyDH) + "px";
		}
	};


//**************************************************************************************************
	/**
	 * Экранирует специальные HTML-симовлы, заменяя их на аббревиатуры.
	 *
	 * <br/><br/>Символы "&amp;" заменяется на "&amp;amp;", "&lt;" - на "&amp;lt;", "&gt;" - на
	 * "&amp;gt;", двойные кавычки - на "&amp;quot;" и одинарные кавычки - на "&amp;#039;".
	 * @param {string} str неэкранированная строка.
	 * @return экранированная строка
	 * @type string
	 */
	jsQwerlib.htmlspecialchars = function(str)
	{
		// При другой записи глючит JSDoc
		return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").
			replace(RegExp('"', "g"), "&quot;").replace(RegExp("'", "g"), "&#039;");
	};

//**************************************************************************************************
	/**
	 * Открывает отладочное окно.
	 * @see #__DEBUG__
	 * @see #clearDebug
	 * @see #closeDebug
	 * @see #DEBUG
	 * @see #DEBUGNB
	 */
	jsQwerlib.openDebug = function()
	{
		if (jsQwerlib.__DEBUG__) jsQwerlib.DebugWin.create();
	};

//**************************************************************************************************
	/**
	 * Очищает отладочное окно.
	 * @see #__DEBUG__
	 * @see #openDebug
	 * @see #closeDebug
	 * @see #DEBUG
	 * @see #DEBUGNB
	 */
	jsQwerlib.clearDebug = function()
	{
		jsQwerlib.DebugWin.clear();
	};

//**************************************************************************************************
	/**
	 * Закрывает отладочное окно.
	 * @see #__DEBUG__
	 * @see #openDebug
	 * @see #clearDebug
	 * @see #DEBUG
	 * @see #DEBUGNB
	 */
	jsQwerlib.closeDebug = function()
	{
		jsQwerlib.DebugWin.destroy();
	};

//**************************************************************************************************
	/**
	 * Форматирует массив параметров в строку для вывода в отладочное окно.
	 * @private
	 * @param {Array} args массив параметров.
	 * @see #DEBUG
	 * @see #DEBUGNB
	 */
	jsQwerlib.__formatDebugMsg = function(args)
	{
		var msg = "";
		for (var i = 0; i < args.length; i++)
		{
			var arg = args[i];
			// Не забываем заэкранировать опасные символы
			var val = jsQwerlib.htmlspecialchars(arg);
			// Если это объект, то надо выводить его в зависимости от его типа, null - это не объект
			if (arg && (typeof arg == "object"))
			{
				// Для простых типов всё уже сделано
				if (arg instanceof Number || arg instanceof String || arg instanceof Boolean ||
						arg instanceof RegExp || arg instanceof Date || arg instanceof Function)
				{
				}
				else if (arg instanceof Array)
				{
					// Массив - выведем все его элементы
					val = "<b>Array [</b>";
					var f = true;
					for (var j in arg) {
						val += (!f ? "<b>, </b>" : "") + "<b>" + j + " => </b>" + jsQwerlib.htmlspecialchars(arg[j]);
						f = false;
					}
					val += "<b>]</b>";
				}
				else
				{
					// Объект сложного типа - выводим его свойства
					// Эксплорер определяет стандартные функции не как function, а как object, подстрахуемся
					if (String(arg).search(RegExp("^\\s*function")) != 0)
					{
						val = "<b>Object {</b>";
						try {
							val += "<b>toString(): </b>" + arg.toString();
						}
						catch (e) {}
						// Найдем все свойства объекта и отсортируем их по алфавиту
						var props = Array();
						for (var j in arg) props.push(j);
						props.sort(
							function(a, b) {
								var s1 = String(a).toLowerCase();
								var s2 = String(b).toLowerCase();
								if (s1 < s2) return -1;
								if (s1 > s2) return 1;
								return 0;
							}
						);
						// Выводим упорядоченные свойства
						for (var j = 0; j < props.length; j++)
						{
							val += "<b>, " + props[j] + ": </b>";
							// В Опере без этого вылетает
							try	{
								val += jsQwerlib.htmlspecialchars(arg[props[j]]);
							}
							catch (e) {
								val += "<b>unavailable!</b>";
							}
						}
						val += "<b>}</b>";
					}
				}
			}

			msg += val;
			if (i != args.length - 1)	msg += " | ";
		}

		//Добавим в конце пробел, чтобы последовательно выведенные строки не "слипались"
		return (msg + " ");
	};

//**************************************************************************************************
	/**
	 * Выводит текст, переменные, элементы в отладочное окно, после вывода переходит на новую строку.
	 * <br/><br/><i>Например:</i>
	 * <pre>
	 * DEBUG("Мама", "мыла", "раму");
	 * DEBUGNB("Маша");
	 * DEBUGNB("ела");
	 * DEBUG("кашу");
	 * DEBUG("Всё!");
	 * </pre>
	 * <i>Рузультат:</i>
	 * <pre>
	 * Мама | мыла | раму
	 * Маша ела кашу
	 * Всё!
	 * </pre>
	 * @param {mixed} p1 элементы, которые нужно вывести в отладочное окно. Количество параметров
	 * функции неограничено.
	 * @see #__DEBUG__
	 * @see #DEBUGNB
	 * @see #openDebug
	 * @see #clearDebug
	 * @see #closeDebug
	 */
	jsQwerlib.DEBUG = function(p1)
	{
		if (jsQwerlib.__DEBUG__ && arguments.length > 0) {
			jsQwerlib.DebugWin.write(jsQwerlib.__formatDebugMsg(arguments), true);
		}
	};

//**************************************************************************************************
	/**
	 * Выводит текст, переменные, элементы в отладочное окно, после вывода НЕ переходит на новую строку.
	 * @param {mixed} p1 элементы, которые нужно вывести в отладочное окно. Количество параметров
	 * функции неограничено.
	 * @see #__DEBUG__
	 * @see #DEBUG
	 * @see #openDebug
	 * @see #clearDebug
	 * @see #closeDebug
	 */
	jsQwerlib.DEBUGNB = function(p1)
	{
		if (jsQwerlib.__DEBUG__ && arguments.length > 0) {
			jsQwerlib.DebugWin.write(jsQwerlib.__formatDebugMsg(arguments), false);
		}
	};


//**************************************************************************************************
// Бенчмаркинг
//**************************************************************************************************
	/**
	 * Приостанавливает (задерживает) выполнение на заданное время.
	 * @param {int} millis время ожидания в миллисекундах
	 */
	jsQwerlib.wait = function(millis)
	{
		var begin = new Date();
		var curr  = begin;
		while(curr - begin < millis) {
			curr = new Date();
		}
	};

//**************************************************************************************************
// Класс jsQwerlib.Timer - Таймер - измерение времени
//**************************************************************************************************
	/**
	 * Создает новый таймер.
	 * @class Таймер - измерение времени.
	 * <br/><br/><i>Пример:</i>
	 * <pre>
	 * var t = new $Q.Timer();
	 * t.start();
	 * doWorkPrepare();
	 * alert(t.stop());
	 * inputUserData();
	 * t.start(true);
	 * doWorkData();
	 * alert(t.stop());</pre>
	 * @constructor
	 * @param {boolean} start запустить таймер непосредственно при создании: <code>true</code> - да.
	 * Необязательный параметр. Значение по умолчанию - <code>false</code>.
	 */
	jsQwerlib.Timer = function(start)
	{
		/**
		 * Время запуска/возобновления таймера. Равно <code>null</code>, если таймер остановлен.
		 * @type Date
		 */
		this.begin = null;

		/**
		 * Полное время работы таймера в миллисекундах.
		 * @type int
		 */
		this.time = 0;

	//************************************************************************************************
		/**
		 * Запускает таймер.
		 *
		 * <br/><br/>Если таймер уже запущен, то он перезапускается только в случае очистки времени.
		 * @param {boolean} clear очистить ранее измеренное время: <code>true</code> - да.
		 * Необязательный параметр. Значение по умолчанию - <code>false</code>.
		 */
		this.start = function(clear)
		{
			// Очищаем ранее измеренное время, если нужно
			if (clear) {
				this.time  = 0;
				this.begin = new Date();
			}
			// Запускаем таймер только если он еще не запущен
			if (!this.begin) {
				this.begin = new Date();
			}
		};

	//************************************************************************************************
		/**
		 * Возвращает текущее время таймера - его значение в данный момент.
		 * @return время работы таймера в секундах с точностью до миллисекунд
		 * @type float
		 */
		this.getTime = function()
		{
			// Если таймер запущен - посчитаем сколько он уже проработал
			if (this.begin != null) {
				return (this.time + ((new Date()) - this.begin)) / 1000;
			}
			// Если на паузе - просто вернем его время
			else {
				return this.time / 1000;
			}
		};

	//************************************************************************************************
		/**
		 * Останавливает таймер и возвращает время его работы.
		 *
		 * <br/><br/>Может использоваться для временной приостановки измерения (паузы). После остановки
		 * значение таймера не обнуляется.
		 * @return время работы таймера в секундах с точностью до миллисекунд
		 * @type float
		 */
		this.stop = function()
		{
			// Если таймер был запущен - посчитаем сколько он еще проработал
			if (this.begin != null) {
				this.time += ((new Date()) - this.begin);
				this.begin = null;
			}

			return this.time / 1000;
		};

	//************************************************************************************************
		// Стартуем таймер непосредственно при создании объекта, если нужно
		if (start) {
			this.start();
		}
	};


//**************************************************************************************************
// Работа с Cookies
//**************************************************************************************************
	/** Устанавливает cookie.
	 * @param {string} name название cookie
	 * @param {mixed} value значение cookie
	 * <br/><i>Необязательные параметры:</i>
	 * @param {int} time время жизни cookie в секундах
	 * @param {string} path путь на сервере, где cookie доступен
	 * @param {string} domain домен, в котором доступен cookie
	 * @param {boolean} secure cookie должен передаваться через безопасное HTTPS-соединение
	 * @see #getCookie
	 * @see #deleteCookie
	 * @see #isCookiesSupported
	 */
	jsQwerlib.setCookie = function(name, value, time, path, domain, secure)
	{
		var date;
		if (time) {
			date = new Date();
			date.setTime(date.getTime() + (time * 1000));
		}
		document.cookie = name + "=" + escape(value) +
			((time) ? "; expires=" + date.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	};

//**************************************************************************************************
	/** Возвращает значение cookie.
	 * @param {string} name название cookie
	 * @return значение cookie или <code>null</code>, если cookie не установлен
	 * @type mixed
	 * @see #setCookie
	 * @see #deleteCookie
	 * @see #isCookiesSupported
	 */
	jsQwerlib.getCookie = function(name)
	{
		var prefix = name + "=";
		var si = document.cookie.indexOf(prefix);
		if (si == -1) return null;
		var ei = document.cookie.indexOf(";", si + prefix.length);
		if (ei == -1) ei = document.cookie.length;
		return unescape(document.cookie.substring(si + prefix.length, ei));
	};

//**************************************************************************************************
	/** Удаляет cookie.
	 * @param {string} name название cookie
	 * @see #getCookie
	 * @see #setCookie
	 * @see #isCookiesSupported
	 */
	jsQwerlib.deleteCookie = function(name)
	{
		document.cookie = name + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
	};

//**************************************************************************************************
	/** Проверяет, поддерживаются ли cookie.
	 * @return <code>true</code> - если cookie поддерживаются или <code>false</code> - если нет
	 * @type boolean
	 * @see #getCookie
	 * @see #setCookie
	 * @see #deleteCookie
	 */
	jsQwerlib.isCookiesSupported = function()
	{
		this.setCookie('__jsQwerlib_TestCookie__', 100, 365 * 24 * 60 * 60);
		if (this.getCookie('__jsQwerlib_TestCookie__') != 100) {
			return false;
		}
		this.deleteCookie('__jsQwerlib_TestCookie__');
		return true;
	};

//**************************************************************************************************
// Класс jsQwerlib.CookiesArray - Массив cookies
//**************************************************************************************************
	/**
	 * Создает новый массив cookies.
	 * @class Массив cookies.
	 * <br/><br/>Массив в стиле php, то есть может иметь произвольные строковые индексы, а не только
	 * целочисленные, такие как 0, 1, 2 и т.д.
	 * @constructor
	 * @param {string} name название массива. Необязательный параметр.
	 */
	jsQwerlib.CookiesArray = function(name)
	{
		/**
		 * Название массива.
		 * @type string
		 */
		this.name = null;

	//************************************************************************************************
		/**
		 * Устанавливает название массива.
		 * @param {string} name название массива.
		 */
		this.setName = function(name)
		{
			this.name = name;
		};

	//************************************************************************************************
		/**
		 * Возвращает название массива.
		 * @return название массива.
		 * @type string
		 */
		this.getName = function()
		{
			return this.name;
		};

	//************************************************************************************************
		/**
		 * Возвращает элемент массива.
		 * @param {string} index индекс элемента.
		 * @return значение элемента или <code>null</code>, если элемент не установлен.
		 * @type mixed
		 * @see jsQwerlib#getCookie
		 */
		this.getElement = function(index)
		{
			return jsQwerlib.getCookie(this.name + '[' + index + ']');
		};

	//************************************************************************************************
		/**
		 * Устанавливает элемент массива.
		 * @param {string} index индекс элемента. Это не обязательно число, может быть и строка, как
		 * в массивах php;
		 * @param {mixed} value значение элемента;
		 * <br/><i>Необязательные параметры</i> (см. {@link jsQwerlib#setCookie}):
		 * @param {int} time время жизни элемента в секундах;
		 * @param {string} path путь на сервере, где доступен элемент;
		 * @param {string} domain домен, в котором доступен элемент;
		 * @param {boolean} secure элемент должен передаваться через безопасное HTTPS-соединение.
		 * @see jsQwerlib#setCookie
		 */
		this.setElement = function(index, value, time, path, domain, secure)
		{
			jsQwerlib.setCookie(this.name + '[' + index + ']', value, time, path, domain, secure);
		};

	//************************************************************************************************
		/**
		 * Удаляет элемент массива.
		 * @param {string} index индекс элемента.
		 * @see jsQwerlib#deleteCookie
		 */
		this.deleteElement = function(index)
		{
			return jsQwerlib.deleteCookie(this.name + '[' + index + ']');
		};

	//************************************************************************************************
		/**
		 * Возвращает размер массива.
		 * @return размер массива.
		 * @type int
		 */
		this.size = function()
		{
			var s = 0;
			// Cookies are separated by semicolons
			var cookies = document.cookie.split("; ");
			for (var i = 0; i < cookies.length; i++)
			{
				// a name/value pair is separated by an equal sign
				var name_value = cookies[i].split("=");
				if (name_value[0].indexOf(this.name + '[') != -1) s++;
			}
			return s;
		};

	//************************************************************************************************
		/**
		 * Возвращает массив индексов массива.
		 *
		 * <br/><br/>Если в массиве нет элементов, то возвращается пустой массив.
		 * @return массив индексов.
		 * @type Array
		 */
		this.getIndexes = function()
		{
			var indexes = new Array();
			// Cookies are separated by semicolons
			var cookies = document.cookie.split("; ");
			for (var i = 0; i < cookies.length; i++)
			{
				// A name/value pair is separated by an equal sign
				var name_value = cookies[i].split("=");
				// Find array element - extracting element's index
				if (name_value[0].indexOf(this.name + '[') != -1)
					indexes.push(name_value[0].replace(this.name + '[', '').replace(']', ''));
			}
			return indexes;
		};

	//************************************************************************************************
		/**
		 * Возвращает индекс первого элемента, содержащего заданное значение.
		 *
		 * <br/><br/>Первым является тот элемент, который был добавлен в массив раньше.
		 * @param {mixed} value искомое значение.
		 * @return индекс первого элемента, содержащего искомое значение.
		 * @type string
		 */
		this.find = function(value)
		{
			// Values stored in cookies in escaped form
			value = escape(value);
			// Cookies are separated by semicolons
			var cookies = document.cookie.split("; ");
			for (var i = 0; i < cookies.length; i++)
			{
				// a name/value pair is separated by an equal sign
				var name_value = cookies[i].split("=");
				// it's our cookies array and our value
				if ((value == name_value[1]) &&	(name_value[0].indexOf(this.name + '[') != -1)) {
					var s = name_value[0].replace(this.name + '[', '');
					return s.replace(']', '');
				}
			}
			return null;
		};

	//************************************************************************************************
		/**
		 * Удаляет все элементы массива.
		 */
		this.empty = function()
		{
			// Cookies are separated by semicolons
			var cookies = document.cookie.split("; ");
			for (var i = 0; i < cookies.length; i++)
			{
				// a name/value pair is separated by an equal sign
				var name_value = cookies[i].split("=");
				if (name_value[0].indexOf(this.name + '[') != -1)
					document.cookie = name_value[0] + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
			}
		};

	//************************************************************************************************
		// Если при создании указано имя массива - установим его
		if (name) {
			this.setName(name);
		}
	};


//**************************************************************************************************
// Работа с DOM
//**************************************************************************************************
	/**
	 * Возвращает элемент по его id.
	 * @param {string} e id элемента или сам элемент.
	 * @return элемент или <code>null</code>, если элемент не найден.
	 * @type Element
	 */
	jsQwerlib.getElementById = function(e)
	{
		if (typeof(e) == 'string') {
			if (document.getElementById) e = document.getElementById(e);
			else if (document.all) e = document.all[e];
			else e = null;
		}
		return e;
	};

//**************************************************************************************************
	/**
	 * Возвращает положение элемента на странице.
	 * @param {string} e элемент или id элемента.
	 * @return объект, содержащий координаты левого верхнего угла элемента: <code>{left, top}</code>.
	 * @type Object
	 */
	jsQwerlib.getPosition = function(e)
	{
		var e = jsQwerlib.getElementById(e);
		var oLeft = 0;
		var oTop  = 0;
		while (e) {
			oLeft += e.offsetLeft;
			oTop  += e.offsetTop;
			e = e.offsetParent;
		}
		if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined")
		{
			oLeft += document.body.leftMargin;
			oTop  += document.body.topMargin;
		}
		return {left: oLeft, top: oTop}
	};

//**************************************************************************************************
	/**
	 * Возвращает вычисленное значение свойства CSS элемента.
	 * @param {string} e элемент или id элемента;
	 * @param {string} cssProp название свойства CSS, записанное в стиле CSS (например,
	 * <code>font-size</code>).
	 * @return значение заданного свойства или <code>null</code>, если свойство не было установлено.
	 * @type string
	 */
	jsQwerlib.getStyle = function(e, cssProp)
	{
		var e   = jsQwerlib.getElementById(e);
		var css = null;
		// Експлорер работает так
		if (e.currentStyle) {
			// Тут принимается свойство CSS, записанное в стиле JavaScript, например, fontSize
			var parts = cssProp.split("-");
			for (var i = parts.length - 1; i > 0; i--) {
				parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].substr(1, parts[i].length - 1);
			}
			css = e.currentStyle[parts.join("")];
			if (css == undefined) css = null;
		}
		// Код для Мозилы и Оперы
		else if (window.getComputedStyle) {
			css = document.defaultView.getComputedStyle(e, null).getPropertyValue(cssProp);
			if (css == "") css = null;
		}
		return css;
	};

//**************************************************************************************************
	/**
	 * Возвращает координаты курсора мышки на странице.
	 * @param {MouseEvent} ev событие, связанное с мышкой.
	 * @return объект, содержащий координаты курсора (<code>{x, y}</code>) или <code>null</code>,
	 * в случае ошибки.
	 * @type Object
	 */
	jsQwerlib.getMouseCoords = function(ev)
	{
		// Мозила и Опера
		if (ev.pageX != undefined) {
			return {x: ev.pageX, y: ev.pageY};
		}
		// Експлорер
		if (ev.clientX != undefined) {
			return {
				x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
				y: ev.clientY + document.body.scrollTop  - document.body.clientTop
			};
		}
		return null;
	};

//**************************************************************************************************
	/**
	 * Возвращает координаты страницы, соответствующие левому верхнему углу окна.
	 * @return объект, содержащий координаты страницы (<code>{x, y}</code>) или <code>null</code>,
	 * в случае ошибки.
	 * @type Object
	 */
	jsQwerlib.getPageOffset = function()
	{
		// Мозила и Опера
		if (window.pageYOffset != undefined) {
			return {x: window.pageXOffset, y: window.pageYOffset};
		}
		// Експлорер
		if (document.body.scrollTop != undefined) {
			return {x: document.body.scrollLeft, y: document.body.scrollTop};
		}
		return null;
	};

//**************************************************************************************************
	/**
	 * Устанавливает обработчик события.
	 * @param {string} e элемент или id элемента, для которого устанавливается обработчик;
	 * @param {string} evType название события без префикса "on";
	 * @param {function} fn функция-обработчик события;
	 * @param {boolean} useCapture - использовать захват: <code>true</code> - да. Необязательный параметр.
	 * Значение по умолчанию - <code>false</code>. Если <code>useCapture = true</code>,
	 * то все события указанного типа будут доставлены данному обработчику, прежде чем они будут
	 * доставлены другим. События, которые "всплывают" вверх по дереву элементов, не вызывают
	 * обработчик, назначенный с использованием захвата.
	 * @return <code>true</code> - в случае успеха, <code>false</code> - в случае неудачи.
	 * @type boolean
	 * @see #removeEvent
	 * @see #getEventTarget
	 */
	jsQwerlib.addEvent = function(e, evType, fn, useCapture)
	{
		e = jsQwerlib.getElementById(e);
		if (!e) return false;
		evType = evType.toLowerCase();
		if (useCapture == undefined) useCapture = false;
		if (e.addEventListener) {
			e.addEventListener(evType, fn, useCapture);
			return true;
		} else if (e.attachEvent) {
			return e.attachEvent("on" + evType, fn);
		} else {
			e["on" + evType] = fn;
			return true;
		}
	};

//**************************************************************************************************
	/**
	 * Убирает обработчик события.
	 * @param {string} e элемент или id элемента, для которого устанавливается обработчик;
	 * @param {string} evType название события без префикса "on";
	 * @param {function} fn функция-обработчик события;
	 * @param {boolean} useCapture - использовать захват (см. {@link #addEvent}).
	 * @return <code>true</code> - в случае успеха, <code>false</code> - в случае неудачи.
	 * @type boolean
	 * @see #addEvent
	 * @see #getEventTarget
	 */
	jsQwerlib.removeEvent = function(e, evType, fn, useCapture)
	{
		e = jsQwerlib.getElementById(e);
		if (!e) return false;
		evType = evType.toLowerCase();
		if (useCapture==undefined) useCapture = false;
		if (e.removeEventListener) {
			e.removeEventListener(evType, fn, useCapture);
			return true;
		} else if (e.detachEvent) {
			return e.detachEvent("on" + evType, fn);
		} else {
			e["on" + evType] = "";
			return true;
		}
	};

//**************************************************************************************************
	/**
	 * Возвращает элемент на котором произошло событие.
	 *
	 * <br/><br/>В Эксплорере в обработчиках событий <code>this</code> не указывает на элемент,
	 * на котором данное событие произошло. Данная функция - независимый от броузера способ получения
	 * элемента события.
	 * @param {event} e событие.
	 * @return элемент, на котором произошло событие.
	 * @type Element
	 * @see #addEvent
	 * @see #removeEvent
	 */
	jsQwerlib.getEventTarget = function(e)
	{
		var target = window.event ? window.event.srcElement : e ? e.target : null;
		if (!target) return false;
		while (target.nodeType != 1 && target.nodeName.toLowerCase() != 'body') {
			target = target.parentNode;
		}
		return target;
	};

//**************************************************************************************************
	/**
	 * Отключает "всплывание" события.
	 * @param {event} e событие.
	 */
  jsQwerlib.stopBubble = function(e)
  {
    if (window.event && window.event.cancelBubble) window.event.cancelBubble = true;
    if (e && e.stopPropagation) e.stopPropagation();
  };

//**************************************************************************************************
	/**
	 * Отключает для события действия по умолчанию.
	 * @param {event} e событие.
	 */
  jsQwerlib.stopDefault = function(e)
  {
    if (window.event && window.event.returnValue) window.event.returnValue = false;
    if (e && e.preventDefault) e.preventDefault();
  };

//**************************************************************************************************
	/**
	 * Отключает и действие по умолчанию и "всплывание" события.
	 * @param {event} e событие.
	 */
  jsQwerlib.cancelClick = function(e)
  {
  	jsQwerlib.stopBubble(e);
  	jsQwerlib.stopDefault(e);
  };


//**************************************************************************************************
// Контроль пользовательского ввода
//**************************************************************************************************
	/** Проверяет поле на пустоту.
	 * @param {string} name название поля на странице, как его видит пользователь;
	 * @param {string} id элемент или id элемента.
	 * @return <code>true</code> - если поле не пустое и <code>false</code> - в противном случае.
	 * @type boolean
	 */
	jsQwerlib.chEmpty = function(name, id)
	{
		var e = jsQwerlib.getElementById(id);
		if (e.value.length > 0) {
			return true;
		}
		else {
			e.focus();
			alert(jsQwerlib.inputErrorMsgPrefix + "пустое поле '" + name + "'!");
			return false;
		}
	};

//**************************************************************************************************
	/** Проверяет поле на минимальную длину.
	 * @param {string} name название поля на странице, как его видит пользователь;
	 * @param {string} id элемент или id элемента;
	 * @param {int} minlength минимальная разрешенная длина текста в поле.
	 * @return <code>true</code> - если длина текста в поле не меньше минимальной и
	 * <code>false</code> - в противном случае.
	 * @type boolean
	 */
	jsQwerlib.chMinLength = function(name, id, minlength)
	{
		var e = jsQwerlib.getElementById(id);
		if (e.value.length >= minlength) {
			return true;
		}
		else {
			e.focus();
			alert(jsQwerlib.inputErrorMsgPrefix + "минимальная длина (символов) - " + minlength +
				", поле '" + name + "'!");
			return false;
		}
	};

//**************************************************************************************************
	/** Проверяет поле на максимальную длину.
	 * @param {string} name название поля на странице, как его видит пользователь;
	 * @param {string} id элемент или id элемента;
	 * @param {int} maxlength максимальная разрешенная длина текста в поле.
	 * @return <code>true</code> - если длина текста в поле не превышает максимальной и
	 * <code>false</code> - в противном случае.
	 * @type boolean
	 */
	jsQwerlib.chMaxLength = function(name, id, maxlength)
	{
		var e = jsQwerlib.getElementById(id);
		if (e.value.length <= maxlength) {
			return true;
		}
		else {
			e.focus();
			alert(jsQwerlib.inputErrorMsgPrefix + "превышена максимальная длина, поле '" + name + "'!");
			return false;
		}
	};

//**************************************************************************************************
	/** Проверяет поле на соответствие регулярному выражению.
	 * @param {string} name название поля на странице, как его видит пользователь;
	 * @param {string} id элемент или id элемента;
	 * @param {RegExp} regexp регулярное выражение.
	 * @return <code>true</code> - если текст в поле соответствует регулярному выражению и
	 * <code>false</code> - в противном случае.
	 * @type boolean
	 */
	jsQwerlib.chRegexep = function(name, id, regexp)
	{
		var e = jsQwerlib.getElementById(id);
		if (regexp.test(e.value)) {
			return true;
		}
		else {
			e.focus();
			alert(jsQwerlib.inputErrorMsgPrefix + "недопустимый формат, поле '" + name + "'!");
			return false;
		}
	};

//**************************************************************************************************
	/** Проверяет два поля на совпадение текста (обычно пароль и его подтверждение).
	 * @param {string} name1 название первого поля на странице, как его видит пользователь;
	 * @param {string} id1 первый элемент или id элемента;
	 * @param {string} name2 название второго поля на странице, как его видит пользователь;
	 * @param {string} id2 второй элемент или id элемента.
	 * @return <code>true</code> - если текст в полях совпадает и <code>false</code> - в противном
	 * случае.
	 * @type boolean
	 */
	jsQwerlib.chMatch = function(name1, id1, name2, id2)
	{
		var e1 = jsQwerlib.getElementById(id1);
		var e2 = jsQwerlib.getElementById(id2);
		if (e1.value == e2.value) {
			return true;
		}
		else {
			e1.focus();
			alert(jsQwerlib.inputErrorMsgPrefix + "поля '" + name1 + "' и '" + name2 + "' не совпадают!");
			return false;
		}
	};

//**************************************************************************************************
	/** Все проверки поля в одной функции (пустота, минимальная и максимальная длина, регулярное
	 * выражение).
	 * @param {string} name название поля на странице, как его видит пользователь;
	 * @param {string} id элемент или id элемента;
	 * @param {boolean} empty делать проверку поля на пустоту: <code>true</code> - да,
	 * <code>false</code> (<code>null</code>) - нет;
	 * @param {int} minlength минимальная разрешенная длина текста в поле или <code>false</code>
	 * (<code>null</code>) - если данную проверку делать не надо;
	 * @param {int} maxlength максимальная разрешенная длина текста в поле или <code>false</code>
	 * (<code>null</code>) - если данную проверку делать не надо;
	 * @param {RegExp} regexp регулярное выражение или <code>false</code> (<code>null</code>) - если
	 * данную проверку делать не надо.
	 * @return <code>true</code> - если все проверки прошли успешно и <code>false</code> - в противном
	 * случае.
	 * @type boolean
	 */
	jsQwerlib.chFormat = function(name, id, empty, minlength, maxlength, regexp)
	{
		// Если поле пустое, и ему разрешено быть пустым, то дальнейшие проверки уже делать не нужно
		var e = jsQwerlib.getElementById(id);
		var isEmpty = (e.value.length == 0);
		return (!empty || jsQwerlib.chEmpty(name, id)) &&
			(isEmpty ||
			 ((!minlength || jsQwerlib.chMinLength(name, id, minlength)) &&
			  (!maxlength || jsQwerlib.chMaxLength(name, id, maxlength)) &&
			  (!regexp || jsQwerlib.chRegexep(name, id, regexp))));
	};


//**************************************************************************************************
// Инициализация - подключаемся аналогично jQuery
//**************************************************************************************************
	window.$Q = jsQwerlib;
	window.jsQwerlib = jsQwerlib;
})();

