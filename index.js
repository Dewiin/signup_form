const password = document.querySelector(".input #password");
const confirmPassword = document.querySelector(".input #password2");

const checkPasswords = () => {
    if(password.value != confirmPassword.value) {
        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    }
    else {
        password.style.border = "1px solid #E5E7EB";
        confirmPassword.style.border = "1px solid #E5E7EB";
    }

};

confirmPassword.addEventListener("input", () => {
    checkPasswords();
});