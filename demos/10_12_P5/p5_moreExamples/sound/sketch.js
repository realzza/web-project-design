var mySketch = function(s){
        var dropzone;
        var sound;

        var isSound = false;

        var playButton;

        s.setup = function() {
          s.createCanvas(200, 200);
          s.background(0);
          dropzone = s.select('#dropzone');
          dropzone.dragOver(highlight);
          dropzone.dragLeave(unhighlight);
          dropzone.drop(gotFile, unhighlight);
          playButton = s.select('#playButton');
          playButton.mousePressed(playFunction);
        }

        function playFunction(){
            if(isSound === true){
            if (!sound.isPlaying()) {
            sound.play();
            sound.setVolume(0.3);
                } else {
            sound.stop();
            }
            }
        }

        function gotFile(file) {
          s.createP(file.name + " " + file.size);
          //var img = createImg(file.data);
          //img.size(100, 100);
          //console.log(file);
          sound = s.loadSound(file, loaded);
          isSound = true;
        }

        function loaded(data) {
            //console.log(data);
            console.log(sound);
            //sound.play();
        }

        function highlight() {
          dropzone.style('background-color','#ccc');
        }

        function unhighlight() {
          dropzone.style('background-color','#fff');
        }

}

var myp5 = new p5(mySketch, 'main');