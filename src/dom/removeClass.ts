/**
 * Remove a class name from an element.
 * @param element Elements to be removed.
 * @param className className to add.
 * @return The DOM element with the removed class name.
 */
const removeClass = <T extends Element>(element: T, className: string): T => {
	if (element.classList) {
		element.classList.remove(className);
	} else {
		element.className = element.className
			.split(/\s+/)
			.filter((_className: string) => {
				return _className !== className;
			})
			.join(" ");
	}
	return element;
};

export default removeClass;
