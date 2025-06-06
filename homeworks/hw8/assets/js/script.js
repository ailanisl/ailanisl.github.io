function toggleSongs() {
    let songsSecondHalf = document.getElementById("songs-second-half");
   return songsSecondHalf.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;