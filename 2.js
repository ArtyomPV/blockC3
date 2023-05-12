const user = {
    name: "Artyom",
    surname:"Prusov",
    age: 46
}

function checkPropInObj (str, obj) {
    return (str in obj);
  }

console.log(checkPropInObj("Artyom", user));
console.log(checkPropInObj("name", user));