/**
 * @name PEORIA
 * @version 07.09.2021
 * @copyright Diego Palmerin Bonada
 * @fileoverview A lightweight framework that optimizes the workflow of building
 * a website with pure js and streamlines a lot of the workflow.
 */

/**
 * Options type for creating an element.
 * @typedef {{type: string, classList?: string, innerText?: string, onclick?: string, src?: string, style?: string, tabindex?: string, id?: string, child?: Element, children?: Element[], target?: string, role?: string, value?: string, for?: string}} Options
 */

/**
 * Peoria function to create an Element.
 *
 * @param {Options} options - Configuration for element.
 *
 * @returns {Element} The created element.
 *
 * @example object({type: "h3", innerText: "This is neat!"})
 */
function object(type, options) {
	let htmlObject;
	if (!options.ns){
		htmlObject = document.createElement(type);
	} else {
		htmlObject = document.createElementNS(options.ns, type);
	}
	for (option in options) {
		if (option != "children" && option != "class" && option != "innerText" && option != "child")
			htmlObject.setAttribute(option, options[option]);
	}
	if (options.class !== undefined) htmlObject.classList = options.class;
	if (options.innerText !== undefined) htmlObject.innerText = options.innerText;
	if (options.child !== undefined) htmlObject.appendChild(options.child);
	if (options.children !== undefined)
		options.children.forEach(child => {
			htmlObject.appendChild(child);
		});
	return htmlObject;
}


/**
 * Function to append as a child an element to another one given it's id.
 *
 * @param {string} parent The id of the parent object.
 * @param {Element} child The child object.
 *
 * @example append("header", headerObject);
 */
function append(parent, child) {
	document.getElementById(parent).appendChild(child);
}

/** Removes all children of content and scrolls to the top of the page. */
function clearContent() {
	clear(document.getElementById("content"));
}

/** Removes all children of a given element.
 * 
 * @param `element` {String} either the id of the element or the element itself.
 * 
*/
function clear(element) {
	if (typeof element === "string") {
		element = document.getElementById("content")
	}

	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	return;
}

/**
 * Adds an element to the body.
 *
 * @param {Element} element Object to append to content.
 * 
 * @returns {Element} the element Object it recieved.
 */
function addToContent(element) {
	append("content", element);
	return element;
}

/**
 * Peoria function to create an Element and add it to the content.
 *
 * @param {Options} options - Configuration for element.
 * 
 * @returns {Element} the element that was created.
 *
 * @example objectToContent({type: "h3", innerText: "This is neat!"})
 */
function objectToContent(type, options) {
	return addToContent(object(type, options));
}

/**
 * Peoria function to switch night mode on and off across instances.
 */
function nightMode() {
	if (window.localStorage.getItem('nightMode')) {
		var enabled = window.localStorage.getItem('nightMode') === 'true';
		window.localStorage.setItem('nightMode', !enabled);
		enabled ? document.body.classList.remove('night') : document.body.classList.add('night');
	} else {
		if (document.body.classList.contains('night')) {
			window.localStorage.setItem('nightMode', false);
			document.body.classList.remove('night');
		} else {
			window.localStorage.setItem('nightMode', true);
			document.body.classList.add('night');
		}
	}
}

/**
 * Copy text to the user's clipboard.
 *
 * @param {String} text - String to copy to the clipboard.
 *
 * @example copyText('foo')
 */
function copyText(text) {
	if (!navigator.clipboard) {
		var temp = object({
			type: 'input',
			innerText: text
		})
		temp.focus()
		temp.select()
		document.execCommand('copy')
		return
	}
	navigator.clipboard.writeText(text)
}

window.onload = (e) => {
	document.querySelectorAll('.night-btn').forEach(btn => {
		btn.addEventListener('click', nightMode);
	})

	document.querySelectorAll('.copy-contents').forEach(element => {
		element.addEventListener('click', function () {
			if (!navigator.clipboard) {
				var temp = object({
					type: 'input',
					innerText: element.innerText
				})
				temp.focus()
				temp.select()
				document.execCommand('copy')
				return
			}
			navigator.clipboard.writeText(element.innerText)
		})
	});

	if (window.localStorage.getItem('nightMode')) {
		window.localStorage.getItem('nightMode') === 'true' ? document.body.classList.add('night') : document.body.classList.remove('night');
	}
}