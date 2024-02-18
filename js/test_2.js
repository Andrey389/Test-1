const addNew = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach(function (item) {
    totalPrice += item;
  });
  return totalPrice;
};

console.log(addNew([12, 85, 37, 4])); //повертає 138
console.log(addNew([164, 48, 291])); //повертає 503
console.log(addNew([412, 371, 94, 63, 176])); //повертає 1116
