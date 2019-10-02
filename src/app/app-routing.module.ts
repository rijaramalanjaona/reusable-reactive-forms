import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {RenewPasswordComponent} from './renew-password/renew-password.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{path: 'signup', component: SignupFormComponent},
	{path: 'renew-password', component: RenewPasswordComponent},
	{path: '', redirectTo: 'signup', pathMatch: 'full'}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }
