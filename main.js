let grade1 = document.getElementById("grade1");
let grade2 = document.getElementById("grade2");
let grade3 = document.getElementById("grade3");
let grade4 = document.getElementById("grade4");
let grade5 = document.getElementById("grade5");
let grade6 = document.getElementById("grade6");
let grade7 = document.getElementById("grade7");
let grade8 = document.getElementById("grade8");

let result = document.getElementById("result");

let point = 0;
let agePoint = 0;
let countryPoint = 0;
let average = 0;
let averagePoint = 0;

function validateFields() {
    let grades = [grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8];
    let subjects = [sub3, sub4, sub5, sub6, sub7, sub8];

    for (let grade of grades) {
        if (grade.value === "") {
            return false;
        }
    }

    for (let subject of subjects) {
        if (subject.value === "") {
            return false;
        }
    }

    return true;
}

function checkAvg() {
    let gradesSum = 0;

    for (let grade of [grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8]) {
        gradesSum += parseInt(grade.value);
    }

    average = gradesSum / 8;

    if (average >= 90 && average <= 100) {
        averagePoint = 150;
        console.log(averagePoint)
    } else if (average >= 85 && average <= 89) {
        averagePoint = 120;
        console.log(averagePoint)
    } else if (average >= 65 && average <= 74) {
        averagePoint = 100;
        console.log(averagePoint)
    } else if (average >= 60 && average <= 64) {
        averagePoint = 80;
        console.log(averagePoint)
    } else if (average >= 50 && average <= 59) {
        averagePoint = 50;
        console.log(averagePoint)
    } else if (average >= 40 && average <= 49) {
        averagePoint = 20;
        console.log(averagePoint)
    } else {
        averagePoint = 0;
        console.log(averagePoint)
    }
}


function countryCheck() {
    let country = document.getElementById("country");

    switch (country.value) {
        case "africa":
            countryPoint = 50;
            console.log( countryPoint)
            break;
        case "asia":
            countryPoint = 40;
            console.log( countryPoint)
            break;
        case "s_america":
            countryPoint = 30;
            console.log( countryPoint)
            break;
        case "n_america":
            countryPoint = 20;
            console.log( countryPoint)
            break;
        default:
            countryPoint = 10;
            console.log( countryPoint)
    }
}

function calculateAgePoint() {
    let birthDate = document.getElementById("dob").value;
    let today = new Date();
    let selectedDate = new Date(birthDate);
    let age = today.getFullYear() - selectedDate.getFullYear();

    if (age >= 18 && age <= 24) {
        agePoint = 100;
        console.log(agePoint)
    } else if (age >= 25 && age <= 30) {
        agePoint = 80;
        console.log(agePoint)
    } else if (age >= 31 && age <= 35) {
        agePoint = 50;
        console.log(agePoint)
    } else if (age >= 36 && age <= 40) {
        agePoint = 30;
        console.log(agePoint)
    } else if (age >= 41) {
        agePoint = 10;
        console.log(agePoint)
    } else if (age < 18) {
        agePoint = 0;
        console.log(agePoint)
    }
}

function calculatePoints() {
    point = agePoint + countryPoint + averagePoint;
    console.log(point)
}

function displayResults() {
    let firstName = document.getElementById("f_name").value;
    let lastName = document.getElementById("l_name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone_no").value;
    let dateOfBirth = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let country = document.getElementById("country").value;
    let school = document.getElementById("school").value;

    let uniqueID = Date.now();

     let applicantDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        gender: gender,
        country: country,
        school: school,
        uniqueID: uniqueID,
        points: point
    };

var applicants = JSON.parse(localStorage.getItem('applicants')) || [];
applicants.push(applicantDetails);
localStorage.setItem('applicants', JSON.stringify(applicants));


    let results = ` <div class="results">
    <h2>Applicant Details</h2>
    <p>First Name: <span id="first-name">${firstName}</span></p>
    <p>Last Name: <span id="last-name">${lastName}</span></p>
    <p>Phone Number: <span id="phone-number">${phoneNumber}</span></p>
    <p>Date of Birth: <span id="date-of-birth">${dateOfBirth}</span></p>
    <p>Gender: <span id="genders">${gender}</span></p>
    <p>Country: <span id="country">${country}</span></p>
    <p>School: <span id="school">${school}</span></p>
    <p>Points: <span id="points"> ${point}</span></p>
    <p>Scholarship Status: <span id="scholarship-status"></span></p>
</div>
    `;

    if (point >= 180) {
        results += ` Congratulations! You are cleared with a great score. You will receive a message via email ${email} for further details. Your Unique ID is ${uniqueID}`;
    } else {
        results += ` Sorry, you are not eligible for a scholarship.`;
    }

    document.getElementById("popup-content").innerHTML = results;
    document.getElementById("myModal").style.display = "block";
}

// Close the modal when the 'x' is clicked
document.getElementsByClassName("close")[0].onclick = function() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal when the user clicks outside the modal
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}

document.getElementById("btn_submit").addEventListener("click", function () {
    if (validateFields()) {
        calculateAgePoint();
        countryCheck();
        checkAvg();
        calculatePoints();
        displayResults();
    } else {
        document.getElementById("err_msg").innerHTML = "All fields are required";
    }
});

function showFormone() {
    document.getElementById('popup-form-one').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeFormone() {
    document.getElementById('popup-form-one').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function showFormtwo() {
    document.getElementById('popup-form-two').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeFormtwo() {
    document.getElementById('popup-form-two').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}