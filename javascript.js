// JavaScript File
var audio = new Audio("https://www.youtube.com/audiolibrary_download?vid=ef50dc9b19c42308");
$("#play").click(function(){  
    audio.play("music");
    });
$("#pause").click(function(){
    audio.pause("music");
    });
