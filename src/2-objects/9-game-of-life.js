function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
  return {
    true: {
      2: 0,
      3: 0
    }, false: {
      3: 0
    }
  }[isCellAlive].hasOwnProperty(numberOfLiveNeighbours);
}

export default isCellAliveInNextGeneration;
