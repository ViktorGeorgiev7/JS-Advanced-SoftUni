let matrix = [//messy code incoming
[false, false, false],
[false, false, false],
[false, false, false]
             ]
console.table(matrix)
//first player mark is X
//second player mark is O
//make a correct turn counter for the end of the application
let input = ["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]

let counter = 0;
while (true) 
{
    //take first element of array and remove it
    let move = input.shift();
    if (move == undefined) {//means there are no more moves to play
        console.log("end of game.nobody wins.")
        break;
    }
    //parsing coordinates
    let row = Number(move[0]);
    let col = Number(move[2]);
    if (checkOutOfBounds(row,col)) {//wrong coordinates
        console.log("Coordinates out of matrix.Re-enter correct coordinates!");
        continue;
    }
    if (checkIndexAlreadyTaken(row,col,matrix)) {//taken coordinates
        console.log("This place is already taken. Please choose another!");
        continue;
    } 
    if (counter % 2 == 0)//x moves 
    {
        matrix[row][col] = "X";
    }
    else {matrix[row][col] = "O"}//o moves
    console.table(matrix)//write out matrix for easier debugging and following of the game
    counter++;
    let winText = checkWin(matrix);//win checker
    if (winText.length > 1) {
        console.log(winText)
        break;
    }
}


function checkOutOfBounds(row,col)
{
    if (row<0||row>2||col<0||col>2) {
        return true;//matrix of [row][col] is out of bounds
    }
    return false;//in bounds
}
function checkIndexAlreadyTaken(row,col,matrix)
{
    if (matrix[row][col]==false) {
        return false;//matrix of [row][col] is false(free) and can be taken by a mark
    }
    return true;
}
function checkWin(matrix)
{
    //x 
    if ((matrix[0][0] == "X" && matrix[0][1] == "X" && matrix[0][2] == "X") || (matrix[1][0] == "X" && matrix[1][1] == "X" && matrix[1][2] == "X") ||
    (matrix[2][0] == "X" && matrix[2][1] == "X" && matrix[2][2] == "X")) {
        return "row win for x";}
    if ((matrix[0][0] == "X" && matrix[1][0] == "X" && matrix[2][0] == "X") ||
    (matrix[0][1] == "X" && matrix[1][1] == "X" && matrix[2][1] == "X")||
    (matrix[0][2] == "X" && matrix[1][2] == "X" && matrix[2][2] == "X")) {
        return "col win for x";
    }
    if ((matrix[0][0] == "X" && matrix[1][1] == "X" && matrix[2][2] == "X") ||
    (matrix[0][2] == "X" && matrix[1][1] == "X" && matrix[2][0] == "X"))  {
        return "diagonal win for x";
    }
    //o
    if ((matrix[0][0] == "O" && matrix[0][1] == "O" && matrix[0][2] == "O") || 
    (matrix[1][0] == "O" && matrix[1][1] == "O" && matrix[1][2] == "O") ||
    (matrix[2][0] == "O" && matrix[2][1] == "O" && matrix[2][2] == "O")) {
        return "row win for o";}
    if ((matrix[0][0] == "O" && matrix[1][0] == "O" && matrix[2][0] == "O") ||
    (matrix[0][1] == "O" && matrix[1][1] == "O" && matrix[2][1] == "O")||
    (matrix[0][2] == "O" && matrix[1][2] == "O" && matrix[2][2] == "O")) {
        return "col win for o";
    }
    if ((matrix[0][0] == "O" && matrix[1][1] == "O" && matrix[2][2] == "O") ||
    (matrix[0][2] == "O" && matrix[1][1] == "O" && matrix[2][0] == "O"))  {
        return "diagonal win for o";
    }
    return "-";
}