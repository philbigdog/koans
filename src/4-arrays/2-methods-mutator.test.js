describe('Mutator methods', function () {
  test('1 - should understand push', function () {
    const array = [1, 2, 3, 4, 5];
    expect(array.push(6, 7)).toBe(7);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(array.length).toBe(7);
    array.length = 10;
    array.push(8, 9);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, , , , 8, 9]);
    expect(array.length).toBe(12);
  });
  test('2 - should understand pop', function () {
    const array = [1, 2, 3, 4, 5];
    expect(array.pop()).toBe(5);
    expect(array).toEqual([1, 2, 3, 4]);
    array.length = 10;
    expect(array.pop()).toBe(undefined);
    expect(array).toEqual([1, 2, 3, 4, , , , , ,]);
  });
  test('3 - should understand shift', function () {
    let array = [1, 2, 3, 4, 5];
    expect(array.shift()).toBe(1);
    expect(array).toEqual([2, 3, 4, 5]);
    array = [, , , 3, 4, 5];
    expect(array.shift()).toBe(undefined);
    expect(array).toEqual([, , 3, 4, 5]);
  });
  test('4 - should understand unshift', function () {
    let array = [1, 2, 3, 4, 5];
    expect(array.unshift(6, 7)).toBe(7);
    expect(array).toEqual([6, 7, 1, 2, 3, 4, 5]);
    array = [, , , 3, 4, 5];
    expect(array.unshift(6, 7)).toBe(8);
    expect(array).toEqual([6, 7, , , , 3, 4, 5]);
  });
  test('5 - should understand splice', function () {
    const array = [1, 2, 3, 4, 5];
    expect(array.splice(1, 2)).toEqual([2, 3]);
    expect(array).toEqual([1, 4, 5]);
  });
  test('6 - should understand splice', function () {
    const array = [1, 2, 3, 4, 5];
    expect(array.splice(1, 2, 21, 31)).toEqual([2, 3]);
    expect(array).toEqual([1, 21, 31, 4, 5]);
  });
  test('7 - should understand reverse', function () {
    const array = [1, 2, 3, 4, 5];
    expect(array.reverse()).toBe(__);
    expect(array).toEqual(__);
  });
  test('8 - should understand sort', function () {
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
    expect(array.sort()).toEqual(__);
  });
  test('9 - should understand sort', function () {
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const compareFunction = function (first, second) {
      //implement this so that test is passing
    };
    expect(array.sort(compareFunction)).toEqual(sortedArray);
  });
});
