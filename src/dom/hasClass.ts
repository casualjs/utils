import classRegExp from "./classRegExp";

/**
 * Check if an element has a class name.
 * @param element Element to be checked.
 * @param className className to check.
 * @return Will be `true` if the element has a class, `false` otherwise.
 */
const hasClass = (element: Element, className: string): boolean => {
	if (element.classList) {
		return element.classList.contains(className);
	}
	return classRegExp(className).test(element.className);
};

export default hasClass;
