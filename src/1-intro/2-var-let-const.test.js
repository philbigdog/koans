describe('var, let & const', function() {
  test('should understand var', function() {
    var a = 1;
    expect(a).toBe(1);
    if (a) {
      var a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(2);
  });
  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(1);
    if (a) {
      let a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(1);
  });
  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(1);
    if (a) {
      const a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(1);
  });
  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(1);
    a = 2;
    expect(a).toBe(2);
  });
  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(1);
    try {
      // a = 2;
      a = 2;
    } catch (e) {
      //empty
    }
    expect(a).toBe(1);
  });
  test('should understand const', function() {
    const a = { name: 'Myamoto' };
    a.name = 'Hattori';
    expect(a).toEqual({ name: 'Hattori' });
    expect(a).not.toEqual({ name: 'Myamoto' });
    expect(a).not.toEqual('Myamoto');
  });
});
