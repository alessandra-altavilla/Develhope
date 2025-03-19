let copiaOggetto = (obj) => {
  let result = {}
    for (let key in obj) {
    result [key] = obj [key]
  }
  return result;
};

let user = {
    name: "Cosimo",
    age: 30,
  };
  
  /*let newUser = {...user};*/

  let newUser = copiaOggetto (user);
   
  newUser.name = "Paolo";
  
  console.log(newUser);
  console.log(user);