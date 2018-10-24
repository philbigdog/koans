// prettier-ignore
const observable = function (base) {
  let listeners = [];

  base.addEventListener = function (type, listener, order) {
    if (!listener) {
      listener = type;
      type = 'default';
    }
    listeners.push({ type, listener, order });
  }

  base.listener = function () {
    return listeners[0].listener;
  }

  base.dispatchEvent = function (type, ...args) {
    if (!args.length) {
      args = [type];
      type = 'default';
    }
    listeners
      .sort((l1, l2) => l2.order - l1.order)  //sorting on 2 columns
      .filter(listener => listener.type === type)
      .forEach(l => {
        try {
          return l.listener(...args) === false;
        } catch (e) {
          //empty
        }
      });
  }

  //TODO
  base.createObservableProperty = function (name) {
    base['get' + name] = function () {
      return name;
    }
    addEventListener(name, base['get' + name], 1);
  }

  return base;
};

export default observable;
