// // contact details in CV
// const fullName = document.querySelector("#full-name");
// const cvFullName = document.querySelector(".cv-full-name");

// const profTitle = document.querySelector("#prof-title");
// const cvProfTitle = document.querySelector(".cv-prof-title");

// const address = document.querySelector("#address");
// const cvAddress = document.querySelector(".cv-address");

// const email = document.querySelector("#email");
// const cvEmail = document.querySelector(".cv-email");

// const phone = document.querySelector("#phone");
// const cvPhone = document.querySelector(".cv-phone");

// const web = document.querySelector("#web");
// const cvWeb = document.querySelector(".cv-web");

// fullName.addEventListener("input", (e) => {
//     cvFullName.textContent = fullName.value;
// });

// profTitle.addEventListener("input", (e) => {
//     cvProfTitle.textContent = profTitle.value;
// });

// address.addEventListener("input", (e) => {
//     cvAddress.textContent = address.value;
// });

// email.addEventListener("input", (e) => {
//     cvEmail.textContent = email.value;
// });

// phone.addEventListener("input", (e) => {
//     cvPhone.innerHTML = phone.value + " "+"&#9743";
// });

// web.addEventListener("input", (e) => {
//     cvWeb.textContent = web.value;
// });

// // profile
// const profile = document.querySelector("#profile");
// const cvProfile = document.querySelector(".cv-profile-p");

// profile.addEventListener("input", (e) => {
//     cvProfile.textContent = profile.value;
// });
// const experiences = document.querySelector(".experiences");
// const addJobBtn = document.querySelector("#add-job");
// const cvExperiences = document.querySelector(".cv-experiences");

// addJobBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let copy = experiences.cloneNode(true);

//     copy.querySelector("#job-title").id = 'job-title-b'
//     experiences.after(copy);

//     let cvCopy = cvExperiences.cloneNode(true);

//     cvCopy.querySelector("#cv-job-title").id = "cv-job-title-b"
//     cvExperiences.after(cvCopy);

// });

const inputs = [...document.querySelectorAll("input, textarea")];
let inputList = {};
console.log(inputList);

let savedList = JSON.parse(localStorage.getItem("inputList"));
inputList = savedList;

for (let savedListValue in savedList) {
    document.querySelector(`#cv-${savedListValue}`).innerHTML =
        savedList[savedListValue];
}

for (let input of inputs) {
    input.addEventListener("input", (e) => {
        let inputId = e.target.id;
        let cvInput = document.querySelector(`#cv-${inputId}`);
        cvInput.innerHTML = e.target.value;

        inputList[inputId] = e.target.value;

        if (inputId === "phone") {
            input.append(" ☏");
        }
        if (inputId === "email") {
            input.append(" ✉");
        }
        if (inputId === "address") {
            input.append(" ");
        }
        if (inputId === "web") {
            input.append(" 🌐");
        }
    });
}

const saveBtn = document.querySelector("#save-btn");
saveBtn.addEventListener("click", (e) => {
    localStorage.setItem("inputList", JSON.stringify(inputList));
});


const cv = document.querySelector('.cv-view').innerHTML


function printCertificate() {
    let printContents = document.querySelector('.cv-view').innerHTML;
    
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    print();
    document.body.innerHTML = originalContents;
}

printCertificate
