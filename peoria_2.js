/**
 * @name PEORIA
 * @version 04.01.2020
 * @copyright Diego Palmerin Bonada
 * @fileoverview A lightweight framework that optimizes the workflow of building
 * a website with pure js and streamlines a lot of time heavy tasks.
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
	for(option in options) {
		if(option != "children" && option != "class" && option != "innerText" && option != "child")
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