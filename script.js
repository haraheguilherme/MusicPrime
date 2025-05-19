// Lista manual dos vídeos (simulando leitura da pasta)
const videoList = [
  "Music Black Clover 3.mp3",
  "Music Black Clover 12.mp3",
  "Music Fate Stay-Night.mp3"
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

