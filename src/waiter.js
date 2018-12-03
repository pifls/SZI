let waiterPositionX = 0;
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
    stroke(0);
    fill(245);
    if (x == 0 && y == 0) {
      fill(200);
    }
    rect(x, y, w, w);
    image(img, x + 2, y + 2, img.width / 1.1, img.height / 1.1);
  }

  // add waiter neighbors
  this.addEdges = arr => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if ((arr[i][j].i >= 0 && arr[i][j].j >= 0 && arr[i][j].i <= 9 && arr[i][j].j <= 9) && // check if edge is in grid
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
