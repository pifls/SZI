let entryPositionX = 24;
let entryPositionY = 14;
let entry = new Entry(entryPositionX, entryPositionY, 1);
function Entry(i, j) {
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
    rect(x, y, w, w);
    image(entryIcon, x + 0.5 , y, img.width / 1, img.height / 1);
    }

    this.addEdges = arr => {
      /* tables don't have edges */
    }
  }
