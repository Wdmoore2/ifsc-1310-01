var obj = {
  "video": {
      "value": "<iframe title='YouTube video player' src='https://www.youtube.com/embed/3f31oufqFSM?start=42' width='640' height='390' frameborder='0' allowfullscreen='allowfullscreen'></iframe>"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("video-container").innerHTML = obj.video.value;
});