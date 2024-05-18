let progress = document.getElementById("progress"),
    song = document.querySelector("audio"),
    ctrlIcon = document.querySelector(".controls div:nth-child(2)");
progress.max = song.duration;
progress.value = song.currentTime;
progress.onchange = () => {
    song.currentTime = progress.value;
    ctrlIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;
    song.play();
    setInterval(() => { progress.value = song.currentTime; }, 500);
};
function playPause() {
    if (ctrlIcon.children[0].classList.contains("fa-pause")) {
        ctrlIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;
        song.play();
        setInterval(() => { progress.value = song.currentTime; }, 500);
    } else {
        ctrlIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        song.pause();
    };
};