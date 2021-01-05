// audio files initializations
var audio_audioBinger = new Audio("sounds/audiobinger.mp3");
var audio_ketsa = new Audio("sounds/ketsa.mp3");
var audio_growingResistance = new Audio("sounds/growingResistance.mp3");
var audio_yung = new Audio("sounds/yung.mp3");
var audio_shaolin = new Audio("sounds/shaolin.mp3");

// stop audio if its still running
var audioArray = [audio_audioBinger, audio_ketsa, audio_growingResistance, audio_yung, audio_shaolin];
var activeSound;

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
