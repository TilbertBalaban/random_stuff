// proxy - обєкт поверх іншого обєкту, який перехватує будь-яку взаємодію з внур обєктом 

let proxy = new Proxy(target, handler);

// 

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  }
});

// Reflect 