const audioElement = document.getElementById("audioEle");
const playBtn = document.getElementById("play-btn");

const volLow = document.querySelectorAll(".vol-btn")[0];
const volTimeline = document.getElementById("vol-timeline");
const volHigh = document.querySelectorAll(".vol-btn")[1];


const currentDuration = document.getElementById("current-duration");
const durationTimeline = document.getElementById("duration-timeline");
const totalDuration = document.getElementById("total-duration");

const artContainer = document.querySelector(".art-container");

function play(){
    togglePlayPause()
}

function togglePlayPause(){
    calcTotalDuration()
    let iconPlayPause = playBtn.querySelectorAll("i")[0];
    
    if(playBtn.classList.contains("played")){
        playBtn.classList.remove("played")
        iconPlayPause.classList.remove("fa-pause")
        iconPlayPause.classList.add("fa-play")
        audioElement.pause()
        artContainer.style.animationPlayState = "paused";
    }else{
        playBtn.classList.add("played")
        iconPlayPause.classList.remove("fa-play")
        iconPlayPause.classList.add("fa-pause")
        audioElement.play()
        artContainer.style.animationPlayState = "running";
    }
    calcCurrTime()
}



// volume controller events
let currentVol = volTimeline.value

function volController(){
    audioElement.volume = volTimeline.value /100;
    currentVol = audioElement.volume * 100
}

function low(){
    currentVol = currentVol - 5
    volTimeline.value = currentVol
    audioElement.volume = currentVol /100
    console.log(currentVol);
}

function high(){
    ((currentVol + 5) > 100) ? currentVol = 100 : currentVol = currentVol + 5 ;
    volTimeline.value = currentVol
    audioElement.volume = currentVol /100
    console.log(currentVol);
}


// duration controller event
let currentTime = 0 
let trackDuration = 0

function calcTotalDuration(){
    let durationInMin = Math.floor(audioElement.duration / 60)
    let durationInSec = Math.floor(audioElement.duration % 60)
    
    durationInMin = durationInMin < 10 ? "0" + durationInMin : durationInMin ; 
    durationInSec = durationInSec < 10 ? "0" + durationInSec : durationInSec ; 
    totalDuration.innerText = `${durationInMin}:${durationInSec}`;
    durationTimeline.setAttribute("max", `${Math.floor(audioElement.duration)}`)
}

function calcCurrTime(){
    setInterval(()=>{
        let durationInMin = Math.floor(audioElement.currentTime / 60)
        let durationInSec = Math.floor(audioElement.currentTime % 60)
        
        durationInMin = durationInMin < 10 ? "0" + durationInMin : durationInMin ; 
        durationInSec = durationInSec < 10 ? "0" + durationInSec : durationInSec ; 
        currentDuration.innerText = `${durationInMin}:${durationInSec}`;
        durationTimeline.value = Math.floor(audioElement.currentTime)
    },1000)
}

function jumpToTime(){
   audioElement.currentTime = durationTimeline.value
}

playBtn.addEventListener("click",play)
