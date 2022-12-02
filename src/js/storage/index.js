window.addEventListener("storage", (e) => {
  console.log(e);
  console.log(e.key);
  console.log(e.oldValue);
  console.log(e.newValue);
});

// console.log(localStorage);
// console.log(localStorage.length);
localStorage.setItem("name", "john" /* Array(1024 * 1024 * 5).join("a") */);
// console.log(localStorage.getItem("name"));
// console.log(localStorage.length);
// localStorage.removeItem("name");
// localStorage.clear();

const obj = {
  name: "x",
  age: 18,
  gender: "男",
  profession: "Lawyer",
};

localStorage.setItem("user", JSON.stringify(obj));
console.log(localStorage.getItem("user"));
console.log(JSON.parse(localStorage.getItem("user")));

document.cookie = "name=abc; age=18; Secure";
console.log(document.cookie);
