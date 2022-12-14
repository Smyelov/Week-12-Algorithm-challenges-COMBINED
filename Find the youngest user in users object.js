const users = [
  {
    firstName: "Sergii",
    lastName: "Khromchenko",
    email: "sergii@gmail.com",
    age: 31,
  },
  {
    firstName: "Alex",
    lastName: "Plishka",
    email: "alex@yahoo.com",
    age: 42,
  },
  {
    firstName: "Sergii",
    lastName: "Kewl",
    email: "sergii@verizon.com",
    age: 17,
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    email: "jtravolta@gmail.com",
    //email: "mike@gmail.com",
    age: 55,
  },
  {
    firstName: "John",
    lastName: "Travolta",
    email: "jtravolta@gmail.com",
    age: 18,
  },
  {
    firstName: "Bekka",
    lastName: "GIlbert",
    email: "",
    age: 18,
  },
];



//!  Andrew

const young = users.reduce(function(a, b) {
  return b.age < a.age ? b : a;
});

console.log(young.firstName, young.lastName, "is the youngest user");



//!  Youriy Dzedzina

function youngestUser(array) {
  console.log(
    array.reduce((user, nextUser) =>
      user.age < nextUser.age ? user : nextUser
    )
  );
}

youngestUser(users);



//!  Daria Philippova

let min = Math.min(...users.map((user) => user.age));
let youngestUser2 = users.filter((user) => user.age == min);

console.log(youngestUser2);



//! Gunay Miri

function findYoungestUser(array) {
  const minAgeUser = array.reduce((previous, current) =>
    previous.age <= current.age ? previous : current
  );
  const minAge = minAgeUser.age;
  const youngestUsers = array.filter((obj) => obj.age === minAge);
  console.log(youngestUsers);
}
findYoungestUser(users);


