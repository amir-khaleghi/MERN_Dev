function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase("amir");

// another callback function
function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  //cb is callback function
  // looking for callback function and reference it as a parameter
  const fullName = `${name} smith`;
  cb(fullName); // we want invoke this function, inside of handleName function
  // some more logic
}

handleName("amir", makeUppercase); //makeUppercase is callbackfunction
handleName("amir", reverseString); // Invoking reverse String

handleName("eli", function (value) {
  console.log(value);
});

handleName("eli", (value) => console.log(value));

// array methods, setTimeout, event listeners etc

const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function () {
  console.log("hello Amir");
});
