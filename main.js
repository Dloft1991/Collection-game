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
}

var addValues = function(props) {
    score = score + props.value;

    $("#counter").text(score);

    chickenDinner();

}