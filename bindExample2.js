// Example 2: bind
let nameObj = {
  name: 'Tony',
};

let PrintName = {
  name: 'steve',
  sayHi: function () {
    console.log(this.name);
  },
};

// Here "bindObj" will be nameObj
Object.prototype.MyBind = function (bindObj) {
  // Here "this" will be sayHi function
  bindObj.myMethod = this;
  return function () {
    bindObj.myMethod();
  };
};
let HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();
