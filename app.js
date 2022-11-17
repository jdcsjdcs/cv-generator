const fullName = document.querySelector("#full-name");
const cvFullName = document.querySelector(".cv-full-name");

fullName.addEventListener("input", (e) => {
    cvFullName.textContent = fullName.value;
});

const profTitle = document.querySelector("#prof-title");
const cvProfTitle = document.querySelector(".cv-prof-title");

profTitle.addEventListener("input", (e) => {
    cvProfTitle.textContent = profTitle.value;
});

const address = document.querySelector("#address");
const cvAddress = document.querySelector(".cv-address");

address.addEventListener("input", (e) => {
    cvAddress.textContent = address.value;
});

const email = document.querySelector("#email");
const cvEmail = document.querySelector(".cv-email");

email.addEventListener("input", (e) => {
    cvEmail.textContent = email.value;
});

const phone = document.querySelector("#phone");
const cvPhone = document.querySelector(".cv-phone");

phone.addEventListener("input", (e) => {
    cvPhone.textContent = phone.value;
});

const github = document.querySelector("#github");
const cvGithub = document.querySelector(".cv-github");

github.addEventListener("input", (e) => {
    cvGithub.textContent = github.value;
});

