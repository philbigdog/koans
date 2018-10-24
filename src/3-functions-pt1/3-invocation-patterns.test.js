describe('Invocation patterns', function () {
  let storedThis;
  let aFunction;
  let samurai;
  beforeEach(function () {
    storedThis = undefined;
    aFunction = function () {
      storedThis = this;
    };
    samurai = {
      aMethod: aFunction
    };
  });
  describe('method', function () {
    test('1 - should understand method invocation pattern', function () {
      samurai.aMethod();
      expect(storedThis).toBe(samurai);
    });
    test('2 - should understand method invocation pattern', function () {
      const samurai2 = {
        aMethod: samurai.aMethod
      };
      samurai2.aMethod();
      expect(storedThis).toBe(samurai2);
    });
    test('3 - should understand method invocation pattern', function () {
      const samurai2 = {
        samurai: samurai,
        aMethod: samurai.aMethod
      };
      samurai2.samurai.aMethod();
      expect(storedThis).toBe(samurai2.samurai);
      expect(storedThis).toBe(samurai);
      samurai2.aMethod();
      expect(storedThis).toBe(samurai2);
    });
  });

  describe('function', function () {
    test('4 - should understand function invocation pattern', function () {
      aFunction();
      expect(storedThis).toBe(window);
    });
    test('5 - should understand function invocation pattern', function () {
      //try and decipher this for bonus points
      const result = (function () {
        return this;
      })();
      expect(result).toBe(window);
    });
    test('6 - should understand function invocation pattern', function () {
      const myMethod = samurai.aMethod;
      aFunction();
      expect(storedThis).toBe(window);
      samurai.aMethod();
      expect(storedThis).toBe(samurai);
      myMethod();
      expect(storedThis).toBe(window);
    });
    test('7 - should understand strict mode', function () {
      let storedThis;
      const strictMethod = function () {
        'use strict';
        storedThis = this;
      };
      strictMethod();
      expect(storedThis).toBe(undefined);
    });
  });

  describe('constructor', function () {
    test('8 - should understand constructor invocation pattern', function () {
      const Constructor1 = aFunction;
      const Constructor2 = samurai.aMethod;
      const s1 = new Constructor1();
      expect(storedThis).toEqual({});
      const s2 = new Constructor2();
      expect(storedThis).toEqual({});
      const s3 = new aFunction();
      expect(storedThis).toEqual({});
      const s4 = new samurai.aMethod();
      expect(storedThis).toEqual(aFunction);
    });
    test('9 - should understand constructor invocation pattern', function () {
      const Samurai = function (name) {
        this.getName = function () {
          return name;
        };
        this.setName = function (value) {
          name = value;
        };
      };
      const name = 'Myamoto';
      const samurai = new Samurai(name);
      expect(name).toBe('Myamoto');
      expect(samurai.name).toBe(undefined);
      expect(samurai.getName()).toBe('Myamoto');
      samurai.setName('Hattori');
      expect(name).toBe('Myamoto');
      expect(samurai.getName()).toBe('Hattori');
      samurai.name = 'Myamoto';
      expect(samurai.name).toBe('Myamoto');
      expect(samurai.getName()).toBe('Hattori');
    });
    test('10 - should understand instanceof', function () {
      const Samurai = function (name) {
        this.getName = function () {
          return name;
        };
        this.setName = function (value) {
          name = value;
        };
      };
      const samurai = new Samurai('Myamoto');
      expect(samurai instanceof Samurai).toBe(true);
      expect(samurai instanceof Object).toBe(true);
      expect(samurai instanceof Array).toBe(false);
      expect(samurai.constructor).toBe(Samurai);
    });
  });

  describe('call/apply', function () {
    test('11 - should understand call-apply invocation pattern', function () {
      const samurai2 = {
        aMethod: aFunction
      };
      const samurai3 = {};
      samurai.aMethod.call(samurai2);
      expect(storedThis).toBe(samurai2);
      samurai.aMethod.apply(samurai3, []);
      expect(storedThis).toBe(samurai3);
    });
  });

  describe('fat-arrow functions', function () {
    test('12 - should understand calling fat-arrow functions as methods', function () {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };

      person.setName('Second');

      expect(storedThis).toBe(this);
      expect(person.name).toBe('First');
      expect(self.name).toBe('Second');
    });
    test('13 - should understand calling fat-arrow functions as functions', function () {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };
      const setName = person.setName;

      setName('Second');

      expect(storedThis).toBe(this);
      expect(person.name).toBe('First');
      expect(self.name).toBe('Second');
    });
    test('14 - should understand calling fat-arrow functions as constructors', function () {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };
      let result;

      try {
        result = new person.setName('Second');
      } catch (e) {
        result = e;
      }

      expect(result).toEqual(new TypeError('person.setName is not a constructor'));
      expect(storedThis).toBe(undefined);
      expect(person.name).toBe('First');
      expect(self.name).toBe(undefined);
    });
    test('15 - should understand calling fat-arrow functions using call/apply', function () {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };
      const anotherPerson = {};

      person.setName.call(anotherPerson, 'Second');

      expect(storedThis).toBe(this);
      expect(person.name).toBe('First');
      expect(self.name).toBe('Second');
      expect(anotherPerson.name).toBe(undefined);
    });
  });

  test('16 - should understand invocation patterns', function () {
    expect(this).toEqual(new Object()); //what have you expected to happen here? what happened and why? discuss with your pair!
  });
});
