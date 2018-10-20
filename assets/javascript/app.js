$(document).ready(function(){
    var questions = [
    {
        q:"How Are You?",
        a:"Good!",
        b:"No Good!",
        c:"None!"
    },

    {
        q:"How Old Are You?",
        a:"11",
        b:"12!",
        c:"13"
    },

   ];
        
    
    function start(){
        //start the game
        $("#time-clock").text("Time Remaining: 00.00");
        $("#time-clock").hide();
       //when click button everything show up and start
        $("#click").on("click",function(){
        $("#time-clock").show();
        alert("game start");
     })
    }
     start();


})

    
        


    
    
    


