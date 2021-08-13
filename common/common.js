const toast = (title = '提示', icon = 'none') => {
	uni.showToast({
		title,
		icon,
		duration: 1333
	});
};



export default {
	toast
};
