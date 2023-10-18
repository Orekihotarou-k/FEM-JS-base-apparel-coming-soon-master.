// let sumbitBtn = document.getElementById("sumbit");
// let emailInput = document.getElementById("input");
// let errorMessage = document.getElementById("error-message");

// sumbitBtn.addEventListener("click", function () {

//     const value = emailInput.value;

//     if (value === ""){
//         errorMessage.innerHtml = "Please provide a valid email";
//     } else {
//         emailInput.classList.add("error")
//     }

// });


const submitBtn = document.getElementById("submit");
let submitBorder = document.getElementById("input");
let errorMessage = document.getElementById("error-message");
let emailInput = document.getElementById("email-input");

submitBtn.addEventListener("click", function () {
    const value = emailInput.value;

    if (value === ""){
        errorMessage.innerHTML = "Please provide a valid email!";
        submitBorder.classList.add("error");

        document.querySelector(".error-icon").style.visibility = "visible";
    }
})