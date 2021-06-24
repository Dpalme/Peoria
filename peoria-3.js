/**
 * @name PEORIA
 * @version 22.06.2021
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
function object(options) {
	htmlObject = document.createElement(options.type);
	for (option in options) {
		if (option != "children" && option != "class" && option != "innerText" && option != "child" && option != "type")
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
 * Function that adds the selected class to a specific header item and removes it from the rest.
 *
 * @param {string} menuId The id of the menu option.
 *
 * @example activateMenu("menu");
 */
function activateMenu(menuId) {
	sections.forEach(tag => {
		document.getElementById(tag).classList.remove("selected");
	});
	document.getElementById(menuId).classList.add("selected");
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
	content = document.getElementById("content");
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}

	window.scrollTo(0, 0);
}

/** Removes all children of a given element.
 * 
 * @param {string} parent The id of the parent object.
 * 
 * @param {Element} parent The parent object.
*/
function clear(element) {
	condition = typeof element === "string";
	var content = document.getElementById("content") * condition + element * !condition;
	content.innerHTML = "";
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
function objectToContent(options) {
	return addToContent(object(options));
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
