// localStorage.clear()

// all imputs

let inputs = [...document.querySelectorAll("input, textarea")];
let inputList = {};
let savedList

// to write inputs to the cv and store all inputs to inputList object
const write = () => {
    for (let input of inputs) {
        input.addEventListener("input", (e) => {

            // inputs to the cv
            let inputId = e.target.id;
            let cvInput = document.querySelector(`#cv-${inputId}`);
            cvInput.innerHTML = e.target.value;
            
            // to change format of date inputs
            let dates = [...document. querySelectorAll('input[type="month"]')]
            if (dates.includes(input)){
                let [yyyy, mm] = e.target.value.split('-')
           
                cvInput.innerHTML =  `${mm}/${yyyy}`
                
                // add date inputs to inputList object
                inputList[input.id] = `${mm}/${yyyy}`
                
            } else {
                // add inputs to inputList object
                inputList[input.id] = input.value;
            }
            // add symbols to contacts

            if (inputId === "phone") {cvInput.append(" ☏")}
            if (inputId === "email") {cvInput.append(" ✉")}
            if (inputId === "address") {cvInput.append(" 🖈")}
            if (inputId === "web") {cvInput.append(" 🌐")}
        });
    }
};


// to save data to localStorage
const saveToLocStor = () => {

    const saveBtn = document.querySelector("#save-btn");

    saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("saveList", JSON.stringify(inputList));
});
}


// get all saved data from localStorage
let getFromLocStor = () => {
    savedList = JSON.parse(localStorage.getItem("saveList"));
    if (savedList !== null) {inputList = savedList}
}

// add data back to elements
const dataBack = () => {
    for (let savedListKey in savedList) {

        // add data back to input elements
        document.querySelector(`#${savedListKey}`).value = savedList[savedListKey];
    
        // add data back to cv-elements
        document.querySelector(`#cv-${savedListKey}`).innerHTML = savedList[savedListKey];
        
        // add symbols back to cv-elements
        if (savedListKey === "phone"){document.querySelector(`#cv-${savedListKey}`).append(" ☏")}
        if (savedListKey === "email"){document.querySelector(`#cv-${savedListKey}`).append(" ✉")}
        if (savedListKey === "address"){document.querySelector(`#cv-${savedListKey}`).append(" 🖈")}
        if (savedListKey === "web"){document.querySelector(`#cv-${savedListKey}`).append(" 🌐")}
               
    }
}



// to copy/clone element function
let cloneElem = (copyElem, copyCvElem, copyElemInput, copyElemInputs, copyNum, elem, cvElem, el, cvEl ) => { 
    
    copyElem = elem.cloneNode(true);
    copyCvElem = cvElem.cloneNode(true);

    copyElemInputs = [...copyElem.querySelectorAll("input, textarea")];

    for (let copyElemInput of copyElemInputs) {
        // clearing cloned cv element content
        copyCvElem.querySelector(`#cv-${copyElemInput.id}`).innerHTML = "";
        // changing id of cloned cv elements
        copyCvElem.querySelector(`#cv-${copyElemInput.id}`).id =`cv-${copyElemInput.id}` + `${copyNum}`;
        // cleaning cloned input values
        copyElemInput.value = "";
        // changing id of cloned inputs
        copyElemInput.id = copyElemInput.id + `${copyNum}`;
    }

    // adding cloned inputs to inputs list
    inputs.push(...copyElem.querySelectorAll(`input, textarea`));

    el.append(copyElem);
    cvEl.append(copyCvElem);
    
    // to write inputs to cv and store all inputs to inputList object
    write();
};


// to retrieve cloned elements 
const retrieveElement = (copyElem, copyCvElem, copyElemInput, copyElemInputs, copyNum, elem, cvElem, el, cvEl ) =>{
    for (let j = 1; j <= copyNum; j++) {
        copyElem = elem.cloneNode(true);
        copyCvElem = cvElem.cloneNode(true);

        copyElemInputs = [...copyElem.querySelectorAll("input, textarea")];

        for (let copyElemInput of copyElemInputs) {
            // changing id of cloned cv elements
            copyCvElem.querySelector(`#cv-${copyElemInput.id}`).id =`cv-${copyElemInput.id}` + `${j}`;
            
            // changing id of cloned inputs
            copyElemInput.id = copyElemInput.id + `${j}`;
        }

        // adding cloned inputs and to inputs list
        inputs.push(...copyElem.querySelectorAll(`input, textarea`));

        el.append(copyElem);
        cvEl.append(copyCvElem);
    }
}   

saveToLocStor()
getFromLocStor()

// to clone experiences and cv-experiences elements
let expCopyNum = localStorage.getItem("expCopyNums");
const experiences = document.querySelector(".experiences");
const cvExperiences = document.querySelector(".cv-experiences");
const exp = document.querySelector(".exp");
const cvExp = document.querySelector(".cv-exp");
const addExpBtn = document.querySelector("#add-job");
let expClones = 0;
if (expCopyNum != null) {expClones = expCopyNum}

