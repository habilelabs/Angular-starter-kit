import { FormControl, FormGroup } from '@angular/forms';

// Email field regex
export function emailValidator(control: FormControl): { [key: string]: any } {
    const emailRegexp =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value && !emailRegexp.test(control.value.toLowerCase())) {
        return { invalidEmail: true };
    }
    return { invalidEmail: false };
}

// Match password and re-password
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
        const password = group.controls[passwordKey];
        const confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true,
            };
        }
        return {
            mismatchedPasswords: false,
        };
    };
}

// Validate if string contains only spaches
export function isBlankString(control: FormControl): { [key: string]: any } {
    const validWordRegexp = /^[^\s]+((?!\s{2,}).)*$/;
    if (control.value && !validWordRegexp.test(control.value)) {
        return { blankString: true };
    }
    return { blankString: false };
}
