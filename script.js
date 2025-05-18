// Lista manual dos vídeos (simulando leitura da pasta)
const videoList = [
  "Song1.mp4",
  "Song2.mp4",
  "Another_Song.mp4"
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

