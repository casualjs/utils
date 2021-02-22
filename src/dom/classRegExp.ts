/**
 * Produce a regular expression for matching a className within an elements className.
 * @param className className for procution.
 * @return a regular expression for matching.
 */
const classRegExp = (className: string) => {
	return new RegExp(`(^|\\s)${className}($|\\s)`);
};

export default classRegExp;
