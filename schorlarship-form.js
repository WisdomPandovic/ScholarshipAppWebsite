function showUser() {
  let isOnline = sessionStorage.getItem("isOnline");
  if (isOnline) {
    let student = JSON.parse(isOnline);
    let output = document.getElementById("studentDetail");
    let welcomeText = `
        Welcome ${student.stuName}, You can proceed with your application.
    `;
    output.innerHTML = welcomeText;
  } else {
    alert("Sorry, you have to Login to proceed with the application");
    window.location.href = "login.html";
  }
}

let isOnline = sessionStorage.getItem('isOnline');

if (isOnline) {
  showUser(); 
} else {
  alert("Sorry, you have to Login to proceed with the application");
  window.location.href = "login.html";
}

