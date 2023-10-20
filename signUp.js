
function registerStudent() {
    let stuName = document.getElementById("stuName");
    let stuEmail = document.getElementById("stuEmail");
    let stuPhone = document.getElementById("stuPhone");
    let stuState = document.getElementById("stuState");
    let stuAddress = document.getElementById("stuAddress");
    let SchoolName = document.getElementById("sName");
    let stuPwd = document.getElementById("stuPwd");
    let inputs = document.querySelectorAll(".inputs");
    let studentData = localStorage.getItem("StudentData");
    let studentArr = [];
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
        studentArr = JSON.parse(studentData);
      }
      let studentObj = {
        stuName: stuName.value,
        stuEmail: stuEmail.value,
        stuPhone: stuPhone.value,
        stuState: stuState.value,
        stuAddress: stuAddress.value,
        SchoolName: SchoolName.value,
        stuPwd: stuPwd.value,
      };
      studentArr.push(studentObj);
      localStorage.setItem("StudentData", JSON.stringify(studentArr));
      alert("Student Successfully Registered");
      stuName.value = "";
      stuEmail.value = "";
      stuPhone.value = "";
      stuAddress.value = "";
      stuState.value = "";
      SchoolName.value = "";
      stuPwd.value = "";
    }
  }
  
  document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
    registerStudent();
  };
  activateSchool();
  