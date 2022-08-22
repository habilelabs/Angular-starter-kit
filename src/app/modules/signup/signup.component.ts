import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, isBlankString, matchingPasswords } from '../../../assets/validators/common-validators';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit, OnDestroy {
    public form!: FormGroup;
    constructor(
        private readonly fb: FormBuilder
    ) {
        // Nothing
    }

    public ngOnDestroy() {
    }

    public ngOnInit() {
        this.registerFormInit();
    }

    public onSubmit() {
        if (this.form.valid) {
            const registerUser = {
                firstName: this.form.value.firstname,
                lastName: this.form.value.lastname,
                email: this.form.value.email,
            };
            console.log(registerUser);
        }
    }

    public registerFormInit() {
        this.form = this.fb.group(
            {
                firstname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), isBlankString]],
                lastname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), isBlankString]],
                email: ['', Validators.compose([Validators.required, emailValidator])],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required],
            },
            { validator: matchingPasswords('password', 'confirmPassword') },
        );
    }
}
