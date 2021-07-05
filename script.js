const email = document.getElementById('email');
const error = document.getElementById('error-message');
const errorArrow = document.getElementById('error-arrow')
const form = document.getElementById('form');
const arrow = document.getElementById('arrow')

//email.oninvalid = invalid;

//form.onsubmit = submit;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if(email.validity.typeMismatch || email.validity.valueMissing) {
        // email.setCustomValidity('Please provide a valid email.');
        error.classList.remove('hidden');
        errorArrow.classList.remove('hidden');
    } else  {
        email.setCustomValidity(''); 
    
    } 
    
});

