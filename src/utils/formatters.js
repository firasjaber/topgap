export const getWinRate = (w, l) => {
	return ((w / (l + w)) * 100).toFixed(0);
};
