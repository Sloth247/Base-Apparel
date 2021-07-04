const email = document.getElementById('email');
const error = document.getElementById('error-message');
const errorArrow = document.getElementById('error-arrow')
const form = document.getElementById('form');
const arrow = document.getElementById('arrow')

//email.oninvalid = invalid;

//form.onsubmit = submit;

arrow.addEventListener('click', function (event) {
    if(email.validity.typeMismatch || email.validity.valueMissing) {
        // email.setCustomValidity('Please provide a valid email.');
        error.classList.toggle('hidden');
        errorArrow.classList.toggle('hidden');
        event.preventDefault();
    } else  {
        email.setCustomValidity(''); 
    
    } 
    
});


/* function invalid(event) {
    error.classList('hidden').remove;
    errorArrow.classList('hidden').remove;
} */
