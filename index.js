/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

const person = {
  name: "fatemah alzahraa",
  age: 24,
  city: "kuwait",
};
console.log(person);

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

person.email = "fatemah.a.baqer@gmail.com";

console.log(person);

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments "it means two parameters":
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

// const hasKey = (object, key) => {
//   if (key in object) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(hasKey(person, "grade")); // ali's explanation // ^^ reference

// Answer:

const hasKey = (object, key) => {
  if (key in object) {
    return true;
  } else {
    return false;
  }
};

console.log(hasKey(person, "name"));
// we did console.log this ways because the function hasKey have two parameters//
console.log(hasKey(person, "height"));

/////////////////////////////////////////////////////////

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/

const movieTitles = (movies) => {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
};
movieTitles(movies);

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/

let counter = 0;
movies.forEach((movie) => {
  if (movie.year == 1994) {
    counter++;
  }
});
console.log(counter);

/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/

const update = (movies) => {
  return movies.map((movie) => {
    if (movie.title == "The Dark Knight") {
      return { ...movie, genre: "Action/Drama" };
    } else return movie;
  });
};
console.log(update(movies));
