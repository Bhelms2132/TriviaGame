//--Declaring var needed--//
var number = 100;
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
    }
  }

  function stop() {

    clearInterval(intervalId);
    alert("Times Up!")
  }
  run();

//--Questions/Answers array--//
const myQuestions = [
    {
        question: "In the 1983 Thiller 'Cujo', this sweet fluffy St.Bernard was bitten by what animal before terrorizing a small town and a stay at home mom and her son ?",
        choices: ["Snake", "Coyote", "Bat"],
        correctAnswer: "Bat"
    },

    {
         question: "In the 1984 Fantasy 'Ghost Busters', Ray tried to think of the most harmless thing, something he loved from his childhood that the Ghost Busters wouldul have to fight. What was it?",
         choices: ["Barney, the big purple dinasor", "Stay Puft Marshmellow Man", "His dog"],
         correctAnswer:"Stay Puft MarshMellow Man"

    },

    {
        question: "In the 1983 Drama 'Risky Buisness', what actor played the charactor 'Joel'?",
        choices: ["David Hasselhoff", "Tom Cruise", "Michael J. Fox"],
        correctAnswer: "Tom Cruise"
    },

    {
        question: "In the 1988 Drama 'Big', what did the 12 year old boy wish for?",
        choices: ["A drivers license", "Girlfriend", "To be an adult"],
        correctAnswer:"To be an Adult"
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
        question: "In the 1981 Fantasy/Action 'Raiders of the LOst Ark', what actor played Indian Jones charactor?",
        choices:["Harrison Ford", "Clint Eastwood", "Burt Reynolds"],
        correctAnswer:'Harrison Ford',
    },
    
];

console.log(myQuestions);

 
function nextQuestion(){

    const isQuestionOver = (myQuestions.length -1) === currentQuestion;

    if (isQuestionOver){
        console.log("Game Over!");
        displayResult();
    }else{
        currentQuestion++;
        loadQuestion();
    }
    
}


function loadQuestion(){

    const question = myQuestions[currentQuestion].question;
    const choices = myQuestions[currentQuestion].choices;
    
   
    $("#game").html(`
        <h4>${question}<h4>  
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
     <p>You got ${score} Correct questions</p>
     <p>You got ${lost}  Wrong questions</p>
     <p>Total ${myQuestions.length} questions</p>
     
     `;
    $("#game").html(result);
}



$("#start").click(function(){
   $("#start").remove();
   $("#show-number").html(number);
   loadQuestion();
});
  
   
   











    










