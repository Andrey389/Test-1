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
