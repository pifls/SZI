function Cell(i, j, state) {
    this.i = i;
    this.j = j;

    this.show = () => {
      let x = i * w;
      let y = j * w;
    
      stroke(0);
      fill(245);
      rect(x, y, w, w);
    }
  }