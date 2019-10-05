var sounds = document.querySelectorAll('.sound');
var demo = document.querySelectorAll('.song');


sounds.forEach((pad, index)=>{
    pad.addEventListener('click', function(pad){
        for(var i=0; i<sounds.length; i++){
            demo[i].pause();
        }
        demo[index].currentTime = 0;
        demo[index].play();
    });
});