// Apply Node polyfills as necessary.
var window = {
  Date: Date,
  addEventListener: function() {},
  removeEventListener: function() {}
};

var location = {
  href: "",
  host: "",
  hostname: "",
  protocol: "",
  origin: "",
  port: "",
  pathname: "",
  search: "",
  hash: "",
  username: "",
  password: ""
};
var document = { body: {}, createTextNode: function() {}, location: location };

if (typeof FileList === "undefined") {
    FileList = function() {};
}

if (typeof File === "undefined") {
    File = function() {};
}


if (typeof XMLHttpRequest === "undefined") {
  XMLHttpRequest = function() {
    return {
      addEventListener: function() {},
      open: function() {},
      send: function() {}
    };
  };

  var oldConsoleWarn = console.warn
  console.warn = function () {
    if (arguments.length === 1 && arguments[0].indexOf('Compiled in DEV mode') === 0) return
    return oldConsoleWarn.apply(console, arguments)
  }
}

if (typeof FormData === "undefined") {
  FormData = function() {
    this._data = [];
  };
  FormData.prototype.append = function() {
    this._data.push(Array.prototype.slice.call(arguments));
  };
}

var Elm = (function(module) { 
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Test_runThunk(thunk)
{
  try {
    // Attempt to run the thunk as normal.
    return $elm$core$Result$Ok(thunk(_Utils_Tuple0));
  } catch (err) {
    // If it throws, return an error instead of crashing.
    return $elm$core$Result$Err(err.toString());
  }
}



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$Test$Reporter$Reporter$ConsoleReport = function (a) {
	return {$: 'ConsoleReport', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $author$project$Console$Text$UseColor = {$: 'UseColor'};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm_explorations$test$Test$Internal$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $elm_explorations$test$Test$Runner$Failure$DuplicatedName = {$: 'DuplicatedName'};
var $elm_explorations$test$Test$Runner$Failure$EmptyList = {$: 'EmptyList'};
var $elm_explorations$test$Test$Runner$Failure$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm$core$Basics$append = _Utils_append;
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$Basics$add = _Basics_add;
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm_explorations$test$Test$Internal$duplicatedName = function () {
	var names = function (test) {
		names:
		while (true) {
			switch (test.$) {
				case 'Labeled':
					var str = test.a;
					return _List_fromArray(
						[str]);
				case 'Batch':
					var subtests = test.a;
					return A2($elm$core$List$concatMap, names, subtests);
				case 'UnitTest':
					return _List_Nil;
				case 'FuzzTest':
					return _List_Nil;
				case 'Skipped':
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
				default:
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
			}
		}
	};
	var insertOrFail = function (newName) {
		return $elm$core$Result$andThen(
			function (oldNames) {
				return A2($elm$core$Set$member, newName, oldNames) ? $elm$core$Result$Err(newName) : $elm$core$Result$Ok(
					A2($elm$core$Set$insert, newName, oldNames));
			});
	};
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$concatMap(names),
		A2(
			$elm$core$List$foldl,
			insertOrFail,
			$elm$core$Result$Ok($elm$core$Set$empty)));
}();
var $elm_explorations$test$Test$Internal$UnitTest = function (a) {
	return {$: 'UnitTest', a: a};
};
var $elm_explorations$test$Test$Expectation$Fail = function (a) {
	return {$: 'Fail', a: a};
};
var $elm_explorations$test$Test$Expectation$fail = function (_v0) {
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm_explorations$test$Test$Expectation$Fail(
		{description: description, given: $elm$core$Maybe$Nothing, reason: reason});
};
var $elm_explorations$test$Test$Internal$failNow = function (record) {
	return $elm_explorations$test$Test$Internal$UnitTest(
		function (_v0) {
			return _List_fromArray(
				[
					$elm_explorations$test$Test$Expectation$fail(record)
				]);
		});
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm_explorations$test$Test$concat = function (tests) {
	if ($elm$core$List$isEmpty(tests)) {
		return $elm_explorations$test$Test$Internal$failNow(
			{
				description: 'This `concat` has no tests in it. Let\'s give it some!',
				reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
			});
	} else {
		var _v0 = $elm_explorations$test$Test$Internal$duplicatedName(tests);
		if (_v0.$ === 'Err') {
			var duped = _v0.a;
			return $elm_explorations$test$Test$Internal$failNow(
				{
					description: 'A test group contains multiple tests named \'' + (duped + '\'. Do some renaming so that tests have unique names.'),
					reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
				});
		} else {
			return $elm_explorations$test$Test$Internal$Batch(tests);
		}
	}
};
var $elm_explorations$test$Test$Runner$Failure$BadDescription = {$: 'BadDescription'};
var $elm_explorations$test$Test$Internal$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$trim = _String_trim;
var $elm_explorations$test$Test$describe = F2(
	function (untrimmedDesc, tests) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		if ($elm$core$String$isEmpty(desc)) {
			return $elm_explorations$test$Test$Internal$failNow(
				{
					description: 'This `describe` has a blank description. Let\'s give it a useful one!',
					reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$BadDescription)
				});
		} else {
			if ($elm$core$List$isEmpty(tests)) {
				return $elm_explorations$test$Test$Internal$failNow(
					{
						description: 'This `describe ' + (desc + '` has no tests in it. Let\'s give it some!'),
						reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
					});
			} else {
				var _v0 = $elm_explorations$test$Test$Internal$duplicatedName(tests);
				if (_v0.$ === 'Err') {
					var duped = _v0.a;
					return $elm_explorations$test$Test$Internal$failNow(
						{
							description: 'The tests \'' + (desc + ('\' contain multiple tests named \'' + (duped + '\'. Let\'s rename them so we know which is which.'))),
							reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
						});
				} else {
					var childrenNames = _v0.a;
					return A2($elm$core$Set$member, desc, childrenNames) ? $elm_explorations$test$Test$Internal$failNow(
						{
							description: 'The test \'' + (desc + '\' contains a child test of the same name. Let\'s rename them so we know which is which.'),
							reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
						}) : A2(
						$elm_explorations$test$Test$Internal$Labeled,
						desc,
						$elm_explorations$test$Test$Internal$Batch(tests));
				}
			}
		}
	});
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Test$Runner$Node$Receive = function (a) {
	return {$: 'Receive', a: a};
};
var $author$project$Test$Runner$Node$defaultRunCount = 100;
var $elm_explorations$test$Test$Runner$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm_explorations$test$Test$Runner$Only = function (a) {
	return {$: 'Only', a: a};
};
var $elm_explorations$test$Test$Runner$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $elm_explorations$test$Test$Runner$Skipping = function (a) {
	return {$: 'Skipping', a: a};
};
var $elm_explorations$test$Test$Runner$countRunnables = function (runnable) {
	countRunnables:
	while (true) {
		switch (runnable.$) {
			case 'Runnable':
				return 1;
			case 'Labeled':
				var runner = runnable.b;
				var $temp$runnable = runner;
				runnable = $temp$runnable;
				continue countRunnables;
			default:
				var runners = runnable.a;
				return $elm_explorations$test$Test$Runner$cyclic$countAllRunnables()(runners);
		}
	}
};
function $elm_explorations$test$Test$Runner$cyclic$countAllRunnables() {
	return A2(
		$elm$core$List$foldl,
		A2($elm$core$Basics$composeR, $elm_explorations$test$Test$Runner$countRunnables, $elm$core$Basics$add),
		0);
}
try {
	var $elm_explorations$test$Test$Runner$countAllRunnables = $elm_explorations$test$Test$Runner$cyclic$countAllRunnables();
	$elm_explorations$test$Test$Runner$cyclic$countAllRunnables = function () {
		return $elm_explorations$test$Test$Runner$countAllRunnables;
	};
} catch ($) {
	throw 'Some top-level definitions from `Test.Runner` are causing infinite recursion:\n\n  ┌─────┐\n  │    countAllRunnables\n  │     ↓\n  │    countRunnables\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm_explorations$test$Test$Runner$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var $elm_explorations$test$Test$Runner$Runnable = function (a) {
	return {$: 'Runnable', a: a};
};
var $elm_explorations$test$Test$Runner$Thunk = function (a) {
	return {$: 'Thunk', a: a};
};
var $elm_explorations$test$Test$Runner$emptyDistribution = function (seed) {
	return {all: _List_Nil, only: _List_Nil, seed: seed, skipped: _List_Nil};
};
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm_explorations$test$Test$Runner$fnvHash = F2(
	function (a, b) {
		return ((a ^ b) * 16777619) >>> 0;
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm_explorations$test$Test$Runner$fnvHashString = F2(
	function (hash, str) {
		return A3(
			$elm$core$List$foldl,
			$elm_explorations$test$Test$Runner$fnvHash,
			hash,
			A2(
				$elm$core$List$map,
				$elm$core$Char$toCode,
				$elm$core$String$toList(str)));
	});
var $elm_explorations$test$Test$Runner$fnvInit = 2166136261;
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v3 = genA(seed0);
				var a = _v3.a;
				var seed1 = _v3.b;
				var _v4 = genB(seed1);
				var b = _v4.a;
				var seed2 = _v4.b;
				var _v5 = genC(seed2);
				var c = _v5.a;
				var seed3 = _v5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$independentSeed = $elm$random$Random$Generator(
	function (seed0) {
		var makeIndependentSeed = F3(
			function (state, b, c) {
				return $elm$random$Random$next(
					A2($elm$random$Random$Seed, state, (1 | (b ^ c)) >>> 0));
			});
		var gen = A2($elm$random$Random$int, 0, 4294967295);
		return A2(
			$elm$random$Random$step,
			A4($elm$random$Random$map3, makeIndependentSeed, gen, gen, gen),
			seed0);
	});
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$random$Random$maxInt = 2147483647;
var $elm_explorations$test$Test$Runner$batchDistribute = F4(
	function (hashed, runs, test, prev) {
		var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, prev.seed, test);
		return {
			all: _Utils_ap(prev.all, next.all),
			only: _Utils_ap(prev.only, next.only),
			seed: next.seed,
			skipped: _Utils_ap(prev.skipped, next.skipped)
		};
	});
var $elm_explorations$test$Test$Runner$distributeSeedsHelp = F4(
	function (hashed, runs, seed, test) {
		switch (test.$) {
			case 'UnitTest':
				var aRun = test.a;
				return {
					all: _List_fromArray(
						[
							$elm_explorations$test$Test$Runner$Runnable(
							$elm_explorations$test$Test$Runner$Thunk(
								function (_v1) {
									return aRun(_Utils_Tuple0);
								}))
						]),
					only: _List_Nil,
					seed: seed,
					skipped: _List_Nil
				};
			case 'FuzzTest':
				var aRun = test.a;
				var _v2 = A2($elm$random$Random$step, $elm$random$Random$independentSeed, seed);
				var firstSeed = _v2.a;
				var nextSeed = _v2.b;
				return {
					all: _List_fromArray(
						[
							$elm_explorations$test$Test$Runner$Runnable(
							$elm_explorations$test$Test$Runner$Thunk(
								function (_v3) {
									return A2(aRun, firstSeed, runs);
								}))
						]),
					only: _List_Nil,
					seed: nextSeed,
					skipped: _List_Nil
				};
			case 'Labeled':
				var description = test.a;
				var subTest = test.b;
				if (hashed) {
					var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, seed, subTest);
					return {
						all: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: next.seed,
						skipped: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				} else {
					var intFromSeed = A2(
						$elm$random$Random$step,
						A2($elm$random$Random$int, 0, $elm$random$Random$maxInt),
						seed).a;
					var hashedSeed = $elm$random$Random$initialSeed(
						A2(
							$elm_explorations$test$Test$Runner$fnvHash,
							intFromSeed,
							A2($elm_explorations$test$Test$Runner$fnvHashString, $elm_explorations$test$Test$Runner$fnvInit, description)));
					var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, hashedSeed, subTest);
					return {
						all: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: seed,
						skipped: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				}
			case 'Skipped':
				var subTest = test.a;
				var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return {all: _List_Nil, only: _List_Nil, seed: next.seed, skipped: next.all};
			case 'Only':
				var subTest = test.a;
				var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return _Utils_update(
					next,
					{only: next.all});
			default:
				var tests = test.a;
				return A3(
					$elm$core$List$foldl,
					A2($elm_explorations$test$Test$Runner$batchDistribute, hashed, runs),
					$elm_explorations$test$Test$Runner$emptyDistribution(seed),
					tests);
		}
	});
var $elm_explorations$test$Test$Runner$distributeSeeds = $elm_explorations$test$Test$Runner$distributeSeedsHelp(false);
var $elm_explorations$test$Test$Runner$Failure$Custom = {$: 'Custom'};
var $elm_explorations$test$Expect$fail = function (str) {
	return $elm_explorations$test$Test$Expectation$fail(
		{description: str, reason: $elm_explorations$test$Test$Runner$Failure$Custom});
};
var $elm_explorations$test$Test$Runner$runThunk = _Test_runThunk;
var $elm_explorations$test$Test$Runner$run = function (_v0) {
	var fn = _v0.a;
	var _v1 = $elm_explorations$test$Test$Runner$runThunk(fn);
	if (_v1.$ === 'Ok') {
		var tests = _v1.a;
		return tests;
	} else {
		var message = _v1.a;
		return _List_fromArray(
			[
				$elm_explorations$test$Expect$fail('This test failed because it threw an exception: \"' + (message + '\"'))
			]);
	}
};
var $elm_explorations$test$Test$Runner$fromRunnableTreeHelp = F2(
	function (labels, runner) {
		fromRunnableTreeHelp:
		while (true) {
			switch (runner.$) {
				case 'Runnable':
					var runnable = runner.a;
					return _List_fromArray(
						[
							{
							labels: labels,
							run: function (_v1) {
								return $elm_explorations$test$Test$Runner$run(runnable);
							}
						}
						]);
				case 'Labeled':
					var label = runner.a;
					var subRunner = runner.b;
					var $temp$labels = A2($elm$core$List$cons, label, labels),
						$temp$runner = subRunner;
					labels = $temp$labels;
					runner = $temp$runner;
					continue fromRunnableTreeHelp;
				default:
					var runners = runner.a;
					return A2(
						$elm$core$List$concatMap,
						$elm_explorations$test$Test$Runner$fromRunnableTreeHelp(labels),
						runners);
			}
		}
	});
var $elm_explorations$test$Test$Runner$fromRunnableTree = $elm_explorations$test$Test$Runner$fromRunnableTreeHelp(_List_Nil);
var $elm_explorations$test$Test$Runner$fromTest = F3(
	function (runs, seed, test) {
		if (runs < 1) {
			return $elm_explorations$test$Test$Runner$Invalid(
				'Test runner run count must be at least 1, not ' + $elm$core$String$fromInt(runs));
		} else {
			var distribution = A3($elm_explorations$test$Test$Runner$distributeSeeds, runs, seed, test);
			return $elm$core$List$isEmpty(distribution.only) ? ((!$elm_explorations$test$Test$Runner$countAllRunnables(distribution.skipped)) ? $elm_explorations$test$Test$Runner$Plain(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all)) : $elm_explorations$test$Test$Runner$Skipping(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all))) : $elm_explorations$test$Test$Runner$Only(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.only));
		}
	});
var $author$project$Test$Reporter$Reporter$TestReporter = F4(
	function (format, reportBegin, reportComplete, reportSummary) {
		return {format: format, reportBegin: reportBegin, reportComplete: reportComplete, reportSummary: reportSummary};
	});
var $author$project$Console$Text$Default = {$: 'Default'};
var $author$project$Console$Text$Normal = {$: 'Normal'};
var $author$project$Console$Text$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $author$project$Console$Text$plain = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Default, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$pluralize = F3(
	function (singular, plural, count) {
		var suffix = (count === 1) ? singular : plural;
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					$elm$core$String$fromInt(count),
					suffix
				]));
	});
var $author$project$Test$Runner$Node$Vendor$Console$colorsInverted = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[7m', str, '\u001B[27m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$dark = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[2m', str, '\u001B[22m']));
};
var $author$project$Console$Text$applyModifiersHelp = F2(
	function (modifier, str) {
		if (modifier.$ === 'Inverted') {
			return $author$project$Test$Runner$Node$Vendor$Console$colorsInverted(str);
		} else {
			return $author$project$Test$Runner$Node$Vendor$Console$dark(str);
		}
	});
var $author$project$Console$Text$applyModifiers = F2(
	function (modifiers, str) {
		return A3($elm$core$List$foldl, $author$project$Console$Text$applyModifiersHelp, str, modifiers);
	});
var $author$project$Test$Runner$Node$Vendor$Console$bold = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[1m', str, '\u001B[22m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$underline = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[4m', str, '\u001B[24m']));
};
var $author$project$Console$Text$applyStyle = F2(
	function (style, str) {
		switch (style.$) {
			case 'Normal':
				return str;
			case 'Bold':
				return $author$project$Test$Runner$Node$Vendor$Console$bold(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$underline(str);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Console$bgBlack = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[40m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgBlue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[44m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgCyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[46m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgGreen = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[42m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgMagenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[45m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgRed = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[41m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgWhite = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[47m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgYellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[43m', str, '\u001B[49m']));
};
var $author$project$Console$Text$colorizeBackground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $author$project$Test$Runner$Node$Vendor$Console$bgRed(str);
			case 'Green':
				return $author$project$Test$Runner$Node$Vendor$Console$bgGreen(str);
			case 'Yellow':
				return $author$project$Test$Runner$Node$Vendor$Console$bgYellow(str);
			case 'Black':
				return $author$project$Test$Runner$Node$Vendor$Console$bgBlack(str);
			case 'Blue':
				return $author$project$Test$Runner$Node$Vendor$Console$bgBlue(str);
			case 'Magenta':
				return $author$project$Test$Runner$Node$Vendor$Console$bgMagenta(str);
			case 'Cyan':
				return $author$project$Test$Runner$Node$Vendor$Console$bgCyan(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$bgWhite(str);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Console$black = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[30m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$blue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[34m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$cyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[36m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$green = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[32m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$magenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[35m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$red = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[31m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$white = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[37m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$yellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[33m', str, '\u001B[39m']));
};
var $author$project$Console$Text$colorizeForeground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $author$project$Test$Runner$Node$Vendor$Console$red(str);
			case 'Green':
				return $author$project$Test$Runner$Node$Vendor$Console$green(str);
			case 'Yellow':
				return $author$project$Test$Runner$Node$Vendor$Console$yellow(str);
			case 'Black':
				return $author$project$Test$Runner$Node$Vendor$Console$black(str);
			case 'Blue':
				return $author$project$Test$Runner$Node$Vendor$Console$blue(str);
			case 'Magenta':
				return $author$project$Test$Runner$Node$Vendor$Console$magenta(str);
			case 'Cyan':
				return $author$project$Test$Runner$Node$Vendor$Console$cyan(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$white(str);
		}
	});
var $author$project$Console$Text$render = F2(
	function (useColor, txt) {
		if (txt.$ === 'Text') {
			var attrs = txt.a;
			var str = txt.b;
			if (useColor.$ === 'UseColor') {
				return A2(
					$author$project$Console$Text$applyStyle,
					attrs.style,
					A2(
						$author$project$Console$Text$applyModifiers,
						attrs.modifiers,
						A2(
							$author$project$Console$Text$colorizeForeground,
							attrs.foreground,
							A2($author$project$Console$Text$colorizeBackground, attrs.background, str))));
			} else {
				return str;
			}
		} else {
			var texts = txt.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$author$project$Console$Text$render(useColor),
					texts));
		}
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Test$Reporter$Console$textToValue = F2(
	function (useColor, txt) {
		return $elm$json$Json$Encode$string(
			A2($author$project$Console$Text$render, useColor, txt));
	});
var $author$project$Test$Reporter$Console$reportBegin = F2(
	function (useColor, _v0) {
		var paths = _v0.paths;
		var fuzzRuns = _v0.fuzzRuns;
		var testCount = _v0.testCount;
		var initialSeed = _v0.initialSeed;
		var prefix = 'Running ' + (A3($author$project$Test$Reporter$Console$pluralize, 'test', 'tests', testCount) + ('. To reproduce these results, run: elm-test --fuzz ' + ($elm$core$String$fromInt(fuzzRuns) + (' --seed ' + $elm$core$String$fromInt(initialSeed)))));
		return $elm$core$Maybe$Just(
			A2(
				$author$project$Test$Reporter$Console$textToValue,
				useColor,
				$author$project$Console$Text$plain(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$cons, prefix, paths)) + '\n')));
	});
var $author$project$Test$Reporter$JUnit$reportBegin = function (_v0) {
	return $elm$core$Maybe$Nothing;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Test$Reporter$Json$reportBegin = function (_v0) {
	var paths = _v0.paths;
	var fuzzRuns = _v0.fuzzRuns;
	var testCount = _v0.testCount;
	var initialSeed = _v0.initialSeed;
	return $elm$core$Maybe$Just(
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'event',
					$elm$json$Json$Encode$string('runStart')),
					_Utils_Tuple2(
					'testCount',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(testCount))),
					_Utils_Tuple2(
					'fuzzRuns',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(fuzzRuns))),
					_Utils_Tuple2(
					'paths',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, paths)),
					_Utils_Tuple2(
					'initialSeed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(initialSeed)))
				])));
};
var $author$project$Console$Text$Texts = function (a) {
	return {$: 'Texts', a: a};
};
var $author$project$Console$Text$concat = $author$project$Console$Text$Texts;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Console$Text$Dark = {$: 'Dark'};
var $author$project$Console$Text$dark = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$author$project$Console$Text$Text,
			_Utils_update(
				styles,
				{
					modifiers: A2($elm$core$List$cons, $author$project$Console$Text$Dark, styles.modifiers)
				}),
			str);
	} else {
		var texts = txt.a;
		return $author$project$Console$Text$Texts(
			A2($elm$core$List$map, $author$project$Console$Text$dark, texts));
	}
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$not = _Basics_not;
var $elm_explorations$test$Test$Runner$formatLabels = F3(
	function (formatDescription, formatTest, labels) {
		var _v0 = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			labels);
		if (!_v0.b) {
			return _List_Nil;
		} else {
			var test = _v0.a;
			var descriptions = _v0.b;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					formatTest(test),
					A2($elm$core$List$map, formatDescription, descriptions)));
		}
	});
var $author$project$Console$Text$Red = {$: 'Red'};
var $author$project$Console$Text$red = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Red, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $author$project$Test$Reporter$Console$withChar = F2(
	function (icon, str) {
		return $elm$core$String$fromChar(icon) + (' ' + (str + '\n'));
	});
var $author$project$Test$Reporter$Console$failureLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			$author$project$Console$Text$red,
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('✗')))),
	$author$project$Console$Text$concat);
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $author$project$Test$Runner$Node$Vendor$Diff$Added = function (a) {
	return {$: 'Added', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$CannotGetA = function (a) {
	return {$: 'CannotGetA', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$CannotGetB = function (a) {
	return {$: 'CannotGetB', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$NoChange = function (a) {
	return {$: 'NoChange', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$Removed = function (a) {
	return {$: 'Removed', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 'UnexpectedPath', a: a, b: b};
	});
var $author$project$Test$Runner$Node$Vendor$Diff$makeChangesHelp = F5(
	function (changes, getA, getB, _v0, path) {
		makeChangesHelp:
		while (true) {
			var x = _v0.a;
			var y = _v0.b;
			if (!path.b) {
				return $elm$core$Result$Ok(changes);
			} else {
				var _v2 = path.a;
				var prevX = _v2.a;
				var prevY = _v2.b;
				var tail = path.b;
				var change = function () {
					if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
						var _v4 = getA(x);
						if (_v4.$ === 'Just') {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$author$project$Test$Runner$Node$Vendor$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$author$project$Test$Runner$Node$Vendor$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (_v5.$ === 'Just') {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$author$project$Test$Runner$Node$Vendor$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$author$project$Test$Runner$Node$Vendor$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (_v6.$ === 'Just') {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$author$project$Test$Runner$Node$Vendor$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$author$project$Test$Runner$Node$Vendor$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$author$project$Test$Runner$Node$Vendor$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (change.$ === 'Err') {
					var err = change.a;
					return $elm$core$Result$Err(err);
				} else {
					var c = change.a;
					var $temp$changes = A2($elm$core$List$cons, c, changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$_v0 = _Utils_Tuple2(prevX, prevY),
						$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					_v0 = $temp$_v0;
					path = $temp$path;
					continue makeChangesHelp;
				}
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($author$project$Test$Runner$Node$Vendor$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$Continue = function (a) {
	return {$: 'Continue', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$Found = function (a) {
	return {$: 'Found', a: a};
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$step = F4(
	function (snake_, offset, k, v) {
		var fromTop = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k + 1) + offset, v));
		var fromLeft = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k - 1) + offset, v));
		var _v0 = function () {
			var _v2 = _Utils_Tuple2(fromLeft, fromTop);
			if (!_v2.a.b) {
				if (!_v2.b.b) {
					return _Utils_Tuple2(
						_List_Nil,
						_Utils_Tuple2(0, 0));
				} else {
					var _v3 = _v2.b;
					var _v4 = _v3.a;
					var topX = _v4.a;
					var topY = _v4.b;
					return _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			} else {
				if (!_v2.b.b) {
					var _v5 = _v2.a;
					var _v6 = _v5.a;
					var leftX = _v6.a;
					var leftY = _v6.b;
					return _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1));
				} else {
					var _v7 = _v2.a;
					var _v8 = _v7.a;
					var leftX = _v8.a;
					var leftY = _v8.b;
					var _v9 = _v2.b;
					var _v10 = _v9.a;
					var topX = _v10.a;
					var topY = _v10.b;
					return (_Utils_cmp(leftY + 1, topY) > -1) ? _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			}
		}();
		var path = _v0.a;
		var _v1 = _v0.b;
		var x = _v1.a;
		var y = _v1.b;
		var _v11 = A3(
			snake_,
			x + 1,
			y + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(x, y),
				path));
		var newPath = _v11.a;
		var goal = _v11.b;
		return goal ? $author$project$Test$Runner$Node$Vendor$Diff$Found(newPath) : $author$project$Test$Runner$Node$Vendor$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $author$project$Test$Runner$Node$Vendor$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($author$project$Test$Runner$Node$Vendor$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 'Found') {
					var path = _v1.a;
					return $author$project$Test$Runner$Node$Vendor$Diff$Found(path);
				} else {
					var v_ = _v1.a;
					var $temp$snake_ = snake_,
						$temp$offset = offset,
						$temp$ks = ks_,
						$temp$v = v_;
					snake_ = $temp$snake_;
					offset = $temp$offset;
					ks = $temp$ks;
					v = $temp$v;
					continue onpLoopK;
				}
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onpLoopP = F5(
	function (snake_, delta, offset, p, v) {
		onpLoopP:
		while (true) {
			var ks = (delta > 0) ? _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, delta + p)),
				A2($elm$core$List$range, -p, delta)) : _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, p)),
				A2($elm$core$List$range, (-p) + delta, delta));
			var _v0 = A4($author$project$Test$Runner$Node$Vendor$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 'Found') {
				var path = _v0.a;
				return path;
			} else {
				var v_ = _v0.a;
				var $temp$snake_ = snake_,
					$temp$delta = delta,
					$temp$offset = offset,
					$temp$p = p + 1,
					$temp$v = v_;
				snake_ = $temp$snake_;
				delta = $temp$delta;
				offset = $temp$offset;
				p = $temp$p;
				v = $temp$v;
				continue onpLoopP;
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (_v0.a.$ === 'Just') {
					if (_v0.b.$ === 'Just') {
						var a = _v0.a.a;
						var b = _v0.b.a;
						if (_Utils_eq(a, b)) {
							var $temp$getA = getA,
								$temp$getB = getB,
								$temp$nextX = nextX + 1,
								$temp$nextY = nextY + 1,
								$temp$path = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(nextX, nextY),
								path);
							getA = $temp$getA;
							getB = $temp$getB;
							nextX = $temp$nextX;
							nextY = $temp$nextY;
							path = $temp$path;
							continue snake;
						} else {
							return _Utils_Tuple2(path, false);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(path, true);
					} else {
						break _v0$2;
					}
				}
			}
			return _Utils_Tuple2(path, false);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$author$project$Test$Runner$Node$Vendor$Diff$onpLoopP,
			A2($author$project$Test$Runner$Node$Vendor$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $author$project$Test$Runner$Node$Vendor$Diff$testDiff = F2(
	function (a, b) {
		var arrB = $elm$core$Array$fromList(b);
		var getB = function (y) {
			return A2($elm$core$Array$get, y - 1, arrB);
		};
		var n = $elm$core$Array$length(arrB);
		var arrA = $elm$core$Array$fromList(a);
		var getA = function (x) {
			return A2($elm$core$Array$get, x - 1, arrA);
		};
		var m = $elm$core$Array$length(arrA);
		var path = A4($author$project$Test$Runner$Node$Vendor$Diff$onp, getA, getB, m, n);
		return A3($author$project$Test$Runner$Node$Vendor$Diff$makeChanges, getA, getB, path);
	});
var $author$project$Test$Runner$Node$Vendor$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($author$project$Test$Runner$Node$Vendor$Diff$testDiff, a, b);
		if (_v0.$ === 'Ok') {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $author$project$Test$Reporter$Highlightable$Highlighted = function (a) {
	return {$: 'Highlighted', a: a};
};
var $author$project$Test$Reporter$Highlightable$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $author$project$Test$Reporter$Highlightable$fromDiff = function (diff) {
	switch (diff.$) {
		case 'Added':
			return _List_Nil;
		case 'Removed':
			var _char = diff.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Highlightable$Highlighted(_char)
				]);
		default:
			var _char = diff.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Highlightable$Plain(_char)
				]);
	}
};
var $author$project$Test$Reporter$Highlightable$diffLists = F2(
	function (expected, actual) {
		return A2(
			$elm$core$List$concatMap,
			$author$project$Test$Reporter$Highlightable$fromDiff,
			A2($author$project$Test$Runner$Node$Vendor$Diff$diff, expected, actual));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Test$Reporter$Console$Format$isFloat = function (str) {
	var _v0 = $elm$core$String$toFloat(str);
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Test$Reporter$Highlightable$map = F2(
	function (transform, highlightable) {
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return $author$project$Test$Reporter$Highlightable$Highlighted(
				transform(val));
		} else {
			var val = highlightable.a;
			return $author$project$Test$Reporter$Highlightable$Plain(
				transform(val));
		}
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Test$Reporter$Highlightable$resolve = F2(
	function (_v0, highlightable) {
		var fromHighlighted = _v0.fromHighlighted;
		var fromPlain = _v0.fromPlain;
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return fromHighlighted(val);
		} else {
			var val = highlightable.a;
			return fromPlain(val);
		}
	});
var $author$project$Test$Reporter$Console$Format$highlightEqual = F2(
	function (expected, actual) {
		if ((expected === '\"\"') || (actual === '\"\"')) {
			return $elm$core$Maybe$Nothing;
		} else {
			if ($author$project$Test$Reporter$Console$Format$isFloat(expected) && $author$project$Test$Reporter$Console$Format$isFloat(actual)) {
				return $elm$core$Maybe$Nothing;
			} else {
				var isHighlighted = $author$project$Test$Reporter$Highlightable$resolve(
					{
						fromHighlighted: $elm$core$Basics$always(true),
						fromPlain: $elm$core$Basics$always(false)
					});
				var expectedChars = $elm$core$String$toList(expected);
				var edgeCount = function (highlightedString) {
					var highlights = A2($elm$core$List$map, isHighlighted, highlightedString);
					return $elm$core$List$length(
						A2(
							$elm$core$List$filter,
							function (_v0) {
								var lhs = _v0.a;
								var rhs = _v0.b;
								return !_Utils_eq(lhs, rhs);
							},
							A3(
								$elm$core$List$map2,
								$elm$core$Tuple$pair,
								A2($elm$core$List$drop, 1, highlights),
								highlights)));
				};
				var actualChars = $elm$core$String$toList(actual);
				var highlightedActual = A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Highlightable$map($elm$core$String$fromChar),
					A2($author$project$Test$Reporter$Highlightable$diffLists, actualChars, expectedChars));
				var highlightedExpected = A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Highlightable$map($elm$core$String$fromChar),
					A2($author$project$Test$Reporter$Highlightable$diffLists, expectedChars, actualChars));
				var plainCharCount = $elm$core$List$length(
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, isHighlighted),
						highlightedExpected));
				return ((_Utils_cmp(
					edgeCount(highlightedActual),
					plainCharCount) > 0) || (_Utils_cmp(
					edgeCount(highlightedExpected),
					plainCharCount) > 0)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(highlightedExpected, highlightedActual));
			}
		}
	});
var $author$project$Test$Reporter$Console$Format$verticalBar = F3(
	function (comparison, expected, actual) {
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[actual, '╷', '│ ' + comparison, '╵', expected]));
	});
var $author$project$Test$Reporter$Console$Format$listDiffToString = F4(
	function (index, description, _v0, originals) {
		listDiffToString:
		while (true) {
			var expected = _v0.expected;
			var actual = _v0.actual;
			var _v1 = _Utils_Tuple2(expected, actual);
			if (!_v1.a.b) {
				if (!_v1.b.b) {
					return A2(
						$elm$core$String$join,
						'',
						_List_fromArray(
							[
								'Two lists were unequal previously, yet ended up equal later.',
								'This should never happen!',
								'Please report this bug to https://github.com/elm-community/elm-test/issues - and include these lists: ',
								'\n',
								A2($elm$core$String$join, ', ', originals.originalExpected),
								'\n',
								A2($elm$core$String$join, ', ', originals.originalActual)
							]));
				} else {
					var _v3 = _v1.b;
					return A3(
						$author$project$Test$Reporter$Console$Format$verticalBar,
						description + ' was longer than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				}
			} else {
				if (!_v1.b.b) {
					var _v2 = _v1.a;
					return A3(
						$author$project$Test$Reporter$Console$Format$verticalBar,
						description + ' was shorter than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				} else {
					var _v4 = _v1.a;
					var firstExpected = _v4.a;
					var restExpected = _v4.b;
					var _v5 = _v1.b;
					var firstActual = _v5.a;
					var restActual = _v5.b;
					if (_Utils_eq(firstExpected, firstActual)) {
						var $temp$index = index + 1,
							$temp$description = description,
							$temp$_v0 = {actual: restActual, expected: restExpected},
							$temp$originals = originals;
						index = $temp$index;
						description = $temp$description;
						_v0 = $temp$_v0;
						originals = $temp$originals;
						continue listDiffToString;
					} else {
						return A2(
							$elm$core$String$join,
							'',
							_List_fromArray(
								[
									A3(
									$author$project$Test$Reporter$Console$Format$verticalBar,
									description,
									A2($elm$core$String$join, ', ', originals.originalExpected),
									A2($elm$core$String$join, ', ', originals.originalActual)),
									'\n\nThe first diff is at index ',
									$elm$core$String$fromInt(index),
									': it was `',
									firstActual,
									'`, but `',
									firstExpected,
									'` was expected.'
								]));
					}
				}
			}
		}
	});
var $author$project$Test$Reporter$Console$Format$format = F3(
	function (formatEquality, description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				var _v1 = A2($author$project$Test$Reporter$Console$Format$highlightEqual, expected, actual);
				if (_v1.$ === 'Nothing') {
					return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, expected, actual);
				} else {
					var _v2 = _v1.a;
					var highlightedExpected = _v2.a;
					var highlightedActual = _v2.b;
					var _v3 = A2(formatEquality, highlightedExpected, highlightedActual);
					var formattedExpected = _v3.a;
					var formattedActual = _v3.b;
					return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, formattedExpected, formattedActual);
				}
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, first, second);
			case 'TODO':
				return description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v4 = reason.a;
					return (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
				} else {
					return description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A4(
					$author$project$Test$Reporter$Console$Format$listDiffToString,
					0,
					description,
					{actual: actual, expected: expected},
					{originalActual: actual, originalExpected: expected});
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				var missingStr = $elm$core$List$isEmpty(missing) ? '' : ('\nThese keys are missing: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', missing)));
				var extraStr = $elm$core$List$isEmpty(extra) ? '' : ('\nThese keys are extra: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', extra)));
				return A2(
					$elm$core$String$join,
					'',
					_List_fromArray(
						[
							A3($author$project$Test$Reporter$Console$Format$verticalBar, description, expected, actual),
							'\n',
							extraStr,
							missingStr
						]));
		}
	});
var $author$project$Test$Reporter$Console$Format$Color$fromHighlightable = $author$project$Test$Reporter$Highlightable$resolve(
	{fromHighlighted: $author$project$Test$Runner$Node$Vendor$Console$colorsInverted, fromPlain: $elm$core$Basics$identity});
var $author$project$Test$Reporter$Console$Format$Color$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var formattedExpected = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $author$project$Test$Reporter$Console$Format$Color$fromHighlightable, highlightedExpected));
		var formattedActual = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $author$project$Test$Reporter$Console$Format$Color$fromHighlightable, highlightedActual));
		return _Utils_Tuple2(formattedExpected, formattedActual);
	});
var $author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable = function (indicator) {
	return $author$project$Test$Reporter$Highlightable$resolve(
		{
			fromHighlighted: function (_char) {
				return _Utils_Tuple2(_char, indicator);
			},
			fromPlain: function (_char) {
				return _Utils_Tuple2(_char, ' ');
			}
		});
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $author$project$Test$Reporter$Console$Format$Monochrome$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var _v0 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable('▲'),
				highlightedExpected));
		var formattedExpected = _v0.a;
		var expectedIndicators = _v0.b;
		var combinedExpected = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', formattedExpected),
					A2($elm$core$String$join, '', expectedIndicators)
				]));
		var _v1 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable('▼'),
				highlightedActual));
		var formattedActual = _v1.a;
		var actualIndicators = _v1.b;
		var combinedActual = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', actualIndicators),
					A2($elm$core$String$join, '', formattedActual)
				]));
		return _Utils_Tuple2(combinedExpected, combinedActual);
	});
