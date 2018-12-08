let waiterPositionX = 1;
let waiterPositionY = 0;
let waiter = new Waiter(waiterPositionX, waiterPositionY);

function Waiter(i, j) {
  this.i = i;
  this.j = j;
  this.edges = [];
  this.searched = false;
  this.parent = null;

  this.show = () => {
    let x = i * w;
    let y = j * w;

    // draw a cell with a waiter
    if (i == 1 && j == 0) {
      stroke(200);
      fill('#e4e4e4');
      rect(x, y, w, w);
    } else {
    stroke(200);
    fill('#e4e4e4');
    rect(x, y, w, w);
    image(img, x + 3, y + 3, img.width / 1.1, img.height / 1.1);
    }
  }

  // add waiter neighbors
  this.addEdges = arr => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if ((arr[i][j].i >= 0 && arr[i][j].j >= 0 && arr[i][j].i <= rows && arr[i][j].j <= cols) && // check if edge is in grid
          ((arr[i][j].i === this.i && arr[i][j].j === this.j - 1) || // top edge
            (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j) || // right edge
            (arr[i][j].i === this.i && arr[i][j].j === this.j + 1) || // bottom edge
            (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j)) // left edge
        ) {
            this.edges.push(arr[i][j]);
        }
      }
    }
  }
}
