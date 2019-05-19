var game = document.querySelector('main');

var props = {
    dog: {
        name: "dog",
        value: 0
    },
    gun: {
        name: "gun",
        value: 0
    },
    ship: {
        name: "ship",
        value: 0
    }
     
};

var goal = 0;
var score = 0;
var wins = 1;
var losses = 1;

var randomizer = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var gameStart = function() {
    score = 0;
    // numbers for the stones, values between 1 and 15
    goal = randomizer(21, 105);

    // stones values each game
     props.dog.value = randomizer(1, 15);
     props.ship.value = randomizer(1, 15);
     props.gun.value = randomizer(1, 15);

    //write this in the HTML 
    $("#goal").text(goal);
    $("#counter").text(score);
   
    //does this work?
    console.log("goal: " + goal);
    console.log("dog: " + props.dog.value);
    console.log("ship: " + props.ship.value);
    console.log("gun: " + props.gun.value);
}

var addValues = function(props) {
    score = score + props.value;

    $("#counter").text(score);

    chickenDinner();

}

let chickenDinner = function(){

    //conditions for win/ loss
    if (score === goal) {
                // alert("You Win!");
                $("#wins").text(wins ++);
                console.log(wins);
                gameStart();
            }
            else if (score >= goal) {
                $("#losses").text(losses ++);
                gameStart();
            }
           
            
        }

gameStart();

$("#dog").on("click", function() {
    addValues(props.dog);
});

$("#ship").on("click", function() {
    addValues(props.ship);
});

$("#gun").on("click", function() {
    addValues(props.gun);
});