let copyExp, copyCvExp, copyExpInput, copyExpInputs 

addExpBtn.addEventListener("click", (e) => {
    expClones++;

    cloneElem(copyExp, copyCvExp, copyExpInput, copyExpInputs, expClones, experiences, cvExperiences, exp, cvExp)

   // save number of copies to localStorage
    localStorage.setItem("expCopyNums", expClones);
     
});



// to clone educations and cv-educations elements
let eduCopyNum = localStorage.getItem("eduCopyNums");
const education = document.querySelector(".education");
const cvEducation = document.querySelector(".cv-education");
const edu = document.querySelector(".edu");
const cvEdu = document.querySelector(".cv-edu");
const addEduBtn = document.querySelector("#add-education");
let eduClones = 0;
if (eduCopyNum != null) {eduClones = eduCopyNum}

let copyEdu, copyCvEdu, copyEduInput, copyEduInputs 

addEduBtn.addEventListener("click", (e) => {
    eduClones++;

    cloneElem(copyEdu, copyCvEdu, copyEduInput, copyEduInputs, eduClones, education, cvEducation, edu, cvEdu)

    // save number of copies to localStorage
    localStorage.setItem("eduCopyNums", eduClones);

});


// to clone certificates and cv-certificates elements 
let cerCopyNum = localStorage.getItem("cerCopyNums");
const certificates = document.querySelector(".certificates");
const cvCertificates = document.querySelector(".cv-certificates");
const cer = document.querySelector(".cer");
const cvCer = document.querySelector(".cv-cer");
const addCerBtn = document.querySelector("#add-certificates");
let cerClones = 0;
if (cerCopyNum != null) {cerClones = cerCopyNum}

let copyCer, copyCvCer, copyCerInput, copyCerInputs 

addCerBtn.addEventListener("click", (e) => {
    cerClones++;

    cloneElem(copyCer, copyCvCer, copyCerInput, copyCerInputs, cerClones, certificates, cvCertificates, cer, cvCer)

    // save number of copies to localStorage
    localStorage.setItem("cerCopyNums", cerClones);

});


// to clone skills and cv-skills elements
let skCopyNum = localStorage.getItem("skCopyNums");
const skills = document.querySelector(".skills");
const cvSkills = document.querySelector(".cv-skills");
const sk = document.querySelector(".sk");
const cvSk = document.querySelector(".cv-sk");
const addSkBtn = document.querySelector("#add-skills");
let skClones = 0;
if (skCopyNum != null) {skClones = skCopyNum}

let copySk, copyCvSk, copySkInput, copySkInputs 

addSkBtn.addEventListener("click", (e) => {
    skClones++;

    cloneElem(copySk, copyCvSk, copySkInput, copySkInputs, skClones, skills, cvSkills, sk, cvSk)

    // save number of copies to localStorage
    localStorage.setItem("skCopyNums", skClones);
});

// to clone languages and cv-languages elements
let langCopyNum = localStorage.getItem("langCopyNums");
const languages = document.querySelector(".languages");
const cvLanguages = document.querySelector(".cv-languages");
const lang = document.querySelector(".lang");
const cvLang = document.querySelector(".cv-lang");
const addLangBtn = document.querySelector("#add-languages");
let langClones = 0;
if (langCopyNum != null) {langClones = langCopyNum}

let copyLang, copyCvLang, copyLangInput, copyLangInputs 

addLangBtn.addEventListener("click", (e) => {
    langClones++;

    cloneElem(copyLang, copyCvLang, copyLangInput, copyLangInputs, langClones, languages, cvLanguages, lang, cvLang)

    // save number of copies to localStorage
    localStorage.setItem("langCopyNums", langClones);
});


// to retrieve cloned elements and cv-elements

// to retrieve cloned experiences and cv-experiences elements
retrieveElement(copyExp, copyCvExp, copyExpInput, copyExpInputs, expClones, experiences, cvExperiences, exp, cvExp)
// to to retrieve cloned experiences and cv-experiences elements
retrieveElement(copyEdu, copyCvEdu, copyEduInput, copyEduInputs, eduClones, education, cvEducation, edu, cvEdu)
// to to retrieve cloned certificates and cv-experiences elements
retrieveElement(copyCer, copyCvCer, copyCerInput, copyCerInputs, cerClones, certificates, cvCertificates, cer, cvCer)
// to to retrieve cloned skills and cv-skills elements
retrieveElement(copySk, copyCvSk, copySkInput, copySkInputs, skClones, skills, cvSkills, sk, cvSk)
// to to retrieve cloned languages and cv-languages elements
retrieveElement(copyLang, copyCvLang, copyLangInput, copyLangInputs, langClones, languages, cvLanguages, lang, cvLang)


dataBack()

write();


// mobile preview

k = 1;
const preview = () => {
    k++;
    k % 2 === 0 ? window.scroll(0, 10000) : window.scroll(0, 0);

};




