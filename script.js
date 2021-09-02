const form = document.querySelector(".main__form");
const input = document.querySelector(".main__form--input");

const errorMsg = document.querySelector(".main__form--error-message");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailValidation();
});

const isEmail = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
};

const emailValidation = () => {
  if (input.value.trim() === "") {
    errorMsg.innerHTML = "Email cannot be empty";

    input.classList.add("warning-active");
    errorIcon.classList.add("error-show");
    return false;
  } else if (!isEmail(input.value.trim())) {
    errorMsg.innerHTML = "please provide a valid email address";

    input.classList.add("warning-active");
    errorIcon.classList.add("error-show");
    return false;
  } else if (isEmail(input.value)) {
    errorMsg.innerHTML = "Success! Valid email address";

    input.classList.remove("warning-active");
    errorIcon.classList.remove("error-show");
    return true;
  }
  return false;
};

input.addEventListener("input", () => {
  errorMsg.innerHTML = "";
  input.classList.remove("warning-active");
  errorIcon.classList.remove("error-show");
});
