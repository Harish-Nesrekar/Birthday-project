document.getElementById('uff').addEventListener('click', function () {
  document.getElementById("candle").style.display = "none";
  const audio = document.getElementById('bg-music');
  audio.play();

});
document.getElementById("uff").addEventListener("click", function () {
  const container = document.getElementById("back-container");

  // Only add video if not already added
  if (!container.querySelector("video")) {
    const video = document.createElement("video");
    video.src = "bag.mp4"; // Replace with your actual video path
    video.autoplay = true;
    video.loop = true;
    // video.muted = true;
    video.playsInline = true;

    container.appendChild(video);
  }
  container.style.display = "block";
});