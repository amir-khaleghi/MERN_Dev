/* ------------------------------------------------------ */
/*                     first node app                     */ // #01
/* ------------------------------------------------------ */
const amount = 1;
if (amount < 10) {
  console.log("smaller number");
} else {
  console.log("greater number");
}

console.log("Hey it's my first node app!!!");
/* ------------------------------------------------------ */
/*                    Global Variables                    */ //#02
/* ------------------------------------------------------ */
// GLOBALS - NO WINDOW !!!!!
// __dirname  - path to current directory
// __filename  -  file name
// require   - function to use module (CommonJS)
// module    - info about  current module(file)
// process  - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 2000);
/* ------------------------------------------------------ */
/*                         Modules                        */ //#03
/* ------------------------------------------------------ */
// Modules
const amir = "amir";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Amir");
sayHi(amir);
/* ------------------------------------------------------ */
/*                    How Modules Work                    */ //#04
/* ------------------------------------------------------ */
// CommonJS, every file is module (by default)
// Module - Encapsulated Code (OnLY SHARE Minimum)

/* ------------------------ names.js ----------------------- */
const john = "John";
const peter = "peter";

/* ------------------------ utils.js ----------------------- */

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
/* ----------------------- app.js ----------------------- */
const names = require("./names");

sayHi(john);
sayHi(peter);

/* ------------------------------------------------------ */
/*                        OS Module                       */ //#05
/* ------------------------------------------------------ */
const os = require("os");

/* --------------- info about current user -------------- */
const user = os.userInfo();

console.log("🟩 // file: app.js:6 // user", user);

/* ----- method returns the system uptime in seconds ---- */
console.log(`The system uptime is ${os.uptime()} Seconds.`);

/* ------------------ create an object ------------------ */
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log("🟩 // file: app.js:19 // currentOS", currentOS);

/* ------------------------------------------------------ */
/*                       PATH Module                      */ //#06
/* ------------------------------------------------------ */
const path = require("path");

/* ----------------------- path.sep ---------------------- */
console.log(path.sep);

/* ---------------------- path.join --------------------- */
const filePath = path.join("folder", "subfolder1", "file.txt");

console.log("🟩 // file: app.js:8 // filePath", filePath);

/* -------------------- path.basename ------------------- */
const base = path.basename(filePath);

console.log("🟩 // file: app.js:14 // base", base);

/* -------------------- path.resolve -------------------- */
const absolute = path.resolve(__dirname, "Folder", "subFolder", "File.txt");

console.log("🟩 // file: app.js:19 // absolute", absolute);

/* ------------------------------------------------------ */
/*          Sync & unBlocking  FS Module                  */ // #07
/* ------------------------------------------------------ */
const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs")
// fs.readFileSync

/* -------------------- readFileSync -------------------- */
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// const third = readFileSync("./content/third.txt", "utf8");

// console.log(first, second);

/* -------------------- writeFileSync ------------------- */
writeFileSync("./content/third.txt", "Hello I wrote here with writeFileSync");

// if the file is not there, it will create one or overwrite
writeFileSync("./content/create.txt", `Final result is ${first}`, {
  flag: "a", // append the text
});
const create = readFileSync("./content/create.txt", "utf8");

console.log("🟩 // file: app.js:16 // create", create);

/* ------------------------------------------------------ */
/*                  ASync & Blocking  FS                  */ // #08
/* ------------------------------------------------------ */
const { readFile, writeFile } = require("fs");

readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result:  ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

/* ------------------------------------------------------ */
/*            compare Synch and Async Approach            */ // #09
/* ------------------------------------------------------ */
/* ------------------------ Sync ------------------------ */
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync("./content/create.txt", `Final result is ${first}, ${second}`, {
  flag: "a", // append the text
});
const create = readFileSync("./content/create.txt", "utf8");
console.log("done with this task");
console.log("starting the next one");

/* ------------------------------------------------------ */
/* ------------------------ Async ----------------------- */
const { readFile, writeFile } = require("fs");
console.log("start");
// before the readfile
readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  // before the second task start
  console.log("before the second readfile");
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // inside the writeFile
    writeFile(
      "./content/result-async.txt",
      `Here is the result:  ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
// after the first readfile
console.log("starting next task");
