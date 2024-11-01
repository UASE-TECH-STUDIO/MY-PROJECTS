const buttonEl = document.querySelector("button");
const inputEl = document.querySelector(".date");
const result = document.querySelector(".result");

function calculateAge() {
    let birthdayValue = inputEl.value;
    if (birthdayValue === "") {
        alert("please enter your birthday");
    } else {
        let age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age; 
}

buttonEl.addEventListener("click", () => {
    calculateAge();
});
