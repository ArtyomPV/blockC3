//Написать функцию, которая создает пустой объект, но без прототипа.
function createObjWithoutProto() {
    return Object.create(null);
  }

  const user = createObjWithoutProto();
  console.log(user);