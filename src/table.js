let table1PositionX = 3;
let table1PositionY = 1;
let table1 = new Table(table1PositionX, table1PositionY, 1);
let table2PositionX = 7;
let table2PositionY = 2;
let table2 = new Table(table2PositionX, table2PositionY, 2);
let table3PositionX = 4;
let table3PositionY = 3;
let table3 = new Table(table3PositionX, table3PositionY, 3);
let table4PositionX = 7;
let table4PositionY = 5;
let table4 = new Table(table4PositionX, table4PositionY, 4);
let table5PositionX = 2;
let table5PositionY = 7;
let table5 = new Table(table5PositionX, table5PositionY, 5);
let table6PositionX = 4;
let table6PositionY = 8;
let table6 = new Table(table6PositionX, table6PositionY, 6);
let table7PositionX = 6;
let table7PositionY = 8;
let table7 = new Table(table7PositionX, table7PositionY, 7);
let table8PositionX = 1;
let table8PositionY = 4;
let table8 = new Table(table8PositionX, table8PositionY, 8);
let table9PositionX = 8;
let table9PositionY = 7;
let table9 = new Table(table9PositionX, table9PositionY, 9);
let table10PositionX = 5;
let table10PositionY = 5;
let table10 = new Table(table10PositionX, table10PositionY, 10);

function Table(i, j, n) {
    this.i = i;
    this.j = j;
    this.n = n;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.show = () => {
      let x = i * w;
      let y = j * w;

      // draw a cell with table and it's number
      stroke(0);
      fill(0);
      rect(x, y, w, w);
      textAlign(CENTER);
      fill(255);
      text(this.n, x + 13, y + 17);
    }

    this.addEdges = arr => {
      /* tables don't have edges */
    }
  }
