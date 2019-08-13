//--Time allowed--//
var number = 100;



//--Timer interval--//
var intervalId ;



//--Start function--//
run();



//-- --//
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//--Decrement function--//
function decrement() {
      
    number--;
//--Show the number in the #show-number tag.--//
    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
        alert("Time Up!");
    }
}

