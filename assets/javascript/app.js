$(document).ready(function(){
    var time = 30;
    function restart(){
        $("#")
    }

    var questions = [
    {
        q: "How many digits are there in Hindu-Arabic System?",
        a: "10",
        b: "20",
        c: "30",
        answer: "a"
        
    },
    {
        q: "Among the following which natural number has no predecessor?",
        a: "100",
        b: "200",
        c: "1",
        answer: "c"
        
    },
    {
        q: "What does 1 googol means?",
        a: "1 followed by hundred zeros",
        b: "1 followed by thousand zeros",
        c: "1 followed by 1 lakh zeros",
        answer: "a"
    },
    {
        q: "Which among the following is the largest known number in the world?",
        a: "googol",
        b: " gram",
        c: "googolplex",
        answer: "c"
    }
   ];
    
    
    function questionOne(){
        $("#question").text(questions[0].q);
        $("#a").text(questions[0].a);
        $("#b").text(questions[0].b);
        $("#c").text(questions[0].c);
    }
    function questionTwo(){
        $("#question").text(questions[1].q);
        $("#a").text(questions[1].a);
        $("#b").text(questions[1].b);
        $("#c").text(questions[1].c);
    }
    function questionThree(){
        $("#question").text(questions[2].q);
        $("#a").text(questions[2].a);
        $("#b").text(questions[2].b);
        $("#c").text(questions[2].c);
    }
    function questionFour(){
        $("#question").text(questions[0].q);
        $("#a").text(questions[3].a);
        $("#b").text(questions[3].b);
        $("#c").text(questions[3].c);
    }

        $("#click").on("click",function(){
            $("#click").hide();
            $("#time-clock").text("00:"+ time);
            var sTime = setInterval(function()
            {
             if (time != 0){
                 $("#time-clock").text("00:"+time);
                 time = time -1;
                 questionOne();
                   $("#a").on("click",function(){
                    questionTwo();
                })
    
        
                 }
            
         },1000)
    
        })

    
    
   
})

    
        


    
    
    