var $author$project$Test$Reporter$Console$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$elm$core$Basics$append('    '),
			A2($elm$core$String$split, '\n', str)));
};
var $author$project$Test$Reporter$Console$failureToText = F2(
	function (useColor, _v0) {
		var given = _v0.given;
		var description = _v0.description;
		var reason = _v0.reason;
		var formatEquality = function () {
			if (useColor.$ === 'Monochrome') {
				return $author$project$Test$Reporter$Console$Format$Monochrome$formatEquality;
			} else {
				return $author$project$Test$Reporter$Console$Format$Color$formatEquality;
			}
		}();
		var messageText = $author$project$Console$Text$plain(
			'\n' + ($author$project$Test$Reporter$Console$indent(
				A3($author$project$Test$Reporter$Console$Format$format, formatEquality, description, reason)) + '\n\n'));
		if (given.$ === 'Nothing') {
			return messageText;
		} else {
			var givenStr = given.a;
			return $author$project$Console$Text$concat(
				_List_fromArray(
					[
						$author$project$Console$Text$dark(
						$author$project$Console$Text$plain('\nGiven ' + (givenStr + '\n'))),
						messageText
					]));
		}
	});
var $author$project$Test$Reporter$Console$failuresToText = F3(
	function (useColor, labels, failures) {
		return $author$project$Console$Text$concat(
			A2(
				$elm$core$List$cons,
				$author$project$Test$Reporter$Console$failureLabelsToText(labels),
				A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Console$failureToText(useColor),
					failures)));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Test$Reporter$Console$reportComplete = F2(
	function (useColor, _v0) {
		var labels = _v0.labels;
		var outcome = _v0.outcome;
		switch (outcome.$) {
			case 'Passed':
				return $elm$json$Json$Encode$null;
			case 'Failed':
				var failures = outcome.a;
				return A2(
					$author$project$Test$Reporter$Console$textToValue,
					useColor,
					A3($author$project$Test$Reporter$Console$failuresToText, useColor, labels, failures));
			default:
				var str = outcome.a;
				return $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'todo',
							$elm$json$Json$Encode$string(str)),
							_Utils_Tuple2(
							'labels',
							A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, labels))
						]));
		}
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$Test$Reporter$JUnit$encodeDuration = function (time) {
	return $elm$json$Json$Encode$string(
		$elm$core$String$fromFloat(time / 1000));
};
var $author$project$Test$Reporter$JUnit$encodeFailureTuple = function (message) {
	return _Utils_Tuple2(
		'failure',
		$elm$json$Json$Encode$string(message));
};
var $author$project$Test$Reporter$JUnit$reasonToString = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return expected + ('\n\nwas not equal to\n\n' + actual);
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return first + ('\n\nfailed when compared with ' + (description + (' on\n\n' + second)));
			case 'TODO':
				return 'TODO: ' + description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return 'Invalid test: ' + explanation;
				} else {
					return 'Invalid test: ' + description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2($elm$core$String$join, ', ', expected) + ('\n\nhad different elements than\n\n' + A2($elm$core$String$join, ', ', actual));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return expected + ('\n\nhad different contents than\n\n' + (actual + ('\n\nthese were extra:\n\n' + (A2($elm$core$String$join, '\n', extra) + ('\n\nthese were missing:\n\n' + A2($elm$core$String$join, '\n', missing))))));
		}
	});
var $author$project$Test$Reporter$JUnit$formatFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	var message = A2($author$project$Test$Reporter$JUnit$reasonToString, description, reason);
	if (given.$ === 'Just') {
		var str = given.a;
		return 'Given ' + (str + ('\n\n' + message));
	} else {
		return message;
	}
};
var $author$project$Test$Reporter$JUnit$encodeOutcome = function (outcome) {
	switch (outcome.$) {
		case 'Passed':
			return _List_Nil;
		case 'Failed':
			var failures = outcome.a;
			var message = A2(
				$elm$core$String$join,
				'\n\n\n',
				A2($elm$core$List$map, $author$project$Test$Reporter$JUnit$formatFailure, failures));
			return _List_fromArray(
				[
					$author$project$Test$Reporter$JUnit$encodeFailureTuple(message)
				]);
		default:
			var message = outcome.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$JUnit$encodeFailureTuple('TODO: ' + message)
				]);
	}
};
var $author$project$Test$Reporter$JUnit$formatClassAndName = function (labels) {
	if (labels.b) {
		var head = labels.a;
		var rest = labels.b;
		return _Utils_Tuple2(
			A2(
				$elm$core$String$join,
				' ',
				$elm$core$List$reverse(rest)),
			head);
	} else {
		return _Utils_Tuple2('', '');
	}
};
var $author$project$Test$Reporter$JUnit$reportComplete = function (_v0) {
	var labels = _v0.labels;
	var duration = _v0.duration;
	var outcome = _v0.outcome;
	var _v1 = $author$project$Test$Reporter$JUnit$formatClassAndName(labels);
	var classname = _v1.a;
	var name = _v1.b;
	return $elm$json$Json$Encode$object(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'@classname',
					$elm$json$Json$Encode$string(classname)),
					_Utils_Tuple2(
					'@name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'@time',
					$author$project$Test$Reporter$JUnit$encodeDuration(duration))
				]),
			$author$project$Test$Reporter$JUnit$encodeOutcome(outcome)));
};
var $author$project$Test$Reporter$Json$encodeReasonType = F2(
	function (reasonType, data) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(reasonType)),
					_Utils_Tuple2('data', data)
				]));
	});
var $author$project$Test$Reporter$Json$encodeReason = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'Custom',
					$elm$json$Json$Encode$string(description));
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'Equality',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'Comparison',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'first',
								$elm$json$Json$Encode$string(first)),
								_Utils_Tuple2(
								'second',
								$elm$json$Json$Encode$string(second)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'TODO':
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'TODO',
					$elm$json$Json$Encode$string(description));
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return A2(
						$author$project$Test$Reporter$Json$encodeReasonType,
						'Invalid',
						$elm$json$Json$Encode$string(explanation));
				} else {
					return A2(
						$author$project$Test$Reporter$Json$encodeReasonType,
						'Invalid',
						$elm$json$Json$Encode$string(description));
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'ListDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, expected)),
								_Utils_Tuple2(
								'actual',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, actual))
							])));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'CollectionDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'extra',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, extra)),
								_Utils_Tuple2(
								'missing',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, missing))
							])));
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Test$Reporter$Json$encodeFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'given',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, given))),
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(description)),
				_Utils_Tuple2(
				'reason',
				A2($author$project$Test$Reporter$Json$encodeReason, description, reason))
			]));
};
var $author$project$Test$Reporter$Json$encodeFailures = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			var failures = outcome.a;
			return A2($elm$core$List$map, $author$project$Test$Reporter$Json$encodeFailure, failures);
		case 'Todo':
			var str = outcome.a;
			return _List_fromArray(
				[
					$elm$json$Json$Encode$string(str)
				]);
		default:
			return _List_Nil;
	}
};
var $author$project$Test$Reporter$Json$encodeLabels = function (labels) {
	return A2(
		$elm$json$Json$Encode$list,
		$elm$json$Json$Encode$string,
		$elm$core$List$reverse(labels));
};
var $author$project$Test$Reporter$Json$getStatus = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			return 'fail';
		case 'Todo':
			return 'todo';
		default:
			return 'pass';
	}
};
var $author$project$Test$Reporter$Json$reportComplete = function (_v0) {
	var duration = _v0.duration;
	var labels = _v0.labels;
	var outcome = _v0.outcome;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'event',
				$elm$json$Json$Encode$string('testCompleted')),
				_Utils_Tuple2(
				'status',
				$elm$json$Json$Encode$string(
					$author$project$Test$Reporter$Json$getStatus(outcome))),
				_Utils_Tuple2(
				'labels',
				$author$project$Test$Reporter$Json$encodeLabels(labels)),
				_Utils_Tuple2(
				'failures',
				A2(
					$elm$json$Json$Encode$list,
					$elm$core$Basics$identity,
					$author$project$Test$Reporter$Json$encodeFailures(outcome))),
				_Utils_Tuple2(
				'duration',
				$elm$json$Json$Encode$string(
					$elm$core$String$fromInt(duration)))
			]));
};
var $author$project$Test$Reporter$Console$formatDuration = function (time) {
	return $elm$core$String$fromFloat(time) + ' ms';
};
var $author$project$Console$Text$Green = {$: 'Green'};
var $author$project$Console$Text$green = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Green, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$stat = F2(
	function (label, value) {
		return $author$project$Console$Text$concat(
			_List_fromArray(
				[
					$author$project$Console$Text$dark(
					$author$project$Console$Text$plain(label)),
					$author$project$Console$Text$plain(value + '\n')
				]));
	});
var $author$project$Test$Reporter$Console$todoLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓')))),
	$author$project$Console$Text$concat);
var $author$project$Test$Reporter$Console$todoToChalk = function (message) {
	return $author$project$Console$Text$plain('◦ TODO: ' + (message + '\n\n'));
};
var $author$project$Test$Reporter$Console$todosToText = function (_v0) {
	var labels = _v0.a;
	var failure = _v0.b;
	return $author$project$Console$Text$concat(
		_List_fromArray(
			[
				$author$project$Test$Reporter$Console$todoLabelsToText(labels),
				$author$project$Test$Reporter$Console$todoToChalk(failure)
			]));
};
var $author$project$Test$Reporter$Console$summarizeTodos = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map($author$project$Test$Reporter$Console$todosToText),
	$author$project$Console$Text$concat);
var $author$project$Console$Text$Underline = {$: 'Underline'};
var $author$project$Console$Text$underline = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$author$project$Console$Text$Text,
			_Utils_update(
				styles,
				{style: $author$project$Console$Text$Underline}),
			str);
	} else {
		var texts = txt.a;
		return $author$project$Console$Text$Texts(
			A2($elm$core$List$map, $author$project$Console$Text$dark, texts));
	}
};
var $author$project$Console$Text$Yellow = {$: 'Yellow'};
var $author$project$Console$Text$yellow = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Yellow, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$reportSummary = F3(
	function (useColor, _v0, autoFail) {
		var todos = _v0.todos;
		var passed = _v0.passed;
		var failed = _v0.failed;
		var duration = _v0.duration;
		var todoStats = function () {
			var _v7 = $elm$core$List$length(todos);
			if (!_v7) {
				return $author$project$Console$Text$plain('');
			} else {
				var numTodos = _v7;
				return A2(
					$author$project$Test$Reporter$Console$stat,
					'Todo:     ',
					$elm$core$String$fromInt(numTodos));
			}
		}();
		var individualTodos = (failed > 0) ? $author$project$Console$Text$plain('') : $author$project$Test$Reporter$Console$summarizeTodos(
			$elm$core$List$reverse(todos));
		var headlineResult = function () {
			var _v3 = _Utils_Tuple3(
				autoFail,
				failed,
				$elm$core$List$length(todos));
			_v3$4:
			while (true) {
				if (_v3.a.$ === 'Nothing') {
					if (!_v3.b) {
						switch (_v3.c) {
							case 0:
								var _v4 = _v3.a;
								return $elm$core$Result$Ok('TEST RUN PASSED');
							case 1:
								var _v5 = _v3.a;
								return $elm$core$Result$Err(
									_Utils_Tuple3($author$project$Console$Text$yellow, 'TEST RUN INCOMPLETE', ' because there is 1 TODO remaining'));
							default:
								var _v6 = _v3.a;
								var numTodos = _v3.c;
								return $elm$core$Result$Err(
									_Utils_Tuple3(
										$author$project$Console$Text$yellow,
										'TEST RUN INCOMPLETE',
										' because there are ' + ($elm$core$String$fromInt(numTodos) + ' TODOs remaining')));
						}
					} else {
						break _v3$4;
					}
				} else {
					if (!_v3.b) {
						var failure = _v3.a.a;
						return $elm$core$Result$Err(
							_Utils_Tuple3($author$project$Console$Text$yellow, 'TEST RUN INCOMPLETE', ' because ' + failure));
					} else {
						break _v3$4;
					}
				}
			}
			return $elm$core$Result$Err(
				_Utils_Tuple3($author$project$Console$Text$red, 'TEST RUN FAILED', ''));
		}();
		var headline = function () {
			if (headlineResult.$ === 'Ok') {
				var str = headlineResult.a;
				return $author$project$Console$Text$underline(
					$author$project$Console$Text$green('\n' + (str + '\n\n')));
			} else {
				var _v2 = headlineResult.a;
				var colorize = _v2.a;
				var str = _v2.b;
				var suffix = _v2.c;
				return $author$project$Console$Text$concat(
					_List_fromArray(
						[
							$author$project$Console$Text$underline(
							colorize('\n' + str)),
							colorize(suffix + '\n\n')
						]));
			}
		}();
		return $elm$json$Json$Encode$string(
			A2(
				$author$project$Console$Text$render,
				useColor,
				$author$project$Console$Text$concat(
					_List_fromArray(
						[
							headline,
							A2(
							$author$project$Test$Reporter$Console$stat,
							'Duration: ',
							$author$project$Test$Reporter$Console$formatDuration(duration)),
							A2(
							$author$project$Test$Reporter$Console$stat,
							'Passed:   ',
							$elm$core$String$fromInt(passed)),
							A2(
							$author$project$Test$Reporter$Console$stat,
							'Failed:   ',
							$elm$core$String$fromInt(failed)),
							todoStats,
							individualTodos
						]))));
	});
var $author$project$Test$Reporter$TestResults$Failed = function (a) {
	return {$: 'Failed', a: a};
};
var $author$project$Test$Reporter$JUnit$encodeExtraFailure = function (_v0) {
	return $author$project$Test$Reporter$JUnit$reportComplete(
		{
			duration: 0,
			labels: _List_Nil,
			outcome: $author$project$Test$Reporter$TestResults$Failed(_List_Nil)
		});
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Test$Reporter$JUnit$reportSummary = F2(
	function (_v0, autoFail) {
		var testCount = _v0.testCount;
		var duration = _v0.duration;
		var failed = _v0.failed;
		var extraFailures = function () {
			var _v1 = _Utils_Tuple2(failed, autoFail);
			if ((!_v1.a) && (_v1.b.$ === 'Just')) {
				var failure = _v1.b.a;
				return _List_fromArray(
					[
						$author$project$Test$Reporter$JUnit$encodeExtraFailure(failure)
					]);
			} else {
				return _List_Nil;
			}
		}();
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'testsuite',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'@name',
								$elm$json$Json$Encode$string('elm-test')),
								_Utils_Tuple2(
								'@package',
								$elm$json$Json$Encode$string('elm-test')),
								_Utils_Tuple2(
								'@tests',
								$elm$json$Json$Encode$int(testCount)),
								_Utils_Tuple2(
								'@failed',
								$elm$json$Json$Encode$int(failed)),
								_Utils_Tuple2(
								'@errors',
								$elm$json$Json$Encode$int(0)),
								_Utils_Tuple2(
								'@time',
								$elm$json$Json$Encode$float(duration)),
								_Utils_Tuple2(
								'testcase',
								A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, extraFailures))
							])))
				]));
	});
var $author$project$Test$Reporter$Json$reportSummary = F2(
	function (_v0, autoFail) {
		var duration = _v0.duration;
		var passed = _v0.passed;
		var failed = _v0.failed;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'event',
					$elm$json$Json$Encode$string('runComplete')),
					_Utils_Tuple2(
					'passed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(passed))),
					_Utils_Tuple2(
					'failed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(failed))),
					_Utils_Tuple2(
					'duration',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromFloat(duration))),
					_Utils_Tuple2(
					'autoFail',
					A2(
						$elm$core$Maybe$withDefault,
						$elm$json$Json$Encode$null,
						A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, autoFail)))
				]));
	});
var $author$project$Test$Reporter$Reporter$createReporter = function (report) {
	switch (report.$) {
		case 'JsonReport':
			return A4($author$project$Test$Reporter$Reporter$TestReporter, 'JSON', $author$project$Test$Reporter$Json$reportBegin, $author$project$Test$Reporter$Json$reportComplete, $author$project$Test$Reporter$Json$reportSummary);
		case 'ConsoleReport':
			var useColor = report.a;
			return A4(
				$author$project$Test$Reporter$Reporter$TestReporter,
				'CHALK',
				$author$project$Test$Reporter$Console$reportBegin(useColor),
				$author$project$Test$Reporter$Console$reportComplete(useColor),
				$author$project$Test$Reporter$Console$reportSummary(useColor));
		default:
			return A4($author$project$Test$Reporter$Reporter$TestReporter, 'JUNIT', $author$project$Test$Reporter$JUnit$reportBegin, $author$project$Test$Reporter$JUnit$reportComplete, $author$project$Test$Reporter$JUnit$reportSummary);
	}
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Test$Runner$Node$init = F2(
	function (_v0, _v1) {
		var processes = _v0.processes;
		var paths = _v0.paths;
		var fuzzRuns = _v0.fuzzRuns;
		var initialSeed = _v0.initialSeed;
		var report = _v0.report;
		var runners = _v0.runners;
		var testReporter = $author$project$Test$Reporter$Reporter$createReporter(report);
		var _v2 = function () {
			switch (runners.$) {
				case 'Plain':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Nothing,
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				case 'Only':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just('Test.only was used'),
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				case 'Skipping':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just('Test.skip was used'),
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				default:
					var str = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just(str),
						indexedRunners: _List_Nil
					};
			}
		}();
		var indexedRunners = _v2.indexedRunners;
		var autoFail = _v2.autoFail;
		var testCount = $elm$core$List$length(indexedRunners);
		var model = {
			autoFail: autoFail,
			available: $elm$core$Dict$fromList(indexedRunners),
			nextTestToRun: 0,
			processes: processes,
			results: _List_Nil,
			runInfo: {fuzzRuns: fuzzRuns, initialSeed: initialSeed, paths: paths, testCount: testCount},
			testReporter: testReporter
		};
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Test$Runner$Node$receive = _Platform_incomingPort('receive', $elm$json$Json$Decode$value);
var $author$project$Test$Runner$Node$Dispatch = function (a) {
	return {$: 'Dispatch', a: a};
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $author$project$Test$Runner$JsMessage$Summary = F3(
	function (a, b, c) {
		return {$: 'Summary', a: a, b: b, c: c};
	});
var $author$project$Test$Runner$JsMessage$Test = function (a) {
	return {$: 'Test', a: a};
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Test$Runner$JsMessage$todoDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2(
		$elm$json$Json$Decode$field,
		'labels',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'todo', $elm$json$Json$Decode$string));
var $author$project$Test$Runner$JsMessage$decodeMessageFromType = function (messageType) {
	switch (messageType) {
		case 'TEST':
			return A2(
				$elm$json$Json$Decode$map,
				$author$project$Test$Runner$JsMessage$Test,
				A2($elm$json$Json$Decode$field, 'index', $elm$json$Json$Decode$int));
		case 'SUMMARY':
			return A4(
				$elm$json$Json$Decode$map3,
				$author$project$Test$Runner$JsMessage$Summary,
				A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float),
				A2($elm$json$Json$Decode$field, 'failures', $elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$field,
					'todos',
					$elm$json$Json$Decode$list($author$project$Test$Runner$JsMessage$todoDecoder)));
		default:
			return $elm$json$Json$Decode$fail('Unrecognized message type: ' + messageType);
	}
};
var $author$project$Test$Runner$JsMessage$decoder = A2(
	$elm$json$Json$Decode$andThen,
	$author$project$Test$Runner$JsMessage$decodeMessageFromType,
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $author$project$Test$Runner$Node$Complete = F4(
	function (a, b, c, d) {
		return {$: 'Complete', a: a, b: b, c: c, d: d};
	});
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Test$Reporter$TestResults$Passed = {$: 'Passed'};
var $author$project$Test$Reporter$TestResults$Todo = function (a) {
	return {$: 'Todo', a: a};
};
var $elm_explorations$test$Test$Runner$getFailureReason = function (expectation) {
	if (expectation.$ === 'Pass') {
		return $elm$core$Maybe$Nothing;
	} else {
		var record = expectation.a;
		return $elm$core$Maybe$Just(record);
	}
};
var $elm_explorations$test$Test$Runner$Failure$TODO = {$: 'TODO'};
var $elm_explorations$test$Test$Runner$isTodo = function (expectation) {
	if (expectation.$ === 'Pass') {
		return false;
	} else {
		var reason = expectation.a.reason;
		return _Utils_eq(reason, $elm_explorations$test$Test$Runner$Failure$TODO);
	}
};
var $author$project$Test$Reporter$TestResults$outcomesFromExpectationsHelp = F2(
	function (expectation, builder) {
		var _v0 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
		if (_v0.$ === 'Just') {
			var failure = _v0.a;
			return $elm_explorations$test$Test$Runner$isTodo(expectation) ? _Utils_update(
				builder,
				{
					todos: A2($elm$core$List$cons, failure.description, builder.todos)
				}) : _Utils_update(
				builder,
				{
					failures: A2($elm$core$List$cons, failure, builder.failures)
				});
		} else {
			return _Utils_update(
				builder,
				{passes: builder.passes + 1});
		}
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$Test$Reporter$TestResults$outcomesFromExpectations = function (expectations) {
	if (expectations.b) {
		if (!expectations.b.b) {
			var expectation = expectations.a;
			var _v1 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
			if (_v1.$ === 'Nothing') {
				return _List_fromArray(
					[$author$project$Test$Reporter$TestResults$Passed]);
			} else {
				var failure = _v1.a;
				return $elm_explorations$test$Test$Runner$isTodo(expectation) ? _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Todo(failure.description)
					]) : _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Failed(
						_List_fromArray(
							[failure]))
					]);
			}
		} else {
			var builder = A3(
				$elm$core$List$foldl,
				$author$project$Test$Reporter$TestResults$outcomesFromExpectationsHelp,
				{failures: _List_Nil, passes: 0, todos: _List_Nil},
				expectations);
			var failuresList = function () {
				var _v2 = builder.failures;
				if (!_v2.b) {
					return _List_Nil;
				} else {
					var failures = _v2;
					return _List_fromArray(
						[
							$author$project$Test$Reporter$TestResults$Failed(failures)
						]);
				}
			}();
			return $elm$core$List$concat(
				_List_fromArray(
					[
						A2($elm$core$List$repeat, builder.passes, $author$project$Test$Reporter$TestResults$Passed),
						A2($elm$core$List$map, $author$project$Test$Reporter$TestResults$Todo, builder.todos),
						failuresList
					]));
		}
	} else {
		return _List_Nil;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $author$project$Test$Runner$Node$send = _Platform_outgoingPort('send', $elm$json$Json$Encode$string);
var $author$project$Test$Runner$Node$sendResults = F3(
	function (isFinished, testReporter, results) {
		var typeStr = isFinished ? 'FINISHED' : 'RESULTS';
		var addToKeyValues = F2(
			function (_v0, list) {
				var testId = _v0.a;
				var result = _v0.b;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						$elm$core$String$fromInt(testId),
						testReporter.reportComplete(result)),
					list);
			});
		return $author$project$Test$Runner$Node$send(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string(typeStr)),
							_Utils_Tuple2(
							'results',
							$elm$json$Json$Encode$object(
								A3($elm$core$List$foldl, addToKeyValues, _List_Nil, results)))
						]))));
	});
var $author$project$Test$Runner$Node$dispatch = F2(
	function (model, startTime) {
		var _v0 = A2($elm$core$Dict$get, model.nextTestToRun, model.available);
		if (_v0.$ === 'Nothing') {
			return A3($author$project$Test$Runner$Node$sendResults, true, model.testReporter, model.results);
		} else {
			var config = _v0.a;
			var outcomes = $author$project$Test$Reporter$TestResults$outcomesFromExpectations(
				config.run(_Utils_Tuple0));
			return A2(
				$elm$core$Task$perform,
				A3($author$project$Test$Runner$Node$Complete, config.labels, outcomes, startTime),
				$elm$time$Time$now);
		}
	});
var $author$project$Test$Reporter$TestResults$isFailure = function (outcome) {
	if (outcome.$ === 'Failed') {
		return true;
	} else {
		return false;
	}
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $author$project$Test$Runner$Node$sendBegin = function (model) {
	var extraFields = function () {
		var _v0 = model.testReporter.reportBegin(model.runInfo);
		if (_v0.$ === 'Just') {
			var report = _v0.a;
			return _List_fromArray(
				[
					_Utils_Tuple2('message', report)
				]);
		} else {
			return _List_Nil;
		}
	}();
	var baseFields = _List_fromArray(
		[
			_Utils_Tuple2(
			'type',
			$elm$json$Json$Encode$string('BEGIN')),
			_Utils_Tuple2(
			'testCount',
			$elm$json$Json$Encode$int(model.runInfo.testCount))
		]);
	return $author$project$Test$Runner$Node$send(
		A2(
			$elm$json$Json$Encode$encode,
			0,
			$elm$json$Json$Encode$object(
				_Utils_ap(baseFields, extraFields))));
};
var $author$project$Test$Runner$Node$update = F2(
	function (msg, model) {
		var testReporter = model.testReporter;
		switch (msg.$) {
			case 'Receive':
				var val = msg.a;
				var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Test$Runner$JsMessage$decoder, val);
				if (_v1.$ === 'Ok') {
					if (_v1.a.$ === 'Summary') {
						var _v2 = _v1.a;
						var duration = _v2.a;
						var failed = _v2.b;
						var todos = _v2.c;
						var testCount = model.runInfo.testCount;
						var summaryInfo = {
							duration: duration,
							failed: failed,
							passed: (testCount - failed) - $elm$core$List$length(todos),
							testCount: testCount,
							todos: todos
						};
						var summary = A2(testReporter.reportSummary, summaryInfo, model.autoFail);
						var exitCode = (failed > 0) ? 2 : ((_Utils_eq(model.autoFail, $elm$core$Maybe$Nothing) && $elm$core$List$isEmpty(todos)) ? 0 : 3);
						var cmd = $author$project$Test$Runner$Node$send(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'type',
											$elm$json$Json$Encode$string('SUMMARY')),
											_Utils_Tuple2(
											'exitCode',
											$elm$json$Json$Encode$int(exitCode)),
											_Utils_Tuple2('message', summary)
										]))));
						return _Utils_Tuple2(model, cmd);
					} else {
						var index = _v1.a.a;
						var cmd = A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now);
						return _Utils_eq(index, -1) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{nextTestToRun: index + model.processes}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										cmd,
										$author$project$Test$Runner$Node$sendBegin(model)
									]))) : _Utils_Tuple2(
							_Utils_update(
								model,
								{nextTestToRun: index}),
							cmd);
					}
				} else {
					var err = _v1.a;
					var cmd = $author$project$Test$Runner$Node$send(
						A2(
							$elm$json$Json$Encode$encode,
							0,
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'type',
										$elm$json$Json$Encode$string('ERROR')),
										_Utils_Tuple2(
										'message',
										$elm$json$Json$Encode$string(
											$elm$json$Json$Decode$errorToString(err)))
									]))));
					return _Utils_Tuple2(model, cmd);
				}
			case 'Dispatch':
				var startTime = msg.a;
				return _Utils_Tuple2(
					model,
					A2($author$project$Test$Runner$Node$dispatch, model, startTime));
			default:
				var labels = msg.a;
				var outcomes = msg.b;
				var startTime = msg.c;
				var endTime = msg.d;
				var nextTestToRun = model.nextTestToRun + model.processes;
				var isFinished = _Utils_cmp(nextTestToRun, model.runInfo.testCount) > -1;
				var duration = $elm$time$Time$posixToMillis(endTime) - $elm$time$Time$posixToMillis(startTime);
				var prependOutcome = F2(
					function (outcome, rest) {
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								model.nextTestToRun,
								{duration: duration, labels: labels, outcome: outcome}),
							rest);
					});
				var results = A3($elm$core$List$foldl, prependOutcome, model.results, outcomes);
				if (isFinished || A2($elm$core$List$any, $author$project$Test$Reporter$TestResults$isFailure, outcomes)) {
					var cmd = A3($author$project$Test$Runner$Node$sendResults, isFinished, testReporter, results);
					return isFinished ? _Utils_Tuple2(model, cmd) : _Utils_Tuple2(
						_Utils_update(
							model,
							{nextTestToRun: nextTestToRun, results: _List_Nil}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									cmd,
									A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now)
								])));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{nextTestToRun: nextTestToRun, results: results}),
						A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now));
				}
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Test$Runner$Node$run = F2(
	function (_v0, test) {
		var runs = _v0.runs;
		var seed = _v0.seed;
		var report = _v0.report;
		var paths = _v0.paths;
		var processes = _v0.processes;
		var fuzzRuns = A2($elm$core$Maybe$withDefault, $author$project$Test$Runner$Node$defaultRunCount, runs);
		var runners = A3(
			$elm_explorations$test$Test$Runner$fromTest,
			fuzzRuns,
			$elm$random$Random$initialSeed(seed),
			test);
		var wrappedInit = $author$project$Test$Runner$Node$init(
			{fuzzRuns: fuzzRuns, initialSeed: seed, paths: paths, processes: processes, report: report, runners: runners});
		return $elm$core$Platform$worker(
			{
				init: wrappedInit,
				subscriptions: function (_v1) {
					return $author$project$Test$Runner$Node$receive($author$project$Test$Runner$Node$Receive);
				},
				update: $author$project$Test$Runner$Node$update
			});
	});
var $jfmengels$elm_review$Review$Test$ExpectedError = function (a) {
	return {$: 'ExpectedError', a: a};
};
var $jfmengels$elm_review$Review$Test$UnderExactly = F2(
	function (a, b) {
		return {$: 'UnderExactly', a: a, b: b};
	});
var $jfmengels$elm_review$Review$Test$getUnder = function (_v0) {
	var expectedError = _v0.a;
	var _v1 = expectedError.under;
	if (_v1.$ === 'Under') {
		var str = _v1.a;
		return str;
	} else {
		var str = _v1.a;
		return str;
	}
};
var $jfmengels$elm_review$Review$Test$atExactly = F2(
	function (range, expectedError) {
		var expectedError_ = expectedError.a;
		return $jfmengels$elm_review$Review$Test$ExpectedError(
			_Utils_update(
				expectedError_,
				{
					under: A2(
						$jfmengels$elm_review$Review$Test$UnderExactly,
						$jfmengels$elm_review$Review$Test$getUnder(expectedError),
						range)
				}));
	});
var $author$project$NoEmptyText$error = {
	details: _List_fromArray(
		['Since your project is using Html.Extra please use one of the following function instead of `Html.text \"\"`', ' - (`Html.Extra.nothing`)[https://package.elm-lang.org/packages/elm-community/html-extra/latest/Html-Extra#nothing]', ' - (`Html.Extra.viewIf`)[https://package.elm-lang.org/packages/elm-community/html-extra/latest/Html-Extra#viewIf]', ' - (`Html.Extra.viewMaybe`)[https://www.papillesetpupilles.fr/2019/09/sirop-de-fleurs-sauvages-maison.html/?fbclid=IwAR3BcddwSYAjNyspmabbMNaYyUkbVpsOv81VBYhOd85-XQqnhYYnJzuRWBU]', ' - (`Html.Extra.viewIfLazy`)[https://package.elm-lang.org/packages/elm-community/html-extra/latest/Html-Extra#viewIfLazy]']),
	message: 'Do not use `Html.text \"\"` to represent \"Nothing\"'
};
var $jfmengels$elm_review$Review$Test$Under = function (a) {
	return {$: 'Under', a: a};
};
var $jfmengels$elm_review$Review$Test$error = function (input) {
	return $jfmengels$elm_review$Review$Test$ExpectedError(
		{
			details: input.details,
			fixedSource: $elm$core$Maybe$Nothing,
			message: input.message,
			under: $jfmengels$elm_review$Review$Test$Under(input.under)
		});
};
var $elm_explorations$test$Test$Expectation$Pass = {$: 'Pass'};
var $elm_explorations$test$Expect$pass = $elm_explorations$test$Test$Expectation$Pass;
var $elm_explorations$test$Expect$allHelp = F2(
	function (list, query) {
		allHelp:
		while (true) {
			if (!list.b) {
				return $elm_explorations$test$Expect$pass;
			} else {
				var check = list.a;
				var rest = list.b;
				var _v1 = check(query);
				if (_v1.$ === 'Pass') {
					var $temp$list = rest,
						$temp$query = query;
					list = $temp$list;
					query = $temp$query;
					continue allHelp;
				} else {
					var outcome = _v1;
					return outcome;
				}
			}
		}
	});
var $elm_explorations$test$Expect$all = F2(
	function (list, query) {
		return $elm$core$List$isEmpty(list) ? $elm_explorations$test$Test$Expectation$fail(
			{
				description: 'Expect.all was given an empty list. You must make at least one expectation to have a valid test!',
				reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
			}) : A2($elm_explorations$test$Expect$allHelp, list, query);
	});
var $jfmengels$elm_review$Review$Rule$errorMessage = function (_v0) {
	var err = _v0.a;
	return err.message;
};
var $jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes = function (string) {
	return '`' + (string + '`');
};
var $jfmengels$elm_review$Review$Test$FailureMessage$emptyDetails = function (error) {
	return 'EMPTY ERROR DETAILS\n\nI found an error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + '\n\nbut its details were empty. I require having details as I believe they will\nhelp the user who encounters the problem.\n\nThe details could:\n- explain what the problem is\n- give suggestions on how to solve the problem or alternatives');
};
var $jfmengels$elm_review$Review$Rule$errorDetails = function (_v0) {
	var err = _v0.a;
	return err.details;
};
var $elm_explorations$test$Expect$true = F2(
	function (message, bool) {
		return bool ? $elm_explorations$test$Expect$pass : $elm_explorations$test$Expect$fail(message);
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$formatDetails = function (details) {
	if (details.b && (!details.b.b)) {
		var detail = details.a;
		return $jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(detail);
	} else {
		var details_ = details;
		return function (str) {
			return '```\n' + (str + '\n  ```');
		}(
			A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					function (str) {
						return '  ' + str;
					},
					details_)));
	}
};
var $jfmengels$elm_review$Review$Test$FailureMessage$unexpectedDetails = F2(
	function (expectedDetails, error) {
		return 'UNEXPECTED ERROR DETAILS\n\nI found an error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nwhich I was expecting, but its details were:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatDetails(
			$jfmengels$elm_review$Review$Rule$errorDetails(error)) + ('\n\nwhen I was expecting them to be:\n\n  ' + $jfmengels$elm_review$Review$Test$FailureMessage$formatDetails(expectedDetails)))));
	});
var $jfmengels$elm_review$Review$Test$checkDetailsAreCorrect = F2(
	function (error_, _v0) {
		var expectedError = _v0.a;
		return $elm_explorations$test$Expect$all(
			_List_fromArray(
				[
					$elm$core$Basics$always(
					A2(
						$elm_explorations$test$Expect$true,
						$jfmengels$elm_review$Review$Test$FailureMessage$emptyDetails(error_),
						!$elm$core$List$isEmpty(
							$jfmengels$elm_review$Review$Rule$errorDetails(error_)))),
					$elm$core$Basics$always(
					A2(
						$elm_explorations$test$Expect$true,
						A2($jfmengels$elm_review$Review$Test$FailureMessage$unexpectedDetails, expectedError.details, error_),
						_Utils_eq(
							$jfmengels$elm_review$Review$Rule$errorDetails(error_),
							expectedError.details)))
				]));
	});
