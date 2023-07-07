console.log("hello");
let songIndex = 0;
let audioElement = new Audio('./assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Sala-e-Ishq", filePath: "./assets/song/1.mp3", coverPath: "./assets/cover/1.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/2.mp3", coverPath: "./assets/cover/2.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/3.mp3", coverPath: "./assets/cover/3.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/4.mp3", coverPath: "./assets/cover/4.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/5.mp3", coverPath: "./assets/cover/5.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/6.mp3", coverPath: "./assets/cover/6.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/7.mp3", coverPath: "./assets/cover/7.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/8.mp3", coverPath: "./assets/cover/8.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/9.mp3", coverPath: "./assets/cover/9.jpg"},
    {songName: "Sala-e-Ishq", filePath: "./assets/song/10.mp3", coverPath: "./assets/cover/10.jpg"}
]

// audioElement.play();
myProgressBar.addEventListener('timeupdate', () => {
console.log('timeupdate')
})