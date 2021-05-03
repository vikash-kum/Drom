
for (var i = 0; i < document.querySelectorAll(".drum").length ; i++ ) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
        var song_name="sound/tom-" + this.innerHTML + ".mp3";
        var audio= new Audio(song_name);
        audio.play();
    }
    );

}