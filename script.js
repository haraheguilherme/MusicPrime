// Lista manual dos vídeos (simulando leitura da pasta)
const musicList = [
  "Music Black Clover 3.mp3",
  "Music Black Clover 12.mp3",
  "Music Fate Stay-Night.mp3",
  "Music Fate Zero.mp3",
  "Music Jujutsu Kaisen.mp3",
  "Music Oshi no ko.mp3",
  "Music Solo Leveling.mp3",
  "Music The Rising of the Shield Hero",
  "Music Tower of God.mp3"
];

const playlistContainer = document.getElementById("playlist");
const musicPlayer = document.getElementById("musicPlayer");
const musicTitle = document.getElementById("musicTitle");

musicList.forEach(musicFile => {
  const btn = document.createElement("button");
  const musicName = musicFile.replace(".mp3", "").replace(/_/g, " ");
  btn.textContent = musicName;

  btn.addEventListener("click", () => {
    musicPlayer.src = `src/Music/${musicFile}`;
    musicTitle.textContent = musicName;
    musicPlayer.play();
  });

  playlistContainer.appendChild(btn);
});