var $jfmengels$elm_review$Review$Test$extractExpectedErrorData = function (expectedError) {
	var expectedErrorContent = expectedError.a;
	return {
		details: expectedErrorContent.details,
		message: expectedErrorContent.message,
		under: $jfmengels$elm_review$Review$Test$getUnder(expectedError)
	};
};
var $jfmengels$elm_review$Review$Fix$Errored = function (a) {
	return {$: 'Errored', a: a};
};
var $jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges = {$: 'HasCollisionsInFixRanges'};
var $jfmengels$elm_review$Review$Fix$SourceCodeIsNotValid = function (a) {
	return {$: 'SourceCodeIsNotValid', a: a};
};
var $jfmengels$elm_review$Review$Fix$Successful = function (a) {
	return {$: 'Successful', a: a};
};
var $jfmengels$elm_review$Review$Fix$Unchanged = {$: 'Unchanged'};
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $jfmengels$elm_review$Review$Fix$getRowAtLine = F2(
	function (lines, rowIndex) {
		var _v0 = A2(
			$elm$core$Array$get,
			rowIndex,
			$elm$core$Array$fromList(lines));
		if (_v0.$ === 'Just') {
			var line = _v0.a;
			return ($elm$core$String$trim(line) !== '') ? line : '';
		} else {
			return '';
		}
	});
var $elm$core$String$lines = _String_lines;
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $jfmengels$elm_review$Review$Fix$applyReplace = F3(
	function (range, replacement, lines) {
		var startLine = A3(
			$elm$core$String$slice,
			0,
			range.start.column - 1,
			A2($jfmengels$elm_review$Review$Fix$getRowAtLine, lines, range.start.row - 1));
		var linesBefore = A2($elm$core$List$take, range.start.row - 1, lines);
		var linesAfter = A2($elm$core$List$drop, range.end.row, lines);
		var endLine = A2(
			$elm$core$String$dropLeft,
			range.end.column - 1,
			A2($jfmengels$elm_review$Review$Fix$getRowAtLine, lines, range.end.row - 1));
		return $elm$core$List$concat(
			_List_fromArray(
				[
					linesBefore,
					$elm$core$String$lines(
					_Utils_ap(
						startLine,
						_Utils_ap(replacement, endLine))),
					linesAfter
				]));
	});
var $jfmengels$elm_review$Review$Fix$applyFix = F2(
	function (fix_, lines) {
		return function () {
			switch (fix_.$) {
				case 'Replacement':
					var range = fix_.a;
					var replacement = fix_.b;
					return A2($jfmengels$elm_review$Review$Fix$applyReplace, range, replacement);
				case 'Removal':
					var range = fix_.a;
					return A2($jfmengels$elm_review$Review$Fix$applyReplace, range, '');
				default:
					var position = fix_.a;
					var insertion = fix_.b;
					return A2(
						$jfmengels$elm_review$Review$Fix$applyReplace,
						{end: position, start: position},
						insertion);
			}
		}()(lines);
	});
var $jfmengels$elm_review$Review$Fix$comparePosition = F2(
	function (a, b) {
		var order = A2($elm$core$Basics$compare, a.row, b.row);
		if (order.$ === 'EQ') {
			return A2($elm$core$Basics$compare, a.column, b.column);
		} else {
			return order;
		}
	});
var $jfmengels$elm_review$Review$Fix$collide = F2(
	function (a, b) {
		var _v0 = A2($jfmengels$elm_review$Review$Fix$comparePosition, a.end, b.start);
		switch (_v0.$) {
			case 'LT':
				return false;
			case 'EQ':
				return false;
			default:
				var _v1 = A2($jfmengels$elm_review$Review$Fix$comparePosition, b.end, a.start);
				switch (_v1.$) {
					case 'LT':
						return false;
					case 'EQ':
						return false;
					default:
						return true;
				}
		}
	});
var $jfmengels$elm_review$Review$Fix$getFixRange = function (fix_) {
	switch (fix_.$) {
		case 'Replacement':
			var range = fix_.a;
			return range;
		case 'Removal':
			var range = fix_.a;
			return range;
		default:
			var position = fix_.a;
			return {end: position, start: position};
	}
};
var $jfmengels$elm_review$Vendor$ListExtra$uniquePairs = function (xs) {
	if (!xs.b) {
		return _List_Nil;
	} else {
		var x = xs.a;
		var xs_ = xs.b;
		return _Utils_ap(
			A2(
				$elm$core$List$map,
				function (y) {
					return _Utils_Tuple2(x, y);
				},
				xs_),
			$jfmengels$elm_review$Vendor$ListExtra$uniquePairs(xs_));
	}
};
var $jfmengels$elm_review$Review$Fix$containRangeCollisions = function (fixes) {
	return A2(
		$elm$core$List$any,
		function (_v0) {
			var a = _v0.a;
			var b = _v0.b;
			return A2($jfmengels$elm_review$Review$Fix$collide, a, b);
		},
		$jfmengels$elm_review$Vendor$ListExtra$uniquePairs(
			A2($elm$core$List$map, $jfmengels$elm_review$Review$Fix$getFixRange, fixes)));
};
var $stil4m$elm_syntax$Elm$Parser$State$State = function (a) {
	return {$: 'State', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$State$emptyState = $stil4m$elm_syntax$Elm$Parser$State$State(
	{comments: _List_Nil, indents: _List_Nil});
var $stil4m$elm_syntax$Elm$Syntax$File$File = F4(
	function (moduleDefinition, imports, declarations, comments) {
		return {comments: comments, declarations: declarations, imports: imports, moduleDefinition: moduleDefinition};
	});
var $stil4m$elm_syntax$Combine$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $stil4m$elm_syntax$Combine$andMap = F2(
	function (_v0, _v1) {
		var rp = _v0.a;
		var lp = _v1.a;
		return $stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var newState = _v2.a;
						var a = _v2.b;
						return A2(
							$elm$parser$Parser$map,
							$elm$core$Tuple$mapSecond(a),
							rp(newState));
					},
					lp(state));
			});
	});
var $stil4m$elm_syntax$Elm$Parser$State$getComments = function (_v0) {
	var s = _v0.a;
	return s.comments;
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $stil4m$elm_syntax$Combine$succeed = function (res) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return $elm$parser$Parser$succeed(
				_Utils_Tuple2(state, res));
		});
};
var $stil4m$elm_syntax$Combine$withState = function (f) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return function (_v0) {
				var p = _v0.a;
				return p(state);
			}(
				f(state));
		});
};
var $stil4m$elm_syntax$Elm$Parser$File$collectComments = $stil4m$elm_syntax$Combine$withState(
	A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$getComments, $stil4m$elm_syntax$Combine$succeed));
var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function (a) {
	return {$: 'AliasDeclaration', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function (a) {
	return {$: 'CustomTypeDeclaration', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(
	function (a, b) {
		return {$: 'Node', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $stil4m$elm_syntax$Combine$choice = function (xs) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return $elm$parser$Parser$oneOf(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var x = _v0.a;
						return x(state);
					},
					xs));
		});
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring = F2(
	function (a, b) {
		return {$: 'Destructuring', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$Range = F2(
	function (start, end) {
		return {end: end, start: start};
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
	end: {column: 0, row: 0},
	start: {column: 0, row: 0}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$compareLocations = F2(
	function (left, right) {
		return (_Utils_cmp(left.row, right.row) < 0) ? $elm$core$Basics$LT : ((_Utils_cmp(right.row, left.row) < 0) ? $elm$core$Basics$GT : A2($elm$core$Basics$compare, left.column, right.column));
	});
var $elm$core$List$sortWith = _List_sortWith;
var $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations = $elm$core$List$sortWith($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations);
var $stil4m$elm_syntax$Elm$Syntax$Range$combine = function (ranges) {
	var starts = $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.start;
			},
			ranges));
	var ends = $elm$core$List$reverse(
		$stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.end;
				},
				ranges)));
	return A2(
		$elm$core$Maybe$withDefault,
		$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		A3(
			$elm$core$Maybe$map2,
			$stil4m$elm_syntax$Elm$Syntax$Range$Range,
			$elm$core$List$head(starts),
			$elm$core$List$head(ends)));
};
var $stil4m$elm_syntax$Elm$Syntax$Node$combine = F3(
	function (f, a, b) {
		var r1 = a.a;
		var r2 = b.a;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$combine(
				_List_fromArray(
					[r1, r2])),
			A2(f, a, b));
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function (a) {
	return {$: 'Application', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock = F2(
	function (expression, cases) {
		return {cases: cases, expression: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function (a) {
	return {$: 'CaseExpression', a: a};
};
var $stil4m$elm_syntax$Combine$Done = function (a) {
	return {$: 'Done', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Function = F3(
	function (documentation, signature, declaration) {
		return {declaration: declaration, documentation: documentation, signature: signature};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation = F3(
	function (name, _arguments, expression) {
		return {_arguments: _arguments, expression: expression, name: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock = F3(
	function (a, b, c) {
		return {$: 'IfBlock', a: a, b: b, c: c};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Lambda = F2(
	function (args, expression) {
		return {args: args, expression: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function (a) {
	return {$: 'LambdaExpression', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock = F2(
	function (declarations, expression) {
		return {declarations: declarations, expression: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2(
	function (a, b) {
		return {$: 'LetDestructuring', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function (a) {
	return {$: 'LetExpression', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction = function (a) {
	return {$: 'LetFunction', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function (a) {
	return {$: 'ListExpr', a: a};
};
var $stil4m$elm_syntax$Combine$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Negation = function (a) {
	return {$: 'Negation', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Operator = function (a) {
	return {$: 'Operator', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function (a) {
	return {$: 'ParenthesizedExpression', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator = function (a) {
	return {$: 'PrefixOperator', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function (a) {
	return {$: 'RecordExpr', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2(
	function (a, b) {
		return {$: 'RecordUpdateExpression', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function (a) {
	return {$: 'TupledExpression', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr = {$: 'UnitExpr'};
var $stil4m$elm_syntax$Combine$andThen = F2(
	function (f, _v0) {
		var p = _v0.a;
		return $stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					$elm$parser$Parser$andThen,
					function (_v1) {
						var s = _v1.a;
						var a = _v1.b;
						return function (_v2) {
							var x = _v2.a;
							return x(s);
						}(
							f(a));
					},
					p(state));
			});
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $stil4m$elm_syntax$Combine$backtrackable = function (_v0) {
	var p = _v0.a;
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return $elm$parser$Parser$backtrackable(
				p(state));
		});
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $stil4m$elm_syntax$Combine$string = function (s) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				$elm$parser$Parser$map,
				function (x) {
					return _Utils_Tuple2(state, x);
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$token(s)));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken = $stil4m$elm_syntax$Combine$string('case');
var $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral = function (a) {
	return {$: 'CharLiteral', a: a};
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $stil4m$elm_syntax$Combine$fail = function (m) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				$elm$parser$Parser$map,
				function (x) {
					return _Utils_Tuple2(state, x);
				},
				$elm$parser$Parser$problem(m));
		});
};
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $stil4m$elm_syntax$Combine$fromCore = function (p) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (v) {
						return _Utils_Tuple2(state, v);
					}),
				p);
		});
};
var $stil4m$elm_syntax$Combine$Char$satisfy = function (pred) {
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$andThen,
			function (s) {
				var _v0 = $elm$core$String$toList(s);
				if (!_v0.b) {
					return $elm$parser$Parser$succeed($elm$core$Maybe$Nothing);
				} else {
					var c = _v0.a;
					return $elm$parser$Parser$succeed(
						$elm$core$Maybe$Just(c));
				}
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$chompIf(pred))));
};
var $stil4m$elm_syntax$Combine$Char$anyChar = A2(
	$stil4m$elm_syntax$Combine$andThen,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
		$elm$core$Maybe$withDefault(
			$stil4m$elm_syntax$Combine$fail('expected any character'))),
	$stil4m$elm_syntax$Combine$Char$satisfy(
		$elm$core$Basics$always(true)));
var $elm$core$String$fromList = _String_fromList;
var $stil4m$elm_syntax$Combine$Char$char = function (c) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
			$elm$core$Maybe$withDefault(
				$stil4m$elm_syntax$Combine$fail(
					'expected \'' + ($elm$core$String$fromList(
						_List_fromArray(
							[c])) + '\'')))),
		$stil4m$elm_syntax$Combine$Char$satisfy(
			$elm$core$Basics$eq(c)));
};
var $stil4m$elm_syntax$Combine$map = F2(
	function (f, _v0) {
		var p = _v0.a;
		return $stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					$elm$parser$Parser$map,
					function (_v1) {
						var s = _v1.a;
						var a = _v1.b;
						return _Utils_Tuple2(
							s,
							f(a));
					},
					p(state));
			});
	});
var $stil4m$elm_syntax$Combine$continueWith = F2(
	function (target, dropped) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			target,
			A2(
				$stil4m$elm_syntax$Combine$map,
				F2(
					function (b, a) {
						return A2($elm$core$Basics$always, a, b);
					}),
				dropped));
	});
var $stil4m$elm_syntax$Combine$ignore = F2(
	function (dropped, target) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			dropped,
			A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always, target));
	});
var $stil4m$elm_syntax$Combine$or = F2(
	function (_v0, _v1) {
		var lp = _v0.a;
		var rp = _v1.a;
		return $stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							lp(state),
							rp(state)
						]));
			});
	});
var $elm$core$String$any = _String_any;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\'')),
			$elm$parser$Parser$symbol('\'')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\"')),
			$elm$parser$Parser$symbol('\"')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\n')),
			$elm$parser$Parser$symbol('n')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\t')),
			$elm$parser$Parser$symbol('t')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\u000D')),
			$elm$parser$Parser$symbol('r')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_chr('\\')),
			$elm$parser$Parser$symbol('\\')),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A2(
							$elm$core$Basics$composeR,
							$elm$core$String$toLower,
							A2(
								$elm$core$Basics$composeR,
								$rtfeldman$elm_hex$Hex$fromString,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Result$withDefault(0),
									$elm$core$Char$fromCode)))),
					$elm$parser$Parser$symbol('u')),
				$elm$parser$Parser$symbol('{')),
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompWhile(
						function (c) {
							return A2(
								$elm$core$String$any,
								$elm$core$Basics$eq(c),
								'0123456789ABCDEFabcdef');
						})),
				$elm$parser$Parser$symbol('}')))
		]));
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote = $stil4m$elm_syntax$Combine$fromCore(
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$toList,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$List$head,
						$elm$core$Maybe$withDefault(
							_Utils_chr(' '))))),
			$elm$parser$Parser$symbol('\'')),
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(
								A2($elm$core$Basics$composeR, $elm$core$List$singleton, $elm$core$String$fromList)),
							$elm$parser$Parser$symbol('\\')),
						$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue),
						$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$chompIf(
							$elm$core$Basics$always(true)))
					])),
			$elm$parser$Parser$symbol('\''))));
var $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral = A2(
	$stil4m$elm_syntax$Combine$or,
	$stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote,
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$Char$char(
			_Utils_chr('\'')),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$Char$anyChar,
			$stil4m$elm_syntax$Combine$Char$char(
				_Utils_chr('\'')))));
var $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation = function (_v0) {
	var line = _v0.line;
	var column = _v0.column;
	return {column: column, row: line};
};
var $stil4m$elm_syntax$Combine$app = function (_v0) {
	var inner = _v0.a;
	return inner;
};
var $elm$parser$Parser$Advanced$getPosition = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3(
			$elm$parser$Parser$Advanced$Good,
			false,
			_Utils_Tuple2(s.row, s.col),
			s);
	});
var $elm$parser$Parser$getPosition = $elm$parser$Parser$Advanced$getPosition;
var $stil4m$elm_syntax$Combine$withLocation = function (f) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				$elm$parser$Parser$andThen,
				function (loc) {
					return A2(
						$stil4m$elm_syntax$Combine$app,
						f(loc),
						state);
				},
				A2(
					$elm$parser$Parser$map,
					function (_v0) {
						var row = _v0.a;
						var col = _v0.b;
						return {column: col, line: row};
					},
					$elm$parser$Parser$getPosition));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Node$parser = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return $stil4m$elm_syntax$Combine$succeed(
							{
								end: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(end),
								start: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(start)
							});
					}),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					p,
					$stil4m$elm_syntax$Combine$succeed(
						F2(
							function (v, r) {
								return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v);
							}))));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral));
var $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken = $stil4m$elm_syntax$Combine$string('else');
var $stil4m$elm_syntax$Elm$Parser$State$currentIndent = function (_v0) {
	var indents = _v0.a.indents;
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$head(indents));
};
var $stil4m$elm_syntax$Elm$Parser$State$expectedColumn = A2(
	$elm$core$Basics$composeR,
	$stil4m$elm_syntax$Elm$Parser$State$currentIndent,
	$elm$core$Basics$add(1));
var $stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern = {$: 'AllPattern'};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern = F2(
	function (a, b) {
		return {$: 'AsPattern', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern = function (a) {
	return {$: 'CharPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern = function (a) {
	return {$: 'ListPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(
	function (a, b) {
		return {$: 'NamedPattern', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function (a) {
	return {$: 'ParenthesizedPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef = F2(
	function (moduleName, name) {
		return {moduleName: moduleName, name: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern = function (a) {
	return {$: 'StringPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function (a) {
	return {$: 'TuplePattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern = F2(
	function (a, b) {
		return {$: 'UnConsPattern', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern = {$: 'UnitPattern'};
var $stil4m$elm_syntax$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			$stil4m$elm_syntax$Combine$ignore,
			rp,
			A2($stil4m$elm_syntax$Combine$continueWith, p, lp));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$reservedList = _List_fromArray(
	['module', 'exposing', 'import', 'as', 'if', 'then', 'else', 'let', 'in', 'case', 'of', 'port', 'infixr', 'infixl', 'type', 'where']);
var $elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{expecting: $elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$functionName = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$variable(
		{
			inner: function (c) {
				return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
					c,
					_Utils_chr('_'));
			},
			reserved: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			start: $elm$core$Char$isLower
		}));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 'ExpectingKeyword', a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				$elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $stil4m$elm_syntax$Combine$lazy = function (t) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return $elm$parser$Parser$lazy(
				function (_v0) {
					return function (_v1) {
						var t_ = _v1.a;
						return t_(state);
					}(
						t(_Utils_Tuple0));
				});
		});
};
var $elm$parser$Parser$Nestable = {$: 'Nestable'};
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$isChar = function (_char) {
	return true;
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$nestableHelp = F5(
	function (isNotRelevant, open, close, expectingClose, nestLevel) {
		return A2(
			$elm$parser$Parser$Advanced$skip,
			$elm$parser$Parser$Advanced$chompWhile(isNotRelevant),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						(nestLevel === 1) ? close : A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
						},
						close),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v1) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
						},
						open),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v2) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
						},
						A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))
					])));
	});
var $elm$parser$Parser$Advanced$nestableComment = F2(
	function (open, close) {
		var oStr = open.a;
		var oX = open.b;
		var cStr = close.a;
		var cX = close.b;
		var _v0 = $elm$core$String$uncons(oStr);
		if (_v0.$ === 'Nothing') {
			return $elm$parser$Parser$Advanced$problem(oX);
		} else {
			var _v1 = _v0.a;
			var openChar = _v1.a;
			var _v2 = $elm$core$String$uncons(cStr);
			if (_v2.$ === 'Nothing') {
				return $elm$parser$Parser$Advanced$problem(cX);
			} else {
				var _v3 = _v2.a;
				var closeChar = _v3.a;
				var isNotRelevant = function (_char) {
					return (!_Utils_eq(_char, openChar)) && (!_Utils_eq(_char, closeChar));
				};
				var chompOpen = $elm$parser$Parser$Advanced$token(open);
				return A2(
					$elm$parser$Parser$Advanced$ignorer,
					chompOpen,
					A5(
						$elm$parser$Parser$Advanced$nestableHelp,
						isNotRelevant,
						chompOpen,
						$elm$parser$Parser$Advanced$token(close),
						cX,
						1));
			}
		}
	});
var $elm$parser$Parser$Advanced$multiComment = F3(
	function (open, close, nestable) {
		if (nestable.$ === 'NotNestable') {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$token(open),
				$elm$parser$Parser$Advanced$chompUntil(close));
		} else {
			return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
		}
	});
var $elm$parser$Parser$Advanced$Nestable = {$: 'Nestable'};
var $elm$parser$Parser$Advanced$NotNestable = {$: 'NotNestable'};
var $elm$parser$Parser$toAdvancedNestable = function (nestable) {
	if (nestable.$ === 'NotNestable') {
		return $elm$parser$Parser$Advanced$NotNestable;
	} else {
		return $elm$parser$Parser$Advanced$Nestable;
	}
};
var $elm$parser$Parser$multiComment = F3(
	function (open, close, nestable) {
		return A3(
			$elm$parser$Parser$Advanced$multiComment,
			$elm$parser$Parser$toToken(open),
			$elm$parser$Parser$toToken(close),
			$elm$parser$Parser$toAdvancedNestable(nestable));
	});
var $stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		A3($elm$parser$Parser$multiComment, '{-', '-}', $elm$parser$Parser$Nestable)));
var $stil4m$elm_syntax$Elm$Parser$State$addComment = F2(
	function (pair, _v0) {
		var s = _v0.a;
		return $stil4m$elm_syntax$Elm$Parser$State$State(
			_Utils_update(
				s,
				{
					comments: A2($elm$core$List$cons, pair, s.comments)
				}));
	});
var $stil4m$elm_syntax$Combine$modifyState = function (f) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return $elm$parser$Parser$succeed(
				_Utils_Tuple2(
					f(state),
					_Utils_Tuple0));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (pair) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0),
				$stil4m$elm_syntax$Combine$modifyState(
					$stil4m$elm_syntax$Elm$Parser$State$addComment(pair)));
		},
		p);
};
var $stil4m$elm_syntax$Elm$Parser$Comments$parseComment = function (commentParser) {
	return $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState(
		$stil4m$elm_syntax$Elm$Parser$Node$parser(commentParser));
};
var $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Comments$parseComment($stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner);
	});
var $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile(
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('\u000D'))) && (!_Utils_eq(
					c,
					_Utils_chr('\n')));
			})));
var $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment = $stil4m$elm_syntax$Elm$Parser$Comments$parseComment(
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken,
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Combine$string('--'),
			$stil4m$elm_syntax$Combine$succeed($elm$core$Basics$append))));
var $stil4m$elm_syntax$Elm$Parser$Layout$anyComment = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment, $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment);
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $stil4m$elm_syntax$Combine$many = function (p) {
	var helper = function (_v2) {
		var oldState = _v2.a;
		var items = _v2.b;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (_v0) {
							var newState = _v0.a;
							var item = _v0.b;
							return $elm$parser$Parser$Loop(
								_Utils_Tuple2(
									newState,
									A2($elm$core$List$cons, item, items)));
						}),
					A2($stil4m$elm_syntax$Combine$app, p, oldState)),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Done(
							_Utils_Tuple2(
								oldState,
								$elm$core$List$reverse(items)));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	};
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				$elm$parser$Parser$loop,
				_Utils_Tuple2(state, _List_Nil),
				helper);
		});
};
var $stil4m$elm_syntax$Combine$many1 = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Combine$many(p),
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			p,
			$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
};
var $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces = $stil4m$elm_syntax$Combine$fromCore(
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$token(' '),
		$elm$parser$Parser$chompWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr(' '));
			})));
var $stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_Utils_Tuple0),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$chompIf(
							$elm$core$Basics$eq(
								_Utils_chr('\u000D'))),
							$elm$parser$Parser$succeed(_Utils_Tuple0)
						]))),
			$elm$parser$Parser$symbol('\n'))));
var $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent = function (f) {
	return $stil4m$elm_syntax$Combine$withState(
		function (s) {
			return $stil4m$elm_syntax$Combine$withLocation(
				function (l) {
					return A2(
						f,
						$stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
						l.column) ? $stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0) : $stil4m$elm_syntax$Combine$fail(
						'Expected higher indent than ' + $elm$core$String$fromInt(l.column));
				});
		});
};
var $stil4m$elm_syntax$Elm$Parser$Layout$layout = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_cmp(stateIndent, current) < 0;
			})),
	$stil4m$elm_syntax$Combine$many1(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces, $stil4m$elm_syntax$Elm$Parser$Layout$anyComment])),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Combine$maybe = function (_v0) {
	var p = _v0.a;
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return $elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$map,
						function (_v1) {
							var c = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								c,
								$elm$core$Maybe$Just(v));
						},
						p(state)),
						$elm$parser$Parser$succeed(
						_Utils_Tuple2(state, $elm$core$Maybe$Nothing))
					]));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides = function (x) {
	return A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			x,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)));
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern = function (a) {
	return {$: 'FloatPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern = function (a) {
	return {$: 'HexPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern = function (a) {
	return {$: 'IntPattern', a: a};
};
var $elm$parser$Parser$ExpectingBinary = {$: 'ExpectingBinary'};
var $elm$parser$Parser$ExpectingFloat = {$: 'ExpectingFloat'};
var $elm$parser$Parser$ExpectingHex = {$: 'ExpectingHex'};
var $elm$parser$Parser$ExpectingInt = {$: 'ExpectingInt'};
var $elm$parser$Parser$ExpectingNumber = {$: 'ExpectingNumber'};
var $elm$parser$Parser$ExpectingOctal = {$: 'ExpectingOctal'};
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_v1.$ === 'Nothing') {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var $elm$parser$Parser$number = function (i) {
	return $elm$parser$Parser$Advanced$number(
		{
			binary: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingBinary, i.binary),
			expecting: $elm$parser$Parser$ExpectingNumber,
			_float: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingFloat, i._float),
			hex: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingHex, i.hex),
			_int: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingInt, i._int),
			invalid: $elm$parser$Parser$ExpectingNumber,
			octal: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingOctal, i.octal)
		});
};
var $stil4m$elm_syntax$Elm$Parser$Numbers$raw = F3(
	function (floatf, intf, hexf) {
		return $elm$parser$Parser$number(
			{
				binary: $elm$core$Maybe$Nothing,
				_float: $elm$core$Maybe$Just(floatf),
				hex: $elm$core$Maybe$Just(hexf),
				_int: $elm$core$Maybe$Just(intf),
				octal: $elm$core$Maybe$Nothing
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Numbers$number = F3(
	function (floatf, intf, hexf) {
		return $stil4m$elm_syntax$Combine$fromCore(
			A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf));
	});
var $stil4m$elm_syntax$Elm$Parser$Patterns$numberPart = A3($stil4m$elm_syntax$Elm$Parser$Numbers$number, $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern);
var $stil4m$elm_syntax$Combine$parens = A2(
	$stil4m$elm_syntax$Combine$between,
	$stil4m$elm_syntax$Combine$string('('),
	$stil4m$elm_syntax$Combine$string(')'));
var $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern = function (a) {
	return {$: 'RecordPattern', a: a};
};
var $stil4m$elm_syntax$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Combine$many(
				A2($stil4m$elm_syntax$Combine$continueWith, p, sep)),
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				p,
				$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
	});
var $stil4m$elm_syntax$Elm$Parser$Patterns$recordPart = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern,
				A3(
					$stil4m$elm_syntax$Combine$between,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{')),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$string('}'),
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)),
					A2(
						$stil4m$elm_syntax$Combine$sepBy1,
						$stil4m$elm_syntax$Combine$string(','),
						$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))))));
	});
var $stil4m$elm_syntax$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			$stil4m$elm_syntax$Combine$or,
			A2($stil4m$elm_syntax$Combine$sepBy1, sep, p),
			$stil4m$elm_syntax$Combine$succeed(_List_Nil));
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral = function () {
	var helper = function (s) {
		return s.escaped ? A2(
			$elm$parser$Parser$map,
			function (v) {
				return $elm$parser$Parser$Loop(
					_Utils_update(
						s,
						{
							escaped: false,
							parts: A2(
								$elm$core$List$cons,
								$elm$core$String$fromList(
									_List_fromArray(
										[v])),
								s.parts)
						}));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(
								$elm$core$List$reverse(s.parts)));
					},
					$elm$parser$Parser$symbol('\"')),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Loop(
							_Utils_update(
								s,
								{escaped: true, parts: s.parts}));
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\\'))),
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var start = _v2.a;
						var value = _v2.b;
						var end = _v2.c;
						return _Utils_eq(start, end) ? $elm$parser$Parser$problem('Expected a string character or a double quote') : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Loop(
								_Utils_update(
									s,
									{
										parts: A2($elm$core$List$cons, value, s.parts)
									})));
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								$elm$parser$Parser$getOffset),
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompWhile(
									function (c) {
										return (!_Utils_eq(
											c,
											_Utils_chr('\"'))) && (!_Utils_eq(
											c,
											_Utils_chr('\\')));
									}))),
						$elm$parser$Parser$getOffset))
				]));
	};
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('\"')),
			A2(
				$elm$parser$Parser$loop,
				{escaped: false, parts: _List_Nil},
				helper)));
}();
var $stil4m$elm_syntax$Elm$Parser$Tokens$typeName = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$variable(
		{
			inner: function (c) {
				return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
					c,
					_Utils_chr('_'));
			},
			reserved: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			start: $elm$core$Char$isUpper
		}));
var $stil4m$elm_syntax$Elm$Parser$Base$typeIndicator = function () {
	var helper = function (_v0) {
		var n = _v0.a;
		var xs = _v0.b;
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$andThen,
					function (t) {
						return helper(
							_Utils_Tuple2(
								t,
								A2($elm$core$List$cons, n, xs)));
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Tokens$typeName,
						$stil4m$elm_syntax$Combine$string('.'))),
					$stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	return A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v1) {
			var t = _v1.a;
			var xs = _v1.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(xs),
				t);
		},
		A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
}();
var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function (a) {
	return {$: 'VarPattern', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern = function (consumeArgs) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (_v0) {
			var range = _v0.a;
			var _v1 = _v0.b;
			var mod = _v1.a;
			var name = _v1.b;
			return A2(
				$stil4m$elm_syntax$Combine$map,
				function (args) {
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Range$combine(
							A2(
								$elm$core$List$cons,
								range,
								A2(
									$elm$core$List$map,
									function (_v2) {
										var r = _v2.a;
										return r;
									},
									args))),
						A2(
							$stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
							A2($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef, mod, name),
							args));
				},
				consumeArgs ? $stil4m$elm_syntax$Combine$many(
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : $stil4m$elm_syntax$Combine$succeed(_List_Nil));
		},
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator)));
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose = function (x) {
	return A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern, x, y);
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							$stil4m$elm_syntax$Combine$fromCore(
								$elm$parser$Parser$keyword('as'))))),
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern, x, y);
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$fromCore(
								$elm$parser$Parser$symbol('::'))))),
					$stil4m$elm_syntax$Combine$succeed(x)
				])),
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout));
};
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern() {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		$stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose,
		$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern());
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern() {
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(true),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('()')))),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('_')))),
				$stil4m$elm_syntax$Elm$Parser$Patterns$recordPart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(false),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('()')))),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('_')))),
				$stil4m$elm_syntax$Elm$Parser$Patterns$recordPart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v5) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A3(
					$stil4m$elm_syntax$Combine$between,
					$stil4m$elm_syntax$Combine$string('['),
					$stil4m$elm_syntax$Combine$string(']'),
					A2(
						$stil4m$elm_syntax$Combine$map,
						$stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern,
						A2(
							$stil4m$elm_syntax$Combine$sepBy,
							$stil4m$elm_syntax$Combine$string(','),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v3) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					function (c) {
						if (c.b && (!c.b.b)) {
							var x = c.a;
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(x);
						} else {
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(c);
						}
					},
					$stil4m$elm_syntax$Combine$parens(
						A2(
							$stil4m$elm_syntax$Combine$sepBy,
							$stil4m$elm_syntax$Combine$string(','),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
try {
	var $stil4m$elm_syntax$Elm$Parser$Patterns$pattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern();
	$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern = function () {
		return $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
	};
	var $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern();
	$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern = function () {
		return $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern;
	};
	var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
	$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function () {
		return $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg;
	};
	var $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern();
	$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern = function () {
		return $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern;
	};
	var $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern();
	$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern = function () {
		return $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern;
	};
} catch ($) {
	throw 'Some top-level definitions from `Elm.Parser.Patterns` are causing infinite recursion:\n\n  ┌─────┐\n  │    pattern\n  │     ↓\n  │    composablePattern\n  │     ↓\n  │    qualifiedPatternArg\n  │     ↓\n  │    listPattern\n  │     ↓\n  │    parensPattern\n  │     ↓\n  │    qualifiedPattern\n  │     ↓\n  │    tryToCompose\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument = $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
var $stil4m$elm_syntax$Elm$Syntax$Signature$Signature = F2(
	function (name, typeAnnotation) {
		return {name: name, typeAnnotation: typeAnnotation};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager = {$: 'Eager'};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(
	function (a, b) {
		return {$: 'FunctionTypeAnnotation', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(
	function (a, b) {
		return {$: 'GenericRecord', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy = {$: 'Lazy'};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function (a) {
	return {$: 'Record', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(
	function (a, b) {
		return {$: 'Typed', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {$: 'Unit'};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function (a) {
	return {$: 'Tupled', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(
	function (x, xs) {
		var value = x.b;
		if (!xs.b) {
			return value;
		} else {
			return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
				A2($elm$core$List$cons, x, xs));
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function (a) {
	return {$: 'GenericType', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
	});
var $stil4m$elm_syntax$Elm$Parser$Layout$Indented = {$: 'Indented'};
var $stil4m$elm_syntax$Elm$Parser$Layout$Strict = {$: 'Strict'};
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $stil4m$elm_syntax$Elm$Parser$State$storedColumns = function (_v0) {
	var indents = _v0.a.indents;
	return A2(
		$elm$core$List$map,
		$elm$core$Basics$add(1),
		indents);
};
var $stil4m$elm_syntax$Elm$Parser$Layout$compute = $stil4m$elm_syntax$Combine$withState(
	function (s) {
		return $stil4m$elm_syntax$Combine$withLocation(
			function (l) {
				var known = A2(
					$elm$core$List$cons,
					1,
					$stil4m$elm_syntax$Elm$Parser$State$storedColumns(s));
				return A2($elm$core$List$member, l.column, known) ? $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$Layout$Strict) : $stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$Layout$Indented);
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$compute,
	$stil4m$elm_syntax$Combine$many(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces,
								$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
								$stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)
							])),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith = F2(
	function (onStrict, onIndented) {
		return A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (ind) {
				if (ind.$ === 'Strict') {
					return onStrict(_Utils_Tuple0);
				} else {
					return onIndented(_Utils_Tuple0);
				}
			},
			$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout);
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function (mode) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v7) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(),
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode),
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()
					]));
		});
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function (mode) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			var nodeRanges = $elm$core$List$map(
				function (_v6) {
					var r = _v6.a;
					return r;
				});
			var genericHelper = function (items) {
				return A2(
					$stil4m$elm_syntax$Combine$or,
					A2(
						$stil4m$elm_syntax$Combine$andThen,
						function (next) {
							return A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_v1) {
										return $stil4m$elm_syntax$Combine$succeed(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, next, items)));
									},
									function (_v2) {
										return genericHelper(
											A2($elm$core$List$cons, next, items));
									}));
						},
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy)),
					$stil4m$elm_syntax$Combine$succeed(
						$elm$core$List$reverse(items)));
			};
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (original) {
					var tir = original.a;
					return A2(
						$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_v3) {
							return $stil4m$elm_syntax$Combine$succeed(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									tir,
									A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
						},
						function (_v4) {
							if (mode.$ === 'Eager') {
								return A2(
									$stil4m$elm_syntax$Combine$map,
									function (args) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											$stil4m$elm_syntax$Elm$Syntax$Range$combine(
												A2(
													$elm$core$List$cons,
													tir,
													nodeRanges(args))),
											A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, args));
									},
									genericHelper(_List_Nil));
							} else {
								return $stil4m$elm_syntax$Combine$succeed(
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										tir,
										A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
							}
						});
				},
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator));
		});
};
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v14) {
			var commaSep = $stil4m$elm_syntax$Combine$many(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$string(',')))));
			var nested = A2(
				$stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit),
								$stil4m$elm_syntax$Combine$string(')')),
								A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string(')'),
								nested)
							])),
					$stil4m$elm_syntax$Combine$string('(')));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v13) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$string(':'),
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)),
					$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v12) {
			return A2(
				$stil4m$elm_syntax$Combine$sepBy,
				$stil4m$elm_syntax$Combine$string(','),
				$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v11) {
			var nextField = A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$string(':'),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$string(','),
											$stil4m$elm_syntax$Combine$succeed(
												F2(
													function (a, b) {
														return _Utils_Tuple2(a, b);
													}))))))))));
			var additionalRecordFields = function (items) {
				return $stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Combine$andThen,
							function (next) {
								return additionalRecordFields(
									A2($elm$core$List$cons, next, items));
							},
							$stil4m$elm_syntax$Elm$Parser$Node$parser(nextField)),
							$stil4m$elm_syntax$Combine$succeed(
							$elm$core$List$reverse(items))
						]));
			};
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Combine$succeed(
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(_List_Nil)),
								$stil4m$elm_syntax$Combine$string('}')),
								A2(
								$stil4m$elm_syntax$Combine$andThen,
								function (fname) {
									return $stil4m$elm_syntax$Combine$choice(
										_List_fromArray(
											[
												A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$string('}'),
												A2(
													$stil4m$elm_syntax$Combine$andMap,
													$stil4m$elm_syntax$Elm$Parser$Node$parser(
														$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()),
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$string('|'),
														$stil4m$elm_syntax$Combine$succeed(
															$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))),
												A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$string('}'),
												A2(
													$stil4m$elm_syntax$Combine$andThen,
													function (ta) {
														return A2(
															$stil4m$elm_syntax$Combine$map,
															$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record,
															additionalRecordFields(
																_List_fromArray(
																	[
																		A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, ta)
																	])));
													},
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
														A2(
															$stil4m$elm_syntax$Combine$continueWith,
															$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
															A2(
																$stil4m$elm_syntax$Combine$ignore,
																$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
																$stil4m$elm_syntax$Combine$string(':'))))))
											]));
								},
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)))
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{'))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v8) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (typeRef) {
					return A2(
						$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_v9) {
							return $stil4m$elm_syntax$Combine$succeed(typeRef);
						},
						function (_v10) {
							return A2(
								$stil4m$elm_syntax$Combine$or,
								A2(
									$stil4m$elm_syntax$Combine$map,
									function (ta) {
										return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
									},
									A2(
										$stil4m$elm_syntax$Combine$continueWith,
										$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											$stil4m$elm_syntax$Combine$string('->')))),
								$stil4m$elm_syntax$Combine$succeed(typeRef));
						});
				},
				$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager));
		});
}
try {
	var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
	$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function () {
		return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
	};
	var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
	$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function () {
		return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition;
	};
	var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
	$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function () {
		return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
	};
	var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
	$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function () {
		return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
	};
	var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
	$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function () {
		return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation;
	};
} catch ($) {
	throw 'Some top-level definitions from `Elm.Parser.TypeAnnotation` are causing infinite recursion:\n\n  ┌─────┐\n  │    parensTypeAnnotation\n  │     ↓\n  │    recordFieldDefinition\n  │     ↓\n  │    recordFieldsTypeAnnotation\n  │     ↓\n  │    recordTypeAnnotation\n  │     ↓\n  │    typeAnnotation\n  │     ↓\n  │    typeAnnotationNoFn\n  │     ↓\n  │    typedTypeAnnotation\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer = function (varPointer) {
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$string(':'),
				$stil4m$elm_syntax$Combine$succeed(
					function (ta) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Signature$Signature, varPointer, ta);
					}))));
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression = function (a) {
	return {$: 'GLSLExpression', a: a};
};
var $elm$parser$Parser$NotNestable = {$: 'NotNestable'};
var $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression = function () {
	var start = '[glsl|';
	var end = '|]';
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string(end),
			A2(
				$stil4m$elm_syntax$Combine$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$dropLeft(
						$elm$core$String$length(start)),
					$stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression),
				$stil4m$elm_syntax$Combine$fromCore(
					$elm$parser$Parser$getChompedString(
						A3($elm$parser$Parser$multiComment, start, end, $elm$parser$Parser$NotNestable))))));
}();
var $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken = $stil4m$elm_syntax$Combine$string('if');
var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray(
	[
		_Utils_chr('+'),
		_Utils_chr('-'),
		_Utils_chr(':'),
		_Utils_chr('/'),
		_Utils_chr('*'),
		_Utils_chr('>'),
		_Utils_chr('<'),
		_Utils_chr('='),
		_Utils_chr('/'),
		_Utils_chr('&'),
		_Utils_chr('^'),
		_Utils_chr('%'),
		_Utils_chr('|'),
		_Utils_chr('!'),
		_Utils_chr('.'),
		_Utils_chr('#'),
		_Utils_chr('$'),
		_Utils_chr('≡'),
		_Utils_chr('~'),
		_Utils_chr('?'),
		_Utils_chr('@')
	]);
