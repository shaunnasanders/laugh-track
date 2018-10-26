//set count

if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count
function reset() {
	if (confirm("Really? REALLY? Let's not make any rash decisions here.")) {
    	localStorage.setItem("count",0);
		update();
	}
}