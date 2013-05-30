if(document.getElementById("playerSongTitle") == null) {
	alert("Hmm... there's nothing to share at the moment.\nStart playing a song, and then click the icon!");
} else {
	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("#NowPlaying " + document.getElementById("player-artist").childNodes[0].textContent + ' - ' + document.getElementById("playerSongTitle").childNodes[0].textContent) + "&related=outadev", null, "width=400,height=250");
}