var $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators = _List_fromArray(
	[':', '->', '--', '=']);
var $stil4m$elm_syntax$Combine$Char$oneOf = function (cs) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
			$elm$core$Maybe$withDefault(
				$stil4m$elm_syntax$Combine$fail(
					'expected one of \'' + ($elm$core$String$fromList(cs) + '\'')))),
		$stil4m$elm_syntax$Combine$Char$satisfy(
			function (a) {
				return A2($elm$core$List$member, a, cs);
			}));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList = function (allowedChars) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (m) {
			return A2($elm$core$List$member, m, $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators) ? $stil4m$elm_syntax$Combine$fail('operator is not allowed') : $stil4m$elm_syntax$Combine$succeed(m);
		},
		A2(
			$stil4m$elm_syntax$Combine$map,
			$elm$core$String$fromList,
			$stil4m$elm_syntax$Combine$many1(
				$stil4m$elm_syntax$Combine$Char$oneOf(allowedChars))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_eq(stateIndent, current);
			})),
	$stil4m$elm_syntax$Combine$many1(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(
	function (a, b) {
		return {$: 'RecordAccess', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess = function (e) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			return A2(
				$stil4m$elm_syntax$Combine$or,
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(
							$stil4m$elm_syntax$Combine$map,
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess(e),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
								$stil4m$elm_syntax$Combine$string('.'))))),
				$stil4m$elm_syntax$Combine$succeed(e));
		});
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function (a) {
	return {$: 'Literal', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral = function () {
	var helper = function (s) {
		return s.escaped ? A2(
			$elm$parser$Parser$map,
			function (v) {
				return $elm$parser$Parser$Loop(
					_Utils_update(
						s,
						{
							escaped: false,
							parts: A2(
								$elm$core$List$cons,
								$elm$core$String$fromList(
									_List_fromArray(
										[v])),
								s.parts)
						}));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(s.parts));
					},
					$elm$parser$Parser$symbol('\"\"\"')),
					A2(
					$elm$parser$Parser$map,
					function (v) {
						return $elm$parser$Parser$Loop(
							_Utils_update(
								s,
								{
									counter: s.counter + 1,
									parts: A2($elm$core$List$cons, v, s.parts)
								}));
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\"'))),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Loop(
							_Utils_update(
								s,
								{counter: s.counter + 1, escaped: true, parts: s.parts}));
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\\'))),
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var start = _v2.a;
						var value = _v2.b;
						var end = _v2.c;
						return _Utils_eq(start, end) ? $elm$parser$Parser$problem('Expected a string character or a triple double quote') : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Loop(
								_Utils_update(
									s,
									{
										counter: s.counter + 1,
										parts: A2($elm$core$List$cons, value, s.parts)
									})));
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								$elm$parser$Parser$getOffset),
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompWhile(
									function (c) {
										return (!_Utils_eq(
											c,
											_Utils_chr('\"'))) && (!_Utils_eq(
											c,
											_Utils_chr('\\')));
									}))),
						$elm$parser$Parser$getOffset))
				]));
	};
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('\"\"\"')),
			A2(
				$elm$parser$Parser$loop,
				{counter: 0, escaped: false, parts: _List_Nil},
				helper)));
}();
var $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$Literal,
				A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)));
	});
var $stil4m$elm_syntax$Combine$loop = F2(
	function (init, stepper) {
		var wrapper = function (_v3) {
			var oldState = _v3.a;
			var v = _v3.b;
			var _v0 = stepper(v);
			var p = _v0.a;
			return A2(
				$elm$parser$Parser$map,
				function (_v1) {
					var newState = _v1.a;
					var r = _v1.b;
					if (r.$ === 'Loop') {
						var l = r.a;
						return $elm$parser$Parser$Loop(
							_Utils_Tuple2(newState, l));
					} else {
						var d = r.a;
						return $elm$parser$Parser$Done(
							_Utils_Tuple2(newState, d));
					}
				},
				p(oldState));
		};
		return $stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					$elm$parser$Parser$loop,
					_Utils_Tuple2(state, init),
					wrapper);
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$chompWhile(
		function (c) {
			return _Utils_eq(
				c,
				_Utils_chr(' '));
		}));
var $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable = function (a) {
	return {$: 'Floatable', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Hex = function (a) {
	return {$: 'Hex', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Integer = function (a) {
	return {$: 'Integer', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber = F3(
	function (floatf, intf, hexf) {
		return $stil4m$elm_syntax$Combine$fromCore(
			$elm$parser$Parser$backtrackable(
				A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A3($stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber, $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable, $stil4m$elm_syntax$Elm$Syntax$Expression$Integer, $stil4m$elm_syntax$Elm$Syntax$Expression$Hex));
var $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken = $stil4m$elm_syntax$Combine$string('of');
var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2(
	$elm$core$List$cons,
	_Utils_chr(','),
	$stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
var $stil4m$elm_syntax$Elm$Syntax$Node$range = function (_v0) {
	var r = _v0.a;
	return r;
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function (a) {
	return {$: 'RecordAccessFunction', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		$stil4m$elm_syntax$Combine$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Basics$append('.'),
			$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
			$stil4m$elm_syntax$Combine$string('.'))));
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(
	function (a, b) {
		return {$: 'FunctionOrValue', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$reference = function () {
	var justFunction = A2(
		$stil4m$elm_syntax$Combine$map,
		function (v) {
			return _Utils_Tuple2(_List_Nil, v);
		},
		$stil4m$elm_syntax$Elm$Parser$Tokens$functionName);
	var helper = function (_v0) {
		var n = _v0.a;
		var xs = _v0.b;
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$andThen,
								function (t) {
									return helper(
										_Utils_Tuple2(
											t,
											A2($elm$core$List$cons, n, xs)));
								},
								$stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
								A2(
								$stil4m$elm_syntax$Combine$map,
								function (t) {
									return _Utils_Tuple2(
										t,
										A2($elm$core$List$cons, n, xs));
								},
								$stil4m$elm_syntax$Elm$Parser$Tokens$functionName)
							])),
					$stil4m$elm_syntax$Combine$string('.')),
					$stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	var recurring = A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v1) {
			var t = _v1.a;
			var xs = _v1.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(xs),
				t);
		},
		A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[recurring, justFunction]));
}();
var $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v0) {
			var xs = _v0.a;
			var x = _v0.b;
			return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, xs, x);
		},
		$stil4m$elm_syntax$Elm$Parser$Declarations$reference));
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken = $stil4m$elm_syntax$Combine$string('then');
var $stil4m$elm_syntax$Elm$Parser$State$popIndent = function (_v0) {
	var s = _v0.a;
	return $stil4m$elm_syntax$Elm$Parser$State$State(
		_Utils_update(
			s,
			{
				indents: A2($elm$core$List$drop, 1, s.indents)
			}));
};
var $stil4m$elm_syntax$Elm$Parser$State$pushIndent = F2(
	function (x, _v0) {
		var s = _v0.a;
		return $stil4m$elm_syntax$Elm$Parser$State$State(
			_Utils_update(
				s,
				{
					indents: A2($elm$core$List$cons, x, s.indents)
				}));
	});
var $stil4m$elm_syntax$Elm$Parser$State$pushColumn = F2(
	function (col, state) {
		return A2($stil4m$elm_syntax$Elm$Parser$State$pushIndent, col - 1, state);
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (location) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$popIndent),
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					p,
					$stil4m$elm_syntax$Combine$modifyState(
						$stil4m$elm_syntax$Elm$Parser$State$pushColumn(location.column))));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode = function (pointer) {
	var functionImplementationFromVarPointer = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$string('='),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Combine$many(
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument)),
						$stil4m$elm_syntax$Combine$succeed(
							F2(
								function (args, expr) {
									return A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Range$combine(
											_List_fromArray(
												[
													$stil4m$elm_syntax$Elm$Syntax$Node$range(varPointer),
													$stil4m$elm_syntax$Elm$Syntax$Node$range(expr)
												])),
										A3($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
								}))))));
	};
	var functionWithoutSignature = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			A2($stil4m$elm_syntax$Elm$Syntax$Expression$Function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
			functionImplementationFromVarPointer(varPointer));
	};
	var fromParts = F2(
		function (sig, decl) {
			return {
				declaration: decl,
				documentation: $elm$core$Maybe$Nothing,
				signature: $elm$core$Maybe$Just(sig)
			};
		});
	var functionWithSignature = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (sig) {
				return A2(
					$stil4m$elm_syntax$Combine$map,
					fromParts(sig),
					A2(
						$stil4m$elm_syntax$Combine$andThen,
						functionImplementationFromVarPointer,
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict)))));
			},
			$stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
	};
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				functionWithSignature(pointer),
				functionWithoutSignature(pointer)
			]));
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function (p) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v7) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$string('='),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed(
								$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring(p))))));
		});
};
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v23) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Tokens$ofToken,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v21) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (_v22) {
					var start = _v22.a;
					return A2(
						$stil4m$elm_syntax$Combine$map,
						function (cb) {
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										$elm$core$List$cons,
										start,
										A2(
											$elm$core$List$map,
											A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $stil4m$elm_syntax$Elm$Syntax$Node$range),
											cb.cases))),
								$stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(cb));
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
									$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements()),
								$stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$andMap,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock(),
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
				},
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
					$stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v20) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$string('->'),
							$stil4m$elm_syntax$Combine$maybe(
								A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict))))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
					$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v19) {
			var helper = function (last) {
				return $stil4m$elm_syntax$Combine$withState(
					function (s) {
						return $stil4m$elm_syntax$Combine$withLocation(
							function (l) {
								return _Utils_eq(
									$stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
									l.column) ? A2(
									$stil4m$elm_syntax$Combine$map,
									function (c) {
										return $stil4m$elm_syntax$Combine$Loop(
											A2($elm$core$List$cons, c, last));
									},
									$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()) : $stil4m$elm_syntax$Combine$succeed(
									$stil4m$elm_syntax$Combine$Done(
										$elm$core$List$reverse(last)));
							});
					});
			};
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (v) {
					return A2($stil4m$elm_syntax$Combine$loop, v, helper);
				},
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$List$singleton,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v15) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (first) {
					var complete = function (rest) {
						return $stil4m$elm_syntax$Combine$succeed(
							function () {
								if (!rest.b) {
									return first;
								} else {
									return A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Range$combine(
											A2(
												$elm$core$List$cons,
												$stil4m$elm_syntax$Elm$Syntax$Node$range(first),
												A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, rest))),
										$stil4m$elm_syntax$Elm$Syntax$Expression$Application(
											A2(
												$elm$core$List$cons,
												first,
												$elm$core$List$reverse(rest))));
								}
							}());
					};
					var promoter = function (rest) {
						return A2(
							$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
							function (_v16) {
								return complete(rest);
							},
							function (_v17) {
								return A2(
									$stil4m$elm_syntax$Combine$or,
									A2(
										$stil4m$elm_syntax$Combine$andThen,
										function (next) {
											return promoter(
												A2($elm$core$List$cons, next, rest));
										},
										$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication()),
									complete(rest));
							});
					};
					return promoter(_List_Nil);
				},
				$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication());
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v14) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
				$stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression()
						])));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$lazy(
				function (_v13) {
					return A2(
						$stil4m$elm_syntax$Combine$andMap,
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken)),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$andMap,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Tokens$thenToken,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												$stil4m$elm_syntax$Combine$andMap,
												$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
												A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
													$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock)))))))));
				}),
			$stil4m$elm_syntax$Elm$Parser$Tokens$ifToken));
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v12) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
							$stil4m$elm_syntax$Combine$string('->'))),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						A2(
							$stil4m$elm_syntax$Combine$sepBy1,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string('\\'),
								$stil4m$elm_syntax$Combine$succeed(
									F2(
										function (args, expr) {
											return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
												A2($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda, args, expr));
										})))))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v11) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$string('in'),
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[$stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces]))),
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody()),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Layout$layout,
						$stil4m$elm_syntax$Combine$string('let'))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v8) {
			var blockElement = A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (_v9) {
					var r = _v9.a;
					var p = _v9.b;
					if (p.$ === 'VarPattern') {
						var v = p.a;
						return A2(
							$stil4m$elm_syntax$Combine$map,
							$stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction,
							$stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode(
								A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v)));
					} else {
						return $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(
							A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, p));
					}
				},
				$stil4m$elm_syntax$Elm$Parser$Patterns$pattern);
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$many(
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Node$parser(blockElement))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Node$parser(blockElement),
					$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v6) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						$stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock(),
						$stil4m$elm_syntax$Combine$succeed(
							function (decls) {
								return A2(
									$elm$core$Basics$composeR,
									$stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock(decls),
									$stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression);
							}))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v5) {
			var innerExpressions = A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Combine$string(',')))),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always(
									$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(_List_Nil)),
								$stil4m$elm_syntax$Combine$string(']')),
								A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string(']'),
								innerExpressions)
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('['))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression() {
	var negationExpression = $stil4m$elm_syntax$Combine$lazy(
		function (_v4) {
			return A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$Negation,
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
								$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression()
							]))));
		});
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v3) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$choice(
								_List_fromArray(
									[
										negationExpression,
										A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Layout$layout,
										$stil4m$elm_syntax$Combine$succeed(
											$stil4m$elm_syntax$Elm$Syntax$Expression$Operator('-')))
									])),
							$stil4m$elm_syntax$Combine$string('-'))),
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Operator, $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken))
					]));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression() {
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		$stil4m$elm_syntax$Combine$lazy(
			function (_v2) {
				var recordField = $stil4m$elm_syntax$Elm$Parser$Node$parser(
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string('='),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
										$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)))))));
				var recordFields = A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								recordField,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string(','))))),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							recordField,
							$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons))));
				var recordUpdateSyntaxParser = function (fname) {
					return A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$string('}'),
						A2(
							$stil4m$elm_syntax$Combine$map,
							function (e) {
								return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
							},
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								recordFields,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string('|')))));
				};
				var recordContents = A2(
					$stil4m$elm_syntax$Combine$andThen,
					function (fname) {
						return $stil4m$elm_syntax$Combine$choice(
							_List_fromArray(
								[
									recordUpdateSyntaxParser(fname),
									A2(
									$stil4m$elm_syntax$Combine$andThen,
									function (fieldUpdate) {
										return $stil4m$elm_syntax$Combine$choice(
											_List_fromArray(
												[
													A2(
													$stil4m$elm_syntax$Combine$map,
													$elm$core$Basics$always(
														$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
															_List_fromArray(
																[fieldUpdate]))),
													$stil4m$elm_syntax$Combine$string('}')),
													A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$string('}'),
													A2(
														$stil4m$elm_syntax$Combine$map,
														function (fieldUpdates) {
															return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
																A2($elm$core$List$cons, fieldUpdate, fieldUpdates));
														},
														A2(
															$stil4m$elm_syntax$Combine$continueWith,
															recordFields,
															A2(
																$stil4m$elm_syntax$Combine$ignore,
																$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
																$stil4m$elm_syntax$Combine$string(',')))))
												]));
									},
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$continueWith,
											A2(
												$stil4m$elm_syntax$Combine$map,
												function (e) {
													return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, e);
												},
												$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression()),
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
												$stil4m$elm_syntax$Combine$string('=')))))
								]));
					},
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
				return A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always(
									$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_Nil)),
								$stil4m$elm_syntax$Combine$string('}')),
								recordContents
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{')));
			}));
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			var commaSep = $stil4m$elm_syntax$Combine$many(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$string(',')))));
			var closingParen = $stil4m$elm_syntax$Combine$fromCore(
				$elm$parser$Parser$symbol(')'));
			var asExpression = F2(
				function (x, xs) {
					if (!xs.b) {
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(x);
					} else {
						return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2($elm$core$List$cons, x, xs));
					}
				});
			var nested = A2(
				$stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed(asExpression)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr),
								closingParen),
								$stil4m$elm_syntax$Combine$backtrackable(
								A2(
									$stil4m$elm_syntax$Combine$map,
									$stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator,
									A2($stil4m$elm_syntax$Combine$ignore, closingParen, $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken))),
								A2($stil4m$elm_syntax$Combine$ignore, closingParen, nested)
							])),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('('))));
		});
}
try {
	var $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$expression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$expression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$letBody = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$letBody;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression;
	};
	var $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression();
	$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression = function () {
		return $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression;
	};
} catch ($) {
	throw 'Some top-level definitions from `Elm.Parser.Declarations` are causing infinite recursion:\n\n  ┌─────┐\n  │    caseBlock\n  │     ↓\n  │    caseExpression\n  │     ↓\n  │    caseStatement\n  │     ↓\n  │    caseStatements\n  │     ↓\n  │    expression\n  │     ↓\n  │    expressionNotApplication\n  │     ↓\n  │    functionWithNameNode\n  │     ↓\n  │    ifBlockExpression\n  │     ↓\n  │    lambdaExpression\n  │     ↓\n  │    letBlock\n  │     ↓\n  │    letBody\n  │     ↓\n  │    letDestructuringDeclarationWithPattern\n  │     ↓\n  │    letExpression\n  │     ↓\n  │    listExpression\n  │     ↓\n  │    operatorExpression\n  │     ↓\n  │    recordExpression\n  │     ↓\n  │    tupledExpression\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Declarations$expression,
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$string('='),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
						$stil4m$elm_syntax$Combine$succeed(
							F2(
								function (x, y) {
									return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring, x, y);
								}))))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function (a) {
	return {$: 'FunctionDeclaration', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Node$value = function (_v0) {
	var v = _v0.b;
	return v;
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Range$combine(
		_List_fromArray(
			[
				function () {
				var _v0 = _function.documentation;
				if (_v0.$ === 'Just') {
					var documentation = _v0.a;
					return $stil4m$elm_syntax$Elm$Syntax$Node$range(documentation);
				} else {
					return A2(
						$elm$core$Maybe$withDefault,
						function (_v3) {
							var r = _v3.a;
							return r;
						}(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).name),
						A2(
							$elm$core$Maybe$map,
							function (_v1) {
								var value = _v1.b;
								var _v2 = value.name;
								var r = _v2.a;
								return r;
							},
							_function.signature));
				}
			}(),
				function (_v4) {
				var r = _v4.a;
				return r;
			}(
				$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression)
			]));
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$function = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (f) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(f),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(f));
			},
			A2(
				$stil4m$elm_syntax$Combine$andThen,
				$stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration = function (a) {
	return {$: 'InfixDeclaration', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Infix = F4(
	function (direction, precedence, operator, _function) {
		return {direction: direction, _function: _function, operator: operator, precedence: precedence};
	});
var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = {$: 'Left'};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Non = {$: 'Non'};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Right = {$: 'Right'};
var $stil4m$elm_syntax$Elm$Parser$Infix$infixDirection = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('right'),
			$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Right)),
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('left'),
			$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Left)),
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('non'),
			$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Non))
		]));
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Err(invalid),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$identity),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $stil4m$elm_syntax$Combine$Num$int = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$int);
var $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition = A2(
	$stil4m$elm_syntax$Combine$andMap,
	$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('='),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken)),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Layout$layout,
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$Num$int),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Layout$layout,
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Infix$infixDirection),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Layout$layout,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$fromCore(
												$elm$parser$Parser$keyword('infix')),
											$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))))))))));
var $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation = function (_v0) {
	var line = _v0.line;
	var column = _v0.column;
	return {column: column, row: line};
};
var $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			var k = $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start);
			return p(
				{end: k, start: k});
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (inf) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(inf._function)
							])),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration(inf));
			},
			$stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition);
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration = function (a) {
	return {$: 'PortDeclaration', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$portToken = $stil4m$elm_syntax$Combine$string('port');
var $stil4m$elm_syntax$Elm$Parser$Declarations$signature = A2(
	$stil4m$elm_syntax$Combine$andMap,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
				$stil4m$elm_syntax$Combine$string(':')))),
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
		$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Signature$Signature)));
var $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (sig) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								function (_v0) {
								var r = _v0.a;
								return r;
							}(sig.typeAnnotation)
							])),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration(sig));
			},
			A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Elm$Parser$Declarations$signature,
				A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken)));
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias = F2(
	function (a, b) {
		return {$: 'DefinedAlias', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedType = F2(
	function (a, b) {
		return {$: 'DefinedType', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Type$Type = F4(
	function (documentation, name, generics, constructors) {
		return {constructors: constructors, documentation: documentation, generics: generics, name: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias = F4(
	function (documentation, name, generics, typeAnnotation) {
		return {documentation: documentation, generics: generics, name: name, typeAnnotation: typeAnnotation};
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$genericList = $stil4m$elm_syntax$Combine$many(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
var $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$layout,
	$stil4m$elm_syntax$Combine$string('type'));
var $stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor = F2(
	function (name, _arguments) {
		return {_arguments: _arguments, name: name};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation,
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy),
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation
		]));
var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor = A2(
	$stil4m$elm_syntax$Combine$andThen,
	function (tnn) {
		var range = tnn.a;
		var complete = function (args) {
			return $stil4m$elm_syntax$Combine$succeed(
				A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						A2(
							$elm$core$List$cons,
							range,
							A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, args))),
					A2($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor, tnn, args)));
		};
		var argHelper = function (xs) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Combine$andThen,
							function (ta) {
								return A2(
									$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_v0) {
										return $stil4m$elm_syntax$Combine$succeed(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, ta, xs)));
									},
									function (_v1) {
										return argHelper(
											A2($elm$core$List$cons, ta, xs));
									});
							},
							$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy),
							$stil4m$elm_syntax$Combine$succeed(
							$elm$core$List$reverse(xs))
						])),
				$stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0));
		};
		return A2(
			$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
			function (_v2) {
				return complete(_List_Nil);
			},
			function (_v3) {
				return A2(
					$stil4m$elm_syntax$Combine$andThen,
					complete,
					argHelper(_List_Nil));
			});
	},
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor)));
var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors = A2(
	$stil4m$elm_syntax$Combine$sepBy1,
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Combine$string('|')),
	$stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor);
var $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (start) {
		return A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Combine$map,
						function (typeAlias) {
							return A2(
								$stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									_List_fromArray(
										[
											start,
											$stil4m$elm_syntax$Elm$Syntax$Node$range(typeAlias.typeAnnotation)
										])),
								typeAlias);
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Layout$layout,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$string('='),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											$stil4m$elm_syntax$Combine$andMap,
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Elm$Parser$Layout$layout,
												$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)),
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												A2(
													$stil4m$elm_syntax$Combine$continueWith,
													$stil4m$elm_syntax$Elm$Parser$Layout$layout,
													$stil4m$elm_syntax$Combine$string('alias')),
												$stil4m$elm_syntax$Combine$succeed(
													$stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias($elm$core$Maybe$Nothing))))))))),
						A2(
						$stil4m$elm_syntax$Combine$map,
						function (tipe) {
							return A2(
								$stil4m$elm_syntax$Elm$Parser$Typings$DefinedType,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										$elm$core$List$cons,
										start,
										A2(
											$elm$core$List$map,
											function (_v0) {
												var r = _v0.a;
												return r;
											},
											tipe.constructors))),
								tipe);
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string('=')),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												$stil4m$elm_syntax$Combine$andMap,
												$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
												$stil4m$elm_syntax$Combine$succeed(
													$stil4m$elm_syntax$Elm$Syntax$Type$Type($elm$core$Maybe$Nothing)))))))))
					])),
			$stil4m$elm_syntax$Elm$Parser$Typings$typePrefix);
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$declaration = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration,
					$stil4m$elm_syntax$Elm$Parser$Declarations$function,
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (v) {
						if (v.$ === 'DefinedType') {
							var r = v.a;
							var t = v.b;
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
						} else {
							var r = v.a;
							var a = v.b;
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(a));
						}
					},
					$stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition),
					$stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration,
					$stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration
				]));
	});
var $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations = $stil4m$elm_syntax$Combine$many(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
		$stil4m$elm_syntax$Elm$Parser$Declarations$declaration));
var $stil4m$elm_syntax$Elm$Syntax$Import$Import = F3(
	function (moduleName, moduleAlias, exposingList) {
		return {exposingList: exposingList, moduleAlias: moduleAlias, moduleName: moduleName};
	});
var $stil4m$elm_syntax$Elm$Parser$Tokens$asToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$keyword('as'));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function (a) {
	return {$: 'All', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function (a) {
	return {$: 'Explicit', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function (a) {
	return {$: 'FunctionExpose', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function (a) {
	return {$: 'InfixExpose', a: a};
};
var $stil4m$elm_syntax$Combine$while = function (pred) {
	return $stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				$elm$parser$Parser$map,
				function (x) {
					return _Utils_Tuple2(state, x);
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompWhile(pred)));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose,
				$stil4m$elm_syntax$Combine$parens(
					$stil4m$elm_syntax$Combine$while(
						$elm$core$Basics$neq(
							_Utils_chr(')'))))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType = F2(
	function (name, open) {
		return {name: name, open: open};
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function (a) {
	return {$: 'TypeExpose', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function (a) {
	return {$: 'TypeOrAliasExpose', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$exposedType = A2(
	$stil4m$elm_syntax$Combine$andThen,
	function (tipe) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$map,
					A2(
						$elm$core$Basics$composeR,
						$stil4m$elm_syntax$Elm$Syntax$Node$range,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$Just,
							A2(
								$elm$core$Basics$composeR,
								function (v) {
									return A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, tipe, v);
								},
								$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose))),
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Combine$parens(
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Combine$string('..'))))),
					$stil4m$elm_syntax$Combine$succeed(
					$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(tipe))
				]));
	},
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName,
			$stil4m$elm_syntax$Combine$succeed($elm$core$Basics$identity))));
var $stil4m$elm_syntax$Elm$Parser$Expose$typeExpose = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposedType);
	});
var $stil4m$elm_syntax$Elm$Parser$Expose$exposable = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[$stil4m$elm_syntax$Elm$Parser$Expose$typeExpose, $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose, $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose]));
	});
var $stil4m$elm_syntax$Elm$Parser$Ranges$withRange = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return $stil4m$elm_syntax$Combine$succeed(
							{
								end: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(end),
								start: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start)
							});
					}),
				p);
		});
};
var $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$or,
			$stil4m$elm_syntax$Elm$Parser$Ranges$withRange(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
						$stil4m$elm_syntax$Combine$string('..')),
					$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Exposing$All))),
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit,
				A2(
					$stil4m$elm_syntax$Combine$sepBy,
					$stil4m$elm_syntax$Combine$Char$char(
						_Utils_chr(',')),
					$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Expose$exposable))));
	});
var $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith = $stil4m$elm_syntax$Combine$parens(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout)));
var $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken = $stil4m$elm_syntax$Combine$string('exposing');
var $stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken));
var $stil4m$elm_syntax$Elm$Parser$Tokens$importToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$keyword('import'));
var $stil4m$elm_syntax$Elm$Parser$Base$moduleName = A2(
	$stil4m$elm_syntax$Combine$sepBy1,
	$stil4m$elm_syntax$Combine$string('.'),
	$stil4m$elm_syntax$Elm$Parser$Tokens$typeName);
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $stil4m$elm_syntax$Elm$Parser$Imports$setupNode = F2(
	function (start, imp) {
		var allRanges = _List_fromArray(
			[
				$elm$core$Maybe$Just(start),
				$elm$core$Maybe$Just(
				$stil4m$elm_syntax$Elm$Syntax$Node$range(imp.moduleName)),
				A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.exposingList),
				A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.moduleAlias)
			]);
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$combine(
				A2($elm$core$List$filterMap, $elm$core$Basics$identity, allRanges)),
			imp);
	});
var $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition = function () {
	var parseExposingDefinition = F2(
		function (mod, asDef) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Combine$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$Just,
							A2($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef)),
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition)),
						$stil4m$elm_syntax$Combine$succeed(
						A3($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef, $elm$core$Maybe$Nothing))
					]));
		});
	var importAndModuleName = A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$importToken));
	var asDefinition = A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$asToken));
	var parseAsDefinition = function (mod) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$andThen,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$Just,
						parseExposingDefinition(mod)),
					A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, asDefinition)),
					A2(parseExposingDefinition, mod, $elm$core$Maybe$Nothing)
				]));
	};
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (_v0) {
			var start = _v0.a;
			return A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Parser$Imports$setupNode(start),
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					parseAsDefinition,
					A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
		},
		$stil4m$elm_syntax$Elm$Parser$Node$parser(
			$stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
}();
var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule = function (a) {
	return {$: 'EffectModule', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause = A2(
	$stil4m$elm_syntax$Combine$andMap,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
			$stil4m$elm_syntax$Combine$string('='))),
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
		$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
var $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock = A2(
	$stil4m$elm_syntax$Combine$map,
	function (pairs) {
		return {
			command: A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq('command')),
						pairs))),
			subscription: A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq('subscription')),
						pairs)))
		};
	},
	A3(
		$stil4m$elm_syntax$Combine$between,
		$stil4m$elm_syntax$Combine$string('{'),
		$stil4m$elm_syntax$Combine$string('}'),
		A2(
			$stil4m$elm_syntax$Combine$sepBy1,
			$stil4m$elm_syntax$Combine$string(','),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause))));
var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Modules$whereBlock,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		$stil4m$elm_syntax$Combine$string('where')));
var $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken = $stil4m$elm_syntax$Combine$string('module');
var $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition = function () {
	var createEffectModule = F3(
		function (name, whereClauses, exp) {
			return $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule(
				{command: whereClauses.command, exposingList: exp, moduleName: name, subscription: whereClauses.subscription});
		});
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Elm$Parser$Layout$layout,
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$string('effect'),
										$stil4m$elm_syntax$Combine$succeed(createEffectModule))))))))));
}();
var $stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData = F2(
	function (moduleName, exposingList) {
		return {exposingList: exposingList, moduleName: moduleName};
	});
var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function (a) {
	return {$: 'NormalModule', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition = A2(
	$stil4m$elm_syntax$Combine$map,
	$stil4m$elm_syntax$Elm$Syntax$Module$NormalModule,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))));
var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function (a) {
	return {$: 'PortModule', a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition = A2(
	$stil4m$elm_syntax$Combine$map,
	$stil4m$elm_syntax$Elm$Syntax$Module$PortModule,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Tokens$portToken,
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))))));
var $stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[$stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition]));
var $stil4m$elm_syntax$Elm$Parser$File$file = A2(
	$stil4m$elm_syntax$Combine$ignore,
	$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$File$collectComments,
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$File$fileDeclarations,
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition)),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$File$File)))))))));
var $stil4m$elm_syntax$Elm$Internal$RawFile$Raw = function (a) {
	return {$: 'Raw', a: a};
};
var $stil4m$elm_syntax$Elm$Internal$RawFile$fromFile = $stil4m$elm_syntax$Elm$Internal$RawFile$Raw;
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $stil4m$elm_syntax$Combine$runParser = F3(
	function (_v0, st, s) {
		var p = _v0.a;
		return A2(
			$elm$parser$Parser$run,
			p(st),
			s);
	});
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $stil4m$elm_syntax$Combine$end = $stil4m$elm_syntax$Combine$Parser(
	function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$end);
	});
