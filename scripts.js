
var game = {
    board: new Array(9),

    setUpBoard: function(col) {
        for (var i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(col);
        }
        // Loop to initialize 2D array elements
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < col; j++) {
                this.board[i][j] = {
                    value: 0,
                    selected: false,
                }
                this.board[i][j].value = Math.floor((Math.random() * 7) + 1);
            }
        }
    },
    selectSweet: function() {
        const tile = document.querySelectorAll('.grid-item');
        tile.forEach(sweet => sweet.addEventListener('click', function () {
            var sweetNumber = this.id;
            var row = Math.floor(sweetNumber / 7);
            var col = sweetNumber % 7;
            game.board[row][col].selected = true;
            console.log(row + ' ' + col);
        }));
    },
    checkBeside: function() {
        if (game.board[row][col] === true && game.board[row - 1][]) {

        }
    }
    checkVertical: function() {
        if ()
    }
    swapTiles: function() {
        var tiles = document.getElementsByClassName('grid-item');


    },
    checkMatch: function() {
        
    }
};
var view = {
    createBoard: function(rows, cols) {
        const container = document.getElementById("container");
        var gridNumber = 0;
        container.style.setProperty('==grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                let cell = document.createElement("div");
                cell.innerText = game.board[i][j].value;
                cell.id = gridNumber;
                container.appendChild(cell).className = "grid-item";
                gridNumber++;
                //let image = document.createElement("img");
                //image.src = "images/screamingcat.jpg"
                //cell.appendChild(image).className = "images";
            }
        }
    },
    displayBoard: function(rows, cols) {
        /*
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                cell.innerText = game.board[i][j];
            }
        }
        */
    }
};

game.setUpBoard(7);
view.createBoard(9, 7);
game.selectSweet();
/*
const tile = document.querySelectorAll('.grid-item');

tile.forEach(sweet => sweet.addEventListener('click', function () {
    var sweetNumber = this.id;
    var row = Math.floor(sweetNumber / 7);
    var col = sweetNumber % 7;
    game.board[row][col].selected = true;
}));

/*
function selectSweet() {
    var sweetNumber = this.id;
    var row = Math.floor(sweetNumber / 7);
    var col = sweetNumber % 7;
    game.board[row][col].selected = true;
}
tile.forEach(sweet => sweet.addEventListener('click', selectSweet));
/*
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(9, 7);
*/