let kitchenPositionX = 0;
let kitchenPositionY = 0;
let kitchen = new Kitchen(kitchenPositionX, kitchenPositionY, 1);
function Kitchen(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.show = () => {
      let x = i * w;
      let y = j * w;

    // draw a cell with a waiter
    stroke(200);
    fill(245);
    rect(x, y, w, w);
    image(kitchenImg, x + 3 , y + 3, img.width / 1.3, img.height / 1.3);
    }

    this.addEdges = arr => {
      /* tables don't have edges */
    }
  }