var $stil4m$elm_syntax$Elm$Parser$withEnd = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$withLocation(
			function (_v0) {
				return $stil4m$elm_syntax$Combine$end;
			}),
		p);
};
var $stil4m$elm_syntax$Elm$Parser$parse = function (input) {
	var _v0 = A3(
		$stil4m$elm_syntax$Combine$runParser,
		$stil4m$elm_syntax$Elm$Parser$withEnd($stil4m$elm_syntax$Elm$Parser$File$file),
		$stil4m$elm_syntax$Elm$Parser$State$emptyState,
		input + '\n');
	if (_v0.$ === 'Ok') {
		var _v1 = _v0.a;
		var r = _v1.b;
		return $elm$core$Result$Ok(
			$stil4m$elm_syntax$Elm$Internal$RawFile$fromFile(r));
	} else {
		var s = _v0.a;
		return $elm$core$Result$Err(s);
	}
};
var $jfmengels$elm_review$Review$Fix$positionAsInt = function (_v0) {
	var row = _v0.row;
	var column = _v0.column;
	return (row * 1000000) + column;
};
var $jfmengels$elm_review$Review$Fix$rangePosition = function (fix_) {
	return $jfmengels$elm_review$Review$Fix$positionAsInt(
		function () {
			switch (fix_.$) {
				case 'Replacement':
					var range = fix_.a;
					var replacement = fix_.b;
					return range.start;
				case 'Removal':
					var range = fix_.a;
					return range.start;
				default:
					var position = fix_.a;
					var insertion = fix_.b;
					return position;
			}
		}());
};
var $elm$core$List$sortBy = _List_sortBy;
var $jfmengels$elm_review$Review$Fix$fix = F3(
	function (target, fixes, sourceCode) {
		switch (target.$) {
			case 'Module':
				if ($jfmengels$elm_review$Review$Fix$containRangeCollisions(fixes)) {
					return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges);
				} else {
					var resultAfterFix = A2(
						$elm$core$String$join,
						'\n',
						A3(
							$elm$core$List$foldl,
							$jfmengels$elm_review$Review$Fix$applyFix,
							$elm$core$String$lines(sourceCode),
							A2(
								$elm$core$List$sortBy,
								A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$rangePosition, $elm$core$Basics$negate),
								fixes)));
					if (_Utils_eq(sourceCode, resultAfterFix)) {
						return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
					} else {
						var _v1 = $stil4m$elm_syntax$Elm$Parser$parse(resultAfterFix);
						if (_v1.$ === 'Err') {
							return $jfmengels$elm_review$Review$Fix$Errored(
								$jfmengels$elm_review$Review$Fix$SourceCodeIsNotValid(resultAfterFix));
						} else {
							return $jfmengels$elm_review$Review$Fix$Successful(resultAfterFix);
						}
					}
				}
			case 'Readme':
				if ($jfmengels$elm_review$Review$Fix$containRangeCollisions(fixes)) {
					return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges);
				} else {
					var resultAfterFix = A2(
						$elm$core$String$join,
						'\n',
						A3(
							$elm$core$List$foldl,
							$jfmengels$elm_review$Review$Fix$applyFix,
							$elm$core$String$lines(sourceCode),
							A2(
								$elm$core$List$sortBy,
								A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$rangePosition, $elm$core$Basics$negate),
								fixes)));
					return _Utils_eq(sourceCode, resultAfterFix) ? $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged) : $jfmengels$elm_review$Review$Fix$Successful(resultAfterFix);
				}
			case 'ElmJson':
				return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
			default:
				return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
		}
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode = function (string) {
	var lines = $elm$core$String$lines(string);
	return ($elm$core$List$length(lines) === 1) ? ('`' + (string + '`')) : function (str) {
		return '```\n' + (str + '\n  ```');
	}(
		A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function (str) {
					return (str === '') ? '' : ('    ' + str);
				},
				lines)));
};
var $jfmengels$elm_review$Review$Test$FailureMessage$fixedCodeMismatch = F3(
	function (resultingSourceCode, expectedSourceCode, error) {
		return 'FIXED CODE MISMATCH\n\nI found a different fixed source code than expected for the error with the\nfollowing message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nI found the following result after the fixes have been applied:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(resultingSourceCode) + ('\n\nbut I was expecting:\n\n  ' + $jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(expectedSourceCode)))));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$hasCollisionsInFixRanges = function (error) {
	return 'FOUND COLLISIONS IN FIX RANGES\n\nI got something unexpected when applying the fixes provided by the error\nwith the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + '\n\nI found that some fixes were targeting (partially or completely) the same\nsection of code. The problem with that is that I can\'t determine which fix\nto apply first, and the result will be different and potentially invalid\nbased on the order in which I apply these fixes.\n\nFor this reason, I require that the ranges (for replacing and removing) and\nthe positions (for inserting) of every fix to be mutually exclusive.\n\nHint: Maybe you duplicated a fix, or you targeted the wrong node for one\nof your fixes.');
};
var $jfmengels$elm_review$Review$Test$FailureMessage$invalidSourceAfterFix = F2(
	function (error, resultingSourceCode) {
		return 'INVALID SOURCE AFTER FIX\n\nI got something unexpected when applying the fixes provided by the error\nwith the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nI was unable to parse the source code after applying the fixes. Here is\nthe result of the automatic fixing:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(resultingSourceCode) + '\n\nThis is problematic because fixes are meant to help the user, and applying\nthis fix will give them more work to do. After the fix has been applied,\nthe problem should be solved and the user should not have to think about it\nanymore. If a fix can not be applied fully, it should not be applied at\nall.')));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$missingFixes = function (expectedError) {
	return 'MISSING FIXES\n\nI expected that the error with the following message\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(expectedError.message) + '\n\nwould provide some fixes, but I didn\'t find any.\n\nHint: Maybe you forgot to call a function like `Rule.errorWithFix` or maybe\nthe list of provided fixes was empty.');
};
var $jfmengels$elm_review$Review$Test$FailureMessage$unchangedSourceAfterFix = function (error) {
	return 'UNCHANGED SOURCE AFTER FIX\n\nI got something unexpected when applying the fixes provided by the error\nwith the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + '\n\nI expected the fix to make some changes to the source code, but it resulted\nin the same source code as before the fixes.\n\nThis is problematic because I will tell the user that this rule provides an\nautomatic fix, but I will have to disappoint them when I later find out it\ndoesn\'t do anything.\n\nHint: Maybe you inserted an empty string into the source code.');
};
var $jfmengels$elm_review$Review$Test$FailureMessage$unexpectedFixes = function (error) {
	return 'UNEXPECTED FIXES\n\nI expected that the error with the following message\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + '\n\nwould not have any fixes, but it provided some.\n\nBecause the error provides fixes, I require providing the expected result\nof the automatic fix. Otherwise, there is no way to know whether the fix\nwill result in a correct and in the intended result.\n\nTo fix this, you can call `Review.Test.whenFixed` on your error:\n\n  Review.Test.error\n      { message = "<message>"\n      , details = "<details>"\n      , under = "<under>"\n      }\n      |> Review.Test.whenFixed "<source code>\"');
};
var $jfmengels$elm_review$Review$Test$checkFixesAreCorrect = F3(
	function (codeInspector, error_, expectedError) {
		var err = error_.a;
		var expectedError_ = expectedError.a;
		var _v0 = _Utils_Tuple2(expectedError_.fixedSource, err.fixes);
		if (_v0.a.$ === 'Nothing') {
			if (_v0.b.$ === 'Nothing') {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $elm_explorations$test$Expect$pass;
			} else {
				var _v4 = _v0.a;
				return $elm_explorations$test$Expect$fail(
					$jfmengels$elm_review$Review$Test$FailureMessage$unexpectedFixes(error_));
			}
		} else {
			if (_v0.b.$ === 'Nothing') {
				var _v3 = _v0.b;
				return $elm_explorations$test$Expect$fail(
					$jfmengels$elm_review$Review$Test$FailureMessage$missingFixes(
						$jfmengels$elm_review$Review$Test$extractExpectedErrorData(expectedError)));
			} else {
				var expectedFixedSource = _v0.a.a;
				var fixes = _v0.b.a;
				var _v5 = A3($jfmengels$elm_review$Review$Fix$fix, err.target, fixes, codeInspector.source);
				if (_v5.$ === 'Successful') {
					var fixedSource = _v5.a;
					return A2(
						$elm_explorations$test$Expect$true,
						A3($jfmengels$elm_review$Review$Test$FailureMessage$fixedCodeMismatch, fixedSource, expectedFixedSource, error_),
						_Utils_eq(fixedSource, expectedFixedSource));
				} else {
					switch (_v5.a.$) {
						case 'Unchanged':
							var _v6 = _v5.a;
							return $elm_explorations$test$Expect$fail(
								$jfmengels$elm_review$Review$Test$FailureMessage$unchangedSourceAfterFix(error_));
						case 'SourceCodeIsNotValid':
							var sourceCode = _v5.a.a;
							return $elm_explorations$test$Expect$fail(
								A2($jfmengels$elm_review$Review$Test$FailureMessage$invalidSourceAfterFix, error_, sourceCode));
						default:
							var _v7 = _v5.a;
							return $elm_explorations$test$Expect$fail(
								$jfmengels$elm_review$Review$Test$FailureMessage$hasCollisionsInFixRanges(error_));
					}
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$errorRange = function (_v0) {
	var err = _v0.a;
	return err.range;
};
var $jfmengels$elm_review$Review$Test$FailureMessage$rangeAsString = function (_v0) {
	var start = _v0.start;
	var end = _v0.end;
	return '{ start = { row = ' + ($elm$core$String$fromInt(start.row) + (', column = ' + ($elm$core$String$fromInt(start.column) + (' }, end = { row = ' + ($elm$core$String$fromInt(end.row) + (', column = ' + ($elm$core$String$fromInt(end.column) + ' } }')))))));
};
var $jfmengels$elm_review$Review$Test$FailureMessage$locationNotFound = function (error) {
	return 'COULD NOT FIND LOCATION FOR ERROR\n\nI was looking for the error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nand I found it, but the code it points to does not lead to anything:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$rangeAsString(
		$jfmengels$elm_review$Review$Rule$errorRange(error)) + '\n\nPlease try to have the error under the smallest region that makes sense.\nThis will be the most helpful for the person who reads the error message.')));
};
var $jfmengels$elm_review$Review$Test$FailureMessage$underMayNotBeEmpty = function (_v0) {
	var message = _v0.message;
	var codeAtLocation = _v0.codeAtLocation;
	return 'COULD NOT FIND LOCATION FOR ERROR\n\nI was looking for the error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(message) + ('\n\nand I found it, but the expected error has an empty string for `under`. I\nneed to point somewhere, so as to best help the people who encounter this\nerror.\n\nIf this helps, this is where I found the error:\n\n  ' + $jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(codeAtLocation)));
};
var $jfmengels$elm_review$Review$Test$FailureMessage$underMismatch = F2(
	function (error, _v0) {
		var under = _v0.under;
		var codeAtLocation = _v0.codeAtLocation;
		return 'UNEXPECTED ERROR LOCATION\n\nI found an error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nwhich I was expecting, but I found it under:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(codeAtLocation) + ('\n\nwhen I was expecting it under:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(under) + '\n\nHint: Maybe you\'re passing the `Range` of a wrong node when\ncalling `Rule.error`.')))));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$wrongLocation = F3(
	function (error, range, under) {
		return 'UNEXPECTED ERROR LOCATION\n\nI was looking for the error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nunder the following code:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(under) + ('\n\nand I found it, but the exact location you specified is not the one I found.\n\nI was expecting the error at:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$rangeAsString(range) + ('\n\nbut I found it at:\n\n  ' + $jfmengels$elm_review$Review$Test$FailureMessage$rangeAsString(
			$jfmengels$elm_review$Review$Rule$errorRange(error))))))));
	});
var $jfmengels$elm_review$Review$Test$checkMessageAppearsUnder = F3(
	function (codeInspector, error_, _v0) {
		var expectedError = _v0.a;
		var _v1 = codeInspector.getCodeAtLocation(
			$jfmengels$elm_review$Review$Rule$errorRange(error_));
		if (_v1.$ === 'Just') {
			var codeAtLocation = _v1.a;
			var _v2 = expectedError.under;
			if (_v2.$ === 'Under') {
				var under = _v2.a;
				return $elm_explorations$test$Expect$all(
					_List_fromArray(
						[
							function (_v3) {
							if (under === '') {
								return $elm_explorations$test$Expect$fail(
									$jfmengels$elm_review$Review$Test$FailureMessage$underMayNotBeEmpty(
										{codeAtLocation: codeAtLocation, message: expectedError.message}));
							} else {
								return $elm_explorations$test$Expect$pass;
							}
						},
							function (_v5) {
							return A2(
								$elm_explorations$test$Expect$true,
								A2(
									$jfmengels$elm_review$Review$Test$FailureMessage$underMismatch,
									error_,
									{codeAtLocation: codeAtLocation, under: under}),
								_Utils_eq(codeAtLocation, under));
						},
							function (_v6) {
							return A2(codeInspector.checkIfLocationIsAmbiguous, error_, under);
						}
						]));
			} else {
				var under = _v2.a;
				var range = _v2.b;
				return $elm_explorations$test$Expect$all(
					_List_fromArray(
						[
							function (_v7) {
							return A2(
								$elm_explorations$test$Expect$true,
								A2(
									$jfmengels$elm_review$Review$Test$FailureMessage$underMismatch,
									error_,
									{codeAtLocation: codeAtLocation, under: under}),
								_Utils_eq(codeAtLocation, under));
						},
							function (_v8) {
							return A2(
								$elm_explorations$test$Expect$true,
								A3($jfmengels$elm_review$Review$Test$FailureMessage$wrongLocation, error_, range, under),
								_Utils_eq(
									$jfmengels$elm_review$Review$Rule$errorRange(error_),
									range));
						}
						]));
			}
		} else {
			return function (_v9) {
				return $elm_explorations$test$Expect$fail(
					$jfmengels$elm_review$Review$Test$FailureMessage$locationNotFound(error_));
			};
		}
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$messageMismatch = F2(
	function (expectedError, error) {
		return 'UNEXPECTED ERROR MESSAGE\n\nI was looking for the error with the following message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(expectedError.message) + ('\n\nbut I found the following error message:\n\n  ' + $jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error))));
	});
var $jfmengels$elm_review$Review$Test$checkErrorMatch = F3(
	function (codeInspector, expectedError, error_) {
		var expectedError_ = expectedError.a;
		return $elm_explorations$test$Expect$all(
			_List_fromArray(
				[
					function (_v0) {
					return A2(
						$elm_explorations$test$Expect$true,
						A2(
							$jfmengels$elm_review$Review$Test$FailureMessage$messageMismatch,
							$jfmengels$elm_review$Review$Test$extractExpectedErrorData(expectedError),
							error_),
						_Utils_eq(
							expectedError_.message,
							$jfmengels$elm_review$Review$Rule$errorMessage(error_)));
				},
					A3($jfmengels$elm_review$Review$Test$checkMessageAppearsUnder, codeInspector, error_, expectedError),
					A2($jfmengels$elm_review$Review$Test$checkDetailsAreCorrect, error_, expectedError),
					function (_v1) {
					return A3($jfmengels$elm_review$Review$Test$checkFixesAreCorrect, codeInspector, error_, expectedError);
				}
				]));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$expectedErrorToString = function (expectedError) {
	return '  - ' + $jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(expectedError.message);
};
var $jfmengels$elm_review$Review$Test$FailureMessage$expectedMoreErrors = F3(
	function (moduleName, expectedNumberOfErrors, missingExpectedErrors) {
		var numberOfErrors = $elm$core$List$length(missingExpectedErrors);
		return _Utils_ap(
			'RULE REPORTED LESS ERRORS THAN EXPECTED\n\nI expected to see ' + ($elm$core$String$fromInt(expectedNumberOfErrors) + (' errors for module `' + (moduleName + ('` but only found ' + ($elm$core$String$fromInt(expectedNumberOfErrors - numberOfErrors) + ('.\nHere are the ' + ($elm$core$String$fromInt(numberOfErrors) + ' I could not find:\n\n'))))))),
			A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $jfmengels$elm_review$Review$Test$FailureMessage$expectedErrorToString, missingExpectedErrors)));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$errorMessageAndPosition = function (error) {
	return '  - ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n    at ' + $jfmengels$elm_review$Review$Test$FailureMessage$rangeAsString(
		$jfmengels$elm_review$Review$Rule$errorRange(error))));
};
var $jfmengels$elm_review$Review$Test$FailureMessage$listErrorMessagesAndPositions = function (errors) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2($elm$core$List$map, $jfmengels$elm_review$Review$Test$FailureMessage$errorMessageAndPosition, errors));
};
var $jfmengels$elm_review$Review$Test$FailureMessage$pluralizeErrors = function (n) {
	return (n === 1) ? 'error' : 'errors';
};
var $jfmengels$elm_review$Review$Test$FailureMessage$tooManyErrors = F2(
	function (moduleName, extraErrors) {
		var numberOfErrors = $elm$core$List$length(extraErrors);
		return 'RULE REPORTED MORE ERRORS THAN EXPECTED\n\nI found ' + (($elm$core$String$fromInt(numberOfErrors) + (' ' + ($jfmengels$elm_review$Review$Test$FailureMessage$pluralizeErrors(numberOfErrors) + (' too many for module `' + (moduleName + '`:\n\n'))))) + $jfmengels$elm_review$Review$Test$FailureMessage$listErrorMessagesAndPositions(extraErrors));
	});
var $jfmengels$elm_review$Review$Test$checkErrorsMatch = F4(
	function (runResult, expectedErrors, expectedNumberOfErrors, errors) {
		var _v0 = _Utils_Tuple2(expectedErrors, errors);
		if (_v0.a.b) {
			if (_v0.b.b) {
				var _v1 = _v0.a;
				var expected = _v1.a;
				var restOfExpectedErrors = _v1.b;
				var _v2 = _v0.b;
				var error_ = _v2.a;
				var restOfErrors = _v2.b;
				return A2(
					$elm$core$List$cons,
					A3($jfmengels$elm_review$Review$Test$checkErrorMatch, runResult.inspector, expected, error_),
					A4($jfmengels$elm_review$Review$Test$checkErrorsMatch, runResult, restOfExpectedErrors, expectedNumberOfErrors, restOfErrors));
			} else {
				var _v3 = _v0.a;
				var expected = _v3.a;
				var restOfExpectedErrors = _v3.b;
				return _List_fromArray(
					[
						function (_v4) {
						return $elm_explorations$test$Expect$fail(
							A3(
								$jfmengels$elm_review$Review$Test$FailureMessage$expectedMoreErrors,
								runResult.moduleName,
								expectedNumberOfErrors,
								A2(
									$elm$core$List$map,
									$jfmengels$elm_review$Review$Test$extractExpectedErrorData,
									A2($elm$core$List$cons, expected, restOfExpectedErrors))));
					}
					]);
			}
		} else {
			if (!_v0.b.b) {
				return _List_fromArray(
					[
						$elm$core$Basics$always($elm_explorations$test$Expect$pass)
					]);
			} else {
				var _v5 = _v0.b;
				var error_ = _v5.a;
				var restOfErrors = _v5.b;
				return _List_fromArray(
					[
						function (_v6) {
						return $elm_explorations$test$Expect$fail(
							A2(
								$jfmengels$elm_review$Review$Test$FailureMessage$tooManyErrors,
								runResult.moduleName,
								A2($elm$core$List$cons, error_, restOfErrors)));
					}
					]);
			}
		}
	});
var $jfmengels$elm_review$Review$Test$matchingConfidenceLevel = F3(
	function (codeInspector, expectedErrorDetails, reviewError) {
		if (!_Utils_eq(
			expectedErrorDetails.message,
			$jfmengels$elm_review$Review$Rule$errorMessage(reviewError))) {
			return 0;
		} else {
			var _v0 = expectedErrorDetails.under;
			if (_v0.$ === 'Under') {
				var under = _v0.a;
				return (!_Utils_eq(
					codeInspector.getCodeAtLocation(
						$jfmengels$elm_review$Review$Rule$errorRange(reviewError)),
					$elm$core$Maybe$Just(under))) ? 1 : 2;
			} else {
				var under = _v0.a;
				var range = _v0.b;
				return (!_Utils_eq(
					codeInspector.getCodeAtLocation(
						$jfmengels$elm_review$Review$Rule$errorRange(reviewError)),
					$elm$core$Maybe$Just(under))) ? 1 : ((!_Utils_eq(
					range,
					$jfmengels$elm_review$Review$Rule$errorRange(reviewError))) ? 2 : 3);
			}
		}
	});
var $jfmengels$elm_review$Review$Test$findBestMatchingReviewError = F4(
	function (codeInspector, expectedErrorDetails, reviewErrors, bestMatch) {
		findBestMatchingReviewError:
		while (true) {
			if (!reviewErrors.b) {
				return bestMatch.error;
			} else {
				var reviewError = reviewErrors.a;
				var restOfReviewErrors = reviewErrors.b;
				var confidenceLevel = A3($jfmengels$elm_review$Review$Test$matchingConfidenceLevel, codeInspector, expectedErrorDetails, reviewError);
				if (_Utils_cmp(confidenceLevel, bestMatch.confidenceLevel) > 0) {
					var $temp$codeInspector = codeInspector,
						$temp$expectedErrorDetails = expectedErrorDetails,
						$temp$reviewErrors = restOfReviewErrors,
						$temp$bestMatch = {
						confidenceLevel: confidenceLevel,
						error: $elm$core$Maybe$Just(reviewError)
					};
					codeInspector = $temp$codeInspector;
					expectedErrorDetails = $temp$expectedErrorDetails;
					reviewErrors = $temp$reviewErrors;
					bestMatch = $temp$bestMatch;
					continue findBestMatchingReviewError;
				} else {
					var $temp$codeInspector = codeInspector,
						$temp$expectedErrorDetails = expectedErrorDetails,
						$temp$reviewErrors = restOfReviewErrors,
						$temp$bestMatch = bestMatch;
					codeInspector = $temp$codeInspector;
					expectedErrorDetails = $temp$expectedErrorDetails;
					reviewErrors = $temp$reviewErrors;
					bestMatch = $temp$bestMatch;
					continue findBestMatchingReviewError;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Test$removeFirstOccurrence = F2(
	function (elementToRemove, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return _Utils_eq(x, elementToRemove) ? xs : A2(
				$elm$core$List$cons,
				x,
				A2($jfmengels$elm_review$Review$Test$removeFirstOccurrence, elementToRemove, xs));
		}
	});
var $jfmengels$elm_review$Review$Test$reorderErrors = F2(
	function (codeInspector, reorderState) {
		reorderErrors:
		while (true) {
			var _v0 = reorderState.expectedErrors;
			if (!_v0.b) {
				return _Utils_Tuple2(
					$elm$core$List$reverse(
						_Utils_ap(
							reorderState.expectedErrorsWithNoMatch,
							A2($elm$core$List$map, $elm$core$Tuple$first, reorderState.pairs))),
					$elm$core$List$reverse(
						_Utils_ap(
							reorderState.reviewErrors,
							A2($elm$core$List$map, $elm$core$Tuple$second, reorderState.pairs))));
			} else {
				var expectedError = _v0.a;
				var expectedErrorDetails = expectedError.a;
				var restOfExpectedErrors = _v0.b;
				var _v1 = A4(
					$jfmengels$elm_review$Review$Test$findBestMatchingReviewError,
					codeInspector,
					expectedErrorDetails,
					reorderState.reviewErrors,
					{confidenceLevel: 0, error: $elm$core$Maybe$Nothing});
				if (_v1.$ === 'Just') {
					var reviewError = _v1.a;
					var $temp$codeInspector = codeInspector,
						$temp$reorderState = _Utils_update(
						reorderState,
						{
							expectedErrors: restOfExpectedErrors,
							pairs: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(expectedError, reviewError),
								reorderState.pairs),
							reviewErrors: A2($jfmengels$elm_review$Review$Test$removeFirstOccurrence, reviewError, reorderState.reviewErrors)
						});
					codeInspector = $temp$codeInspector;
					reorderState = $temp$reorderState;
					continue reorderErrors;
				} else {
					var $temp$codeInspector = codeInspector,
						$temp$reorderState = _Utils_update(
						reorderState,
						{
							expectedErrors: restOfExpectedErrors,
							expectedErrorsWithNoMatch: A2($elm$core$List$cons, expectedError, reorderState.expectedErrorsWithNoMatch)
						});
					codeInspector = $temp$codeInspector;
					reorderState = $temp$reorderState;
					continue reorderErrors;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Test$checkAllErrorsMatch = F2(
	function (runResult, unorderedExpectedErrors) {
		var _v0 = A2(
			$jfmengels$elm_review$Review$Test$reorderErrors,
			runResult.inspector,
			{expectedErrors: unorderedExpectedErrors, expectedErrorsWithNoMatch: _List_Nil, pairs: _List_Nil, reviewErrors: runResult.errors});
		var expectedErrors = _v0.a;
		var reviewErrors = _v0.b;
		return function (expectations) {
			return A2($elm_explorations$test$Expect$all, expectations, _Utils_Tuple0);
		}(
			$elm$core$List$reverse(
				A4(
					$jfmengels$elm_review$Review$Test$checkErrorsMatch,
					runResult,
					expectedErrors,
					$elm$core$List$length(reviewErrors),
					reviewErrors)));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$needToUsedExpectErrorsForModules = 'AMBIGUOUS MODULE FOR ERROR\n\nYou gave me several modules, and you expect some errors. I need to know for\nwhich module you expect these errors to be reported.\n\nYou should use `expectErrorsForModules` to do this:\n\n  test "..." <|\n    \\() ->\n      [ \"\"\"\nmodule A exposing (..)\n-- someCode\n\"\"\", \"\"\"\nmodule B exposing (..)\n-- someCode\n\"\"\" ]\n      |> Review.Test.runOnModules rule\n      |> Review.Test.expectErrorsForModules\n          [ ( "B", [ Review.Test.error someError ] )\n          ]';
var $jfmengels$elm_review$Review$Test$expectErrors = F2(
	function (expectedErrors, reviewResult) {
		if (reviewResult.$ === 'FailedRun') {
			var errorMessage = reviewResult.a;
			return $elm_explorations$test$Expect$fail(errorMessage);
		} else {
			if (reviewResult.a.b && (!reviewResult.a.b.b)) {
				var _v1 = reviewResult.a;
				var runResult = _v1.a;
				return A2($jfmengels$elm_review$Review$Test$checkAllErrorsMatch, runResult, expectedErrors);
			} else {
				return $elm_explorations$test$Expect$fail($jfmengels$elm_review$Review$Test$FailureMessage$needToUsedExpectErrorsForModules);
			}
		}
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$didNotExpectErrors = F2(
	function (moduleName, errors) {
		return 'DID NOT EXPECT ERRORS\n\nI expected no errors for module `' + (moduleName + ('` but found:\n\n' + $jfmengels$elm_review$Review$Test$FailureMessage$listErrorMessagesAndPositions(errors)));
	});
var $jfmengels$elm_review$Review$Test$expectNoErrors = function (reviewResult) {
	if (reviewResult.$ === 'FailedRun') {
		var errorMessage = reviewResult.a;
		return $elm_explorations$test$Expect$fail(errorMessage);
	} else {
		var runResults = reviewResult.a;
		return function (expectations) {
			return A2($elm_explorations$test$Expect$all, expectations, _Utils_Tuple0);
		}(
			A2(
				$elm$core$List$map,
				F2(
					function (_v1, _v2) {
						var errors = _v1.errors;
						var moduleName = _v1.moduleName;
						return A2(
							$elm_explorations$test$Expect$true,
							A2($jfmengels$elm_review$Review$Test$FailureMessage$didNotExpectErrors, moduleName, errors),
							$elm$core$List$isEmpty(errors));
					}),
				runResults));
	}
};
var $author$project$NoEmptyText$NoImport = {$: 'NoImport'};
var $jfmengels$elm_review$Review$Error$Module = {$: 'Module'};
var $jfmengels$elm_review$Review$Rule$UnspecifiedError = function (a) {
	return {$: 'UnspecifiedError', a: a};
};
var $jfmengels$elm_review$Review$Rule$error = F2(
	function (_v0, range) {
		var message = _v0.message;
		var details = _v0.details;
		return $jfmengels$elm_review$Review$Rule$UnspecifiedError(
			{details: details, filePath: '', fixes: $elm$core$Maybe$Nothing, message: message, range: range, ruleName: '', target: $jfmengels$elm_review$Review$Error$Module});
	});
var $author$project$NoEmptyText$expressionVisitor = F3(
	function (expression, direction, context) {
		var _v0 = _Utils_Tuple2(direction, context);
		if ((_v0.a.$ === 'OnEnter') && (_v0.b.$ === 'Import')) {
			var _v1 = _v0.a;
			var aliasing = _v0.b.a.aliasing;
			var exposed = _v0.b.a.exposed;
			var _v2 = $stil4m$elm_syntax$Elm$Syntax$Node$value(expression);
			if ((((_v2.$ === 'Application') && _v2.a.b) && _v2.a.b.b) && (!_v2.a.b.b.b)) {
				var _v3 = _v2.a;
				var _function = _v3.a;
				var _v4 = _v3.b;
				var argument = _v4.a;
				var _v5 = _Utils_Tuple2(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(_function),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(argument));
				if ((((_v5.a.$ === 'FunctionOrValue') && (_v5.a.b === 'text')) && (_v5.b.$ === 'Literal')) && (_v5.b.a === '')) {
					if (!_v5.a.a.b) {
						var _v6 = _v5.a;
						return exposed ? _Utils_Tuple2(
							_List_fromArray(
								[
									A2(
									$jfmengels$elm_review$Review$Rule$error,
									$author$project$NoEmptyText$error,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(expression))
								]),
							context) : _Utils_Tuple2(_List_Nil, context);
					} else {
						var _v7 = _v5.a;
						var moduleName = _v7.a;
						return _Utils_eq(
							moduleName,
							A2(
								$elm$core$Maybe$withDefault,
								_List_fromArray(
									['Html']),
								aliasing)) ? _Utils_Tuple2(
							_List_fromArray(
								[
									A2(
									$jfmengels$elm_review$Review$Rule$error,
									$author$project$NoEmptyText$error,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(expression))
								]),
							context) : _Utils_Tuple2(_List_Nil, context);
					}
				} else {
					return _Utils_Tuple2(_List_Nil, context);
				}
			} else {
				return _Utils_Tuple2(_List_Nil, context);
			}
		} else {
			return _Utils_Tuple2(_List_Nil, context);
		}
	});
var $jfmengels$elm_review$Review$Rule$Rule = F3(
	function (a, b, c) {
		return {$: 'Rule', a: a, b: b, c: c};
	});
var $jfmengels$elm_review$Review$Exceptions$Exceptions = function (a) {
	return {$: 'Exceptions', a: a};
};
var $jfmengels$elm_review$Review$Exceptions$init = $jfmengels$elm_review$Review$Exceptions$Exceptions(
	{directories: _List_Nil, files: $elm$core$Set$empty});
var $jfmengels$elm_review$Review$Rule$newModuleRuleCache = {initialContext: $elm$core$Maybe$Nothing, moduleResults: $elm$core$Dict$empty};
var $jfmengels$elm_review$Review$Rule$ModuleRuleSchema = function (a) {
	return {$: 'ModuleRuleSchema', a: a};
};
var $jfmengels$elm_review$Review$Rule$reverseVisitors = function (_v0) {
	var schema = _v0.a;
	return $jfmengels$elm_review$Review$Rule$ModuleRuleSchema(
		_Utils_update(
			schema,
			{
				commentsVisitors: $elm$core$List$reverse(schema.commentsVisitors),
				declarationListVisitors: $elm$core$List$reverse(schema.declarationListVisitors),
				dependenciesVisitors: $elm$core$List$reverse(schema.dependenciesVisitors),
				elmJsonVisitors: $elm$core$List$reverse(schema.elmJsonVisitors),
				finalEvaluationFns: $elm$core$List$reverse(schema.finalEvaluationFns),
				importVisitors: $elm$core$List$reverse(schema.importVisitors),
				moduleDefinitionVisitors: $elm$core$List$reverse(schema.moduleDefinitionVisitors),
				readmeVisitors: $elm$core$List$reverse(schema.readmeVisitors)
			}));
};
var $jfmengels$elm_review$Review$Rule$accumulateContext = F3(
	function (visitors, element, context) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return visitor(element);
			},
			context,
			visitors);
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $jfmengels$elm_review$Review$Exceptions$isInAnIgnoredDirectory = F2(
	function (directories, path) {
		return A2(
			$elm$core$List$any,
			function (dir) {
				return A2($elm$core$String$startsWith, dir, path);
			},
			directories);
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $jfmengels$elm_review$Review$Exceptions$makePathOSAgnostic = function (path) {
	return A3($elm$core$String$replace, '\\', '/', path);
};
var $jfmengels$elm_review$Review$Exceptions$shouldBeIgnored = F2(
	function (exceptions, path) {
		var cleanedPath = $jfmengels$elm_review$Review$Exceptions$makePathOSAgnostic(path);
		return A2($elm$core$Set$member, cleanedPath, exceptions.files) || A2($jfmengels$elm_review$Review$Exceptions$isInAnIgnoredDirectory, exceptions.directories, cleanedPath);
	});
var $jfmengels$elm_review$Review$Exceptions$apply = F3(
	function (_v0, getPath, items) {
		var exceptions = _v0.a;
		return ($elm$core$Set$isEmpty(exceptions.files) && $elm$core$List$isEmpty(exceptions.directories)) ? items : A2(
			$elm$core$List$filter,
			A2(
				$elm$core$Basics$composeR,
				getPath,
				A2(
					$elm$core$Basics$composeR,
					$jfmengels$elm_review$Review$Exceptions$shouldBeIgnored(exceptions),
					$elm$core$Basics$not)),
			items);
	});
var $jfmengels$elm_review$Review$Rule$accumulate = F2(
	function (visitor, _v0) {
		var previousErrors = _v0.a;
		var previousContext = _v0.b;
		var _v1 = visitor(previousContext);
		var newErrors = _v1.a;
		var newContext = _v1.b;
		return _Utils_Tuple2(
			_Utils_ap(newErrors, previousErrors),
			newContext);
	});
var $jfmengels$elm_review$Review$Rule$accumulateList = F3(
	function (visitor, nodes, _v0) {
		var previousErrors = _v0.a;
		var previousContext = _v0.b;
		return A3(
			$elm$core$List$foldl,
			function (node) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					visitor(node));
			},
			_Utils_Tuple2(previousErrors, previousContext),
			nodes);
	});
var $jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors = F3(
	function (visitors, element, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					visitor(element));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$inAndOut = function (visitors) {
	return {
		onEnter: $elm$core$List$reverse(visitors),
		onExit: visitors
	};
};
var $jfmengels$elm_review$Review$Rule$makeFinalEvaluation = F2(
	function (finalEvaluationFns, _v0) {
		var previousErrors = _v0.a;
		var context = _v0.b;
		return $elm$core$List$concat(
			_List_fromArray(
				[
					A2(
					$elm$core$List$concatMap,
					function (visitor) {
						return visitor(context);
					},
					finalEvaluationFns),
					previousErrors
				]));
	});
var $jfmengels$elm_review$Review$Rule$SpecifiedError = function (a) {
	return {$: 'SpecifiedError', a: a};
};
var $jfmengels$elm_review$Review$Rule$setFilePathIfUnset = F2(
	function (module_, error_) {
		if (error_.$ === 'UnspecifiedError') {
			var err = error_.a;
			return $jfmengels$elm_review$Review$Rule$SpecifiedError(
				_Utils_update(
					err,
					{
						filePath: function () {
							var _v1 = err.filePath;
							if (_v1 === '') {
								return module_.path;
							} else {
								return err.filePath;
							}
						}()
					}));
		} else {
			return error_;
		}
	});
var $jfmengels$elm_review$Review$Rule$mapInternalError = F2(
	function (fn, err) {
		if (err.$ === 'UnspecifiedError') {
			var internal = err.a;
			return $jfmengels$elm_review$Review$Rule$UnspecifiedError(
				fn(internal));
		} else {
			var internal = err.a;
			return $jfmengels$elm_review$Review$Rule$SpecifiedError(
				fn(internal));
		}
	});
var $jfmengels$elm_review$Review$Rule$setRuleName = F2(
	function (ruleName, error_) {
		return A2(
			$jfmengels$elm_review$Review$Rule$mapInternalError,
			function (err) {
				return _Utils_update(
					err,
					{ruleName: ruleName});
			},
			error_);
	});
var $jfmengels$elm_review$Review$Rule$OnEnter = {$: 'OnEnter'};
var $jfmengels$elm_review$Review$Rule$OnExit = {$: 'OnExit'};
var $jfmengels$elm_review$Review$Rule$functionToExpression = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression;
};
var $jfmengels$elm_review$Review$Rule$expressionsInDeclaration = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 'FunctionDeclaration':
			var _function = _v0.a;
			return _List_fromArray(
				[
					$jfmengels$elm_review$Review$Rule$functionToExpression(_function)
				]);
		case 'CustomTypeDeclaration':
			return _List_Nil;
		case 'AliasDeclaration':
			var typeAnnotation = _v0.a.typeAnnotation;
			return _List_Nil;
		case 'Destructuring':
			var expr = _v0.b;
			return _List_fromArray(
				[expr]);
		case 'PortDeclaration':
			return _List_Nil;
		default:
			return _List_Nil;
	}
};
var $jfmengels$elm_review$Review$Rule$expressionChildren = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 'Application':
			var expressions = _v0.a;
			return expressions;
		case 'Literal':
			return _List_Nil;
		case 'Integer':
			return _List_Nil;
		case 'Floatable':
			return _List_Nil;
		case 'UnitExpr':
			return _List_Nil;
		case 'ListExpr':
			var elements = _v0.a;
			return elements;
		case 'FunctionOrValue':
			return _List_Nil;
		case 'RecordExpr':
			var fields = _v0.a;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v1) {
						var expr = _v1.b;
						return expr;
					}),
				fields);
		case 'RecordUpdateExpression':
			var setters = _v0.b;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v2) {
						var expr = _v2.b;
						return expr;
					}),
				setters);
		case 'ParenthesizedExpression':
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 'Operator':
			return _List_Nil;
		case 'OperatorApplication':
			var direction = _v0.b;
			var left = _v0.c;
			var right = _v0.d;
			switch (direction.$) {
				case 'Left':
					return _List_fromArray(
						[left, right]);
				case 'Right':
					return _List_fromArray(
						[right, left]);
				default:
					return _List_fromArray(
						[left, right]);
			}
		case 'IfBlock':
			var cond = _v0.a;
			var then_ = _v0.b;
			var else_ = _v0.c;
			return _List_fromArray(
				[cond, then_, else_]);
		case 'LetExpression':
			var expression = _v0.a.expression;
			var declarations = _v0.a.declarations;
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					function (declaration) {
						var _v4 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
						if (_v4.$ === 'LetFunction') {
							var _function = _v4.a;
							return $jfmengels$elm_review$Review$Rule$functionToExpression(_function);
						} else {
							var expr = _v4.b;
							return expr;
						}
					},
					declarations),
				_List_fromArray(
					[expression]));
		case 'CaseExpression':
			var expression = _v0.a.expression;
			var cases = _v0.a.cases;
			return A2(
				$elm$core$List$cons,
				expression,
				A2(
					$elm$core$List$map,
					function (_v5) {
						var caseExpression = _v5.b;
						return caseExpression;
					},
					cases));
		case 'LambdaExpression':
			var args = _v0.a.args;
			var expression = _v0.a.expression;
			return _List_fromArray(
				[expression]);
		case 'TupledExpression':
			var expressions = _v0.a;
			return expressions;
		case 'PrefixOperator':
			return _List_Nil;
		case 'Hex':
			return _List_Nil;
		case 'Negation':
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 'CharLiteral':
			return _List_Nil;
		case 'RecordAccess':
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 'RecordAccessFunction':
			return _List_Nil;
		default:
			return _List_Nil;
	}
};
var $jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitorsAndDirection = F4(
	function (direction, visitors, node, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					A2(visitor, node, direction));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$visitExpression = F3(
	function (visitors, node, moduleContext) {
		return A4(
			$jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitorsAndDirection,
			$jfmengels$elm_review$Review$Rule$OnExit,
			visitors.onExit,
			node,
			A3(
				$jfmengels$elm_review$Review$Rule$accumulateList,
				$jfmengels$elm_review$Review$Rule$visitExpression(visitors),
				$jfmengels$elm_review$Review$Rule$expressionChildren(node),
				A4(
					$jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitorsAndDirection,
					$jfmengels$elm_review$Review$Rule$OnEnter,
					visitors.onEnter,
					node,
					_Utils_Tuple2(_List_Nil, moduleContext))));
	});
var $jfmengels$elm_review$Review$Rule$visitDeclaration = F4(
	function (declarationVisitors, expressionVisitors, node, moduleContext) {
		var accumulateExpressionNodes = $elm$core$List$isEmpty(expressionVisitors.onEnter) ? $elm$core$Basics$identity : A2(
			$jfmengels$elm_review$Review$Rule$accumulateList,
			$jfmengels$elm_review$Review$Rule$visitExpression(expressionVisitors),
			$jfmengels$elm_review$Review$Rule$expressionsInDeclaration(node));
		return A4(
			$jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitorsAndDirection,
			$jfmengels$elm_review$Review$Rule$OnExit,
			declarationVisitors.onExit,
			node,
			accumulateExpressionNodes(
				A4(
					$jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitorsAndDirection,
					$jfmengels$elm_review$Review$Rule$OnEnter,
					declarationVisitors.onEnter,
					node,
					_Utils_Tuple2(_List_Nil, moduleContext))));
	});
var $jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitors = F3(
	function (visitors, node, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					visitor(node));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$visitImport = F3(
	function (importVisitors, node, moduleContext) {
		return A3(
			$jfmengels$elm_review$Review$Rule$visitNodeWithListOfVisitors,
			importVisitors,
			node,
			_Utils_Tuple2(_List_Nil, moduleContext));
	});
var $jfmengels$elm_review$Review$Rule$computeErrors = F2(
	function (_v0, initialContext) {
		var schema = _v0.a;
		var expressionVisitors = $jfmengels$elm_review$Review$Rule$inAndOut(schema.expressionVisitors);
		var declarationVisitors = $jfmengels$elm_review$Review$Rule$inAndOut(schema.declarationVisitors);
		return function (module_) {
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeR,
						$jfmengels$elm_review$Review$Rule$setRuleName(schema.name),
						$jfmengels$elm_review$Review$Rule$setFilePathIfUnset(module_)),
					A2(
						$jfmengels$elm_review$Review$Rule$makeFinalEvaluation,
						schema.finalEvaluationFns,
						A3(
							$jfmengels$elm_review$Review$Rule$accumulateList,
							A2($jfmengels$elm_review$Review$Rule$visitDeclaration, declarationVisitors, expressionVisitors),
							module_.ast.declarations,
							A3(
								$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
								schema.declarationListVisitors,
								module_.ast.declarations,
								A3(
									$jfmengels$elm_review$Review$Rule$accumulateList,
									$jfmengels$elm_review$Review$Rule$visitImport(schema.importVisitors),
									module_.ast.imports,
									A3(
										$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
										schema.commentsVisitors,
										module_.ast.comments,
										A3(
											$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
											schema.moduleDefinitionVisitors,
											module_.ast.moduleDefinition,
											_Utils_Tuple2(_List_Nil, initialContext)))))))));
		};
	});
