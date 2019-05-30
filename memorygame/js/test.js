const obj = {
    // Properties
    color: "brown",
    model: "Sportster 883 Deluxe",
    make: "Harley-Davidson",
    year: 1994,

      // Method—note this is also a key-value pair, just like a property
    accelerate: function () {
        console.log(`${this.make} goes zoom zoom!`);
    }
};

console.log(obj)

var json = JSON.stringify(obj, function(key, value) {
    if (typeof value === 'function') {
      return value.toString();
    } else {
      return value;
    }
});

console.log(json)

newObj = JSON.parse(json)

console.log(newObj.accelerate)
newObj.accelerateNew = eval(newObj.accelerate)
console.log(newObj)
