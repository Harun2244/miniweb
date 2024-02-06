let isPlaying = false;
let prevSound;

function playSound(soundId){
    let currentSound = document.getElementById(soundId);

        if(isPlaying){
            prevSound.pause();
            prevSound.currentTime=0;
        }

        currentSound.play();
        prevSound=currentSound;
        isPlaying=true;
    
}