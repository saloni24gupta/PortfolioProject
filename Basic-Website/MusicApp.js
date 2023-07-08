console.log("hello");
let songIndex = 0;
let audioElement = new Audio('./assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItems = Array.from(document.querySelectorAll('.songItem'));
let songs = [
    { songName: "Salam1-e-Ishq", filePath: "assets/songs/1.mp3", coverPath: "assets/covers/1.jpg" },
    { songName: "Salam2-e-Ishq", filePath: "assets/songs/2.mp3", coverPath: "assets/covers/2.jpg" },
    { songName: "Salam3-e-Ishq", filePath: "assets/songs/3.mp3", coverPath: "assets/covers/3.jpg" },
    { songName: "Salam4-e-Ishq", filePath: "assets/songs/4.mp3", coverPath: "assets/covers/4.jpg" },
    { songName: "Salam5-e-Ishq", filePath: "assets/songs/5.mp3", coverPath: "assets/covers/5.jpg" },
    { songName: "Salam6-e-Ishq", filePath: "assets/songs/6.mp3", coverPath: "assets/covers/6.jpg" },
    { songName: "Salam7-e-Ishq", filePath: "assets/songs/7.mp3", coverPath: "assets/covers/7.jpg" },
    { songName: "Salam8-e-Ishq", filePath: "assets/songs/8.mp3", coverPath: "assets/covers/8.jpg" },
    { songName: "Salam9-e-Ishq", filePath: "assets/songs/9.mp3", coverPath: "assets/covers/9.jpg" }
]
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerText = songs[i].songName;
    element.getElementsByTagName('i')[0].Audio = songs[i].filePath;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// audioElement.play()

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.querySelectorAll('.songItemplay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })
}

let songlist = document.querySelectorAll('.songItemplay')

songlist.forEach((element) => {
    // console.log(element)
    
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        console.log(e.target)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./assets/songs/${index}.mp3`
        audioElement.currentTime = 0;
 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})