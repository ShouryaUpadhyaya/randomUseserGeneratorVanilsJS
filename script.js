let personName = document.querySelector("[data-person-name]");
let personGender = document.querySelector("[data-gender]");
let personPicture = document.querySelector("[data-picture]");
let personPhone = document.querySelector("[data-phone]");
let personDob = document.querySelector("[data-dob]");
let personLocation = document.querySelector("[data-location]");
let genButton = document.querySelector("#genrateRandomPerson");
// console.log(personName.innerText);
let url = "https://randomuser.me/api";
function formatDate(dob) {
  const date = new Date(dob);
  let formatedDate = `${date.getDate()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${date.getFullYear()}`;
  return formatedDate;
}
function genrateRandomUser() {
  personName.innerText = "";
  personGender.innerText = "";
  personLocation.innerText = "";
  personDob.innerText = "";
  personPhone.innerText = "";
  personPicture.setAttribute("src", "");
  fetch(url)
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data.results[0]);
      let person = data.results[0];
      let name = `${person.name.title}. ${person.name.first} ${person.name.last}`;
      let gender = `${person.gender}`;
      let location = `${person.location.city}, ${person.location.state}, ${person.location.country}`;
      let dob = person.dob.date;
      let phone = person.phone;
      let picture = person.picture.large;
      dob = formatDate(dob);
      personName.innerText = name;
      personGender.innerText = gender;
      personLocation.innerText = location;
      personDob.innerText = dob;
      personPhone.innerText = phone;
      personPicture.setAttribute("src", picture);
    });
}
genrateRandomUser();
genButton.addEventListener("click", genrateRandomUser);
