$(document).ready(function() {
	var colors = ['red', 'green', 'purple', 'blue', 'black'];
	i = 0;
	setInterval(function () {
		$('#myName').css("color", colors[i % colors.length]);
		i++;
	}, 3000);
});