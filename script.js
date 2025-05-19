// Lista manual dos vídeos (simulando leitura da pasta)
const videoList = [
  "Music Black Clover 3.mp3",
  "Music Black Clover 12.mp3",
  "Music Fate Stay-Night.mp3",
  "Music Fate Zero.mp3",
  "Music Jujutsu Kaisen.mp3",
  "Music Oshi no ko.mp3",
  "Music Solo Leveling.mp3",
  "Music The Rising of the Shield Hero",
  "Music Tower of God"
];

const playlistContainer = document.getElementById("playlist");
const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");

videoList.forEach(videoFile => {
  const btn = document.createElement("button");
  const musicName = videoFile.replace(".mp4", "").replace(/_/g, " ");
  btn.textContent = musicName;

  btn.addEventListener("click", () => {
    videoPlayer.src = `src/Music/${videoFile}`;
    videoTitle.textContent = musicName;
    videoPlayer.play();
  });

  playlistContainer.appendChild(btn);
});

