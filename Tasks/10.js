const START = Date.now();
// console.log(START);

function someFn() {
  console.log('time', Date.now() - START);
  console.log('args', arguments);
}

// someFn();
// time 8
// args [Arguments] {}

Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => {
      // console.log(this);
      // this();
      this.call(this, ...args)
    }, ms);
  };

  // return function () {
  //   console.log(this);
  // }.bind(this);
};

const f = someFn.delay(1500);

f('arg1', 'arg2', 1, 2); // args [Arguments] { '0': 'arg1', '1': 'arg2', '2': 1, '3': 2 }
