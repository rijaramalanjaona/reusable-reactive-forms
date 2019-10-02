import {Component, forwardRef, OnDestroy} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

// describes what the return value of the form control will look like
export interface ProfileFormValues {
	firstName: string;
	lastName: string;
	email: string;
}

@Component({
	selector: 'app-profile-form',
	templateUrl: './profile-form.component.html',
	styleUrls: ['./profile-form.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ProfileFormComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => ProfileFormComponent),
			multi: true
		}
	]
})
export class ProfileFormComponent implements ControlValueAccessor, OnDestroy {
	form: FormGroup;
	subscriptions: Subscription[] = [];

	constructor(private formBuilder: FormBuilder) {
		// create the inner form
		this.form = this.formBuilder.group({
			firstName: [],
			lastName: [],
			email: ['', Validators.required]
		});

		this.subscriptions.push(
			// any time the inner form changes update the parent of any change
			this.form.valueChanges.subscribe(value => {
				this.onChange(value);
				this.onTouched();
			})
		);
	}

	get value(): ProfileFormValues {
		return this.form.value;
	}

	set value(value: ProfileFormValues) {
		this.form.setValue(value);
		this.onChange(value);
		this.onTouched(value);
	}

	get emailControl() {
		return this.form.controls.email;
	}

	onChange: any = () => {};

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

	// communicate the inner form validation to the parent form
	validate(_: FormControl) {
		return this.form.valid
			? null
			: {
				profile : {valid: false}
			};
	}

}
