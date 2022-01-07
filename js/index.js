const toggleBtn=document.querySelector("#toggleBtn")
const prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)");
const curTheme=localStorage.getItem("theme");
if(curTheme=="dark"){
	document.body.classList.toggle("darktheme");
}
else if(curTheme=="light"){
	document.body.classList.toggle("lighttheme");
}
toggleBtn.addEventListener('click',function(){
	if(prefersDarkScheme.matches){
		document.body.classList.toggle("lighttheme");
		var theme=document.body.classList.contains("lighttheme")?'light':'dark';
	}
	else{
		document.body.classList.toggle("darktheme");
		var theme=document.body.classList.contains("darktheme")?'dark':'light';
	}
	localStorage.setItem('theme',theme);
});

document.body.addEventListener("keydown",function(event){
	if(event.key === "p"){
		window.location.replace("https://givemecode.pages.dev/php");
	}
	if(event.key === "u"){ window.scrollTo(0, 0); }
});

const searchInput=document.querySelector('#search-bar');
searchInput.addEventListener('keyup', function(){
	let filteredInput=searchInput.value.toUpperCase();
	const searchBlock=document.querySelectorAll('.search-block');
	for(i=0; i<searchBlock.length; i++){
		let title=searchBlock[i].getElementsByTagName('h5');
		searchBlock[i].style.display = 'none';
		if(title[0].innerText.toUpperCase().startsWith(filteredInput))
		{
			let parentBlock=searchBlock[i].parentNode;
			parentBlock.insertBefore(searchBlock[i],parentBlock.childNodes[0]);
			searchBlock[i].style.display = '';
		}
	}
	for(i=0; i<searchBlock.length; i++){
		let title=searchBlock[i].getElementsByTagName('h5');
		if(title[0].innerText.toUpperCase().indexOf(filteredInput) > -1)
		{
			searchBlock[i].style.display = '';
		}
	}
});