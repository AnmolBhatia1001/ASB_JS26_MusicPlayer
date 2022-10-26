const audioElement = document.getElementById("audioEle");
const playBtn = document.getElementById("play-btn");

const volLow = document.querySelectorAll(".vol-btn")[0];
const volTimeline = document.getElementById("vol-timeline");
const volHigh = document.querySelectorAll(".vol-btn")[1];


const currentDuration = document.getElementById("current-duration");
const durationTimeline = document.getElementById("duration-timeline");
const totalDuration = document.getElementById("total-duration");

function play(){
    togglePlayPause()
}

function togglePlayPause(){
        let iconPlayPause = playBtn.querySelectorAll("i")[0];
    if(playBtn.classList.contains("played")){
        playBtn.classList.remove("played")
        iconPlayPause.classList.remove("fa-pause")
        iconPlayPause.classList.add("fa-play")
        audioElement.pause()
    }else{
        playBtn.classList.add("played")
        iconPlayPause.classList.remove("fa-play")
        iconPlayPause.classList.add("fa-pause")
        audioElement.play()
    }
}

// volume controller events
function volController(){
    audioElement.volume = volTimeline.value /100;
}

function low(){
    volTimeline.value = volTimeline.value - 5
    audioElement.volume = volTimeline.value /100
}

function high(){
    volTimeline.value = volTimeline.value + 5
    audioElement.volume = volTimeline.value /100
    console.log(volTimeline.value);
}


playBtn.addEventListener("click",play)
