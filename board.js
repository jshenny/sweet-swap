

function initialize(r, c){
  var x = new Array(r);
  for (var i = 0; i < x.length; i++) { 
    x[i] = [];
    for(var j = 0; j<c; j++){
      x[i].push(Math.floor(Math.random() * 5));
    }
    
  }
  console.log(x[0][2]);
  return x;
}

function display(array){
  var table = "";
  var row = "";
  for (var i = 0; i < array.length; i++) {
    row = "<tr>\n";
    for (var j = 0; j < array[i].length; j++){
      row += "\t<th>"+array[i][j].toString()+" "+"</th>\n";
      
    }
    row += "</tr>\n";
    console.log(row);
    table += row;
  }
  document.getElementById("board").innerHTML = table;

}

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  x = Math.floor((x-10)/Math.floor(bwidth/rows));
  y = Math.floor((y-28)/Math.floor(bheight/columns));
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(x);
  console.log(y);
  document.getElementById("coords").innerHTML = coor;
}

// initialize(); 
// alert(x.length);
var rows = 9;
var columns = 9;
var board = initialize(rows, columns);
// board[0][2] = 7; 
display(board);
var bwidth = document.getElementById("board").offsetWidth;
var bheight = document.getElementById("board").offsetHeight;
console.log(bwidth);
console.log(bheight);
