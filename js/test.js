function checkStorage(storage, item) {
  const lowerCaseItem = item.toLowerCase();
  if (storage.includes(lowerCaseItem)) {
    return `${lowerCaseItem} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "plum")); //* повертає "plum is available to order!"//
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); //* повертає "plum is available to order!"//
console.log(checkStorage(["apple", "plum", "pear"], "pear")); //* повертає "pear is available to order!"//
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); //* повертає "pear is available to order!"//
console.log(checkStorage(["apple", "plum", "pear"], "orange")); //* повертає "Sorry! We are out of stock!"//
console.log(checkStorage(["apple", "plum", "pear"], "carrot")); //* повертає "Sorry! We are out of stock!"//

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salariesArr = Object.values(salaries);
  for (const salary of salariesArr) {
    totalSalary += salary;
  }
  return totalSalary;
}

console.log(countTotalSalary({})); //повертає 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //повертає 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //повертає 400

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
}

console.log(getProductPrice("Radar")); //повертає 1300.
console.log(getProductPrice("Grip")); //повертає 1200.
console.log(getProductPrice("Scanner")); //повертає 2700.
console.log(getProductPrice("Droid")); //повертає 400.
console.log(getProductPrice("Engine")); //повертає null.

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let property = [];

  for (let product of products) {
    if (product.hasOwnProperty(propName)) {
      property.push(product[propName]);
    }
  }
  return property;
}

console.log(getAllPropValues("name")); //повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); //повертає [4, 3, 7, 9]
console.log(getAllPropValues("price")); //повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); //повертає []

function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(add(15, 27)); //повертає 42
console.log(add(12, 4, 11, 48)); //повертає 75
console.log(add(32, 6, 13, 19, 8)); //повертає 78

function addOverNum(value, ...args) {
  let totalSum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > value) {
      totalSum += args[i];
    }
  }
  return totalSum;
}
console.log(addOverNum(50, 15, 27)); // повертає 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // повертає 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // повертає 218
