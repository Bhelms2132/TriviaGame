//--Declaring var needed--//
var number = 50;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var intervalId;
function run() {
    intervalId = setInterval(decrement, 1000);
  }
function decrement() {
    number--;
 $("#show-number").html("<h2>" + number + "</h2>");
   if (number === 0) {
      stop();
      displayResult();
    }
  }
function stop() {
     clearInterval(intervalId);
    }
//--Questions/Answers array--//
const myQuestions = [
    {
        question: "In the 1983 Thiller 'Cujo', this sweet fluffy St.Bernard was bitten by what animal before terrorizing a small town and a stay at home mom and her son ?",
        choices: ["Mongoose", "HoneyBadger", "Bat"],
        correctAnswer: "Bat"
    },

    {
         question: "In the 1984 Fantasy 'Ghost Busters', Ray tried to think of the most harmless thing, something he loved from his childhood that the Ghost Busters wouldul have to fight. What was it?",
         choices: ["Barney, the purple dinasor", "Stay Puft Marshmellow Man", "His dog"],
         correctAnswer:"Stay Puft Marshmellow Man"

    },

    {
        question: "In the 1983 Drama 'Risky Buisness', what actor played the charactor 'Joel'?",
        choices: ["David Hasselhoff", "Tom Cruise", "Michael J. Fox"],
        correctAnswer: "Tom Cruise"
    },

    {
        question: "In the 1988 Drama 'Big', what did the 12 year old boy wish for?",
        choices: ["A drivers license", "Girlfriend", "To be an adult"],
        correctAnswer:"To be an adult"
    },

    {
        question: "In the 1985 Fantasy/Cult 'Teen Wolf', Scott Howard learns that he can turn into what animal?",
        choices: ["WereWolf", "Marmot", "Cat"],
        correctAnswer:"WereWolf"
    },
    
    {
        question: "In the 1985 Fantasy/Scfi 'Back To The Future', Marty Mcfly drove what car back in time?",
        choices: ["El Comino", "Corvette", "Delorean"],
        correctAnswer:"Delorean"
    },

    {
        question: "In the 1981 Fantasy/Action 'Raiders of the Lost Ark', what actor played Indian Jones charactor?",
        choices:["Harrison Ford", "Clint Eastwood", "Burt Reynolds"],
        correctAnswer:'Harrison Ford',
    },
];
console.log(myQuestions);
function nextQuestion(){
    const isQuestionOver = (myQuestions.length -1) === currentQuestion;
     if (isQuestionOver){
        displayResult();
        number = 0;
        stop();
        $("#show-number").html("<h2>" + number + "</h2>");
    }else{
        currentQuestion++;
        loadQuestion();
    }
}
function loadQuestion(){
    const question = myQuestions[currentQuestion].question;
    const choices = myQuestions[currentQuestion].choices;
    $("#game").html(`
        <h5>${question}<h5>  
       ${loadChoices(choices)}`);
}
function loadChoices(choices){
    var result = "";
    for(var i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}
$(document).on("click", ".choice", function(){
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnswer = myQuestions[currentQuestion].correctAnswer;
       console.log(selectedAnswer);
       console.log(correctAnswer);
    if (correctAnswer === selectedAnswer){
        score++;
        console.log("Correct!");
        nextQuestion();
    }else{
        lost++;
        console.log("Wrong!");
        nextQuestion();
    }
});
function displayResult(){
    const result = `
     <p><h3>You got ${score} Correct questions</h3/p>
     <p><h3>You got ${lost}  Wrong questions</h3/p>
     <p><h3>Total Question${myQuestions.length}</h3/p>
     <p><h3>Trivia Over!</h3/p>`
     $("#game").html(result);
}
$(document).ready(function(){
    $("#show-number").hide(number);
});
$("#start").click(function(){
   $("#start").remove();
   $("#show-number").show(number);
   loadQuestion();
   run(); 
});;
  
   
   











    










