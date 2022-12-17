// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async () => {
//   return "Hello Amir!";
// };

// async function someFunc() {
//   const result = await example();
//   console.log(result);
//   console.log("Hello World!");
// }
// someFunc();
/* ------------------------------------------------------ */
const users = [
  { id: 1, name: "john" },
  { id: 2, name: "Amir" },
  { id: 3, name: "peter" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

/* ------------------ test the function ----------------- */
// getUser("john")
//   .then((user) => console.log(user))
//   .catch((err) => console.log(err));

/* ------------------ using async/await ----------------- */
const getData = async () => {
  try {
    const user = await getUser("john");
    console.log(user);

    // if (user) {
    //   const userArticles = await getArticles(user.id);
    // }
    const articles = await getArticles(user.id);
    // console.log(articles);
  } catch (error) {
    console.log(error);
  }
};

getData();

/* -------------------- just promises ------------------- */
// getUser("Amir")
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

/* ---------------------- function ---------------------- */
function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve(user);
    } else {
      reject(` No such user with name: ${name} `);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);
    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject("Wrong ID");
    }
  });
}
