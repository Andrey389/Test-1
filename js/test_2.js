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

function changeEven(numbers, value) {
  const newEven = numbers.map((number) => {
    if (number % 2 === 0) {
      return number + value;
    } else {
      return number;
    }
  });
  return newEven;
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //повертає новий масив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); //повертає новий масив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //повертає новий масив [144, 13, 81, 192, 136, 154]

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map((book) => book.title);

console.log(titles);

const newBooks = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = newBooks.flatMap((newBook) => newBook.genres);

console.log(genres);

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

const notTbooks = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = notTbooks.filter(
  (notTbook) => notTbook.rating >= MIN_RATING
);
const booksByAuthor = notTbooks.filter(
  (notTbook) => notTbook.author === AUTHOR
);

console.log(topRatedBooks);
console.log(booksByAuthor);
