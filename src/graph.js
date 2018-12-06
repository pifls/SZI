function Graph() {
    // array with all objects from grid
    this.nodes = [];

    this.addNode = n => {
        this.nodes.push(n);
    }

    // Function receives table and output an array with path from kitchen to that table
    // Function uses BFS algorithm
    this.findPath = (table) => {
        setupGrid();

        queue = [];

        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === table) {
                finish = this.nodes[i];
            }
          }
        let start = this.nodes[15];
        start.searched = true;
        queue.push(start);

        while (queue.length > 0) {
            let current = queue.shift();
            if (current == finish) {
                break;
            }
            let edges = current.edges;
            for (let i = 0; i < edges.length; i++) {
                let neighbor = edges[i];
                if (!neighbor.searched) {
                    neighbor.searched = true;
                    neighbor.parent = current;
                    queue.push(neighbor);
                }
            }
        }
        let path = [];
        let next = finish.parent;
        while (next != null) {
           path.push(next);
           next = next.parent;
    }
    path = path.reverse();
    return path;
    }
 }
