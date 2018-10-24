const GameOfLife = function () {
  let rows = 3;
  let columns = 3;
  let cells = Array(rows).fill().map(() => Array(columns).fill(0));

  function isCellAlive(row, column) {
    return cells[row][column] === 1;
  }

  function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
    if (isCellAlive && numberOfLiveNeighbours === 2) return true;
    if (numberOfLiveNeighbours === 3) return true;
    return false;
  }
};

export default GameOfLife;
