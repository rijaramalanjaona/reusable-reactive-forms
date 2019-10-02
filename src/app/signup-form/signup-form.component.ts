import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
	signupForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.signupForm = this.formBuilder.group({
			profile: [],
			password: []
		});
	}

	ngOnInit() {
	}

	onSubmit() {
		console.log(this.signupForm.value);
	}

}
