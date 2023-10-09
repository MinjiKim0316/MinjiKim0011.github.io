let logIn = [
  {
    username: "minjikim0316",
    password: "minji0011"
  },
  {
    username: "chloekim0316",
    password: "chloe0011"
  }
]

function loginInfo() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  for(let i = 0; i < logIn.length; i++){
    if(username == logIn[i].username && password == logIn[i].password){
      console.log(username + "is logged in!")
      window.location.href= 'https://www.google.com';
      return
    } 
  }
  alert('Please Enter Correct Username or Password');
}