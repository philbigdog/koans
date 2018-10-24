import isCellAliveInNextGeneration from './1-game-of-life';

test('should return false when a live cell has fewer than two live neighbours - under-population', function() {
  //TODO - write a failing test representative of this requirement
  expect(isCellAliveInNextGeneration(true, 1)).toBe(false);
});
test('should return true when a live cell has two or three live neighbours - survival', function() {
  //TODO - write a failing test representative of this requirement
  expect(isCellAliveInNextGeneration(true, 2)).toBe(true);
  expect(isCellAliveInNextGeneration(true, 3)).toBe(true);
});
test('should return false when a live cell has more than three live neighbours - overcrowding', function() {
  //TODO - write a failing test representative of this requirement
  expect(isCellAliveInNextGeneration(true, 4)).toBe(false);
});
test('should return true when a dead cell has exactly three live neighbours - reproduction', function() {
  //TODO - write a failing test representative of this requirement
  expect(isCellAliveInNextGeneration(false, 3)).toBe(true);
});
