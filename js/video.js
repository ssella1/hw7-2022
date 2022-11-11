// var video = document.querySelector("#player1");
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.load = false;
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Slow Down");
	video.playbackRate *= 0.90;
	console.log("The new speed is" + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Speed Up");
	video.playbackRate /= 0.90;
	console.log("The new speed is" + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("First location is" + video.currentTime);
	video.currentTime += 10;
	console.log("The new location is" + video.currentTime)
	if (video.currentTime>=video.duration){
		video.currentTime=0;
		console.log("Going to the beginning of the video");
		console.log("The new location is" + video.currentTime);
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	// video.muted();
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else  {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}	
});
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	console.log("The Current Volume Is" + video.volume);	
});
document.querySelector("#vintage").addEventListener("click", function() { 
	console.log("Old School");
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

