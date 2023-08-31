let audio = document.getElementById("audio");

function barra(){
	document.querySelector("audio").addEventListener('timeupdate', function () {
		document.getElementById("progreso").style.left = (this.currentTime * 94 / this.duration) + "%";
	})
}
window.addEventListener("load", barra, false);

function play(){
	audio.play();
}

function pause(){
	audio.pause();
}

const bar = document.getElementById("barra");

bar.addEventListener("click", function (ev){
	clickBar((ev.offsetX) * 36/ 100);
})
function clickBar(position){
	document.getElementById("progreso").style.left = position + "%";
	audio.currentTime = position * audio.duration / 94;
	console.log(position)
}
