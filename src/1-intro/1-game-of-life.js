function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
  //if(isCellAlive && numberOfLiveNeighbours < 2) return false;
  if(isCellAlive && numberOfLiveNeighbours === 2) return true;
  if(numberOfLiveNeighbours === 3) return true;
  return false;
}

export default isCellAliveInNextGeneration;
