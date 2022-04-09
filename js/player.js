const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles----------------------------------------------------------------------
const songs = ['Excuses', 'Chaand Baaliyan', 'Heat Waves', 'Raatan Lambiyan', 'Desires', 'Doobey', 'Insane', 'Ranjha', 'Stay','Brown Munde', 
'Envolver', 'Plan A', 'Enemy (with JID)', 'Cold Heart', 'INDUSTRY BABY', 'MIDDLE OF THE NIGHT', 'Pepas', 'Easy On Me', 'Alive', 'More Than You Know', 'The Nights', 'Levels (Radio Edit)',
'Titanium (feat. Sia)', 'I Could Be The One', 'Dont Let Me Down', 'Wake Me Up', 'Alone', 'Hey Brother', 'Agar Tum Saath Ho - Lofi', 'Arcade - Lofi', 'Changes - Lofi', 'I See Fire',
'Iktara - Lofi', 'Night Changes', 'Over Again', 'Saibo - Lofi', 'Tum kyu Chale Aate Ho -  Lofi', 'Tum Mile - Lofi', 'Bharat Humko Jaan Se Pyara Hai', 'Chak De India',
'JaNa GaNa MaNa','Kandho Se Milte Hain Kandhe','Teri Mitti','Maa Tujhe Salaam'];

const artistl = ['AP Dhillon', 'Aditya A', 'Glass Animals', 'Tanishk Bagchi', 'Ap Dhillon, Gurinder Gill', 'OAFF, Savera', 'AP Dhillon', 'Jasleen Royal','Justin Bieber, The Kid LAROI','Ap Dhillon',
'Anitta', 'Paulo Londra', 'Imagin Dragon, JID, Arcane, League of Legends', 'Elton John, Dua Lipa, PNAU', 'Lil Nas X, Jack Harlow', 'Elley Duhe', 'Farruko', 'Adele', 'Krewella', 'Axwell /\ Ingrosso',
'Avicii', 'Avicii' ,'David Guetta, Sia', 'Avicii, Nicky Romero', 'The Chainsmokers, Daya', 'Avicii', 'Marshmello', 'Avicii', '', '', '', 'Ed Sheeran', '', 'One Direction', 'One Direction',
'', '', '', 'A.R. Rahman, Hariharan', '','','Shankar Mahadevan, Sonu Nigam','Arko, B Prak','A.R. Rahman - Voice of a Nation']

// Keep track of song---------------------------------------------------------------
let songIndex = 0;
let artistIndex = songIndex;


function testfun(a) {
  // let m = document.getElementById('p').innerHTML;
  var index;
  for (var i = 0; i <= songs.length; i++) {
    if (a == songs[i]) {
      index = i;
      songIndex = i;
    }
  }
  // var index = songs.findIndex(checkindex());
  // function checkindex(b) {
  //   return b == m;
  // }
  console.log(index);
  loadSong(a,artistl[index]);
  playSong();
}

// Initially load song details into DOM---------------------------------------------
let tempx = songs[songIndex];
let tempy = artistl[artistIndex];
loadSong(tempx,tempy);

// Update song details--------------------------------------------------------------
function loadSong(song,artis) {
  title.innerText = song;
  artist.innerText = artis;
  audio.src = `media/music/${song}.mp3`;
  cover.src = `media/cover/${song}.jpg`;
  console.log(audio.src);
}

// Play song------------------------------------------------------------------------
function playSong() {
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play()
}

// Pause song-----------------------------------------------------------------------
function pauseSong() {
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause()
}

// Previous song -------------------------------------------------------------------
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  artistIndex = songIndex;
  si = songs[songIndex];
  ai = artistl[artistIndex];

  loadSong(si,ai);

  playSong();
}

// Next song------------------------------------------------------------------------
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  artistIndex = songIndex;
  si = songs[songIndex];
  ai = artistl[artistIndex];

  loadSong(si,ai);

  playSong();
}

// Update progress bar--------------------------------------------------------------
function updateProgress(e) {
  
  // console.log(e.srcElement.currentTime);

  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar-----------------------------------------------------------------
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  // console.log(clickX);
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song---------------------------------------
function DurTime (e) {
  const {duration,currentTime} = e.srcElement;
  var sec;
  var sec_d;

  // define minutes currentTime
  let min = (currentTime==null)? 0:
   Math.floor(currentTime/60);
   min = min <10 ? '0'+min:min;

  // define seconds currentTime
  function get_sec (x) {
    if(Math.floor(x) >= 60){
      
      for (var i = 1; i<=60; i++){
        if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
          sec = Math.floor(x) - (60*i);
          sec = sec <10 ? '0'+sec:sec;
        }
      }
    }else{
      sec = Math.floor(x);
      sec = sec <10 ? '0'+sec:sec;
     }
  } 

  get_sec (currentTime,sec);

  // change currentTime DOM
  currTime.innerHTML = min +':'+ sec;

  // define minutes duration
  let min_d = (isNaN(duration) === true)? '0':
    Math.floor(duration/60);
   min_d = min_d <10 ? '0'+min_d:min_d;


   function get_sec_d (x) {
    if(Math.floor(x) >= 60){
      
      for (var i = 1; i<=60; i++){
        if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
          sec_d = Math.floor(x) - (60*i);
          sec_d = sec_d <10 ? '0'+sec_d:sec_d;
        }
      }
    }else{
      sec_d = (isNaN(duration) === true)? '0':
      Math.floor(x);
      sec_d = sec_d <10 ? '0'+sec_d:sec_d;
     }
  } 

  // define seconds duration
  
  get_sec_d (duration);

  // change duration DOM
  durTime.innerHTML = min_d +':'+ sec_d;
    
};

// Event listeners------------------------------------------------------------------
playBtn.addEventListener('click', () => {
  // var a = musicContainer.classList.contains('play');
  // var isPlaying = a;
  // var a = audio.play;
  // var isPlaying = audio.pause();

  if (audio.duration > 0 && !audio.paused) {
    pauseSong();
  } else {
    playSong();
  }

  // if (isPlaying) {
  //   pauseSong();
  // } else {
  //   playSong();
  // }
});

// Change song----------------------------------------------------------------------
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update-----------------------------------------------------------------
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar------------------------------------------------------------
progressContainer.addEventListener('click', setProgress);

// Song ends------------------------------------------------------------------------
audio.addEventListener('ended', nextSong);

// Time of song---------------------------------------------------------------------
audio.addEventListener('timeupdate',DurTime);

let volume = document.querySelector("#volume-control");
let output = document.querySelector("#demo");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
output.innerHTML = volume.value;
})