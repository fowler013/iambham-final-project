import emailValidator from 'email-validator';
import passwordValidator from 'password-validator';

let isPasswordValid = new passwordValidator();
isPasswordValid
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().symbols()                                 // Must have symbols
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123', 'password', '12345678',]); // Blacklist these values

export default function validate(props) {
    let { firstname, lastname, email, username, password, ratings } = props
    let isValid = true;
    let message = 'All Is Valid';

    if (firstname) {
        firstname.split(" ").forEach(word => {
            if ((/[^a-zA-Z']/gm).test(word)) {
                isValid = false;
                message = 'Invalid Firstname';
            };
        });
        if (isValid === false) {
            return [isValid, message]
        }
        if (firstname.length > 20) {
            isValid = false;
            message = 'Firstname too long';
        }
        if (isValid === false) {
            return [isValid, message]
        }
    }

    if (lastname) {
        lastname.split(" ").forEach(word => {
            if ((/[^a-zA-Z']/gm).test(word)) {
                isValid = false;
                message = 'Invalid Lastname';
            };
        });

        if (isValid === false) {
            return [isValid, message]
        }

        if (lastname.length > 20) {
            isValid = false;
            message = 'Lastname Too Long';
        }
        if (isValid === false) {
            return [isValid, message]
        }
    }

    if (username) {
        if ((/[^a-zA-Z0-9_]/gm).test(username)) {
            isValid = false;
            message = 'Invalid Username';
            return [isValid, message];
        };
    }

    if (email) {
        if (!validator.validate(email)) {
            isValid = false;
            message = 'Invalid email';
        }
        if (isValid === false) {
            return [isValid, message]
        }
    }

    if (password) {
        if (!isPasswordValid.validate(password)) {
            isValid = false;
            message = 'Invalid password';
        }
    }

    if (ratings) {
        if (isNaN(+ratings)) {
            isValid = false;
            message = 'Invalid ratings type';
            return [isValid, message]
        }
        if ((+ratings > 11) || (+ratings < 0)) {
            isValid = false;
            message = 'Invalid ratings value';
        }

    }
    return [isValid, message]
}