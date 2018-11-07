var debounceListener = function(handlerFunction, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) handlerFunction.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) handlerFunction.apply(context, args);
	};
};

function q(selector, context = document) {
    return context.querySelector(selector);
}

function qq(selector, context = document) {
    return context.querySelectorAll(selector);
}

function qid(id) {
	return document.getElementById(id);
}
