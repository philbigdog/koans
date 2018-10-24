// prettier-ignore
const observable = function (base) {
  let listeners = [];

  base.addEventListener = function (type, listener) {
    if (!listener) {
      listener = type;
      type = 'default';
    }
    listeners.push({ type, listener });
  }

  base.listener = function (argument) {
    return listeners[0].listener;
  }

  base.dispatchEvent = function (type, argument) {
    if (!argument) {
      argument = type;
      type = 'default';
    }
    try {
      listeners.filter(listener => listener.type === type)
        .forEach(l => l.listener(argument));
    }
    catch (e) {
      listener('default');
    }
  }

  return base;
};

export default observable;
