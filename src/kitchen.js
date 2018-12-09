let kitchenPositionX = 0;
let kitchenPositionY = 0;
let kitchen = new Kitchen(kitchenPositionX, kitchenPositionY, 1);
function Kitchen(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.weight = 1;

    this.show = () => {
      let x = i * w;
      let y = j * w;

    // draw a cell with a waiter
    stroke(250);
    fill('#e4e4e4');
    rect(x, y, w, w);
    image(kitchenImg, x + 8 , y + 8, img.width / 1.3, img.height / 1.3);
    }

    this.addEdges = arr => {
    
    }
  }
