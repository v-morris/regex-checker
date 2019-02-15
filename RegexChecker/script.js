function regexChecker() {
    let firstName = document.getElementById('firstName').value;
    let firstNameRegex = /^[A-Z][a-z]+[^``!@#$%^&*()-_=+]$/;

    let lastName = document.getElementById('lastName').value;
    let lastNameRegex = /^[A-Z][a-z]+[^``!@#$%^&*()-_=+]$/;

    if (firstName.match(firstNameRegex) && lastName.match(lastNameRegex)) {
        alert('Yay! Your inputs were all correct!');
    }
    else {
        alert('Oh no! That\'s an invalid format!');

    }
}