import passwordValidator from 'password-validator';

const VALIDATION_ERROR_MESSAGES = {
    EMAIL_REQUIRED: 'An email address is required',
    EMAIL_INVALID: 'Invalid email format',
    PASSWORD_REQUIRED: 'Please choose a password',
    PASSWORD_MIN_8: 'Password must contain 8 characters',
    PASSWORD_UPPER_REQUIRED: 'Password must contain at least one uppercase letter',
    PASSWORD_LOWER_REQUIRED: 'Password must contain at least one lowercase letter',
    PASSWORD_DIGIT_REQUIRED: 'Password must contain at least one digit',
    PASSWORD_SYMBOL_REQUIRED: 'Password must contain at least one symbol',
    PASSWORD_DEFAULT: 'Password must be 8 characters long and contain one uppercase and one lowercase letter, one digit and one special character',
    NAME_REQUIRED: 'Please enter a name',
    NAME_HAS_DIGIT: 'Name cannot contain numeric values',
};

const validatePassword = (password: string): string[] => {
    if (!password) { return [VALIDATION_ERROR_MESSAGES.PASSWORD_REQUIRED] };
    
    const passwordSchema = new passwordValidator()
        .is().min(8).has().uppercase()
        .has().lowercase().has().digits()
        .has().symbols();

    const errors: string[] = [];
    const passwordValidationErrors = passwordSchema.validate(password, { list: true }) as string[];
    // passwordValidationErrors.forEach(err => {
    //     if (err==='min'){errors.push(VALIDATION_ERROR_MESSAGES.PASSWORD_MIN_8);}
    //     else if (err==='uppercase'){errors.push(VALIDATION_ERROR_MESSAGES.PASSWORD_UPPER_REQUIRED);}
    //     else if (err==='lowercase'){errors.push(VALIDATION_ERROR_MESSAGES.PASSWORD_LOWER_REQUIRED);}
    //     else if (err==='digits'){errors.push(VALIDATION_ERROR_MESSAGES.PASSWORD_DIGIT_REQUIRED);}
    //     else if (err==='symbols'){errors.push(VALIDATION_ERROR_MESSAGES.PASSWORD_SYMBOL_REQUIRED);}
    // });
    // return errors;
    if (passwordValidationErrors.length) {
        errors.push(VALIDATION_ERROR_MESSAGES.PASSWORD_DEFAULT);
    }
    return errors;
}

const validateEmail = (email: string): string[] => {
    if (!email) {
        return [VALIDATION_ERROR_MESSAGES.EMAIL_REQUIRED];
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        return [VALIDATION_ERROR_MESSAGES.EMAIL_INVALID];
    } return [];
}

const validateName = (name: string): string[] => {
    if (!name){
        return [VALIDATION_ERROR_MESSAGES.NAME_REQUIRED];
    } else if (/\d/.test(name)){
        return [VALIDATION_ERROR_MESSAGES.NAME_HAS_DIGIT];
    }
    return [];
}

export const inputValidators = {
    email: validateEmail,
    password: validatePassword,
    firstName: validateName,
};