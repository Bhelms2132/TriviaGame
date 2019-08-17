//-- Timer--//
var number = 100;
var intervalId;



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//--Decrement fuction--//
function decrement(){

    //--Decrease number by one--//
    number--;

    $("#show-number").html("<h2>" + number + "<h2>");

    if (number === 0) {

        stop();
    }
}

function stop(){

    clearInterval(intervalId);
}

run();

console.log(number);









    






var myQuestions = [
    {
        question: "In the 1983 Thiller 'Cujo', this sweet fluffy St.Bernard was bitten by what animal before terrorizing a small town and a stay at home mom and her son ?",
     
        answers: {
            a: 'Squirrle',
            b: 'The Geico Lizard',
            c: 'bat',
        },
        correctAnswer: 'bat'
    },

    {
        question: "In the 1984 Fantasy 'Ghost Busters', Ray tried to think of the most harmless thing, something he loved from his childhood that the Ghost Busters wouldul have to fight. What was it?",
         
        answers: {
            a: 'Barney, the big purple dinasor',
            b: 'Stay Puft MarshMellow Man',
            c: 'Puff the Magic Dragon',
         },
         correctAnswer:'Stay Puft MarshMellow Man'

    },

    {
        question: "In the 1983 Drama 'Risky Buisness', what actor played the charactor 'Joel'?",
        
        answers: {
            a:'David Hasselhoff',
            b:'Tom Cruise',
            c:'Woody Harrelson',

         },
         correctAnswer: 'Tom Cruise'
    },

    {
        question: "In the 1988 Drama 'Big', what did the 12 year old boy wish for?",

        answers: {
            a:'Car',
            b:'Girlfriend',
            c:'To be an Adult',
        },
        correctAnswer:'To be an Adult'
    },

    {
        question: "In the 1985 Fantasy/Cult 'Teen Wolf', Scott Howard learns that he can turn into what animal?",

        answers: {
            a:'WereWolf',
            b:'Marmot',
            c:'Elephant',
        },
        correctAnswer:'WereWolf'

    },
    
    {
        question: "In the 1985 Fantasy/Scfi 'Back To The Future', Marty Mcfly drove what car back in time?",

        answers: {
            a:'El Comino',
            b:'F150',
            c:'Delorean',
        },
        correctAnswer:'Delorean'

    },

    {
        question: "In the 1981 Fantasy/Action 'Raiders of the LOst Ark', what actor played Indian Jones charactor?",

        answers:{
            a:'Harrison Ford',
            b:'Clint Eastwood',
            c:'Burt Reynolds',
        },
        correctAnswer:'Harrison Ford',
    },
    console.log(myQuestions)
];
 console.log(myQuestions);





