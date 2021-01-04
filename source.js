// audio files initializations
var audio_audioBinger = new Audio("sounds/audiobinger.mp3");
var audio_ketsa = new Audio("sounds/ketsa.mp3");
var audio_growingResistance = new Audio("sounds/growingResistance.mp3");
var audio_yung = new Audio("sounds/yung.mp3");
var audio_shaolin = new Audio("sounds/shaolin.mp3");

// stop audio if its still running
var audioArray = [audio_audioBinger,audio_ketsa,audio_growingResistance,audio_yung,audio_shaolin];

function stopAudio()
{
  for( var i=0 ; i<audioArray.length ; i++){
    var isPaused = audioArray[i].paused ;
    console.log(audioArray[i] + isPaused);
    if( !isPaused)
    {
      audioArray[i].pause();
    }
  }
};

//adding buttons event listeners
document.getElementById("audioBingerButton").addEventListener("click",function()
{
  console.log(audioArray.length) ;
  stopAudio();
  audio_audioBinger.play();
});

document.getElementById("ketsaButton").addEventListener("click",function()
{
  stopAudio();
  audio_ketsa.play();
});

document.getElementById("GrowingResistanceButton").addEventListener("click",function()
{
  stopAudio();
  audio_growingResistance.play();
});

document.getElementById("yungButton").addEventListener("click",function()
{
  stopAudio();
  audio_yung.play();
});

document.getElementById("shaolinButton").addEventListener("click",function()
{
  stopAudio();
  audio_shaolin.play();
});
