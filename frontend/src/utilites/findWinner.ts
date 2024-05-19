import { MoveType } from "../Models";

/**
 * Finds the winner of the current game by using a counter for rows, columns, and diagonals to determine if 
 * there is a 3 in a row. If a winner is found, depending on if moves count is odd or even determings if A 
 * or B won. Pending is returned if there is no winner decided and total moves made is under 9. A Draw is
 * determined if no winner is found but total moves equals 9.
 * @param moves number of moves made in the game
 * @returns {@type MoveType} A | B | Pending | Draw
 */
export function findWinner(moves: number[][]): MoveType {
    // Total number of moves made, corresponds to the number of turns played
    const totalMoves = moves.length;

    // An array to count the moves for rows, columns, and diagonals
    // Indices 0-2 for rows, 3-5 for columns, 6-7 for diagonals
    const moveCounters = new Array(8).fill(0);

    // Iterate through the moves in reverse, starting with the last move
    for (let moveIdx = totalMoves-1; moveIdx >=0; moveIdx -= 2) {
        const [row, col] = moves[moveIdx];

        // Increment the counters for the current row and column
        moveCounters[row]++;
        moveCounters[col+3]++;

        // If the move is on the main diagonal, increment the counter
        if(row === col) {
            moveCounters[6]++;
        }

        // If the move is on the anti diagonal, increment the counter
        if(row + col === 2) {
            moveCounters[7]++;
        }

        // Check if any counter has reacted 3, indicating a win
        if(moveCounters[row] === 3 || moveCounters[col+3] === 3 || moveCounters[6] === 3 || moveCounters[7] === 3) {
            // Determine the winner based on the index of the move
            return moveIdx % 2 === 0 ? MoveType.playerA : MoveType.playerB;
        }
    }

    // If all 9 spaces were played and no winner, it's a draw
    return totalMoves === 9 ? MoveType.draw : MoveType.pending;
}