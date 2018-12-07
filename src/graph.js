function Graph() {
    // array with all objects from grid
    this.nodes = [];

    this.addNode = n => {
        this.nodes.push(n);
    }

    // Function receives start and finish and return the shortest path between these places / uses BFS algorithm
    this.findPath = (client) => {
        setupGrid();

        queue = [];
        let start = waiter;
        let finish = client;
        

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
