 let plant1PositionX = 8;
 let plant1PositionY = 2;
 let plant1 = new Plant(plant1PositionX, plant1PositionY);
 let plant2PositionX = 12;
 let plant2PositionY = 2;
 let plant2 = new Plant(plant2PositionX, plant2PositionY);
 let plant3PositionX = 3;
 let plant3PositionY = 4;
 let plant3 = new Plant(plant3PositionX, plant3PositionY);
 let plant4PositionX = 14;
 let plant4PositionY = 3;
 let plant4 = new Plant(plant4PositionX, plant4PositionY);
 let plant5PositionX = 13;
 let plant5PositionY = 6;
 let plant5 = new Plant(plant5PositionX, plant5PositionY);
 let plant6PositionX = 8;
 let plant6PositionY = 6;
 let plant6 = new Plant(plant6PositionX, plant6PositionY);
 let plant7PositionX = 5;
 let plant7PositionY = 5;
 let plant7 = new Plant(plant7PositionX, plant7PositionY);
 let plant8PositionX = 8;
 let plant8PositionY = 7;
 let plant8 = new Plant(plant8PositionX, plant8PositionY);
 let plant9PositionX = 14;
 let plant9PositionY = 4;
 let plant9 = new Plant(plant9PositionX, plant9PositionY);
 let plant10PositionX = 14;
 let plant10PositionY = 2;
 let plant10 = new Plant(plant10PositionX, plant10PositionY);

function Plant(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.weight = 0;

    this.show = () => {
      let x = i * w;
      let y = j * w;

    // draw a cell with a waiter
    stroke(250);
    fill('#e4e4e4');
    rect(x, y, w, w);
    image(plantImg, x + 8 , y + 10, img.width / 1.3, img.height / 1.3);
    }

    this.addEdges = arr => {

      }
  }
