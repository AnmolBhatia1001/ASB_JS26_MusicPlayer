const audioElement = document.getElementById("audioEle");
const playBtn = document.getElementById("play-btn");

const volLow = document.querySelectorAll(".vol-btn")[0];
const volTimeline = document.getElementById("vol-timeline");
const volHigh = document.querySelectorAll(".vol-btn")[1];


const currentDuration = document.getElementById("current-duration");
const durationTimeline = document.getElementById("duration-timeline");
const totalDuration = document.getElementById("total-duration");

function play(){
    // volTimeline.value = (audioElement.volume)*100
    if(playBtn.classList.contains("played")){
        playBtn.classList.remove("played")
        playBtn.querySelectorAll("i")[0].classList.remove("fa-pause")
        playBtn.querySelectorAll("i")[0].classList.add("fa-play")
        audioElement.pause()
    }else{
        playBtn.classList.add("played")
        playBtn.querySelectorAll("i")[0].classList.remove("fa-play")
        playBtn.querySelectorAll("i")[0].classList.add("fa-pause")
        audioElement.play()
    }
    console.log(audioElement.volume);
}

playBtn.addEventListener("click",play)
