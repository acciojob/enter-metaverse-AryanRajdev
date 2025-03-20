//your JS code here. If required.
// let parentDiv = document.querySelector("#parent");
// let mybtn = document.querySelector("#enterBtn");
// let mystatus = document.querySelector("#status");
const p = document.getElementById("status");
const mybtn = document.getElementById("enterBtn");

mybtn.addEventListener("click",()=>{
	p.innerHTML = "<h1>Entered Metaverse</h1>"
});