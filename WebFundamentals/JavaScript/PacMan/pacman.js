// List of features to build
// 1) Use js to display the world
// 2) Have the Pacman move up and down

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 3, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 3, 2, 2, 2, 2, 1, 3, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 3, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var pacman = {  // declaring a var for pacman
    x: 1,
    y: 1
};
var score = 0; // declaring a var for score

function drawWorld() {
    var output = '';

    for (var i = 0; i < world.length; i++) { //Iterating through the rows
        output += "\n<div class= 'row'>"
        for (var j = 0; j < world[i].length; j++) { //Iterating through the contents of the rows.
            if (world[i][j] == 1) {
                output += "\n<div class='wall'></div>";
            }
            else if (world[i][j] == 2) {
                output += "\n<div class='coin'></div>";
            }
            else if (world[i][j] == 0) {
                output += "\n<div class='empty'></div>";
            }
            else if (world[i][j] == 3) {
                output += "\n<div class='cherry'></div>";
            }
        }
        output += "</div>";  //closing the div we opened above.
    }
    //console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacMan() {  // Make pacman appear on the screen.
    document.getElementById('pacman').style.top = pacman.y * 46 + "px";
    document.getElementById('pacman').style.left = pacman.x * 46 + "px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
    if (score == 1390) {
        alert('You Won!!!');
    }
    if(world[pacman.y][pacman.x] == 2){
        score += 10;
    }
    else if(world[pacman.y][pacman.x] == 3){
        score += 30;
    }
}
// calling our functions here!
drawWorld();
displayPacMan();
displayScore();
// function to move our pacman as well as prevent the pacman from getting on the brick.
document.onkeydown = function (e) {              // 1- denotes a wall.
    if ((e.keyCode == 38) && (world[pacman.y - 1][pacman.x] != 1)) { // top
        pacman.y--;
    }
    else if ((e.keyCode == 40) && (world[pacman.y + 1][pacman.x] != 1)) { //down
        pacman.y++;
    }

    else if ((e.keyCode == 37) && (world[pacman.y][pacman.x - 1] != 1)) { // left
        pacman.x--;
    }
    else if ((e.keyCode == 39) && (world[pacman.y][pacman.x + 1] != 1)) { // right
        pacman.x++;
    }
    if (world[pacman.y][pacman.x] == 2) { //(world[pacman.y][pacman.x] == 3)) { // code to make the pacman eat the coins and cherry.
        world[pacman.y][pacman.x] = 0;
        score += 10;// each time the pacman eats the coins, we increment score here.
        drawWorld();// updating the world after we swap coins for empty slots.
        //displayScore();// 
    }
    if (world[pacman.y][pacman.x] == 3){ //(world[pacman.y][pacman.x] == 3)) { // code to make the pacman eat the coins and cherry.
        world[pacman.y][pacman.x] = 0;
        score += 30;// each time the pacman eats the coins, we increment score here.
        drawWorld();// updating the world after we swap coins for empty slots.
        //displayScore();// updating score after incrementing.
    }
    displayScore(); //updating score after checking if its ==2 or ==3, and increment.
    //console.log(e.keyCode);
    displayPacMan();
}
