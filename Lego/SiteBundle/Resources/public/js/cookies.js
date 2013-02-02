/******************************************************************************/
// Sets the cookie
// name - the name of the cookie
// value - the value of the cookie
// Optional parameters:
// time -  the time in seconds before the cookie expires
// path - the path on the server in which the cookie will be available on
// domain - the domain on that the cookie is available
// secure - indicates that the cookie should only be transmitted over a secure
//   HTTPS connection
function setCookie(name, value, time, path, domain, secure)
{
  var date;
  if (time) {
    date = new Date();
		date.setTime(date.getTime() + (time * 1000));
  }
  //alert(unescape(escape(value)))
  document.cookie = name + "=" +  escape(value)   +
    ((time) ? "; expires=" + date.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
/*	*/
 
}

/******************************************************************************/
// Gets the cookie
// name - the name of the cookie
// returns false if cookie is not set, otherwise - the value of the cookie
function getCookie(name)
{
  var prefix = name + "=";
  var si = document.cookie.indexOf(prefix);
  if (si == -1) return null;
  var ei = document.cookie.indexOf(";", si + prefix.length);
  if (ei == -1) ei = document.cookie.length;
  return unescape(document.cookie.substring(si + prefix.length, ei));
}
  
/******************************************************************************/
// Deletes the cookie
// name - the name of the cookie
function deleteCookie(name)
{
  document.cookie = name + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}

/******************************************************************************/
// Checks if cookies are supported
// returns true if supported, false otherwise
function isCookiesSupported()
{
  setCookie('TestCookie', 100, 365 * 24 * 60 * 60);
  if (getCookie('TestCookie') != 100) return false;
	deleteCookie('TestCookie');
	return true;
}

/******************************************************************************/
// Gets the cookies' array element
// arrayName - name of the cookies' array
// index - index of the element
function getCookiesArrayElement(arrayName, index)
{
	return getCookie(arrayName + '[' + index + ']');
}
  
/******************************************************************************/
// Sets the cookies' array element
// arrayName - the name of the cookies' array
// index - the index oа the element to set
// value - the value of the element
// Optional parameters (like in function setCookie):
// time -  the time in seconds before the cookie expires
// path - the path on the server in which the cookie will be available on
// domain - the domain on that the cookie is available
// secure - indicates that the cookie should only be transmitted over a secure
//   HTTPS connection
function setCookiesArrayElement(arrayName, index, value, time, path, domain, secure)
{
	setCookie(arrayName + '[' + index + ']', value, time, path, domain, secure);
}

/******************************************************************************/
// Deletes the cookies' array element
// arrayName - name of the cookies' array
// index - index of the element
function deleteCookiesArrayElement(arrayName, index)
{
	return deleteCookie(arrayName + '[' + index + ']');
}
  
/******************************************************************************/
// Returns the size of the array of cookies
// name - the name of the array
function getCookiesArraySize(name)
{
  var s = 0;
  // Cookies are separated by semicolons
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++)
  {
    // a name/value pair is separated by an equal sign
    var name_value = cookies[i].split("=");
    if (name_value[0].indexOf(name + '[') != -1) s++;
  }
  return s;
}

/******************************************************************************/
// Returns the array with indexes of the cookies's array
// The cookies' array made in php like style and may have arbitrary indexes,
// not only 0, 1, 2 ect.
// name - the name of the array
function getCookiesArrayIndexes(name)
{
  var indexes = new Array();
  // Cookies are separated by semicolons
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++)
  {
    // A name/value pair is separated by an equal sign
    var name_value = cookies[i].split("=");
		// Find array element - extracting element's index
    if (name_value[0].indexOf(name + '[') != -1)
			indexes.push(name_value[0].replace(name + '[', '').replace(']', ''));
  }
  return indexes;
}

/******************************************************************************/
// Returns the first index of the element with the value in the array of
// cookies or null if the value non in the array
// arrayName - the name of the array
// value - the value to find in the array
function findInCookiesArray(arrayName, value)
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
    if ((value == name_value[1]) &&	(name_value[0].indexOf(arrayName + '[') != -1)) {
			var s = name_value[0].replace(arrayName + '[', '');
			return s.replace(']', '');
		}
  }
  return null;
}

/******************************************************************************/
// Deletes the array of cookies
// name - the name of the array
function deleteCookiesArray(name)
{
  // Cookies are separated by semicolons
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++)
  {
    // a name/value pair is separated by an equal sign
    var name_value = cookies[i].split("=");
    if (name_value[0].indexOf(name + '[') != -1) 
      document.cookie = name_value[0] + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
  }
}
