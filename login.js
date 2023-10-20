function registerSchool() {
    let stuPwd = document.getElementById("stuPwd");
    let stuEmail = document.getElementById("stuEmail");
    let inputs = document.querySelectorAll(".inputs");
    let studentData = localStorage.getItem("StudentData");
    let check = false;
    inputs.forEach((input) => {
      if (input.value == "" || input.value == null) {
        input.style.borderColor = "red";
        check = true;
      } else {
        input.style.borderColor = "#dedede";
      }
    });
    if (check == false) {
      if (studentData) {
        let studentArr = JSON.parse(studentData);
        let getStudent = studentArr.filter((student) => {
          return student.stuEmail == stuEmail.value && student.stuPwd == stuPwd.value;
        });
        if (getStudent.length) {
          let stud = getStudent[0];
          alert(`Welcome, ${stud.stuName}`);
          sessionStorage.setItem("isOnline", JSON.stringify(stud));
          window.location.href = "schorlarship-form.html";
        } else {
          alert("Invalid Student");
        }
      }
    }
  }
  
  document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
    registerSchool();
  };
  