import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, matchingPasswords } from '../../../assets/validators/common-validators';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    loading = false;
    submitted = false;
    public  email:  string  =  "";
    public  password:  string  =  "";
    public form: FormGroup;
    public showPassword: boolean = false;
    public showPasswordConfirm: boolean = false;
    public strength:string = '';
    public passwordPattern =
        '^((?=(.*[^A-Za-z0-9]){specialCharacter,})(?=(.*[A-Z]){1,})(?=(.*\\d){1,})(?=.*[a-z]){1,}).{passwordLength,}';
    constructor(
        private readonly fb: FormBuilder,
    ) {}

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
      this.showPassword =true;
        const registerUser = {
            email: this.form.value.email,
            password: this.form.value.password
        };
    }

    public registerFormInit() {
        this.form = this.fb.group(
            {
                email: ['', Validators.compose([Validators.required, emailValidator])],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required],
            },
            { validator: matchingPasswords('password', 'confirmPassword') },
        );
    }
}
