const currentAudio = document.querySelector('.my-music'); 
const shuffleAudio = document.querySelector('.btn-one');
const btn = document.getElementsByClassName('btn');
const repeatAudio = document.querySelector('.btn-two'); 
const PlayAudio = document.querySelector('.btn-three');
const audioOne = document.querySelector('.audio-one');
const audioTwo = document.querySelector('.audio-two');
const audioThree = document.querySelector('.audio-three');

const audioArray = [
    './classic-alarm.wav',
    './emergency-alarm.wav',
    './tick-tock-clock-timer.wav'
];

LoadAllEvents()
function LoadAllEvents(){
    repeatAudio.addEventListener('click',restartAudio)
    PlayAudio.addEventListener('click',playAudio)
    shuffleAudio.addEventListener('click',shuffle)
    audioOne.addEventListener('click',playAudioOne)
    audioTwo.addEventListener('click',playAudiotwo)
    audioThree.addEventListener('click',playAudiothree)
}
function restartAudio(){
    currentAudio.currentTime = 0;
}
function playAudio(){
    currentAudio.play()
}
function shuffle(){
    
    let random = Math.floor(Math.random()*3);
    currentAudio.setAttribute('src',audioArray[random])
}
function playAudioOne(){
    currentAudio.setAttribute('src',audioArray[0])
    currentAudio.play()
}
function playAudiotwo(){
    currentAudio.setAttribute('src',audioArray[1])
    currentAudio.play()
}
function playAudiothree(){
    currentAudio.setAttribute('src',audioArray[2])
    currentAudio.play()
}