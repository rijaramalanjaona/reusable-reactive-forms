import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-renew-password',
	templateUrl: './renew-password.component.html',
	styleUrls: ['./renew-password.component.css']
})
export class RenewPasswordComponent implements OnInit {
	renewForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.renewForm = this.formBuilder.group({
			password: []
		});
	}

	ngOnInit() {
	}

	onSubmit() {
		console.log(this.renewForm.value);
	}
}
