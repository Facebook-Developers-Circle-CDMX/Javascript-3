const findDouble = function (number) {
	const set = new Set();
	for (let n of number) {
		if (set.has(n)) {
			return n;
		} else {
			set.add(n);
		}
	}
};

module.exports = findDouble;