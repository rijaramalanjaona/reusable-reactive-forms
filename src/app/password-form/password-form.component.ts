import {Component, forwardRef, OnDestroy} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {matchingInputsValidator} from './validators';

export interface PasswordFormValues {
	password: string;
	confirmPassowrd: string;
}

@Component({
	selector: 'app-password-form',
	templateUrl: './password-form.component.html',
	styleUrls: ['./password-form.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PasswordFormComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => PasswordFormComponent),
			multi: true
		}
	]
})
export class PasswordFormComponent implements ControlValueAccessor, OnDestroy {
	form: FormGroup;
	subscriptions: Subscription[] = [];

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
				password: ['', Validators.required],
				confirmPassword: ['', Validators.required]
			},
			{
				validator: matchingInputsValidator('password', 'confirmPassword')
			});

		this.subscriptions.push(
			this.form.valueChanges.subscribe(value => {
				this.onChange(value);
				this.onTouched();
			})
		);
	}

	get value(): PasswordFormValues {
		return this.form.value;
	}

	set value(value: PasswordFormValues) {
		this.form.setValue(value);
		this.onChange(value);
		this.onTouched();
	}

	get passwordControl() {
		return this.form.controls.password;
	}

	get confirmPasswordControl() {
		return this.form.controls.confirmPassword;
	}

	onChange: any = () =>  {};

	onTouched: any = () => {};

	ngOnDestroy(): void {
		this.subscriptions.forEach(
			s => s.unsubscribe()
		);
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		if (value) {
			this.value = value;
		}
	}

	validate(_: FormControl) {
		return this.form.valid
			? null
			: {
				passwords: {
					valid: false
				}
			};
	}

}
