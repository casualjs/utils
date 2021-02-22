import hasClass from "./hasClass";

/**
 * Add a class name to an element.
 * @param element Elements to be added.
 * @param className className to add.
 * @return The DOM element with the added class name.
 */
const addClass = <T extends Element>(element: T, className: string): T => {
	if (element.classList) {
		element.classList.add(className);
	} else if (!hasClass(element, className)) {
		element.className = `${element.className} ${className}`.trim();
	}
	return element;
};

export default addClass;
