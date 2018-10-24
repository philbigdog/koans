describe('return', function () {
  test('1 - should understand return', function () {
    const Samurai = function (name) {
      this.name = name;
    };
    const samurai = new Samurai('Myamoto');
    expect(Samurai('Myamoto')).toBe(undefined);
    expect(samurai.name).toBe('Myamoto');
    expect(samurai instanceof Samurai).toBe(true);
    expect(samurai.constructor).toBe(Samurai);
  });
  test('2 - should understand return', function () {
    const Samurai = function (name) {
      this.name = name;
      return 1; //also try with 0, true, false, "string", null, undefined
    };
    const samurai = new Samurai('Myamoto');
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  test('3 - should understand return', function () {
    const Samurai = function (name) {
      return {
        name: name
      };
    };
    const samurai = new Samurai('Myamoto');
    expect(samurai.name).toBe('Myamoto');
    expect(samurai instanceof Samurai).toBe(false);
    expect(samurai.constructor).toBe(undefined);
  });
  test('4 - should understand return', function () {
    const Samurai = function (name) {
      if (!(this instanceof Samurai)) {
        return new Samurai(name);
      }
      this.name = name;
    };
    const samurai1 = Samurai('Myamoto');
    const samurai2 = new Samurai('Myamoto');
    expect(samurai1 instanceof Samurai).toBe(true);
    expect(samurai1.name).toBe('Myamoto');
    expect(samurai2 instanceof Samurai).toBe(true);
    expect(samurai2.name).toBe('Myamoto');
  });
});