var $jfmengels$elm_review$Review$Project$dependencies = function (_v0) {
	var project = _v0.a;
	return project.dependencies;
};
var $jfmengels$elm_review$Review$Project$elmJson = function (_v0) {
	var project = _v0.a;
	return project.elmJson;
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $jfmengels$elm_review$Review$Project$modules = function (_v0) {
	var project = _v0.a;
	return $elm$core$Dict$values(project.modules);
};
var $jfmengels$elm_review$Review$Project$readme = function (_v0) {
	var project = _v0.a;
	return project.readme;
};
var $jfmengels$elm_review$Review$Rule$runModuleRule = F5(
	function (moduleRuleSchema, previousCache, exceptions, project, _v0) {
		var schema = moduleRuleSchema.a;
		var modulesToAnalyze = A3(
			$jfmengels$elm_review$Review$Exceptions$apply,
			exceptions,
			function ($) {
				return $.path;
			},
			$jfmengels$elm_review$Review$Project$modules(project));
		var initialContext = A3(
			$jfmengels$elm_review$Review$Rule$accumulateContext,
			schema.dependenciesVisitors,
			$jfmengels$elm_review$Review$Project$dependencies(project),
			A3(
				$jfmengels$elm_review$Review$Rule$accumulateContext,
				schema.readmeVisitors,
				A2(
					$elm$core$Maybe$map,
					function ($) {
						return $.content;
					},
					$jfmengels$elm_review$Review$Project$readme(project)),
				A3(
					$jfmengels$elm_review$Review$Rule$accumulateContext,
					schema.elmJsonVisitors,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.project;
						},
						$jfmengels$elm_review$Review$Project$elmJson(project)),
					schema.initialContext)));
		var startCache = function () {
			var _v2 = previousCache.initialContext;
			if (_v2.$ === 'Just') {
				var previousInitialContext = _v2.a;
				return _Utils_eq(previousInitialContext, initialContext) ? previousCache : {
					initialContext: $elm$core$Maybe$Just(initialContext),
					moduleResults: $jfmengels$elm_review$Review$Rule$newModuleRuleCache.moduleResults
				};
			} else {
				return {
					initialContext: $elm$core$Maybe$Just(initialContext),
					moduleResults: $jfmengels$elm_review$Review$Rule$newModuleRuleCache.moduleResults
				};
			}
		}();
		var computeErrors_ = A2($jfmengels$elm_review$Review$Rule$computeErrors, moduleRuleSchema, initialContext);
		var moduleResults = A3(
			$elm$core$List$foldl,
			F2(
				function (module_, cache) {
					var _v1 = A2($elm$core$Dict$get, module_.path, cache);
					if (_v1.$ === 'Nothing') {
						return A3(
							$elm$core$Dict$insert,
							module_.path,
							{
								errors: computeErrors_(module_),
								source: module_.source
							},
							cache);
					} else {
						var cacheEntry = _v1.a;
						return _Utils_eq(cacheEntry.source, module_.source) ? cache : A3(
							$elm$core$Dict$insert,
							module_.path,
							{
								errors: computeErrors_(module_),
								source: module_.source
							},
							cache);
					}
				}),
			startCache.moduleResults,
			modulesToAnalyze);
		var errors = A2(
			$elm$core$List$concatMap,
			function ($) {
				return $.errors;
			},
			$elm$core$Dict$values(moduleResults));
		return _Utils_Tuple2(
			errors,
			A3(
				$jfmengels$elm_review$Review$Rule$Rule,
				schema.name,
				exceptions,
				A2(
					$jfmengels$elm_review$Review$Rule$runModuleRule,
					moduleRuleSchema,
					{initialContext: startCache.initialContext, moduleResults: moduleResults})));
	});
var $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema = function (schema) {
	var name = schema.a.name;
	return A3(
		$jfmengels$elm_review$Review$Rule$Rule,
		name,
		$jfmengels$elm_review$Review$Exceptions$init,
		A2(
			$jfmengels$elm_review$Review$Rule$runModuleRule,
			$jfmengels$elm_review$Review$Rule$reverseVisitors(schema),
			$jfmengels$elm_review$Review$Rule$newModuleRuleCache));
};
var $author$project$NoEmptyText$Import = function (a) {
	return {$: 'Import', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$exposesFunction = F2(
	function (s, exposure) {
		if (exposure.$ === 'All') {
			return true;
		} else {
			var l = exposure.a;
			return A2(
				$elm$core$List$any,
				function (_v1) {
					var value = _v1.b;
					if (value.$ === 'FunctionExpose') {
						var fun = value.a;
						return _Utils_eq(fun, s);
					} else {
						return false;
					}
				},
				l);
		}
	});
var $author$project$NoEmptyText$importVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(node).moduleName);
		if ((_v0.b && (_v0.a === 'Html')) && (!_v0.b.b)) {
			return _Utils_Tuple2(
				_List_Nil,
				function () {
					var exposed = A2(
						$elm$core$Maybe$withDefault,
						false,
						A2(
							$elm$core$Maybe$map,
							A2(
								$elm$core$Basics$composeR,
								$stil4m$elm_syntax$Elm$Syntax$Node$value,
								$stil4m$elm_syntax$Elm$Syntax$Exposing$exposesFunction('text')),
							$stil4m$elm_syntax$Elm$Syntax$Node$value(node).exposingList));
					var aliasing = A2(
						$elm$core$Maybe$map,
						$stil4m$elm_syntax$Elm$Syntax$Node$value,
						$stil4m$elm_syntax$Elm$Syntax$Node$value(node).moduleAlias);
					return $author$project$NoEmptyText$Import(
						{aliasing: aliasing, exposed: exposed});
				}());
		} else {
			return _Utils_Tuple2(_List_Nil, context);
		}
	});
var $jfmengels$elm_review$Review$Rule$emptySchema = F2(
	function (name_, initialContext) {
		return $jfmengels$elm_review$Review$Rule$ModuleRuleSchema(
			{commentsVisitors: _List_Nil, declarationListVisitors: _List_Nil, declarationVisitors: _List_Nil, dependenciesVisitors: _List_Nil, elmJsonVisitors: _List_Nil, expressionVisitors: _List_Nil, finalEvaluationFns: _List_Nil, importVisitors: _List_Nil, initialContext: initialContext, moduleDefinitionVisitors: _List_Nil, name: name_, readmeVisitors: _List_Nil});
	});
var $jfmengels$elm_review$Review$Rule$newModuleRuleSchema = F2(
	function (name_, moduleContext) {
		return A2($jfmengels$elm_review$Review$Rule$emptySchema, name_, moduleContext);
	});
var $jfmengels$elm_review$Review$Rule$withExpressionVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0.a;
		return $jfmengels$elm_review$Review$Rule$ModuleRuleSchema(
			_Utils_update(
				schema,
				{
					expressionVisitors: A2($elm$core$List$cons, visitor, schema.expressionVisitors)
				}));
	});
var $jfmengels$elm_review$Review$Rule$withImportVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0.a;
		return $jfmengels$elm_review$Review$Rule$ModuleRuleSchema(
			_Utils_update(
				schema,
				{
					importVisitors: A2($elm$core$List$cons, visitor, schema.importVisitors)
				}));
	});
var $author$project$NoEmptyText$rule = $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema(
	A2(
		$jfmengels$elm_review$Review$Rule$withExpressionVisitor,
		$author$project$NoEmptyText$expressionVisitor,
		A2(
			$jfmengels$elm_review$Review$Rule$withImportVisitor,
			$author$project$NoEmptyText$importVisitor,
			A2($jfmengels$elm_review$Review$Rule$newModuleRuleSchema, 'NoEmptyText', $author$project$NoEmptyText$NoImport))));
var $jfmengels$elm_review$Review$Project$Internal$Project = function (a) {
	return {$: 'Project', a: a};
};
var $jfmengels$elm_review$Review$Project$new = $jfmengels$elm_review$Review$Project$Internal$Project(
	{dependencies: $elm$core$Dict$empty, elmJson: $elm$core$Maybe$Nothing, moduleGraph: $elm$core$Maybe$Nothing, modules: $elm$core$Dict$empty, modulesThatFailedToParse: _List_Nil, readme: $elm$core$Maybe$Nothing});
var $jfmengels$elm_review$Review$Test$FailedRun = function (a) {
	return {$: 'FailedRun', a: a};
};
var $jfmengels$elm_review$Review$Test$SuccessfulRun = function (a) {
	return {$: 'SuccessfulRun', a: a};
};
var $jfmengels$elm_review$Review$Project$addFileThatFailedToParse = F2(
	function (_v0, _v1) {
		var path = _v0.path;
		var source = _v0.source;
		var project = _v1.a;
		return $jfmengels$elm_review$Review$Project$Internal$Project(
			_Utils_update(
				project,
				{
					modulesThatFailedToParse: A2(
						$elm$core$List$cons,
						{path: path, source: source},
						project.modulesThatFailedToParse)
				}));
	});
var $jfmengels$elm_review$Review$Project$positionAsInt = function (_v0) {
	var row = _v0.row;
	var column = _v0.column;
	return (row * 1000000) + column;
};
var $jfmengels$elm_review$Review$Project$reorderComments = function (ast) {
	return _Utils_update(
		ast,
		{
			comments: A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$range,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.start;
						},
						A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Project$positionAsInt, $elm$core$Basics$negate))),
				ast.comments)
		});
};
var $jfmengels$elm_review$Review$Project$sanitizeModule = function (module_) {
	return _Utils_update(
		module_,
		{
			ast: $jfmengels$elm_review$Review$Project$reorderComments(module_.ast)
		});
};
var $jfmengels$elm_review$Review$Project$addModuleToProject = F2(
	function (module_, _v0) {
		var project = _v0.a;
		return $jfmengels$elm_review$Review$Project$Internal$Project(
			_Utils_update(
				project,
				{
					modules: A3(
						$elm$core$Dict$insert,
						module_.path,
						$jfmengels$elm_review$Review$Project$sanitizeModule(module_),
						project.modules)
				}));
	});
var $stil4m$elm_syntax$Elm$Processing$ProcessContext = function (a) {
	return {$: 'ProcessContext', a: a};
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $stil4m$elm_syntax$Elm$Processing$addDependency = F2(
	function (dep, _v0) {
		var x = _v0.a;
		return $stil4m$elm_syntax$Elm$Processing$ProcessContext(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (k, v, d) {
						return A3($elm$core$Dict$insert, k, v, d);
					}),
				x,
				dep.interfaces));
	});
var $stil4m$elm_syntax$Elm$Interface$Operator = function (a) {
	return {$: 'Operator', a: a};
};
var $jfmengels$elm_review$Review$Dependencies$elmCore = {
	interfaces: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Basics']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'apL'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<|'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'apR'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|>'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'or'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '||'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'and'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '&&'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 3)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Non),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'eq'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '=='),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Non),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'neq'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '/='),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Non),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'lt'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Non),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'gt'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Non),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'le'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<='),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Non),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ge'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>='),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'append'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '++'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'add'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '+'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'sub'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '-'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'mul'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '*'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'fdiv'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '/'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'idiv'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '//'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'pow'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '^'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 8)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'composeL'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<<'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 9)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'composeR'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>>'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 9)
						})
					])),
				_Utils_Tuple2(
				_List_fromArray(
					['List']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'cons'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '::'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						})
					]))
			])),
	name: 'elm/core',
	version: '1.0.0'
};
var $jfmengels$elm_review$Review$Dependencies$elmParser = {
	interfaces: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Parser']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'keeper'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|='),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ignorer'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|.'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						})
					])),
				_Utils_Tuple2(
				_List_fromArray(
					['Parser', 'Advanced']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'keeper'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|='),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ignorer'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|.'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						})
					]))
			])),
	name: 'elm/parser',
	version: '1.0.0'
};
var $jfmengels$elm_review$Review$Dependencies$elmUrl = {
	interfaces: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Url', 'Parser']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Right),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'slash'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '</>'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
							_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'questionMark'),
							operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<?>'),
							precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 8)
						})
					]))
			])),
	name: 'elm/url',
	version: '1.0.0'
};
var $stil4m$elm_syntax$Elm$Processing$init = $stil4m$elm_syntax$Elm$Processing$ProcessContext($elm$core$Dict$empty);
var $jfmengels$elm_review$Review$Project$elmProcessContext = A2(
	$stil4m$elm_syntax$Elm$Processing$addDependency,
	$jfmengels$elm_review$Review$Dependencies$elmParser,
	A2(
		$stil4m$elm_syntax$Elm$Processing$addDependency,
		$jfmengels$elm_review$Review$Dependencies$elmUrl,
		A2($stil4m$elm_syntax$Elm$Processing$addDependency, $jfmengels$elm_review$Review$Dependencies$elmCore, $stil4m$elm_syntax$Elm$Processing$init)));
var $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4(
	function (a, b, c, d) {
		return {$: 'OperatorApplication', a: a, b: b, c: c, d: d};
	});
var $stil4m$elm_syntax$Elm$Processing$expressionOperators = function (_v0) {
	var expression = _v0.b;
	if (expression.$ === 'Operator') {
		var s = expression.a;
		return $elm$core$Maybe$Just(s);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm_community$list_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $stil4m$elm_syntax$Elm$Processing$findNextSplit = F2(
	function (dict, exps) {
		var prefix = A2(
			$elm_community$list_extra$List$Extra$takeWhile,
			function (x) {
				return _Utils_eq(
					$elm$core$Maybe$Nothing,
					A2(
						$elm$core$Maybe$andThen,
						function (key) {
							return A2($elm$core$Dict$get, key, dict);
						},
						$stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
			},
			exps);
		var suffix = A2(
			$elm$core$List$drop,
			$elm$core$List$length(prefix) + 1,
			exps);
		return A2(
			$elm$core$Maybe$map,
			function (x) {
				return _Utils_Tuple3(prefix, x, suffix);
			},
			A2(
				$elm$core$Maybe$andThen,
				function (x) {
					return A2($elm$core$Dict$get, x, dict);
				},
				A2(
					$elm$core$Maybe$andThen,
					$stil4m$elm_syntax$Elm$Processing$expressionOperators,
					$elm$core$List$head(
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(prefix),
							exps)))));
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $stil4m$elm_syntax$Elm$Processing$highestPrecedence = function (input) {
	var maxi = $elm$core$List$maximum(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$second,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.precedence;
					},
					$stil4m$elm_syntax$Elm$Syntax$Node$value)),
			input));
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function (m) {
					return A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.precedence;
								},
								A2(
									$elm$core$Basics$composeR,
									$stil4m$elm_syntax$Elm$Syntax$Node$value,
									$elm$core$Basics$eq(m)))),
						input);
				},
				maxi)));
};
var $stil4m$elm_syntax$Elm$Processing$fixApplication = F2(
	function (operators, expressions) {
		var ops = $stil4m$elm_syntax$Elm$Processing$highestPrecedence(
			A2(
				$elm$core$List$map,
				function (x) {
					return _Utils_Tuple2(
						x,
						A2(
							$elm$core$Maybe$withDefault,
							{
								direction: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, $stil4m$elm_syntax$Elm$Syntax$Infix$Left),
								_function: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'todo'),
								operator: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, x),
								precedence: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
							},
							A2($elm$core$Dict$get, x, operators)));
				},
				A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Processing$expressionOperators, expressions)));
		var fixExprs = function (exps) {
			if (exps.b && (!exps.b.b)) {
				var _v2 = exps.a;
				var x = _v2.b;
				return x;
			} else {
				return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(exps);
			}
		};
		var divideAndConquer = function (exps) {
			return $elm$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2(
				$elm$core$Maybe$withDefault,
				fixExprs(exps),
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var p = _v0.a;
						var infix = _v0.b;
						var s = _v0.c;
						return A4(
							$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							$stil4m$elm_syntax$Elm$Syntax$Node$value(infix.operator),
							$stil4m$elm_syntax$Elm$Syntax$Node$value(infix.direction),
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, p)),
								divideAndConquer(p)),
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, s)),
								divideAndConquer(s)));
					},
					A2($stil4m$elm_syntax$Elm$Processing$findNextSplit, ops, exps)));
		};
		return divideAndConquer(expressions);
	});
var $stil4m$elm_syntax$Elm$Inspector$Post = function (a) {
	return {$: 'Post', a: a};
};
var $stil4m$elm_syntax$Elm$Inspector$Continue = {$: 'Continue'};
var $stil4m$elm_syntax$Elm$Inspector$defaultConfig = {onCase: $stil4m$elm_syntax$Elm$Inspector$Continue, onDestructuring: $stil4m$elm_syntax$Elm$Inspector$Continue, onExpression: $stil4m$elm_syntax$Elm$Inspector$Continue, onFile: $stil4m$elm_syntax$Elm$Inspector$Continue, onFunction: $stil4m$elm_syntax$Elm$Inspector$Continue, onFunctionOrValue: $stil4m$elm_syntax$Elm$Inspector$Continue, onImport: $stil4m$elm_syntax$Elm$Inspector$Continue, onInfixDeclaration: $stil4m$elm_syntax$Elm$Inspector$Continue, onLambda: $stil4m$elm_syntax$Elm$Inspector$Continue, onLetBlock: $stil4m$elm_syntax$Elm$Inspector$Continue, onOperatorApplication: $stil4m$elm_syntax$Elm$Inspector$Continue, onPortDeclaration: $stil4m$elm_syntax$Elm$Inspector$Continue, onRecordAccess: $stil4m$elm_syntax$Elm$Inspector$Continue, onRecordUpdate: $stil4m$elm_syntax$Elm$Inspector$Continue, onSignature: $stil4m$elm_syntax$Elm$Inspector$Continue, onType: $stil4m$elm_syntax$Elm$Inspector$Continue, onTypeAlias: $stil4m$elm_syntax$Elm$Inspector$Continue, onTypeAnnotation: $stil4m$elm_syntax$Elm$Inspector$Continue};
var $stil4m$elm_syntax$Elm$Inspector$actionLambda = function (act) {
	switch (act.$) {
		case 'Skip':
			return F3(
				function (_v1, _v2, c) {
					return c;
				});
		case 'Continue':
			return F3(
				function (f, _v3, c) {
					return f(c);
				});
		case 'Pre':
			var g = act.a;
			return F3(
				function (f, x, c) {
					return f(
						A2(g, x, c));
				});
		case 'Post':
			var g = act.a;
			return F3(
				function (f, x, c) {
					return A2(
						g,
						x,
						f(c));
				});
		default:
			var g = act.a;
			return F3(
				function (f, x, c) {
					return A3(g, f, x, c);
				});
	}
};
var $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation = F3(
	function (config, typeAnnotation, context) {
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onTypeAnnotation,
			A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotationInner, config, typeAnnotation),
			typeAnnotation,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotationInner = F3(
	function (config, _v0, context) {
		var typeRefence = _v0.b;
		switch (typeRefence.$) {
			case 'Typed':
				var typeArgs = typeRefence.b;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					typeArgs);
			case 'Tupled':
				var typeAnnotations = typeRefence.a;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					typeAnnotations);
			case 'Record':
				var recordDefinition = typeRefence.a;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					A2(
						$elm$core$List$map,
						A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Tuple$second),
						recordDefinition));
			case 'GenericRecord':
				var recordDefinition = typeRefence.b;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					A2(
						$elm$core$List$map,
						A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Tuple$second),
						$stil4m$elm_syntax$Elm$Syntax$Node$value(recordDefinition)));
			case 'FunctionTypeAnnotation':
				var left = typeRefence.a;
				var right = typeRefence.b;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					_List_fromArray(
						[left, right]));
			case 'Unit':
				return context;
			default:
				return context;
		}
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectSignature = F3(
	function (config, node, context) {
		var signature = node.b;
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onSignature,
			A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation, config, signature.typeAnnotation),
			node,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectCase = F3(
	function (config, caze, context) {
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onCase,
			A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, caze.b),
			caze,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectDestructuring = F3(
	function (config, destructuring, context) {
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onDestructuring,
			function (c) {
				return A3(
					$stil4m$elm_syntax$Elm$Inspector$inspectExpression,
					config,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(destructuring).b,
					c);
			},
			destructuring,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectExpression = F3(
	function (config, node, context) {
		var expression = node.b;
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onExpression,
			A2($stil4m$elm_syntax$Elm$Inspector$inspectInnerExpression, config, expression),
			node,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectFunction = F3(
	function (config, node, context) {
		var _function = node.b;
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onFunction,
			A2(
				$elm$core$Basics$composeR,
				A2(
					$stil4m$elm_syntax$Elm$Inspector$inspectExpression,
					config,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression),
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Basics$identity,
					A2(
						$elm$core$Maybe$map,
						$stil4m$elm_syntax$Elm$Inspector$inspectSignature(config),
						_function.signature))),
			node,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectInnerExpression = F3(
	function (config, expression, context) {
		switch (expression.$) {
			case 'UnitExpr':
				return context;
			case 'FunctionOrValue':
				var moduleName = expression.a;
				var functionOrVal = expression.b;
				return A4(
					$stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onFunctionOrValue,
					$elm$core$Basics$identity,
					_Utils_Tuple2(moduleName, functionOrVal),
					context);
			case 'PrefixOperator':
				return context;
			case 'Operator':
				return context;
			case 'Hex':
				return context;
			case 'Integer':
				return context;
			case 'Floatable':
				return context;
			case 'Negation':
				var x = expression.a;
				return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, x, context);
			case 'Literal':
				return context;
			case 'CharLiteral':
				return context;
			case 'RecordAccess':
				var ex1 = expression.a;
				var key = expression.b;
				return A4(
					$stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onRecordAccess,
					A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, ex1),
					_Utils_Tuple2(ex1, key),
					context);
			case 'RecordAccessFunction':
				return context;
			case 'GLSLExpression':
				return context;
			case 'Application':
				var expressionList = expression.a;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					expressionList);
			case 'OperatorApplication':
				var op = expression.a;
				var dir = expression.b;
				var left = expression.c;
				var right = expression.d;
				return A4(
					$stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onOperatorApplication,
					function (base) {
						return A3(
							$elm$core$List$foldl,
							$stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
							base,
							_List_fromArray(
								[left, right]));
					},
					{direction: dir, left: left, operator: op, right: right},
					context);
			case 'IfBlock':
				var e1 = expression.a;
				var e2 = expression.b;
				var e3 = expression.c;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					_List_fromArray(
						[e1, e2, e3]));
			case 'TupledExpression':
				var expressionList = expression.a;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					expressionList);
			case 'ParenthesizedExpression':
				var inner = expression.a;
				return A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, inner, context);
			case 'LetExpression':
				var letBlock = expression.a;
				var next = A2(
					$elm$core$Basics$composeR,
					A2($stil4m$elm_syntax$Elm$Inspector$inspectLetDeclarations, config, letBlock.declarations),
					A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, letBlock.expression));
				return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onLetBlock, next, letBlock, context);
			case 'CaseExpression':
				var caseBlock = expression.a;
				var context2 = A3($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, caseBlock.expression, context);
				var context3 = A3(
					$elm$core$List$foldl,
					F2(
						function (a, b) {
							return A3($stil4m$elm_syntax$Elm$Inspector$inspectCase, config, a, b);
						}),
					context2,
					caseBlock.cases);
				return context3;
			case 'LambdaExpression':
				var lambda = expression.a;
				return A4(
					$stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onLambda,
					A2($stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, lambda.expression),
					lambda,
					context);
			case 'ListExpr':
				var expressionList = expression.a;
				return A3(
					$elm$core$List$foldl,
					$stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					expressionList);
			case 'RecordExpr':
				var expressionStringList = expression.a;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (a, b) {
							return A3(
								$stil4m$elm_syntax$Elm$Inspector$inspectExpression,
								config,
								$stil4m$elm_syntax$Elm$Syntax$Node$value(a).b,
								b);
						}),
					context,
					expressionStringList);
			default:
				var name = expression.a;
				var updates = expression.b;
				return A4(
					$stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onRecordUpdate,
					function (c) {
						return A3(
							$elm$core$List$foldl,
							F2(
								function (a, b) {
									return A3(
										$stil4m$elm_syntax$Elm$Inspector$inspectExpression,
										config,
										$stil4m$elm_syntax$Elm$Syntax$Node$value(a).b,
										b);
								}),
							c,
							updates);
					},
					_Utils_Tuple2(name, updates),
					context);
		}
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectLetDeclaration = F3(
	function (config, _v0, context) {
		var range = _v0.a;
		var declaration = _v0.b;
		if (declaration.$ === 'LetFunction') {
			var _function = declaration.a;
			return A3(
				$stil4m$elm_syntax$Elm$Inspector$inspectFunction,
				config,
				A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, _function),
				context);
		} else {
			var pattern = declaration.a;
			var expression = declaration.b;
			return A3(
				$stil4m$elm_syntax$Elm$Inspector$inspectDestructuring,
				config,
				A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					range,
					_Utils_Tuple2(pattern, expression)),
				context);
		}
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectLetDeclarations = F3(
	function (config, declarations, context) {
		return A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Inspector$inspectLetDeclaration(config),
			context,
			declarations);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectPortDeclaration = F3(
	function (config, signature, context) {
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onPortDeclaration,
			A2($stil4m$elm_syntax$Elm$Inspector$inspectSignature, config, signature),
			signature,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectValueConstructor = F3(
	function (config, _v0, context) {
		var valueConstructor = _v0.b;
		return A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
			context,
			valueConstructor._arguments);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectTypeInner = F3(
	function (config, typeDecl, context) {
		return A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Inspector$inspectValueConstructor(config),
			context,
			typeDecl.constructors);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectType = F3(
	function (config, tipe, context) {
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onType,
			A2(
				$stil4m$elm_syntax$Elm$Inspector$inspectTypeInner,
				config,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(tipe)),
			tipe,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectTypeAlias = F3(
	function (config, pair, context) {
		var typeAlias = pair.b;
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onTypeAlias,
			A2($stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation, config, typeAlias.typeAnnotation),
			pair,
			context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectDeclaration = F3(
	function (config, _v0, context) {
		var r = _v0.a;
		var declaration = _v0.b;
		switch (declaration.$) {
			case 'FunctionDeclaration':
				var _function = declaration.a;
				return A3(
					$stil4m$elm_syntax$Elm$Inspector$inspectFunction,
					config,
					A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, _function),
					context);
			case 'AliasDeclaration':
				var typeAlias = declaration.a;
				return A3(
					$stil4m$elm_syntax$Elm$Inspector$inspectTypeAlias,
					config,
					A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, typeAlias),
					context);
			case 'CustomTypeDeclaration':
				var typeDecl = declaration.a;
				return A3(
					$stil4m$elm_syntax$Elm$Inspector$inspectType,
					config,
					A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, typeDecl),
					context);
			case 'PortDeclaration':
				var signature = declaration.a;
				return A3(
					$stil4m$elm_syntax$Elm$Inspector$inspectPortDeclaration,
					config,
					A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, signature),
					context);
			case 'InfixDeclaration':
				var inf = declaration.a;
				return A4(
					$stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onInfixDeclaration,
					$elm$core$Basics$identity,
					A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, inf),
					context);
			default:
				var pattern = declaration.a;
				var expresion = declaration.b;
				return A3(
					$stil4m$elm_syntax$Elm$Inspector$inspectDestructuring,
					config,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						r,
						_Utils_Tuple2(pattern, expresion)),
					context);
		}
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectDeclarations = F3(
	function (config, declarations, context) {
		return A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Inspector$inspectDeclaration(config),
			context,
			declarations);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectImport = F3(
	function (config, imp, context) {
		return A4($stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onImport, $elm$core$Basics$identity, imp, context);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspectImports = F3(
	function (config, imports, context) {
		return A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Inspector$inspectImport(config),
			context,
			imports);
	});
var $stil4m$elm_syntax$Elm$Inspector$inspect = F3(
	function (config, file, context) {
		return A4(
			$stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onFile,
			A2(
				$elm$core$Basics$composeR,
				A2($stil4m$elm_syntax$Elm$Inspector$inspectImports, config, file.imports),
				A2($stil4m$elm_syntax$Elm$Inspector$inspectDeclarations, config, file.declarations)),
			file,
			context);
	});
var $stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange = F2(
	function (range, _v0) {
		var commentRange = _v0.a;
		var commentText = _v0.b;
		if (A2($elm$core$String$startsWith, '{-|', commentText)) {
			var functionStartRow = range.start.row;
			return _Utils_eq(commentRange.end.row + 1, functionStartRow);
		} else {
			return false;
		}
	});
var $stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration = F2(
	function (_v0, _v1) {
		var r1 = _v0.a;
		var _new = _v0.b;
		var r2 = _v1.a;
		var old = _v1.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r2,
			_Utils_eq(r1, r2) ? _new : old);
	});
var $stil4m$elm_syntax$Elm$Processing$Documentation$onFunction = F2(
	function (_v0, file) {
		var functionRange = _v0.a;
		var _function = _v0.b;
		var docs = A2(
			$elm$core$List$filter,
			$stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(functionRange),
			file.comments);
		var _v1 = $elm$core$List$head(docs);
		if (_v1.$ === 'Just') {
			var doc = _v1.a;
			var docRange = doc.a;
			var docString = doc.b;
			return _Utils_update(
				file,
				{
					comments: A2(
						$elm$core$List$filter,
						$elm$core$Basics$neq(doc),
						file.comments),
					declarations: A2(
						$elm$core$List$map,
						$stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								functionRange,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
									_Utils_update(
										_function,
										{
											documentation: $elm$core$Maybe$Just(
												A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
										})))),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var $stil4m$elm_syntax$Elm$Processing$Documentation$onType = F2(
	function (_v0, file) {
		var r = _v0.a;
		var customType = _v0.b;
		var docs = A2(
			$elm$core$List$filter,
			$stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(r),
			file.comments);
		var _v1 = $elm$core$List$head(docs);
		if (_v1.$ === 'Just') {
			var doc = _v1.a;
			var docRange = doc.a;
			var docString = doc.b;
			return _Utils_update(
				file,
				{
					comments: A2(
						$elm$core$List$filter,
						$elm$core$Basics$neq(doc),
						file.comments),
					declarations: A2(
						$elm$core$List$map,
						$stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
									_Utils_update(
										customType,
										{
											documentation: $elm$core$Maybe$Just(
												A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
										})))),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var $stil4m$elm_syntax$Elm$Processing$Documentation$onTypeAlias = F2(
	function (_v0, file) {
		var r = _v0.a;
		var typeAlias = _v0.b;
		var docs = A2(
			$elm$core$List$filter,
			$stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(r),
			file.comments);
		var _v1 = $elm$core$List$head(docs);
		if (_v1.$ === 'Just') {
			var doc = _v1.a;
			var docRange = doc.a;
			var docString = doc.b;
			return _Utils_update(
				file,
				{
					comments: A2(
						$elm$core$List$filter,
						$elm$core$Basics$neq(doc),
						file.comments),
					declarations: A2(
						$elm$core$List$map,
						$stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
									_Utils_update(
										typeAlias,
										{
											documentation: $elm$core$Maybe$Just(
												A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
										})))),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var $stil4m$elm_syntax$Elm$Processing$Documentation$postProcess = function (file) {
	return A3(
		$stil4m$elm_syntax$Elm$Inspector$inspect,
		_Utils_update(
			$stil4m$elm_syntax$Elm$Inspector$defaultConfig,
			{
				onFunction: $stil4m$elm_syntax$Elm$Inspector$Post($stil4m$elm_syntax$Elm$Processing$Documentation$onFunction),
				onType: $stil4m$elm_syntax$Elm$Inspector$Post($stil4m$elm_syntax$Elm$Processing$Documentation$onType),
				onTypeAlias: $stil4m$elm_syntax$Elm$Inspector$Post($stil4m$elm_syntax$Elm$Processing$Documentation$onTypeAlias)
			}),
		file,
		file);
};
var $stil4m$elm_syntax$Elm$Interface$operators = $elm$core$List$filterMap(
	function (i) {
		if (i.$ === 'Operator') {
			var o = i.a;
			return $elm$core$Maybe$Just(o);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$operator = function (t) {
	if (t.$ === 'InfixExpose') {
		var s = t.a;
		return $elm$core$Maybe$Just(s);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$operators = function (l) {
	return A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Syntax$Exposing$operator, l);
};
var $stil4m$elm_syntax$Elm$Processing$buildSingle = F2(
	function (imp, moduleIndex) {
		var _v0 = imp.exposingList;
		if (_v0.$ === 'Nothing') {
			return _List_Nil;
		} else {
			if (_v0.a.b.$ === 'All') {
				var _v1 = _v0.a;
				return A2(
					$elm$core$List$map,
					function (x) {
						return _Utils_Tuple2(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(x.operator),
							x);
					},
					$stil4m$elm_syntax$Elm$Interface$operators(
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2(
								$elm$core$Dict$get,
								$stil4m$elm_syntax$Elm$Syntax$Node$value(imp.moduleName),
								moduleIndex))));
			} else {
				var _v2 = _v0.a;
				var l = _v2.b.a;
				var selectedOperators = $stil4m$elm_syntax$Elm$Syntax$Exposing$operators(
					A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, l));
				return A2(
					$elm$core$List$filter,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Tuple$first,
						function (elem) {
							return A2($elm$core$List$member, elem, selectedOperators);
						}),
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(
								$stil4m$elm_syntax$Elm$Syntax$Node$value(x.operator),
								x);
						},
						$stil4m$elm_syntax$Elm$Interface$operators(
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								A2(
									$elm$core$Dict$get,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(imp.moduleName),
									moduleIndex)))));
			}
		}
	});
var $stil4m$elm_syntax$Elm$DefaultImports$defaults = _List_fromArray(
	[
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Basics']))
	},
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'List', $elm$core$Maybe$Nothing))),
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('::'))
						])))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['List']))
	},
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Maybe',
									$elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Maybe']))
	},
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Result',
									$elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Result']))
	},
		{
		exposingList: $elm$core$Maybe$Nothing,
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['String']))
	},
		{
		exposingList: $elm$core$Maybe$Nothing,
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Tuple']))
	},
		{
		exposingList: $elm$core$Maybe$Nothing,
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Debug']))
	},
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Program', $elm$core$Maybe$Nothing)))
						])))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform']))
	},
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Cmd', $elm$core$Maybe$Nothing))),
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('!'))
						])))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Cmd']))
	},
		{
		exposingList: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Sub', $elm$core$Maybe$Nothing)))
						])))),
		moduleAlias: $elm$core$Maybe$Nothing,
		moduleName: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Sub']))
	}
	]);
