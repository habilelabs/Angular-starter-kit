import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, isBlankString, matchingPasswords } from '../../../assets/validators/common-validators';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public showPassword = false;
    public showPasswordConfirm = false;
    strength = '';
    public passwordPattern =
        '^((?=(.*[^A-Za-z0-9]){specialCharacter,})(?=(.*[A-Z]){1,})(?=(.*\\d){1,})(?=.*[a-z]){1,}).{passwordLength,}';
    constructor(
        private readonly fb: FormBuilder
    ) {
        // Nothing
    }

    public ngOnDestroy() {
    }

    public onPasswordInput() {
        this.checkPasswordFormat();
        if (this.form.hasError('mismatchedPasswords')) {
            this.form.controls.confirmPassword.setErrors({ mismatchedPasswords: true });
        } else {
            this.form.controls.confirmPassword.setErrors(null);
        }
    }

    checkPasswordFormat() {
        const passwordFormat = new RegExp(this.passwordPattern).test(this.form.value.password);
        if (!this.form.value.password || this.form.value.password.length < 8 || !passwordFormat) {
            this.strength = 'Not Acceptable';
        }
        if (this.form.value.password && this.form.value.password.length > 7 && passwordFormat) {
            this.strength = 'Acceptable';
        }
    }

    public ngOnInit() {
        this.registerFormInit();
    }

    public onSubmit() {
        const registerUser = {
            firstName: this.form.value.firstName,
            lastName: this.form.value.lastName,
            email: this.form.value.email,
            password: this.form.value.password
        };
    }

    public registerFormInit() {
        this.form = this.fb.group(
            {
                firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), isBlankString]],
                lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), isBlankString]],
                email: ['', Validators.compose([Validators.required, emailValidator])],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required],
            },
            { validator: matchingPasswords('password', 'confirmPassword') },
        );
    }
}
