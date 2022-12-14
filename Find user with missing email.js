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

users.forEach((keys) => {
  if (!keys.email) console.log(keys.firstName, keys.lastName + " has no email");
});



//!  Youriy Dzedzina, Daria Philippova

function missingEmailUsers(array) {
  const arrayWithMissingEmails = array.filter(
    (element) => element.email === ""
  );
  console.log(...arrayWithMissingEmails);
}

missingEmailUsers(users);



//! Gunay Miri

function findMissingEmailUsers() {
  const missingEmailUser = users.filter((missing) => missing.email === "");
  console.log(missingEmailUser);
}
findMissingEmailUsers(users);