var $stil4m$elm_syntax$Elm$RawFile$imports = function (_v0) {
	var file = _v0.a;
	return A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, file.imports);
};
var $stil4m$elm_syntax$Elm$Processing$tableForFile = F2(
	function (rawFile, _v0) {
		var moduleIndex = _v0.a;
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$concatMap,
				function (a) {
					return A2($stil4m$elm_syntax$Elm$Processing$buildSingle, a, moduleIndex);
				},
				_Utils_ap(
					$stil4m$elm_syntax$Elm$DefaultImports$defaults,
					$stil4m$elm_syntax$Elm$RawFile$imports(rawFile))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Node$map = F2(
	function (f, _v0) {
		var r = _v0.a;
		var a = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r,
			f(a));
	});
var $stil4m$elm_syntax$Elm$Processing$visitExpression = F3(
	function (visitor, context, expression) {
		var inner = A2($stil4m$elm_syntax$Elm$Processing$visitExpressionInner, visitor, context);
		return A3(
			A2(
				$elm$core$Maybe$withDefault,
				F3(
					function (_v4, nest, expr) {
						return nest(expr);
					}),
				visitor),
			context,
			inner,
			expression);
	});
var $stil4m$elm_syntax$Elm$Processing$visitExpressionInner = F3(
	function (visitor, context, _v2) {
		var range = _v2.a;
		var expression = _v2.b;
		var subVisit = A2($stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context);
		return function (newExpr) {
			return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, newExpr);
		}(
			function () {
				switch (expression.$) {
					case 'Application':
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(
							A2($elm$core$List$map, subVisit, expressionList));
					case 'OperatorApplication':
						var op = expression.a;
						var dir = expression.b;
						var left = expression.c;
						var right = expression.d;
						return A4(
							$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							op,
							dir,
							subVisit(left),
							subVisit(right));
					case 'IfBlock':
						var e1 = expression.a;
						var e2 = expression.b;
						var e3 = expression.c;
						return A3(
							$stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock,
							subVisit(e1),
							subVisit(e2),
							subVisit(e3));
					case 'TupledExpression':
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2($elm$core$List$map, subVisit, expressionList));
					case 'ParenthesizedExpression':
						var expr1 = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
							subVisit(expr1));
					case 'LetExpression':
						var letBlock = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(
							{
								declarations: A3($stil4m$elm_syntax$Elm$Processing$visitLetDeclarations, visitor, context, letBlock.declarations),
								expression: subVisit(letBlock.expression)
							});
					case 'CaseExpression':
						var caseBlock = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(
							{
								cases: A2(
									$elm$core$List$map,
									$elm$core$Tuple$mapSecond(subVisit),
									caseBlock.cases),
								expression: subVisit(caseBlock.expression)
							});
					case 'LambdaExpression':
						var lambda = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
							_Utils_update(
								lambda,
								{
									expression: subVisit(lambda.expression)
								}));
					case 'RecordExpr':
						var expressionStringList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$elm$core$Tuple$mapSecond(subVisit)),
								expressionStringList));
					case 'ListExpr':
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(
							A2($elm$core$List$map, subVisit, expressionList));
					case 'RecordUpdateExpression':
						var name = expression.a;
						var updates = expression.b;
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression,
							name,
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$elm$core$Tuple$mapSecond(subVisit)),
								updates));
					default:
						return expression;
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitFunctionDecl = F3(
	function (visitor, context, _function) {
		var newFunctionDeclaration = A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$map,
			A2($stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration, visitor, context),
			_function.declaration);
		return _Utils_update(
			_function,
			{declaration: newFunctionDeclaration});
	});
var $stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration = F3(
	function (visitor, context, functionDeclaration) {
		var newExpression = A3($stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context, functionDeclaration.expression);
		return _Utils_update(
			functionDeclaration,
			{expression: newExpression});
	});
var $stil4m$elm_syntax$Elm$Processing$visitLetDeclaration = F3(
	function (visitor, context, _v0) {
		var range = _v0.a;
		var declaration = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				if (declaration.$ === 'LetFunction') {
					var _function = declaration.a;
					return $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction(
						A3($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, visitor, context, _function));
				} else {
					var pattern = declaration.a;
					var expression = declaration.b;
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring,
						pattern,
						A3($stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context, expression));
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitLetDeclarations = F3(
	function (visitor, context, declarations) {
		return A2(
			$elm$core$List$map,
			A2($stil4m$elm_syntax$Elm$Processing$visitLetDeclaration, visitor, context),
			declarations);
	});
var $stil4m$elm_syntax$Elm$Processing$visitDeclaration = F3(
	function (visitor, context, _v0) {
		var range = _v0.a;
		var declaration = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				if (declaration.$ === 'FunctionDeclaration') {
					var _function = declaration.a;
					return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
						A3($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, visitor, context, _function));
				} else {
					return declaration;
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitDeclarations = F3(
	function (visitor, context, declarations) {
		return A2(
			$elm$core$List$map,
			A2($stil4m$elm_syntax$Elm$Processing$visitDeclaration, visitor, context),
			declarations);
	});
var $stil4m$elm_syntax$Elm$Processing$visit = F3(
	function (visitor, context, file) {
		var newDeclarations = A3($stil4m$elm_syntax$Elm$Processing$visitDeclarations, visitor, context, file.declarations);
		return _Utils_update(
			file,
			{declarations: newDeclarations});
	});
var $stil4m$elm_syntax$Elm$Processing$process = F2(
	function (processContext, rawFile) {
		var file = rawFile.a;
		var table = A2($stil4m$elm_syntax$Elm$Processing$tableForFile, rawFile, processContext);
		var operatorFixed = A3(
			$stil4m$elm_syntax$Elm$Processing$visit,
			$elm$core$Maybe$Just(
				F3(
					function (context, inner, expression) {
						return inner(
							function () {
								if (expression.b.$ === 'Application') {
									var r = expression.a;
									var args = expression.b.a;
									return A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										r,
										A2($stil4m$elm_syntax$Elm$Processing$fixApplication, context, args));
								} else {
									return expression;
								}
							}());
					})),
			table,
			file);
		var documentationFixed = $stil4m$elm_syntax$Elm$Processing$Documentation$postProcess(operatorFixed);
		return documentationFixed;
	});
var $jfmengels$elm_review$Review$Project$parseSource = function (source) {
	return A2(
		$elm$core$Result$map,
		$stil4m$elm_syntax$Elm$Processing$process($jfmengels$elm_review$Review$Project$elmProcessContext),
		A2(
			$elm$core$Result$mapError,
			$elm$core$Basics$always(_Utils_Tuple0),
			$stil4m$elm_syntax$Elm$Parser$parse(source)));
};
var $jfmengels$elm_review$Vendor$Graph$Graph = function (a) {
	return {$: 'Graph', a: a};
};
var $jfmengels$elm_review$Vendor$Graph$NodeContext = F3(
	function (node, incoming, outgoing) {
		return {incoming: incoming, node: node, outgoing: outgoing};
	});
var $jfmengels$elm_review$Vendor$IntDict$Empty = {$: 'Empty'};
var $jfmengels$elm_review$Vendor$IntDict$empty = $jfmengels$elm_review$Vendor$IntDict$Empty;
var $jfmengels$elm_review$Vendor$IntDict$Inner = function (a) {
	return {$: 'Inner', a: a};
};
var $jfmengels$elm_review$Vendor$IntDict$size = function (dict) {
	switch (dict.$) {
		case 'Empty':
			return 0;
		case 'Leaf':
			return 1;
		default:
			var i = dict.a;
			return i.size;
	}
};
var $jfmengels$elm_review$Vendor$IntDict$inner = F3(
	function (p, l, r) {
		var _v0 = _Utils_Tuple2(l, r);
		if (_v0.a.$ === 'Empty') {
			var _v1 = _v0.a;
			return r;
		} else {
			if (_v0.b.$ === 'Empty') {
				var _v2 = _v0.b;
				return l;
			} else {
				return $jfmengels$elm_review$Vendor$IntDict$Inner(
					{
						left: l,
						prefix: p,
						right: r,
						size: $jfmengels$elm_review$Vendor$IntDict$size(l) + $jfmengels$elm_review$Vendor$IntDict$size(r)
					});
			}
		}
	});
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $jfmengels$elm_review$Vendor$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var $jfmengels$elm_review$Vendor$IntDict$signBit = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(-1);
var $jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet = function (p) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Bitwise$xor($jfmengels$elm_review$Vendor$IntDict$signBit),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Bitwise$and(p.branchingBit),
			$elm$core$Basics$neq(0)));
};
var $jfmengels$elm_review$Vendor$IntDict$higherBitMask = function (branchingBit) {
	return branchingBit ^ (~(branchingBit - 1));
};
var $jfmengels$elm_review$Vendor$IntDict$lcp = F2(
	function (x, y) {
		var branchingBit = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(x ^ y);
		var mask = $jfmengels$elm_review$Vendor$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {branchingBit: branchingBit, prefixBits: prefixBits};
	});
var $jfmengels$elm_review$Vendor$IntDict$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $jfmengels$elm_review$Vendor$IntDict$leaf = F2(
	function (k, v) {
		return $jfmengels$elm_review$Vendor$IntDict$Leaf(
			{key: k, value: v});
	});
var $jfmengels$elm_review$Vendor$IntDict$prefixMatches = F2(
	function (p, n) {
		return _Utils_eq(
			n & $jfmengels$elm_review$Vendor$IntDict$higherBitMask(p.branchingBit),
			p.prefixBits);
	});
var $jfmengels$elm_review$Vendor$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_v2, _v3) {
				var k1 = _v2.a;
				var l = _v2.b;
				var k2 = _v3.a;
				var r = _v3.b;
				var prefix = A2($jfmengels$elm_review$Vendor$IntDict$lcp, k1, k2);
				return A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, prefix, k2) ? A3($jfmengels$elm_review$Vendor$IntDict$inner, prefix, l, r) : A3($jfmengels$elm_review$Vendor$IntDict$inner, prefix, r, l);
			});
		var alteredNode = function (mv) {
			var _v1 = alter(mv);
			if (_v1.$ === 'Just') {
				var v = _v1.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$leaf, key, v);
			} else {
				return $jfmengels$elm_review$Vendor$IntDict$empty;
			}
		};
		switch (dict.$) {
			case 'Empty':
				return alteredNode($elm$core$Maybe$Nothing);
			case 'Leaf':
				var l = dict.a;
				return _Utils_eq(l.key, key) ? alteredNode(
					$elm$core$Maybe$Just(l.value)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(l.key, dict));
			default:
				var i = dict.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$prefixMatches, i.prefix, key) ? (A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, i.prefix, key) ? A3(
					$jfmengels$elm_review$Vendor$IntDict$inner,
					i.prefix,
					i.left,
					A3($jfmengels$elm_review$Vendor$IntDict$update, key, alter, i.right)) : A3(
					$jfmengels$elm_review$Vendor$IntDict$inner,
					i.prefix,
					A3($jfmengels$elm_review$Vendor$IntDict$update, key, alter, i.left),
					i.right)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(i.prefix.prefixBits, dict));
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			$jfmengels$elm_review$Vendor$IntDict$update,
			key,
			$elm$core$Basics$always(
				$elm$core$Maybe$Just(value)),
			dict);
	});
var $jfmengels$elm_review$Vendor$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return $elm$core$Maybe$Nothing;
				case 'Leaf':
					var l = dict.a;
					return _Utils_eq(l.key, key) ? $elm$core$Maybe$Just(l.value) : $elm$core$Maybe$Nothing;
				default:
					var i = dict.a;
					if (!A2($jfmengels$elm_review$Vendor$IntDict$prefixMatches, i.prefix, key)) {
						return $elm$core$Maybe$Nothing;
					} else {
						if (A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, i.prefix, key)) {
							var $temp$key = key,
								$temp$dict = i.right;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						} else {
							var $temp$key = key,
								$temp$dict = i.left;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						}
					}
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$member = F2(
	function (key, dict) {
		var _v0 = A2($jfmengels$elm_review$Vendor$IntDict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$fromNodesAndEdges = F2(
	function (nodes_, edges_) {
		var nodeRep = A3(
			$elm$core$List$foldl,
			function (n) {
				return A2(
					$jfmengels$elm_review$Vendor$IntDict$insert,
					n.id,
					A3($jfmengels$elm_review$Vendor$Graph$NodeContext, n, $jfmengels$elm_review$Vendor$IntDict$empty, $jfmengels$elm_review$Vendor$IntDict$empty));
			},
			$jfmengels$elm_review$Vendor$IntDict$empty,
			nodes_);
		var addEdge = F2(
			function (edge, rep) {
				var updateOutgoing = function (ctx) {
					return _Utils_update(
						ctx,
						{
							outgoing: A3($jfmengels$elm_review$Vendor$IntDict$insert, edge.to, edge.label, ctx.outgoing)
						});
				};
				var updateIncoming = function (ctx) {
					return _Utils_update(
						ctx,
						{
							incoming: A3($jfmengels$elm_review$Vendor$IntDict$insert, edge.from, edge.label, ctx.incoming)
						});
				};
				return A3(
					$jfmengels$elm_review$Vendor$IntDict$update,
					edge.to,
					$elm$core$Maybe$map(updateIncoming),
					A3(
						$jfmengels$elm_review$Vendor$IntDict$update,
						edge.from,
						$elm$core$Maybe$map(updateOutgoing),
						rep));
			});
		var addEdgeIfValid = F2(
			function (edge, rep) {
				return (A2($jfmengels$elm_review$Vendor$IntDict$member, edge.from, rep) && A2($jfmengels$elm_review$Vendor$IntDict$member, edge.to, rep)) ? A2(addEdge, edge, rep) : rep;
			});
		return $jfmengels$elm_review$Vendor$Graph$Graph(
			A3($elm$core$List$foldl, addEdgeIfValid, nodeRep, edges_));
	});
var $stil4m$elm_syntax$Elm$Syntax$Module$moduleName = function (m) {
	switch (m.$) {
		case 'NormalModule':
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.moduleName);
		case 'PortModule':
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.moduleName);
		default:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.moduleName);
	}
};
var $jfmengels$elm_review$Review$Project$Internal$getModuleName = function (module_) {
	return $stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(module_.ast.moduleDefinition));
};
var $jfmengels$elm_review$Vendor$Graph$Edge = F3(
	function (from, to, label) {
		return {from: from, label: label, to: to};
	});
var $jfmengels$elm_review$Vendor$Graph$Node = F2(
	function (id, label) {
		return {id: id, label: label};
	});
var $jfmengels$elm_review$Review$Project$Internal$importedModules = function (module_) {
	return A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			$stil4m$elm_syntax$Elm$Syntax$Node$value,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.moduleName;
				},
				$stil4m$elm_syntax$Elm$Syntax$Node$value)),
		module_.ast.imports);
};
var $jfmengels$elm_review$Review$Project$Internal$nodesAndEdges = F3(
	function (getModuleId, module_, moduleId) {
		var moduleName = $jfmengels$elm_review$Review$Project$Internal$getModuleName(module_);
		return _Utils_Tuple2(
			A2($jfmengels$elm_review$Vendor$Graph$Node, moduleId, moduleName),
			A2(
				$elm$core$List$map,
				function (importedModuleId) {
					return A3($jfmengels$elm_review$Vendor$Graph$Edge, importedModuleId, moduleId, _Utils_Tuple0);
				},
				A2(
					$elm$core$List$filterMap,
					getModuleId,
					$jfmengels$elm_review$Review$Project$Internal$importedModules(module_))));
	});
