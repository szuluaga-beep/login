const addUser = () => {
  let userName = "steven";
  let email = "steven@yopmail.com";
  let pass = "12345";

  let user = {
    userName: userName,
    userEmail: email,
    passUser: pass,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(email, json);
};
const loginFunc = (e) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let result = document.getElementById("result");

  let user = localStorage.getItem(email);
  let data = JSON.parse(user);
  if (user == null) {
    result.innerHTML = "wrong user";
  } else if (data.userEmail == email && data.passUser == pass) {
    result.innerHTML = "logged in";
  } else {
    result.innerHTML = "not logged in";
  }
};

addUser();
