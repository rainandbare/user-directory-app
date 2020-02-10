const formatResult = array => {
	const object = array.reduce((acc, cur) => {
		acc[cur.id] = cur;
		return acc;
	}, {});

	return object;
};

export default formatResult;
