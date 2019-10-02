import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';


@NgModule({
	declarations: [
		AppComponent,
		SignupFormComponent,
		ProfileFormComponent,
		PasswordFormComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
