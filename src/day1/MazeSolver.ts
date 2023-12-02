// Maze map
/*
 *  #####E#
 *  #     #
 *  #S#####
 *   
 * 3 steps recursion
 * 1. pre
 * 2. recurse
 * 3. post
 *
 *  Base Case
 *  we go to its end
 *  if its seen
 *  if its wall
 *  if its out off map
 *
 *  pre
 *  track curent tile
 *
 *
 *  Recursion 
 *  check 4 direction the posible tile to walk 
 *
 *  post
 *  retrack current tile
 *
 */


const dirction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base Case
    // 1. off the map
    if (curr.x < 0 || curr.x >= maze[0].length) {
        return false;
    }
    //2. wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 3. end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }
    // 4. seen
    if (seen[curr.y][curr.x]) {
        return false;
    }

    //pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i = 0; i < dirction.length; ++i) {
        const [x, y] = dirction[i];
        if (walk(maze, wall, {
                    x: curr.x + x,
                    y: curr.y + y,
                }, end, seen, path,)){
            return true;
        }
    }
    // post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
