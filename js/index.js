
document.body.addEventListener("keydown", function (event) {
	console.log(event.key)
	if (event.key === "p") {
		window.location.replace("https://givemecode.pages.dev/php");
	}
	if (event.key === "u") {
	      window.scrollTo(0, 0);
	}
});