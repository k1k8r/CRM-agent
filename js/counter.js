$(document).ready(function () {
	var basketCounter = 0;
	var favouriteCounter = 0;

	$(".content-buttons__basket").click(function () {
		basketCounter += 1;
		$(".basket__counter").text(basketCounter);
	});

	$(".content-buttons__favourite").click(function () {
		favouriteCounter += 1;
		$(".favourite__counter").text(favouriteCounter);
	});
});