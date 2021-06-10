// NO ARGUMENTS
const paintWall1 = function() {
    console.log("The first wall has been painted red");
};

paintWall1();

// SINGLE ARGUMENT
const paintWall2 = function(color) {
    console.log("The second wall has been painted " + color);
};

paintWall2("green");
paintWall2("pink")

// MULTIPLE ARGUMENTS
const paintWall3 = function(color2, color1) {
    console.log("The third wall has been painted with a mixture of " + color1 + " and " + color2);
}

paintWall3("purple", "blue");
paintWall3("blue", "purple");
