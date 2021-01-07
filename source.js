// audio files initializations
var audio_audioBinger = new Audio("sounds/audiobinger.mp3");
var audio_ketsa = new Audio("sounds/ketsa.mp3");
var audio_growingResistance = new Audio("sounds/growingResistance.mp3");
var audio_yung = new Audio("sounds/yung.mp3");
var audio_shaolin = new Audio("sounds/shaolin.mp3");

// stop audio if its still running
var audioArray = [audio_audioBinger, audio_ketsa, audio_growingResistance, audio_yung, audio_shaolin];
var activeSound;

function whiteC(){
  document.getElementById("white-c").classList.remove("shadow-c");
  document.getElementById("white-c").offsetWidth ;
  document.getElementById("white-c").classList.add("shadow-c");
}

function whiteA(){
  document.getElementById("white-a").classList.remove("shadow-a");
  document.getElementById("white-a").offsetWidth ;
  document.getElementById("white-a").classList.add("shadow-a");
}

function whiteB(){
  document.getElementById("white-b").classList.remove("shadow-b");
  document.getElementById("white-b").offsetWidth ;
  document.getElementById("white-b").classList.add("shadow-b");
}

function whiteG(){
  document.getElementById("white-g").classList.remove("shadow-g");
  document.getElementById("white-g").offsetWidth ;
  document.getElementById("white-g").classList.add("shadow-g");
}

function whiteE(){
  document.getElementById("white-e").classList.remove("shadow-e");
  document.getElementById("white-e").offsetWidth ;
  document.getElementById("white-e").classList.add("shadow-e");
}

function whiteF(){
  document.getElementById("white-f").classList.remove("shadow-f");
  document.getElementById("white-f").offsetWidth ;
  document.getElementById("white-f").classList.add("shadow-f");
}


function whiteD(){
  document.getElementById("white-d").classList.remove("shadow-d");
  document.getElementById("white-d").offsetWidth ;
  document.getElementById("white-d").classList.add("shadow-d");
}

function startAudioVisualizer(){
  document.getElementById("audio-vis").classList.add("audio-visualizer");
  document.getElementById("audio-vis-2").classList.add("audio-visualizer-2");
  document.getElementById("audio-vis-3").classList.add("audio-visualizer-3");
  document.getElementById("audio-vis-4").classList.add("audio-visualizer-4");
}

function stopAudioVisualizer(){
  document.getElementById("audio-vis").classList.remove("audio-visualizer");
  document.getElementById("audio-vis-2").classList.remove("audio-visualizer-2");
  document.getElementById("audio-vis-3").classList.remove("audio-visualizer-3");
  document.getElementById("audio-vis-4").classList.remove("audio-visualizer-4");
}

//adding buttons event listeners
document.getElementById("audioBingerButton").addEventListener("click", function()
{
  if(activeSound == audio_audioBinger)
  {
    if(audio_audioBinger.paused){
      audio_audioBinger.play();
      document.getElementById("stat-face-img").classList.add("image-border");
      startAudioVisualizer();
    }
    else{
      audio_audioBinger.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
  }
  else{
    if(activeSound != undefined){
      activeSound.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
    audio_audioBinger.play();
    document.getElementById("stat-face-img").classList.add("image-border");
    startAudioVisualizer();
    activeSound = audio_audioBinger;
  }
});

document.getElementById("ketsaButton").addEventListener("click", function() {

  if(activeSound == audio_ketsa)
  {
    if(audio_ketsa.paused){
      audio_ketsa.play();
      document.getElementById("stat-face-img").classList.add("image-border");
      startAudioVisualizer();
    }
    else{
      audio_ketsa.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
  }
  else{
    if(activeSound != undefined){
      activeSound.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
    audio_ketsa.play();
    document.getElementById("stat-face-img").classList.add("image-border");
    startAudioVisualizer();
    activeSound = audio_ketsa;
  }

});

document.getElementById("GrowingResistanceButton").addEventListener("click", function() {

  if(activeSound == audio_growingResistance)
  {
    if(audio_growingResistance.paused){
      audio_growingResistance.play();
      document.getElementById("stat-face-img").classList.add("image-border");
      startAudioVisualizer();
    }
    else{
      audio_growingResistance.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
  }
  else{
    if(activeSound != undefined){
      activeSound.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
    audio_growingResistance.play();
    document.getElementById("stat-face-img").classList.add("image-border");
    startAudioVisualizer();
    activeSound = audio_growingResistance;
  }

});

document.getElementById("yungButton").addEventListener("click", function() {
  if(activeSound == audio_yung)
  {
    if(audio_yung.paused){
      audio_yung.play();
      document.getElementById("stat-face-img").classList.add("image-border");
      startAudioVisualizer();
    }
    else{
      audio_yung.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
  }
  else{
    if(activeSound != undefined){
      activeSound.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
    audio_yung.play();
    document.getElementById("stat-face-img").classList.add("image-border");
    startAudioVisualizer();
    activeSound = audio_yung;
  }
});

document.getElementById("shaolinButton").addEventListener("click", function() {
  if(activeSound == audio_shaolin)
  {
    if(audio_shaolin.paused){
      audio_shaolin.play();
      document.getElementById("stat-face-img").classList.add("image-border");
      startAudioVisualizer();
    }
    else{
      audio_shaolin.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
  }
  else{
    if(activeSound != undefined){
      activeSound.pause();
      document.getElementById("stat-face-img").classList.remove("image-border");
      stopAudioVisualizer();
    }
    audio_shaolin.play();
    document.getElementById("stat-face-img").classList.add("image-border");
    startAudioVisualizer();
    activeSound = audio_shaolin;
  }
});
