const myForm= document.getElementById("myForm");


myForm.addEventListener("submit",function(event) {
event.preventDefault();

  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fatherName").value;
  const adresse = document.getElementById("adresse").value;
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const dob = document.getElementById("dob").value;
  const pincode = document.getElementById("pincode").value;
  const course = document.getElementById("course");
  const email = document.getElementById("email").value;
 
  document.getElementById("resultName").innerHTML = name;
  document.getElementById("resultFatherName").innerHTML = fatherName;
  document.getElementById("resultAdress").innerHTML = adresse;
  document.getElementById("resultDob").innerHTML = dob;
  document.getElementById("resultPincode").innerHTML = pincode;
  document.getElementById("resultEmail").innerHTML = email;

  if (male.checked) {
    document.getElementById("resultGender").innerHTML = "male";
  } else if (female.checked) {
    document.getElementById("resultGender").innerHTML = "female";
  }

  document.querySelector(".form_header").style.display = "none";
  document.querySelector(".form_result").style.display = "block";

});

function stategoster() {
  document.getElementById("resultState").innerHTML =
    state.options[state.selectedIndex].textContent;
}
function citygoster() {
  document.getElementById("resultCity").innerHTML =
    city.options[city.selectedIndex].textContent;
}

function coursegoster() {
  document.getElementById("resultCourse").innerHTML =
    course.options[course.selectedIndex].textContent;
}

