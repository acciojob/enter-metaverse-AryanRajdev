//your JS code here. If required.
let parentDiv = document.querySelector("#parent");
let mybtn = document.querySelector("#enterBtn");

mybtn.addEventListener("click",function() {
	parentDiv.innerHTML = "<h1>Entered Metaverse</h1>";
});