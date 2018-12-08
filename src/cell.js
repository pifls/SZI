function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.show = () => {
      let x = i * w;
      let y = j * w;

      // draw a cell
      stroke(200);
      fill('#e4e4e4');
      if (x == 0 && y == 0) {
        fill('#e4e4e4');
      }
      rect(x, y, w, w);
    }

    // add cell neighbors
    this.addEdges = arr => {
      for( let i = 0; i < arr.length; i++){
        for ( let j = 0; j < arr[i].length; j++) {
          if((arr[i][j].i >= 0 && arr[i][j].j >= 0 && arr[i][j].i <= rows && arr[i][j].j <= cols) && // check if edge is in grid
            ((arr[i][j].i === this.i && arr[i][j].j === this.j - 1) || // top edge
             (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j) || // right edge
             (arr[i][j].i === this.i && arr[i][j].j === this.j + 1) || // bottom edge
             (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j))   // left edge
             ) {
            this.edges.push(arr[i][j]);
          }
        }
      }
    }

  }
