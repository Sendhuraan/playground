let instance;

class MySingleton {
  constructor() {
    if(!instance) {
      instance = this;
    }
  }

  add() {
    // ...
  }
}