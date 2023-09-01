let audio = document.getElementById("audio");

function barra(){
	document.querySelector("audio").addEventListener('timeupdate', function () {
		document.getElementById("progreso").style.left = (this.currentTime * 94 / this.duration) + "%";
	})
}
window.addEventListener("load", barra, false);

function play(){1
	audio.play();
}

function pause(){
	audio.pause();
}

//cambiar modificar el tiempo de reproduccion de la cancion con el mouse
const bar = document.getElementById("barra");

function clickBar(event){
	const position = event.clientX - bar.getBoundingClientRect().left;
	audio.currentTime = (position / bar.clientWidth) * audio.duration;
}
bar.addEventListener("click", clickBar)

const barVolume = document.getElementById("volume")
function volume(event){
	const position = event.clientX - barVolume.getBoundingClientRect().left;
	audio.volume = position / barVolume.clientWidth;
	document.querySelector(".circle-volume").style.left = (position - 10) + "px";
}
barVolume.addEventListener("click", volume)