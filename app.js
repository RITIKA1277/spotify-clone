console.log("Welcome to Amplify");
//initialize the variables
let songIndex =0;
let audioElement = new Audio('/audio/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitems'));
let playing = document.getElementById('playing');
let volume = document.getElementById('volumeChange');


let songs = [
   
    {SongName: "Dheere Dheere" , filepath: "/audio/1.mp3" , coverPath: "/cover/songcover7.jpg" },
    {SongName: "Baarish Song " , filepath: "/audio/2.mp3" , coverPath: "/cover/songcover5.jpg" },
    {SongName: "Bang Bang " , filepath: "/audio/3.mp3" , coverPath: "/cover/songcover8.jpg" },
    {SongName: "Mere humsafar" , filepath: "/audio/4.mp3" , coverPath: "/cover/songcover6.jpg" },
    {SongName: "Bollywood - Akhil" , filepath: "/audio/5.mp3" , coverPath: "/cover/songcover5.jpg" },
    {SongName: "Bolo Har Har " , filepath: "/audio/6.mp3" , coverPath: "/cover/songcover6.jpg" },
    {SongName: "Born To Shine - DD" , filepath: "/audio/7.mp3" , coverPath: "/cover/songcover7.jpg" },
    {SongName: "Brown Munde - AP" , filepath: "/audio/8.mp3" , coverPath: "/cover/songcover8.jpg" },
]

songItems.forEach((element, i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("sname")[0].innerText = songs[i].SongName;

})


//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
   //update progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       //playing according to index 
       // playing.innerText = songs[songIndex].SongName; 

        audioElement.src = `/audio/${songIndex}.mp3`;
        playing.innerText = songs[songIndex-1].SongName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
   

})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=8) {
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    playing.innerText = songs[songIndex-1].SongName;
    audioElement.src = `/audio/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=1) {
        songIndex = 1;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `/audio/${songIndex}.mp3`;
    playing.innerText = songs[songIndex-1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

volume.addEventListener("change", function(e) {
    volumeUpdate = e.currentTarget.value / 100;
    audioElement.volume = volumeUpdate;

   // if (audioElement.volume == 0) {
   // 
   //     volume.classList.remove('fa-volume-up');
   //     volume.classList.add('fa-volume-mute');

        
   // } 
   // else{
   //     volume.classList.remove('fa-volume-mute');
   //     volume.classList.add('fa-volume-up');
   // }
    

    })

