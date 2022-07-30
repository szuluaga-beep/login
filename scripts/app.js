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
  localStorage.setItem(user.userEmail, json);
};
const loginFunc = (e) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let result = document.getElementById("result");

  let user = localStorage.getItem(email);
  let data = JSON.parse(user);
  if (user == null) {
    alert("Please enter a valid email address");
  } else if (data.userEmail == email && data.passUser == pass) {
      // alert("logged in") ;
       window.location.href = "../html/page.html"
  } else {
    alert("Please enter a valid password") ;
  }
};

addUser();
