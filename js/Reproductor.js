let audio = document.getElementById("audio");
let isDragging = false;

function barra() {
	document.querySelector("audio").addEventListener('timeupdate', function () {
		document.getElementById("progreso").style.left = (this.currentTime * 94 / this.duration) + "%";
	})
}

window.addEventListener("load", barra, false);

function play() {
	audio.play();
}

function pause() {
	audio.pause();
}

//cambiar modificar el tiempo de reproduccion de la cancion con el mouse
const bar = document.getElementById("barra");

function clickBar(event) {
	const position = event.clientX - bar.getBoundingClientRect().left;
	audio.currentTime = (position / bar.clientWidth) * audio.duration;
}

bar.addEventListener("click", clickBar)

function dragBar(event) {
	if (isDragging) {
		const position = event.clientX - bar.getBoundingClientRect().left;
		audio.currentTime = (position / bar.clientWidth) * audio.duration;
	}
}

bar.addEventListener("mousemove", dragBar)
bar.addEventListener("mousedown", () => {
	isDragging = true
})
bar.addEventListener("mouseup", () => {
	if (isDragging) {
		isDragging = false;
	}
})

const barVolume = document.getElementById("volume")

function clickVolume(event) {
	const position = event.clientX - barVolume.getBoundingClientRect().left;
	audio.volume = position / barVolume.clientWidth;
	document.querySelector(".circle-volume").style.left = (position - 10) + "px";
}

barVolume.addEventListener("click", clickVolume)

function dragVolume(event) {
	if (isDragging) {
		const position = event.clientX - barVolume.getBoundingClientRect().left;
		audio.volume = position / barVolume.clientWidth;
		document.querySelector(".circle-volume").style.left = (position - 10) + "px";
	}
}
barVolume.addEventListener("mousemove", dragVolume)
barVolume.addEventListener("mousedown", () => {
	isDragging = true;
})
barVolume.addEventListener("mouseup", () => {
	if (isDragging){
		isDragging = false;
	}
})