var $jfmengels$elm_review$Review$Project$Internal$buildModuleGraph = function (mods) {
	var moduleIds = A3(
		$elm$core$List$foldl,
		F2(
			function (_v4, dict) {
				var index = _v4.a;
				var module_ = _v4.b;
				return A3(
					$elm$core$Dict$insert,
					$jfmengels$elm_review$Review$Project$Internal$getModuleName(module_),
					index,
					dict);
			}),
		$elm$core$Dict$empty,
		A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, mods));
	var getModuleId = function (moduleName) {
		getModuleId:
		while (true) {
			var _v0 = A2($elm$core$Dict$get, moduleName, moduleIds);
			if (_v0.$ === 'Just') {
				var moduleId = _v0.a;
				return moduleId;
			} else {
				var $temp$moduleName = moduleName;
				moduleName = $temp$moduleName;
				continue getModuleId;
			}
		}
	};
	var _v1 = A3(
		$elm$core$List$foldl,
		F2(
			function (module_, _v2) {
				var resNodes = _v2.a;
				var resEdges = _v2.b;
				var _v3 = A3(
					$jfmengels$elm_review$Review$Project$Internal$nodesAndEdges,
					function (moduleName) {
						return A2($elm$core$Dict$get, moduleName, moduleIds);
					},
					module_,
					getModuleId(
						$jfmengels$elm_review$Review$Project$Internal$getModuleName(module_)));
				var moduleNode = _v3.a;
				var modulesEdges = _v3.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, moduleNode, resNodes),
					$elm$core$List$concat(
						_List_fromArray(
							[modulesEdges, resEdges])));
			}),
		_Utils_Tuple2(_List_Nil, _List_Nil),
		mods);
	var nodes = _v1.a;
	var edges = _v1.b;
	return A2($jfmengels$elm_review$Vendor$Graph$fromNodesAndEdges, nodes, edges);
};
var $jfmengels$elm_review$Review$Project$precomputeModuleGraph = function (project) {
	var p = project.a;
	var _v0 = p.moduleGraph;
	if (_v0.$ === 'Just') {
		return project;
	} else {
		return $jfmengels$elm_review$Review$Project$Internal$Project(
			_Utils_update(
				p,
				{
					moduleGraph: $elm$core$Maybe$Just(
						$jfmengels$elm_review$Review$Project$Internal$buildModuleGraph(
							$elm$core$Dict$values(p.modules)))
				}));
	}
};
var $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded = function (project) {
	var p = project.a;
	var _v0 = p.moduleGraph;
	if (_v0.$ === 'Just') {
		return $jfmengels$elm_review$Review$Project$precomputeModuleGraph(project);
	} else {
		return project;
	}
};
var $jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse = F2(
	function (path, _v0) {
		var project = _v0.a;
		return $jfmengels$elm_review$Review$Project$Internal$Project(
			_Utils_update(
				project,
				{
					modulesThatFailedToParse: A2(
						$elm$core$List$filter,
						function (file) {
							return !_Utils_eq(file.path, path);
						},
						project.modulesThatFailedToParse)
				}));
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $jfmengels$elm_review$Review$Project$removeFileFromProject = F2(
	function (path, _v0) {
		var project = _v0.a;
		return A2(
			$jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse,
			path,
			$jfmengels$elm_review$Review$Project$Internal$Project(
				_Utils_update(
					project,
					{
						modules: A2($elm$core$Dict$remove, path, project.modules)
					})));
	});
var $jfmengels$elm_review$Review$Project$addModule = F2(
	function (_v0, project) {
		var path = _v0.path;
		var source = _v0.source;
		var _v1 = $jfmengels$elm_review$Review$Project$parseSource(source);
		if (_v1.$ === 'Ok') {
			var ast = _v1.a;
			return $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded(
				A2(
					$jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse,
					path,
					A2(
						$jfmengels$elm_review$Review$Project$addModuleToProject,
						{ast: ast, path: path, source: source},
						project)));
		} else {
			return $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded(
				A2(
					$jfmengels$elm_review$Review$Project$addFileThatFailedToParse,
					{path: path, source: source},
					A2($jfmengels$elm_review$Review$Project$removeFileFromProject, path, project)));
		}
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$duplicateModuleName = function (moduleName) {
	return 'DUPLICATE MODULE NAMES\n\nI found several modules named `' + (A2($elm$core$String$join, '.', moduleName) + '` in the test source codes.\n\nI expect all modules to be able to exist together in the same project,\nbut having several modules with the same name is not allowed by the Elm\ncompiler.\n\nPlease rename the modules so that they all have different names.');
};
var $elm$core$String$indexes = _String_indexes;
var $jfmengels$elm_review$Vendor$ListExtra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $jfmengels$elm_review$Review$Test$FailureMessage$positionAsRange = F3(
	function (sourceCode, under, position) {
		var linesInUnder = $elm$core$String$lines(under);
		var linesBeforeAndIncludingPosition = $elm$core$String$lines(
			A3($elm$core$String$slice, 0, position, sourceCode));
		var startColumn = 1 + $elm$core$String$length(
			A2(
				$elm$core$Maybe$withDefault,
				'',
				$jfmengels$elm_review$Vendor$ListExtra$last(linesBeforeAndIncludingPosition)));
		var startRow = $elm$core$List$length(linesBeforeAndIncludingPosition);
		var endRow = (startRow + $elm$core$List$length(linesInUnder)) - 1;
		var endColumn = _Utils_eq(startRow, endRow) ? (startColumn + $elm$core$String$length(under)) : (1 + $elm$core$String$length(
			A2(
				$elm$core$Maybe$withDefault,
				'',
				$jfmengels$elm_review$Vendor$ListExtra$last(linesInUnder))));
		return {
			end: {column: endColumn, row: endRow},
			start: {column: startColumn, row: startRow}
		};
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$listOccurrencesAsLocations = F3(
	function (sourceCode, under, occurrences) {
		return A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function (occurrence) {
					return '  - ' + $jfmengels$elm_review$Review$Test$FailureMessage$rangeAsString(
						A3($jfmengels$elm_review$Review$Test$FailureMessage$positionAsRange, sourceCode, under, occurrence));
				},
				occurrences));
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$locationIsAmbiguousInSourceCode = F4(
	function (sourceCode, error, under, occurrencesInSourceCode) {
		return 'AMBIGUOUS ERROR LOCATION\n\nYour test passes, but where the message appears is ambiguous.\n\nYou are looking for the following error message:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
			$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\nand expecting to see it under:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatSourceCode(under) + ('\n\nI found ' + ($elm$core$String$fromInt(
			$elm$core$List$length(occurrencesInSourceCode)) + (' locations where that code appeared. Please use\n`Review.Test.atExactly` to make the part you were targetting unambiguous.\n\nTip: I found them at:\n' + A3($jfmengels$elm_review$Review$Test$FailureMessage$listOccurrencesAsLocations, sourceCode, under, occurrencesInSourceCode)))))));
	});
var $jfmengels$elm_review$Review$Test$checkIfLocationIsAmbiguousInSourceCode = F3(
	function (sourceCode, error_, under) {
		var occurrencesInSourceCode = A2($elm$core$String$indexes, under, sourceCode);
		return A2(
			$elm_explorations$test$Expect$true,
			A4($jfmengels$elm_review$Review$Test$FailureMessage$locationIsAmbiguousInSourceCode, sourceCode, error_, under, occurrencesInSourceCode),
			$elm$core$List$length(occurrencesInSourceCode) === 1);
	});
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $jfmengels$elm_review$Review$Test$getCodeAtLocationInSourceCode = function (sourceCode) {
	var lines = $elm$core$Array$fromList(
		$elm$core$String$lines(sourceCode));
	return function (_v0) {
		var start = _v0.start;
		var end = _v0.end;
		if (_Utils_eq(start.row, end.row)) {
			return A2(
				$elm$core$Maybe$map,
				A2($elm$core$String$slice, start.column - 1, end.column - 1),
				A2($elm$core$Array$get, start.row - 1, lines));
		} else {
			var lastLine = function () {
				var _v2 = A2($elm$core$Array$get, end.row - 1, lines);
				if (_v2.$ === 'Just') {
					var str = _v2.a;
					return A2($elm$core$String$left, end.column, str);
				} else {
					return '';
				}
			}();
			var firstLine = function () {
				var _v1 = A2($elm$core$Array$get, start.row - 1, lines);
				if (_v1.$ === 'Just') {
					var str = _v1.a;
					return A2($elm$core$String$dropLeft, start.column - 1, str);
				} else {
					return '';
				}
			}();
			return $elm$core$Maybe$Just(
				A2(
					$elm$core$String$join,
					'\n',
					_List_fromArray(
						[
							firstLine,
							A2(
							$elm$core$String$join,
							'\n',
							$elm$core$Array$toList(
								A3($elm$core$Array$slice, start.row, end.row - 1, lines))),
							lastLine
						])));
		}
	};
};
var $jfmengels$elm_review$Review$Test$codeInspectorForSource = F2(
	function (isModule, source) {
		return {
			checkIfLocationIsAmbiguous: $jfmengels$elm_review$Review$Test$checkIfLocationIsAmbiguousInSourceCode(source),
			getCodeAtLocation: $jfmengels$elm_review$Review$Test$getCodeAtLocationInSourceCode(source),
			isModule: isModule,
			source: source
		};
	});
var $jfmengels$elm_review$Review$Rule$errorFilePath = function (_v0) {
	var err = _v0.a;
	return err.filePath;
};
var $jfmengels$elm_review$Review$Test$elmJsonRunResult = F2(
	function (errors, project) {
		var _v0 = $jfmengels$elm_review$Review$Project$elmJson(project);
		if (_v0.$ === 'Just') {
			var elmJsonData = _v0.a;
			var _v1 = A2(
				$elm$core$List$filter,
				function (error_) {
					return _Utils_eq(
						$jfmengels$elm_review$Review$Rule$errorFilePath(error_),
						elmJsonData.path);
				},
				errors);
			if (!_v1.b) {
				return _List_Nil;
			} else {
				var errorsForElmJson = _v1;
				return _List_fromArray(
					[
						{
						errors: errorsForElmJson,
						inspector: A2($jfmengels$elm_review$Review$Test$codeInspectorForSource, false, elmJsonData.raw),
						moduleName: elmJsonData.path
					}
					]);
			}
		} else {
			return _List_Nil;
		}
	});
var $jfmengels$elm_review$Vendor$ListExtra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Test$findDuplicateModuleNames = F2(
	function (previousModuleNames, modules) {
		findDuplicateModuleNames:
		while (true) {
			if (!modules.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var ast = modules.a.ast;
				var restOfModules = modules.b;
				var moduleName = $stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(ast.moduleDefinition));
				if (A2($elm$core$Set$member, moduleName, previousModuleNames)) {
					return $elm$core$Maybe$Just(moduleName);
				} else {
					var $temp$previousModuleNames = A2($elm$core$Set$insert, moduleName, previousModuleNames),
						$temp$modules = restOfModules;
					previousModuleNames = $temp$previousModuleNames;
					modules = $temp$modules;
					continue findDuplicateModuleNames;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$globalErrorInTest = function (error) {
	return 'GLOBAL ERROR IN SOURCE CODE\n\nI found a global error in the project you provided for this test:\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$wrapInQuotes(
		$jfmengels$elm_review$Review$Rule$errorMessage(error)) + ('\n\n  ' + ($jfmengels$elm_review$Review$Test$FailureMessage$formatDetails(
		$jfmengels$elm_review$Review$Rule$errorDetails(error)) + '\n\n`elm-review` would fail with this error if the project to be reviewed had\nthe same issue. Please fix this issue in your test.\n')));
};
var $jfmengels$elm_review$Review$Test$indexOf = F2(
	function (elementToFind, aList) {
		if (!aList.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = aList.a;
			var rest = aList.b;
			return _Utils_eq(a, elementToFind) ? $elm$core$Maybe$Just(0) : A2(
				$elm$core$Maybe$map,
				$elm$core$Basics$add(1),
				A2($jfmengels$elm_review$Review$Test$indexOf, elementToFind, rest));
		}
	});
var $jfmengels$elm_review$Review$Test$FailureMessage$missingSources = 'MISSING SOURCES\n\nYou used `runOnModules` or `runOnModulesWithProjectData` with an empty list\nof sources files.\n\nI need sources to reviewing, because reviewing an empty project does not\nmake much sense to me.';
var $jfmengels$elm_review$Review$Test$compareRange = F2(
	function (a, b) {
		return (_Utils_cmp(a.start.row, b.start.row) < 0) ? $elm$core$Basics$LT : ((_Utils_cmp(a.start.row, b.start.row) > 0) ? $elm$core$Basics$GT : ((_Utils_cmp(a.start.column, b.start.column) < 0) ? $elm$core$Basics$LT : ((_Utils_cmp(a.start.column, b.start.column) > 0) ? $elm$core$Basics$GT : ((_Utils_cmp(a.end.row, b.end.row) < 0) ? $elm$core$Basics$LT : ((_Utils_cmp(a.end.row, b.end.row) > 0) ? $elm$core$Basics$GT : ((_Utils_cmp(a.end.column, b.end.column) < 0) ? $elm$core$Basics$LT : ((_Utils_cmp(a.end.column, b.end.column) > 0) ? $elm$core$Basics$GT : $elm$core$Basics$EQ)))))));
	});
var $jfmengels$elm_review$Review$Test$compareErrorPositions = F2(
	function (a, b) {
		return A2(
			$jfmengels$elm_review$Review$Test$compareRange,
			$jfmengels$elm_review$Review$Rule$errorRange(a),
			$jfmengels$elm_review$Review$Rule$errorRange(b));
	});
var $jfmengels$elm_review$Review$Test$moduleToRunResult = F2(
	function (errors, projectModule) {
		return {
			errors: A2(
				$elm$core$List$sortWith,
				$jfmengels$elm_review$Review$Test$compareErrorPositions,
				A2(
					$elm$core$List$filter,
					function (error_) {
						return _Utils_eq(
							$jfmengels$elm_review$Review$Rule$errorFilePath(error_),
							projectModule.path);
					},
					errors)),
			inspector: A2($jfmengels$elm_review$Review$Test$codeInspectorForSource, true, projectModule.source),
			moduleName: A2(
				$elm$core$String$join,
				'.',
				$stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(projectModule.ast.moduleDefinition)))
		};
	});
var $jfmengels$elm_review$Review$Project$modulesThatFailedToParse = function (_v0) {
	var project = _v0.a;
	return project.modulesThatFailedToParse;
};
var $jfmengels$elm_review$Review$Test$FailureMessage$parsingFailure = F2(
	function (isOnlyFile, _v0) {
		var index = _v0.index;
		var source = _v0.source;
		var title = 'TEST SOURCE CODE PARSING ERROR';
		var hint = 'Hint: Maybe you forgot to add the module definition at the top, like:\n\n  `module A exposing (..)`';
		var details = isOnlyFile ? 'I could not parse the test source code, because it was not valid Elm code.' : ('I could not parse one of the test source codes, because it was not valid\nElm code.\n\nThe source code in question is the one at index ' + ($elm$core$String$fromInt(index) + (' starting with:\n\n  `' + (A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$take,
				1,
				A2(
					$elm$core$String$split,
					'\n',
					$elm$core$String$trim(source)))) + '`'))));
		return title + ('\n\n' + (details + ('\n\n' + hint)));
	});
var $jfmengels$elm_review$Review$Test$readmeRunResult = F2(
	function (errors, project) {
		var _v0 = $jfmengels$elm_review$Review$Project$readme(project);
		if (_v0.$ === 'Just') {
			var readme = _v0.a;
			var _v1 = A2(
				$elm$core$List$filter,
				function (error_) {
					return _Utils_eq(
						$jfmengels$elm_review$Review$Rule$errorFilePath(error_),
						readme.path);
				},
				errors);
			if (!_v1.b) {
				return _List_Nil;
			} else {
				var errorsForElmJson = _v1;
				return _List_fromArray(
					[
						{
						errors: errorsForElmJson,
						inspector: A2($jfmengels$elm_review$Review$Test$codeInspectorForSource, false, readme.content),
						moduleName: readme.path
					}
					]);
			}
		} else {
			return _List_Nil;
		}
	});
var $jfmengels$elm_review$Review$Error$Global = {$: 'Global'};
var $jfmengels$elm_review$Review$Error$ReviewError = function (a) {
	return {$: 'ReviewError', a: a};
};
var $jfmengels$elm_review$Vendor$Graph$AcyclicGraph = F2(
	function (a, b) {
		return {$: 'AcyclicGraph', a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$findMin = function (dict) {
	findMin:
	while (true) {
		switch (dict.$) {
			case 'Empty':
				return $elm$core$Maybe$Nothing;
			case 'Leaf':
				var l = dict.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(l.key, l.value));
			default:
				var i = dict.a;
				var $temp$dict = i.left;
				dict = $temp$dict;
				continue findMin;
		}
	}
};
var $jfmengels$elm_review$Vendor$IntDict$Disjunct = F2(
	function (a, b) {
		return {$: 'Disjunct', a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$Left = {$: 'Left'};
var $jfmengels$elm_review$Vendor$IntDict$Parent = F2(
	function (a, b) {
		return {$: 'Parent', a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$Right = {$: 'Right'};
var $jfmengels$elm_review$Vendor$IntDict$SamePrefix = {$: 'SamePrefix'};
var $jfmengels$elm_review$Vendor$IntDict$combineBits = F3(
	function (a, b, mask) {
		return (a & (~mask)) | (b & mask);
	});
var $jfmengels$elm_review$Vendor$IntDict$mostSignificantBranchingBit = F2(
	function (a, b) {
		return (_Utils_eq(a, $jfmengels$elm_review$Vendor$IntDict$signBit) || _Utils_eq(b, $jfmengels$elm_review$Vendor$IntDict$signBit)) ? $jfmengels$elm_review$Vendor$IntDict$signBit : A2($elm$core$Basics$max, a, b);
	});
var $jfmengels$elm_review$Vendor$IntDict$determineBranchRelation = F2(
	function (l, r) {
		var rp = r.prefix;
		var lp = l.prefix;
		var mask = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(
			A2($jfmengels$elm_review$Vendor$IntDict$mostSignificantBranchingBit, lp.branchingBit, rp.branchingBit));
		var modifiedRightPrefix = A3($jfmengels$elm_review$Vendor$IntDict$combineBits, rp.prefixBits, ~lp.prefixBits, mask);
		var prefix = A2($jfmengels$elm_review$Vendor$IntDict$lcp, lp.prefixBits, modifiedRightPrefix);
		var childEdge = F2(
			function (branchPrefix, c) {
				return A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, branchPrefix, c.prefix.prefixBits) ? $jfmengels$elm_review$Vendor$IntDict$Right : $jfmengels$elm_review$Vendor$IntDict$Left;
			});
		return _Utils_eq(lp, rp) ? $jfmengels$elm_review$Vendor$IntDict$SamePrefix : (_Utils_eq(prefix, lp) ? A2(
			$jfmengels$elm_review$Vendor$IntDict$Parent,
			$jfmengels$elm_review$Vendor$IntDict$Left,
			A2(childEdge, l.prefix, r)) : (_Utils_eq(prefix, rp) ? A2(
			$jfmengels$elm_review$Vendor$IntDict$Parent,
			$jfmengels$elm_review$Vendor$IntDict$Right,
			A2(childEdge, r.prefix, l)) : A2(
			$jfmengels$elm_review$Vendor$IntDict$Disjunct,
			prefix,
			A2(childEdge, prefix, l))));
	});
var $jfmengels$elm_review$Vendor$IntDict$intersect = F2(
	function (l, r) {
		intersect:
		while (true) {
			var _v0 = _Utils_Tuple2(l, r);
			_v0$1:
			while (true) {
				_v0$2:
				while (true) {
					switch (_v0.a.$) {
						case 'Empty':
							var _v1 = _v0.a;
							return $jfmengels$elm_review$Vendor$IntDict$Empty;
						case 'Leaf':
							switch (_v0.b.$) {
								case 'Empty':
									break _v0$1;
								case 'Leaf':
									break _v0$2;
								default:
									break _v0$2;
							}
						default:
							switch (_v0.b.$) {
								case 'Empty':
									break _v0$1;
								case 'Leaf':
									var lr = _v0.b.a;
									var _v3 = A2($jfmengels$elm_review$Vendor$IntDict$get, lr.key, l);
									if (_v3.$ === 'Just') {
										var v = _v3.a;
										return A2($jfmengels$elm_review$Vendor$IntDict$leaf, lr.key, v);
									} else {
										return $jfmengels$elm_review$Vendor$IntDict$Empty;
									}
								default:
									var il = _v0.a.a;
									var ir = _v0.b.a;
									var _v4 = A2($jfmengels$elm_review$Vendor$IntDict$determineBranchRelation, il, ir);
									switch (_v4.$) {
										case 'SamePrefix':
											return A3(
												$jfmengels$elm_review$Vendor$IntDict$inner,
												il.prefix,
												A2($jfmengels$elm_review$Vendor$IntDict$intersect, il.left, ir.left),
												A2($jfmengels$elm_review$Vendor$IntDict$intersect, il.right, ir.right));
										case 'Parent':
											if (_v4.a.$ === 'Left') {
												if (_v4.b.$ === 'Right') {
													var _v5 = _v4.a;
													var _v6 = _v4.b;
													var $temp$l = il.right,
														$temp$r = r;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												} else {
													var _v9 = _v4.a;
													var _v10 = _v4.b;
													var $temp$l = il.left,
														$temp$r = r;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												}
											} else {
												if (_v4.b.$ === 'Right') {
													var _v7 = _v4.a;
													var _v8 = _v4.b;
													var $temp$l = l,
														$temp$r = ir.right;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												} else {
													var _v11 = _v4.a;
													var _v12 = _v4.b;
													var $temp$l = l,
														$temp$r = ir.left;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												}
											}
										default:
											return $jfmengels$elm_review$Vendor$IntDict$Empty;
									}
							}
					}
				}
				var ll = _v0.a.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$member, ll.key, r) ? l : $jfmengels$elm_review$Vendor$IntDict$Empty;
			}
			var _v2 = _v0.b;
			return $jfmengels$elm_review$Vendor$IntDict$Empty;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$crashHack = function (msg) {
	crashHack:
	while (true) {
		var $temp$msg = msg;
		msg = $temp$msg;
		continue crashHack;
	}
};
var $jfmengels$elm_review$Vendor$Graph$unGraph = function (graph) {
	var rep = graph.a;
	return rep;
};
var $jfmengels$elm_review$Vendor$Graph$get = function (nodeId) {
	return A2(
		$elm$core$Basics$composeR,
		$jfmengels$elm_review$Vendor$Graph$unGraph,
		$jfmengels$elm_review$Vendor$IntDict$get(nodeId));
};
var $jfmengels$elm_review$Vendor$Graph$unsafeGet = F3(
	function (msg, id, graph) {
		var _v0 = A2($jfmengels$elm_review$Vendor$Graph$get, id, graph);
		if (_v0.$ === 'Nothing') {
			return $jfmengels$elm_review$Vendor$Graph$crashHack(msg);
		} else {
			var ctx = _v0.a;
			return ctx;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$checkForBackEdges = F2(
	function (ordering, graph) {
		var success = function (_v3) {
			return A2($jfmengels$elm_review$Vendor$Graph$AcyclicGraph, graph, ordering);
		};
		var check = F2(
			function (id, _v2) {
				var backSet = _v2.a;
				var error = 'Graph.checkForBackEdges: `ordering` didn\'t contain `id`';
				var ctx = A3($jfmengels$elm_review$Vendor$Graph$unsafeGet, error, id, graph);
				var backSetWithId = A3($jfmengels$elm_review$Vendor$IntDict$insert, id, _Utils_Tuple0, backSet);
				var backEdges = A2($jfmengels$elm_review$Vendor$IntDict$intersect, ctx.outgoing, backSetWithId);
				var _v0 = $jfmengels$elm_review$Vendor$IntDict$findMin(backEdges);
				if (_v0.$ === 'Nothing') {
					return $elm$core$Result$Ok(
						_Utils_Tuple2(backSetWithId, _Utils_Tuple0));
				} else {
					var _v1 = _v0.a;
					var to = _v1.a;
					var label = _v1.b;
					return $elm$core$Result$Err(
						A3($jfmengels$elm_review$Vendor$Graph$Edge, id, to, label));
				}
			});
		return A2(
			$elm$core$Result$map,
			success,
			A3(
				$elm$core$List$foldl,
				F2(
					function (id, res) {
						return A2(
							$elm$core$Result$andThen,
							check(id),
							res);
					}),
				$elm$core$Result$Ok(
					_Utils_Tuple2($jfmengels$elm_review$Vendor$IntDict$empty, _Utils_Tuple0)),
				ordering));
	});
var $jfmengels$elm_review$Vendor$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var l = dict.a;
					return A3(f, l.key, l.value, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($jfmengels$elm_review$Vendor$IntDict$foldr, f, acc, i.right),
						$temp$dict = i.left;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldr;
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$keys = function (dict) {
	return A3(
		$jfmengels$elm_review$Vendor$IntDict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $jfmengels$elm_review$Vendor$Graph$alongOutgoingEdges = function (ctx) {
	return $jfmengels$elm_review$Vendor$IntDict$keys(ctx.outgoing);
};
var $jfmengels$elm_review$Vendor$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var l = dict.a;
					return A3(f, l.key, l.value, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($jfmengels$elm_review$Vendor$IntDict$foldl, f, acc, i.left),
						$temp$dict = i.right;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldl;
			}
		}
	});
var $jfmengels$elm_review$Vendor$Graph$applyEdgeDiff = F3(
	function (nodeId, diff, graphRep) {
		var updateOutgoingEdge = F2(
			function (upd, node) {
				return _Utils_update(
					node,
					{
						outgoing: A3($jfmengels$elm_review$Vendor$IntDict$update, nodeId, upd, node.outgoing)
					});
			});
		var updateIncomingEdge = F2(
			function (upd, node) {
				return _Utils_update(
					node,
					{
						incoming: A3($jfmengels$elm_review$Vendor$IntDict$update, nodeId, upd, node.incoming)
					});
			});
		var flippedFoldl = F3(
			function (f, dict, acc) {
				return A3($jfmengels$elm_review$Vendor$IntDict$foldl, f, acc, dict);
			});
		var edgeUpdateToMaybe = function (edgeUpdate) {
			if (edgeUpdate.$ === 'Insert') {
				var lbl = edgeUpdate.a;
				return $elm$core$Maybe$Just(lbl);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var updateAdjacency = F3(
			function (updateEdge, updatedId, edgeUpdate) {
				var updateLbl = updateEdge(
					$elm$core$Basics$always(
						edgeUpdateToMaybe(edgeUpdate)));
				return A2(
					$jfmengels$elm_review$Vendor$IntDict$update,
					updatedId,
					$elm$core$Maybe$map(updateLbl));
			});
		return A3(
			flippedFoldl,
			updateAdjacency(updateOutgoingEdge),
			diff.outgoing,
			A3(
				flippedFoldl,
				updateAdjacency(updateIncomingEdge),
				diff.incoming,
				graphRep));
	});
var $jfmengels$elm_review$Vendor$Graph$Insert = function (a) {
	return {$: 'Insert', a: a};
};
var $jfmengels$elm_review$Vendor$Graph$Remove = function (a) {
	return {$: 'Remove', a: a};
};
var $jfmengels$elm_review$Vendor$Graph$emptyDiff = {incoming: $jfmengels$elm_review$Vendor$IntDict$empty, outgoing: $jfmengels$elm_review$Vendor$IntDict$empty};
var $jfmengels$elm_review$Vendor$Graph$computeEdgeDiff = F2(
	function (old, _new) {
		var collectUpdates = F3(
			function (edgeUpdate, updatedId, label) {
				var replaceUpdate = function (old_) {
					var _v5 = _Utils_Tuple2(
						old_,
						edgeUpdate(label));
					if (_v5.a.$ === 'Just') {
						if (_v5.a.a.$ === 'Remove') {
							if (_v5.b.$ === 'Insert') {
								var oldLbl = _v5.a.a.a;
								var newLbl = _v5.b.a;
								return _Utils_eq(oldLbl, newLbl) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
									$jfmengels$elm_review$Vendor$Graph$Insert(newLbl));
							} else {
								return $jfmengels$elm_review$Vendor$Graph$crashHack('Graph.computeEdgeDiff: Collected two removals for the same edge. This is an error in the implementation of Graph and you should file a bug report!');
							}
						} else {
							return $jfmengels$elm_review$Vendor$Graph$crashHack('Graph.computeEdgeDiff: Collected inserts before removals. This is an error in the implementation of Graph and you should file a bug report!');
						}
					} else {
						var _v6 = _v5.a;
						var eu = _v5.b;
						return $elm$core$Maybe$Just(eu);
					}
				};
				return A2($jfmengels$elm_review$Vendor$IntDict$update, updatedId, replaceUpdate);
			});
		var collect = F3(
			function (edgeUpdate, adj, updates) {
				return A3(
					$jfmengels$elm_review$Vendor$IntDict$foldl,
					collectUpdates(edgeUpdate),
					updates,
					adj);
			});
		var _v0 = _Utils_Tuple2(old, _new);
		if (_v0.a.$ === 'Nothing') {
			if (_v0.b.$ === 'Nothing') {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $jfmengels$elm_review$Vendor$Graph$emptyDiff;
			} else {
				var _v4 = _v0.a;
				var ins = _v0.b.a;
				return {
					incoming: A3(collect, $jfmengels$elm_review$Vendor$Graph$Insert, ins.outgoing, $jfmengels$elm_review$Vendor$IntDict$empty),
					outgoing: A3(collect, $jfmengels$elm_review$Vendor$Graph$Insert, ins.incoming, $jfmengels$elm_review$Vendor$IntDict$empty)
				};
			}
		} else {
			if (_v0.b.$ === 'Nothing') {
				var rem = _v0.a.a;
				var _v3 = _v0.b;
				return {
					incoming: A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.outgoing, $jfmengels$elm_review$Vendor$IntDict$empty),
					outgoing: A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.incoming, $jfmengels$elm_review$Vendor$IntDict$empty)
				};
			} else {
				var rem = _v0.a.a;
				var ins = _v0.b.a;
				return _Utils_eq(rem, ins) ? $jfmengels$elm_review$Vendor$Graph$emptyDiff : {
					incoming: A3(
						collect,
						$jfmengels$elm_review$Vendor$Graph$Insert,
						ins.outgoing,
						A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.outgoing, $jfmengels$elm_review$Vendor$IntDict$empty)),
					outgoing: A3(
						collect,
						$jfmengels$elm_review$Vendor$Graph$Insert,
						ins.incoming,
						A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.incoming, $jfmengels$elm_review$Vendor$IntDict$empty))
				};
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$filter = F2(
	function (predicate, dict) {
		var add = F3(
			function (k, v, d) {
				return A2(predicate, k, v) ? A3($jfmengels$elm_review$Vendor$IntDict$insert, k, v, d) : d;
			});
		return A3($jfmengels$elm_review$Vendor$IntDict$foldl, add, $jfmengels$elm_review$Vendor$IntDict$empty, dict);
	});
var $jfmengels$elm_review$Vendor$Graph$update = F2(
	function (nodeId, updater) {
		var wrappedUpdater = function (rep) {
			var old = A2($jfmengels$elm_review$Vendor$IntDict$get, nodeId, rep);
			var filterInvalidEdges = function (ctx) {
				return $jfmengels$elm_review$Vendor$IntDict$filter(
					F2(
						function (id, _v0) {
							return _Utils_eq(id, ctx.node.id) || A2($jfmengels$elm_review$Vendor$IntDict$member, id, rep);
						}));
			};
			var cleanUpEdges = function (ctx) {
				return _Utils_update(
					ctx,
					{
						incoming: A2(filterInvalidEdges, ctx, ctx.incoming),
						outgoing: A2(filterInvalidEdges, ctx, ctx.outgoing)
					});
			};
			var _new = A2(
				$elm$core$Maybe$map,
				cleanUpEdges,
				updater(old));
			var diff = A2($jfmengels$elm_review$Vendor$Graph$computeEdgeDiff, old, _new);
			return A3(
				$jfmengels$elm_review$Vendor$IntDict$update,
				nodeId,
				$elm$core$Basics$always(_new),
				A3($jfmengels$elm_review$Vendor$Graph$applyEdgeDiff, nodeId, diff, rep));
		};
		return A2(
			$elm$core$Basics$composeR,
			$jfmengels$elm_review$Vendor$Graph$unGraph,
			A2($elm$core$Basics$composeR, wrappedUpdater, $jfmengels$elm_review$Vendor$Graph$Graph));
	});
var $jfmengels$elm_review$Vendor$Graph$remove = F2(
	function (nodeId, graph) {
		return A3(
			$jfmengels$elm_review$Vendor$Graph$update,
			nodeId,
			$elm$core$Basics$always($elm$core$Maybe$Nothing),
			graph);
	});
var $jfmengels$elm_review$Vendor$Graph$guidedDfs = F5(
	function (selectNeighbors, visitNode, startingSeeds, startingAcc, startingGraph) {
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					if (!seeds.b) {
						return _Utils_Tuple2(acc, graph);
					} else {
						var next = seeds.a;
						var seeds1 = seeds.b;
						var _v1 = A2($jfmengels$elm_review$Vendor$Graph$get, next, graph);
						if (_v1.$ === 'Nothing') {
							var $temp$seeds = seeds1,
								$temp$acc = acc,
								$temp$graph = graph;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						} else {
							var ctx = _v1.a;
							var _v2 = A2(visitNode, ctx, acc);
							var accAfterDiscovery = _v2.a;
							var finishNode = _v2.b;
							var _v3 = A3(
								go,
								selectNeighbors(ctx),
								accAfterDiscovery,
								A2($jfmengels$elm_review$Vendor$Graph$remove, next, graph));
							var accBeforeFinish = _v3.a;
							var graph1 = _v3.b;
							var accAfterFinish = finishNode(accBeforeFinish);
							var $temp$seeds = seeds1,
								$temp$acc = accAfterFinish,
								$temp$graph = graph1;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						}
					}
				}
			});
		return A3(go, startingSeeds, startingAcc, startingGraph);
	});
var $jfmengels$elm_review$Vendor$Graph$nodeIds = A2($elm$core$Basics$composeR, $jfmengels$elm_review$Vendor$Graph$unGraph, $jfmengels$elm_review$Vendor$IntDict$keys);
var $jfmengels$elm_review$Vendor$Graph$dfs = F3(
	function (visitNode, acc, graph) {
		return A5(
			$jfmengels$elm_review$Vendor$Graph$guidedDfs,
			$jfmengels$elm_review$Vendor$Graph$alongOutgoingEdges,
			visitNode,
			$jfmengels$elm_review$Vendor$Graph$nodeIds(graph),
			acc,
			graph).a;
	});
var $jfmengels$elm_review$Vendor$Graph$onFinish = F3(
	function (visitor, ctx, acc) {
		return _Utils_Tuple2(
			acc,
			visitor(ctx));
	});
var $jfmengels$elm_review$Vendor$Graph$checkAcyclic = function (graph) {
	var reversePostOrder = A3(
		$jfmengels$elm_review$Vendor$Graph$dfs,
		$jfmengels$elm_review$Vendor$Graph$onFinish(
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.node;
				},
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.id;
					},
					$elm$core$List$cons))),
		_List_Nil,
		graph);
	return A2($jfmengels$elm_review$Vendor$Graph$checkForBackEdges, reversePostOrder, graph);
};
var $jfmengels$elm_review$Review$Rule$getModuleName = function (module_) {
	return $stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(module_.ast.moduleDefinition));
};
var $jfmengels$elm_review$Review$Rule$duplicateModuleNames = F2(
	function (visitedModules, projectModules) {
		duplicateModuleNames:
		while (true) {
			if (!projectModules.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var projectModule = projectModules.a;
				var restOfModules = projectModules.b;
				var moduleName = $jfmengels$elm_review$Review$Rule$getModuleName(projectModule);
				var _v1 = A2($elm$core$Dict$get, moduleName, visitedModules);
				if (_v1.$ === 'Nothing') {
					var $temp$visitedModules = A3($elm$core$Dict$insert, moduleName, projectModule.path, visitedModules),
						$temp$projectModules = restOfModules;
					visitedModules = $temp$visitedModules;
					projectModules = $temp$projectModules;
					continue duplicateModuleNames;
				} else {
					var path = _v1.a;
					return $elm$core$Maybe$Just(
						{
							moduleName: moduleName,
							paths: A2(
								$elm$core$List$cons,
								path,
								A2(
									$elm$core$List$cons,
									projectModule.path,
									A2(
										$elm$core$List$map,
										function ($) {
											return $.path;
										},
										A2(
											$elm$core$List$filter,
											function (p) {
												return _Utils_eq(
													$jfmengels$elm_review$Review$Rule$getModuleName(p),
													moduleName);
											},
											restOfModules))))
						});
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$accessInternalError = function (error_) {
	if (error_.$ === 'UnspecifiedError') {
		var internalError = error_.a;
		return internalError;
	} else {
		var internalError = error_.a;
		return internalError;
	}
};
var $jfmengels$elm_review$Review$Rule$errorToReviewError = function (error_) {
	return $jfmengels$elm_review$Review$Error$ReviewError(
		$jfmengels$elm_review$Review$Rule$accessInternalError(error_));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $jfmengels$elm_review$Review$Project$Internal$moduleGraph = function (_v0) {
	var project = _v0.a;
	var _v1 = project.moduleGraph;
	if (_v1.$ === 'Just') {
		var graph = _v1.a;
		return graph;
	} else {
		return $jfmengels$elm_review$Review$Project$Internal$buildModuleGraph(
			$elm$core$Dict$values(project.modules));
	}
};
var $jfmengels$elm_review$Review$Rule$parsingError = function (rawFile) {
	return $jfmengels$elm_review$Review$Error$ReviewError(
		{
			details: _List_fromArray(
				['I could not understand the content of this file, and this prevents me from analyzing it. It is highly likely that the contents of the file is not correct Elm code.', 'I need this file to be fixed before analyzing the rest of the project. If I didn\'t, I would potentially report incorrect things.', 'Hint: Try running `elm make`. The compiler should give you better hints on how to resolve the problem.']),
			filePath: rawFile.path,
			fixes: $elm$core$Maybe$Nothing,
			message: rawFile.path + ' is not a correct Elm module',
			range: {
				end: {column: 0, row: 0},
				start: {column: 0, row: 0}
			},
			ruleName: 'ParsingError',
			target: $jfmengels$elm_review$Review$Error$Module
		});
};
var $jfmengels$elm_review$Review$Rule$removeErrorPhantomType = function (err) {
	if (err.$ === 'UnspecifiedError') {
		var internalError = err.a;
		return $jfmengels$elm_review$Review$Rule$UnspecifiedError(internalError);
	} else {
		var internalError = err.a;
		return $jfmengels$elm_review$Review$Rule$SpecifiedError(internalError);
	}
};
var $jfmengels$elm_review$Review$Rule$runRules = F3(
	function (rules, project, nodeContexts) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var exceptions = _v0.b;
					var fn = _v0.c;
					var errors = _v1.a;
					var previousRules = _v1.b;
					var _v2 = A3(fn, exceptions, project, nodeContexts);
					var ruleErrors = _v2.a;
					var ruleWithCache = _v2.b;
					return _Utils_Tuple2(
						$elm$core$List$concat(
							_List_fromArray(
								[
									A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$removeErrorPhantomType, ruleErrors),
									errors
								])),
						A2($elm$core$List$cons, ruleWithCache, previousRules));
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			rules);
	});
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $jfmengels$elm_review$Vendor$Graph$topologicalSort = function (_v0) {
	var graph = _v0.a;
	var ordering = _v0.b;
	var error = 'Graph.topologicalSort: Invalid `AcyclicGraph`, where the ordering contained nodes not present in the graph';
	return A2(
		$elm$core$List$map,
		function (id) {
			return A3($jfmengels$elm_review$Vendor$Graph$unsafeGet, error, id, graph);
		},
		ordering);
};
var $jfmengels$elm_review$Review$Rule$review = F2(
	function (rules, project) {
		var _v0 = $jfmengels$elm_review$Review$Project$modulesThatFailedToParse(project);
		if (!_v0.b) {
			var _v1 = A2(
				$jfmengels$elm_review$Review$Rule$duplicateModuleNames,
				$elm$core$Dict$empty,
				$jfmengels$elm_review$Review$Project$modules(project));
			if (_v1.$ === 'Just') {
				var duplicate = _v1.a;
				var paths = A2(
					$elm$core$String$join,
					'',
					A2(
						$elm$core$List$map,
						function (s) {
							return '\n  - ' + s;
						},
						$elm$core$List$sort(duplicate.paths)));
				return _Utils_Tuple2(
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Error$ReviewError(
							{
								details: _List_fromArray(
									[
										'I found several modules with the name `' + (A2($elm$core$String$join, '.', duplicate.moduleName) + '`. Depending on how I choose to resolve this, I might give you different reports. Since this is a compiler error anyway, I require this problem to be solved. Please fix this then try running `elm-review` again.'),
										'Here are the paths to some of the files that share a module name:' + paths,
										'It is possible that you requested me to look at several projects, and that modules from each project share the same name. I don\'t recommend reviewing several projects at the same time, as I can only handle one `elm.json`. I instead suggest running `elm-review` twice, once for each project.'
									]),
								filePath: 'GLOBAL ERROR',
								fixes: $elm$core$Maybe$Nothing,
								message: 'Found several modules named `' + (A2($elm$core$String$join, '.', duplicate.moduleName) + '`'),
								range: {
									end: {column: 0, row: 0},
									start: {column: 0, row: 0}
								},
								ruleName: 'Incorrect project',
								target: $jfmengels$elm_review$Review$Error$Global
							})
						]),
					rules);
			} else {
				var sortedModules = A2(
					$elm$core$Result$map,
					$jfmengels$elm_review$Vendor$Graph$topologicalSort,
					$jfmengels$elm_review$Vendor$Graph$checkAcyclic(
						$jfmengels$elm_review$Review$Project$Internal$moduleGraph(project)));
				if (sortedModules.$ === 'Err') {
					return _Utils_Tuple2(
						_List_fromArray(
							[
								$jfmengels$elm_review$Review$Error$ReviewError(
								{
									details: _List_fromArray(
										['I detected an import cycle in your project. This prevents me from working correctly, and results in a error for the Elm compiler anyway. Please resolve it using the compiler\'s suggestions, then try running `elm-review` again.']),
									filePath: 'GLOBAL ERROR',
									fixes: $elm$core$Maybe$Nothing,
									message: 'Import cycle discovered',
									range: {
										end: {column: 0, row: 0},
										start: {column: 0, row: 0}
									},
									ruleName: 'Incorrect project',
									target: $jfmengels$elm_review$Review$Error$Global
								})
							]),
						rules);
				} else {
					var nodeContexts = sortedModules.a;
					return A2(
						$elm$core$Tuple$mapFirst,
						$elm$core$List$map($jfmengels$elm_review$Review$Rule$errorToReviewError),
						A3($jfmengels$elm_review$Review$Rule$runRules, rules, project, nodeContexts));
				}
			}
		} else {
			var modulesThatFailedToParse = _v0;
			return _Utils_Tuple2(
				A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$parsingError, modulesThatFailedToParse),
				rules);
		}
	});
var $jfmengels$elm_review$Review$Test$runOnModulesWithProjectData = F3(
	function (project, rule, sources) {
		var projectWithModules = A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review$Review$Project$addModule,
			project,
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (index, source) {
						return {
							path: 'TestContent_' + ($elm$core$String$fromInt(index) + '.elm'),
							source: source
						};
					}),
				sources));
		var _v0 = $jfmengels$elm_review$Review$Project$modulesThatFailedToParse(projectWithModules);
		if (_v0.b) {
			var source = _v0.a.source;
			var fileAndIndex = {
				index: A2(
					$elm$core$Maybe$withDefault,
					-1,
					A2($jfmengels$elm_review$Review$Test$indexOf, source, sources)),
				source: source
			};
			return $jfmengels$elm_review$Review$Test$FailedRun(
				A2(
					$jfmengels$elm_review$Review$Test$FailureMessage$parsingFailure,
					$elm$core$List$length(sources) === 1,
					fileAndIndex));
		} else {
			var modules = $jfmengels$elm_review$Review$Project$modules(projectWithModules);
			if ($elm$core$List$isEmpty(modules)) {
				return $jfmengels$elm_review$Review$Test$FailedRun($jfmengels$elm_review$Review$Test$FailureMessage$missingSources);
			} else {
				var _v1 = A2($jfmengels$elm_review$Review$Test$findDuplicateModuleNames, $elm$core$Set$empty, modules);
				if (_v1.$ === 'Just') {
					var moduleName = _v1.a;
					return $jfmengels$elm_review$Review$Test$FailedRun(
						$jfmengels$elm_review$Review$Test$FailureMessage$duplicateModuleName(moduleName));
				} else {
					var errors = A2(
						$jfmengels$elm_review$Review$Rule$review,
						_List_fromArray(
							[rule]),
						projectWithModules).a;
					var _v2 = A2(
						$jfmengels$elm_review$Vendor$ListExtra$find,
						function (err_) {
							return $jfmengels$elm_review$Review$Rule$errorFilePath(err_) === 'GLOBAL ERROR';
						},
						errors);
					if (_v2.$ === 'Just') {
						var globalError = _v2.a;
						return $jfmengels$elm_review$Review$Test$FailedRun(
							$jfmengels$elm_review$Review$Test$FailureMessage$globalErrorInTest(globalError));
					} else {
						return $jfmengels$elm_review$Review$Test$SuccessfulRun(
							$elm$core$List$concat(
								_List_fromArray(
									[
										A2(
										$elm$core$List$map,
										$jfmengels$elm_review$Review$Test$moduleToRunResult(errors),
										modules),
										A2($jfmengels$elm_review$Review$Test$elmJsonRunResult, errors, projectWithModules),
										A2($jfmengels$elm_review$Review$Test$readmeRunResult, errors, projectWithModules)
									])));
					}
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Test$runWithProjectData = F3(
	function (project, rule, source) {
		return A3(
			$jfmengels$elm_review$Review$Test$runOnModulesWithProjectData,
			project,
			rule,
			_List_fromArray(
				[source]));
	});
var $jfmengels$elm_review$Review$Test$run = F2(
	function (rule, source) {
		return A3($jfmengels$elm_review$Review$Test$runWithProjectData, $jfmengels$elm_review$Review$Project$new, rule, source);
	});
var $elm_explorations$test$Test$Internal$blankDescriptionFailure = $elm_explorations$test$Test$Internal$failNow(
	{
		description: 'This test has a blank description. Let\'s give it a useful one!',
		reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$BadDescription)
	});
var $elm_explorations$test$Test$test = F2(
	function (untrimmedDesc, thunk) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		return $elm$core$String$isEmpty(desc) ? $elm_explorations$test$Test$Internal$blankDescriptionFailure : A2(
			$elm_explorations$test$Test$Internal$Labeled,
			desc,
			$elm_explorations$test$Test$Internal$UnitTest(
				function (_v0) {
					return _List_fromArray(
						[
							thunk(_Utils_Tuple0)
						]);
				}));
	});
var $author$project$NoEmptyTextTest$suite = A2(
	$elm_explorations$test$Test$describe,
	'NoEmptyText',
	_List_fromArray(
		[
			A2(
			$elm_explorations$test$Test$test,
			'should not report anything if there is no `text \"\"` - not even imported ',
			function (_v0) {
				return $jfmengels$elm_review$Review$Test$expectNoErrors(
					A2($jfmengels$elm_review$Review$Test$run, $author$project$NoEmptyText$rule, '\nmodule A exposing (..)\n\nfoo : String\nfoo = "bar"\n    '));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'should not report anything if `text \"\"` is not form Html',
			function (_v1) {
				return $jfmengels$elm_review$Review$Test$expectNoErrors(
					A2($jfmengels$elm_review$Review$Test$run, $author$project$NoEmptyText$rule, '\nmodule A exposing (..)\n\nimport Html\n\ntext: String -> String\ntext = identity\n\n\nfoo : Html.Html msg\nfoo = Html.text <| text ""\n    '));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'it should detect `Html.text \"\"`',
			function (_v2) {
				return A2(
					$jfmengels$elm_review$Review$Test$expectErrors,
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Test$error(
							{details: $author$project$NoEmptyText$error.details, message: $author$project$NoEmptyText$error.message, under: 'Html.text \"\"'})
						]),
					A2($jfmengels$elm_review$Review$Test$run, $author$project$NoEmptyText$rule, '\nmodule A exposing (..)\n\nimport Html \n\nfoo : Html.Html msg\nfoo = Html.text ""\n            '));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'it should detect `text \"\"`',
			function (_v3) {
				return A2(
					$jfmengels$elm_review$Review$Test$expectErrors,
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Test$error(
							{details: $author$project$NoEmptyText$error.details, message: $author$project$NoEmptyText$error.message, under: 'text \"\"'})
						]),
					A2($jfmengels$elm_review$Review$Test$run, $author$project$NoEmptyText$rule, '\nmodule A exposing (..)\n\nimport Html exposing (text)\n\nfoo : Html.Html msg\nfoo = text ""\n          '));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'it should detect `H.text \"\"`',
			function (_v4) {
				return A2(
					$jfmengels$elm_review$Review$Test$expectErrors,
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Test$error(
							{details: $author$project$NoEmptyText$error.details, message: $author$project$NoEmptyText$error.message, under: 'H.text \"\"'})
						]),
					A2($jfmengels$elm_review$Review$Test$run, $author$project$NoEmptyText$rule, '\nmodule A exposing (..)\n\nimport Html as H exposing (text)\n\nfoo : Html.Html msg\nfoo = H.text ""\n            '));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'it should detect all possible errors (even though this example doesn\'t compile)',
			function (_v5) {
				return A2(
					$jfmengels$elm_review$Review$Test$expectErrors,
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Test$error(
							{details: $author$project$NoEmptyText$error.details, message: $author$project$NoEmptyText$error.message, under: 'H.text \"\"'}),
							A2(
							$jfmengels$elm_review$Review$Test$atExactly,
							{
								end: {column: 12, row: 9},
								start: {column: 5, row: 9}
							},
							$jfmengels$elm_review$Review$Test$error(
								{details: $author$project$NoEmptyText$error.details, message: $author$project$NoEmptyText$error.message, under: 'text \"\"'}))
						]),
					A2($jfmengels$elm_review$Review$Test$run, $author$project$NoEmptyText$rule, '\nmodule A exposing (..)\n\nimport Html as H exposing (text)\n\nfoo : Html.Html msg\nfoo = Html.div [ ] \n  [H.text ""\n  , text ""\n  , Html.text ""]\n                            '));
			})
		]));
var $author$project$Test$Generated$Main1902083802$main = A2(
	$author$project$Test$Runner$Node$run,
	{
		paths: _List_fromArray(
			['/Users/leojpod/Dev/jpoding/no-empty-html-text/tests/NoEmptyTextTest.elm']),
		processes: 8,
		report: $author$project$Test$Reporter$Reporter$ConsoleReport($author$project$Console$Text$UseColor),
		runs: $elm$core$Maybe$Nothing,
		seed: 276552228556038
	},
	$elm_explorations$test$Test$concat(
		_List_fromArray(
			[
				A2(
				$elm_explorations$test$Test$describe,
				'NoEmptyTextTest',
				_List_fromArray(
					[$author$project$NoEmptyTextTest$suite]))
			])));
_Platform_export({'Test':{'Generated':{'Main1902083802':{'init':$author$project$Test$Generated$Main1902083802$main($elm$json$Json$Decode$int)(0)}}}});}(this));
return this.Elm;
})({});
var pipeFilename = "/tmp/elm_test-71727.sock";
// Make sure necessary things are defined.
if (typeof Elm === "undefined") {
  throw "test runner config error: Elm is not defined. Make sure you provide a file compiled by Elm!";
}

var potentialModuleNames = Object.keys(Elm.Test.Generated);

if (potentialModuleNames.length !== 1) {
  console.error(
    "Multiple potential generated modules to run in the Elm.Test.Generated namespace: ",
    potentialModuleNames,
    " - this should never happen!"
  );
  process.exit(1);
}

var net = require("net"),
  client = net.createConnection(pipeFilename);

client.on("error", function(error) {
  console.error(error);
  client.end();
  process.exit(1);
});

client.setEncoding("utf8");
client.setNoDelay(true);

var testModule = Elm.Test.Generated[potentialModuleNames[0]];

// Run the Elm app.
var app = testModule.init({flags: Date.now()});

client.on("data", function(msg) {
  app.ports.receive.send(JSON.parse(msg));
});

// Use ports for inter-process communication.
app.ports.send.subscribe(function(msg) {
  // We split incoming messages on the socket on newlines. The gist is that node
  // is rather unpredictable in whether or not a single `write` will result in a
  // single `on('data')` callback. Sometimes it does, sometimes multiple writes
  // result in a single callback and - worst of all - sometimes a single read
  // results in multiple callbacks, each receiving a piece of the data. The
  // horror.
  client.write(msg + "\n");
});
