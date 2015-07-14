var turn = "X";

var nextTurn = function() {
  if (turn === "X")
    turn = "O";
  else
    turn = "X";
};


// index based arrays
var winningCombinations = [
// horizontals
  [0,1,2],
  [3,4,5],
  [6,7,8],
// verticals
  [0,3,6],
  [1,4,7],
  [2,5,8],
// diagonals
  [0,4,8],
  [6,4,2],
];


var checkWinner = function() {
  // horizontals
  if ( ($('#0').text() === "X" && $('#1').text() === "X") && ($('#1').text() === "X" && $("#2").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#0').text() === "O" && $('#1').text() === "O") && ($('#1').text() === "O" && $("#2").text() === "O") ) {
    alert("WINNER!");
  } else if ( ($('#3').text() === "X" && $('#4').text() === "X") && ($('#4').text() === "X" && $("#5").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#3').text() === "O" && $('#4').text() === "O") && ($('#4').text() === "O" && $("#5").text() === "O") ) {
    alert("WINNER!");
  } else if ( ($('#6').text() === "X" && $('#7').text() === "X") && ($('#7').text() === "X" && $("#8").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#6').text() === "O" && $('#7').text() === "O") && ($('#7').text() === "O" && $("#8").text() === "O") ) {
    alert("WINNER!");

    // verticals
  } else if  ( ($('#0').text() === "X" && $('#3').text() === "X") && ($('#3').text() === "X" && $("#6").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#0').text() === "O" && $('#3').text() === "O") && ($('#3').text() === "O" && $("#6").text() === "O") ) {
    alert("WINNER!");
  } else if ( ($('#1').text() === "X" && $('#4').text() === "X") && ($('#4').text() === "X" && $("#7").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#1').text() === "O" && $('#4').text() === "O") && ($('#4').text() === "O" && $("#7").text() === "O") ) {
    alert("WINNER!");
  } else if ( ($('#2').text() === "X" && $('#5').text() === "X") && ($('#5').text() === "X" && $("#8").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#2').text() === "O" && $('#5').text() === "O") && ($('#5').text() === "O" && $("#8").text() === "O") ) {
    alert("WINNER!");

    // diagonals
  } else if ( ($('#0').text() === "X" && $('#4').text() === "X") && ($('#4').text() === "X" && $("#8").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#0').text() === "O" && $('#4').text() === "O") && ($('#4').text() === "O" && $("#8").text() === "O") ) {
    alert("WINNER!");
  } else if ( ($('#2').text() === "X" && $('#4').text() === "X") && ($('#4').text() === "X" && $("#6").text() === "X") ) {
    alert("WINNER!");
  } else if ( ($('#2').text() === "O" && $('#4').text() === "O") && ($('#4').text() === "O" && $("#6").text() === "O") ) {
    alert("WINNER!");
  };
};


$(document).ready(function() {
  $('.square').on('click', function() {
    $(this).text(turn);
    nextTurn();
    $(this).off('click');
    checkWinner();
  });
});



