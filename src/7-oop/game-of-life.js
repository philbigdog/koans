const GameOfLife = function () {
  const rows = 5;
  const columns = 5;
  const cells = Array(rows).fill().map(() => Array(columns).fill(false));

  this.isCellAlive = function (r, c) {
    //console.log(cells[row][column]);
    return cells[r][c] === true;
  }

  this.toggleCellState = function (r, c) {
    //console.log(cells[row][column]);
    var alive = this.isCellAliveInNextGeneration(
      this.isCellAlive(r, c),
      this.numberOfLiveNeighbours(r, c)
    )
    if (alive) {
      cells[r][c] = true;
    }
    else {
      cells[r][c] = false;
    }
  }

  this.tick = function () {
    var r, c;
    for (r = 0; r < rows.length; r += 1) {
      for (c = 0; c < columns.length; c += 1) {
        this.toggleCellState(r, c);
      }
    }
  }

  this.isCellAliveInNextGeneration = function (isCellAlive, numberOfLiveNeighbours) {
    if (isCellAlive && numberOfLiveNeighbours === 2) return true;
    if (numberOfLiveNeighbours === 3) return true;
    return false;
  }

  this.numberOfLiveNeighbours = function (r, c) {
    var x, y, total;
    for (x = r - 1; x < r + 1; x += 1) {
      for (y = c - 1; y < c + 1; y += 1) {
        if (x < rows && y < columns) {
          if (this.isCellAlive(x, y)) total += 1;
        }
      }
    }
    return total;
  }

};

export default GameOfLife;
