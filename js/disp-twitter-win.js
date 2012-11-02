if(document.getElementById("playerSongTitle") == null) {
	alert("Hmm... there's nothing to share at the moment.\nStart playing a song, and then click the icon!");
} else {
	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("#NowPlaying " + document.getElementById("playerSongTitle").childNodes[0].textContent + ' by ' + document.getElementById("playerArtist").childNodes[0].textContent), null, "width=400,height=250");
}