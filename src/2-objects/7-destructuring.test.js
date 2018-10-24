describe('Destructuring', function() {
  test('1 - should understand object destructuring', function() {
    const samurai = {
      age: 32,
      isMaster: true,
      name: 'Myamoto'
    };
    const { name, age } = samurai;
    expect(name).toBe('Myamoto');
    expect(age).toBe(32);
  });
  test('2 - should understand object destructuring & rest operator', function() {
    const samurai = {
      age: 32,
      isMaster: true,
      name: 'Myamoto'
    };
    const { name, ...person } = samurai;
    expect(name).toBe(__);
    expect(person).toEqual(__);
  });
  test('3 - should understand object destructuring', function() {
    const samurai = {
      age: 32,
      isMaster: true,
      name: 'Myamoto'
    };
    const { name: personName, age: personAge } = samurai;
    expect(personName).toBe(__);
    expect(personAge).toBe(__);
  });
});
