function openTabOption(evt, optionName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(optionName).style.display = "block";
	evt.currentTarget.className += " active";
}
function removeGym(x){
//brisanje teretane iz liste ili tabele u buducim verzijama
document.getElementById("gym"+x).remove();
document.getElementById("del-list-gym-btn"+x).remove();
}
function removeUser(x){
//brisanje korisnika iz liste ili tabele u buducim verzijama
document.getElementById("korisnik"+x).remove();
document.getElementById("del-list-user-btn"+x).remove();
}
function removeTrening(x){
//brisanje treninga iz liste ili tabele u buducim verzijama
document.getElementById("trening"+x).remove();
document.getElementById("del-list-trening-btn"+x).remove();
}

document.querySelector("#show-login").addEventListener("click", function () {
	document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
	document.querySelector(".popup").classList.remove("active");
});

//function nama(){ //ubacivanje css-a da zatvori tj pomeri nav bar u levo nakon klika na link u navigaciji
//	document.getElementById('nama').style = {#click:checked ~ ul{
//		left: 0;
//	}}
//}