$(document).ready( function() {

  function playOnClick(note) {
    $("." + note).click(function() {
      playAudio(note);
    });
  }

  function playAudio(note) {
    var audio_tag = document.getElementById(note + 'Audio');
    audio_tag.currentTime = 0;
    audio_tag.play();
  }

  playOnClick("c");
  playOnClick("d");
  playOnClick("e");
  playOnClick("f");
  playOnClick("g");
  playOnClick("a");
  playOnClick("b");
});
