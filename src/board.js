let board1PositionX = 4;
let board1PositionY = 2;
let board1 = new Board(board1PositionX, board1PositionY);
let board2PositionX = 9;
let board2PositionY = 3;
let board2 = new Board(board2PositionX, board2PositionY);
let board3PositionX = 10;
let board3PositionY = 4;
let board3 = new Board(board3PositionX, board3PositionY);
let board4PositionX = 12;
let board4PositionY = 5;
let board4 = new Board(board4PositionX, board4PositionY);
let board5PositionX = 15;
let board5PositionY = 6;
let board5 = new Board(board5PositionX, board5PositionY);
let board6PositionX = 4;
let board6PositionY = 7;
let board6 = new Board(board6PositionX, board6PositionY);
let board7PositionX = 6;
let board7PositionY = 8;
let board7 = new Board(board7PositionX, board7PositionY);
let board8PositionX = 9;
let board8PositionY = 9;
let board8 = new Board(board8PositionX, board8PositionY);
let board9PositionX = 5;
let board9PositionY = 10;
let board9 = new Board(board9PositionX, board9PositionY);
let board10PositionX = 15;
let board10PositionY = 8;
let board10 = new Board(board10PositionX, board10PositionY);

function Board(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;
    this.active = false;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.weight = 0.5;

    this.show = () => {
      let x = i * w;
      let y = j * w;

    // draw a cell with a waiter
    stroke(250);
    fill('#e4e4e4');
    rect(x, y, w, w);
    if ( this.active ) {
      image(skaterImg, x + 8 , y + 10, img.width / 1.3, img.height / 1.3);
    } else {
      image(boardImg, x + 8 , y + 18, img.width / 1.3, img.height / 1.3);
    }
    }

    this.addEdges = arr => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if ((arr[i][j].i >= 0 && arr[i][j].j >= 0 && arr[i][j].i <= rows && arr[i][j].j <= cols) && // check if edge is in grid
            ((arr[i][j].i === this.i && arr[i][j].j === this.j - 1) || // top edge
              (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j) || // right edge
              (arr[i][j].i === this.i && arr[i][j].j === this.j + 1) || // bottom edge
              (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j) || // left edge
              (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j - 1) || // left top
              (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j + 1) || // left bottom
              (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j - 1) || // right top
              (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j + 1)) // right bottom
          ) {
              this.edges.push(arr[i][j]);
          }
        }
      }
    }
  }
