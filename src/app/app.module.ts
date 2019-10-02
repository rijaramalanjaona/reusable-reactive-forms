import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { RenewPasswordComponent } from './renew-password/renew-password.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
	declarations: [
		AppComponent,
		SignupFormComponent,
		ProfileFormComponent,
		PasswordFormComponent,
		RenewPasswordComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
