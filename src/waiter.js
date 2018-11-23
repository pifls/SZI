let waiterPositionX = 0;
let waiterPositionY = 0;

let waiter = new Waiter(waiterPositionX, waiterPositionY);

function Waiter(i, j) {
    this.i = i;
    this.j = j;
  
    this.show = () => {
      let x = i * w;
      let y = j * w;
  
      stroke(0);
      fill(245);
      rect(x, y, w, w);
      image(img, x+2, y+2, img.width/1.4, img.height/1.4);
    }
  }