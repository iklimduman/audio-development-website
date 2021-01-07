// audio files initializations
var audio_audioBinger = new Audio("sounds/audiobinger.mp3");
var audio_ketsa = new Audio("sounds/ketsa.mp3");
var audio_growingResistance = new Audio("sounds/growingResistance.mp3");
var audio_yung = new Audio("sounds/yung.mp3");
var audio_shaolin = new Audio("sounds/shaolin.mp3");

// stop audio if its still running
var audioArray = [audio_audioBinger, audio_ketsa, audio_growingResistance, audio_yung, audio_shaolin];
var activeSound;

// functions for white keys
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

//functions for black keys

function blackDB() {
  document.getElementById("black-db-key").classList.remove("shadow-black-key");
  document.getElementById("black-db-key").offsetWidth ;
  document.getElementById("black-db-key").classList.add("shadow-black-key");
}

function blackEB() {
  document.getElementById("black-eb-key").classList.remove("shadow-black-key");
  document.getElementById("black-eb-key").offsetWidth ;
  document.getElementById("black-eb-key").classList.add("shadow-black-key");
}

function blackGB() {
  document.getElementById("black-gb-key").classList.remove("shadow-black-key");
  document.getElementById("black-gb-key").offsetWidth ;
  document.getElementById("black-gb-key").classList.add("shadow-black-key");
}


function blackAB() {
  document.getElementById("black-ab-key").classList.remove("shadow-black-key");
  document.getElementById("black-ab-key").offsetWidth ;
  document.getElementById("black-ab-key").classList.add("shadow-black-key");
}


function blackBB() {
  document.getElementById("black-bb-key").classList.remove("shadow-black-key");
  document.getElementById("black-bb-key").offsetWidth ;
  document.getElementById("black-bb-key").classList.add("shadow-black-key");
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

//adding event listeners for keypress event of piano keys

document.addEventListener("keypress",function(event){

  makePianoSound(event.key);

});

function makePianoSound(key)
{
  switch(key){
    case "a":
      var c5 = new Audio("sounds/C5.ogg");
      c5.play();
      whiteC();
      break;

    case "s":
      var d5 = new Audio("sounds/D5.ogg");
      d5.play();
      whiteD();
      break;

    case "d":
      var e5 = new Audio("sounds/E5.ogg");
      e5.play();
      whiteE();
      break;

    case "f":
      var f5 = new Audio("sounds/F5.ogg");
      f5.play();
      whiteF();
      break;

    case "g":
      var g5 = new Audio("sounds/G5.ogg");
      g5.play();
      whiteG();
      break;

    case "h":
      var a5 = new Audio("sounds/A5.ogg");
      a5.play();
      whiteA();
      break;

    case "j":
      var b5 = new Audio("sounds/B5.ogg");
      b5.play();
      whiteB();
      break;

    case "w":
      var cDiyez = new Audio("sounds/cDiyez_5.ogg");
      cDiyez.play();
      blackDB();
      break ;

    case "e":
      var dDiyez = new Audio("sounds/dDiyez_5.ogg");
      dDiyez.play();
      blackEB();
      break;

    case "t":
      var fDiyez = new Audio("sounds/fDiyez_5.ogg");
      fDiyez.play();
      blackGB();
      break;

    case "y":
      var gDiyez = new Audio("sounds/gDiyez_5.ogg");
      gDiyez.play();
      blackAB();
      break;

    case "u":
      var aDiyez = new Audio("sounds/aDiyez_5.ogg");
      aDiyez.play();
      blackBB();
      break;
  }

}
