const email = document.getElementById('email');
const error = document.getElementById('error-message');
const errorArrow = document.getElementById('error-arrow')
const form = document.getElementById('form');

//email.oninvalid = invalid;

//form.onsubmit = submit;

form.addEventListener('sumbit', function (event) {
    if(email.validity.typeMismatch) {
        // email.setCustomValidity('Please provide a valid email.');
        error.classList.remove('hidden');
        errorArrow.classList.remove('hidden');
        
    } else {
        email.setCustomValidity('');
    }
    event.preventDefault();
});


/* function invalid(event) {
    error.classList('hidden').remove;
    errorArrow.classList('hidden').remove;
} */
