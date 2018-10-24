describe('Warmup - timers and asynchronous specs', function () {
  test('0 - should understand why we need asynchronous specs (so that this spec doesnt just pass)', function () {
    setTimeout(function () {
      expect(1).toBe(1);
    }, 100);
  });
  test('1 - should understand timers', function (done) {
    let i = 0;
    setTimeout(function () {
      i = 1;
    }, 200);
    setTimeout(function () {
      expect(i).toBe(0);
    }, 100);
    setTimeout(function () {
      expect(i).toBe(1);
      done();
    }, 300);
    expect(i).toBe(0);
  });
  test('2 - should understand timers', function (done) {
    let i = 0;
    expect(i).toBe(0);
    setTimeout(function () {
      i = 1;
    }, 0);
    expect(i).toBe(0);
    setTimeout(function () {
      expect(i).toBe(1);
      done();
    }, 1);
    expect(i).toBe(0);
  });
  test('3 - should understand timers', function (done) {
    let i = 0;
    const loopDueTime = Date.now() + 1000;
    setTimeout(function () {
      i = 1;
    }, 300);
    while (new Date().getTime() <= loopDueTime) {
      //intentionally empty
    }
    expect(i).toBe(0);
    setTimeout(function () {
      expect(i).toBe(1);
      done();
    }, 0);
    expect(i).toBe(0);
  });
});

describe('Closure', function () {
  test('1 - should understand loop and closure', function (done) {
    let i;
    let result = '';
    for (i = 0; i < 3; i += 1) {
      setTimeout(function (message) {
        return function () {
          result += message;
        };
      })(i + 1), 100 * (i + 1)
    };

    setTimeout(function () {
      expect(result).toBe('333');
      done();
      //discuss this with your pair
      //now change the code within setTimeout (and within setTimeout only) so that expected result is '123'
    }, 400);
  });
});
