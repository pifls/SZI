const removeFromArray = (arr, element) => {
    for ( let i = arr.length - 1; i >= 0; i--) {
        if ( arr[i] == element) {
            arr.splice(i, 1);
        }
    }
}

const heuristic = (a, b) => {

    let d = Math.hypot(a.i - b.i, a.j - b.j);
    return d;
}

function Graph() {

    // Function receives start and finish and return the shortest path between these places / uses BFS algorithm
    this.findPath = (s, f) => {
        setupGrid();

        let start = s;
        let finish = f;
        let openSet = [];
        let closedSet = [];
        let path = [];

        openSet.push(start);

        while ( openSet.length > 0 ) {

            let winner = 0;
            for ( let i = 0; i < openSet.length; i++ ) {
                if ( openSet[i].f < openSet[winner].f) {
                    winner = i;
                }
            }
            
            let current = openSet[winner];

            if ( current == finish ) {
                 path = [];
                 let temp = current;
                 path.push(temp);
                 while (temp.parent) {
                    path.push(temp.parent);
                    temp = temp.parent;
                 }
            }

            removeFromArray(openSet, current);
            closedSet.push(current);

            let neighbors = current.edges;
            for ( let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                
                if (!closedSet.includes(neighbor)) {

                    let tempG = current.g + 1;

                    let newPath = false;
                    if ( openSet.includes(neighbor) ) {
                        if ( tempG < neighbor.g ) {
                            neighbor.g = tempG;
                            newPath = true;
                        }
                    } else {
                        neighbor.g = tempG;
                        newPath = true;
                        openSet.push(neighbor);
                    }

                    if (newPath) {
                        neighbor.h = heuristic(neighbor, finish);
                        neighbor.f = neighbor.g + neighbor.h;
                        neighbor.parent = current;
                    }

                }

            }
        } 

        path.reverse().pop();

        return path;

    }
 }
