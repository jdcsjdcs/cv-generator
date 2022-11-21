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

const inputs = [...document.querySelectorAll("input, textarea")];

for (let input of inputs) {
    input.addEventListener("input", (e) => {
        const outp = document.querySelector;
        document.querySelector(`.cv-${e.target.id}`).textContent =
            e.target.value;
    });
}
