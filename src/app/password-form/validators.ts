import {FormGroup} from '@angular/forms';

export function matchingInputsValidator(firstString, secondString) {
	return function checkMatch(group: FormGroup) {
		if (group.controls[firstString].value !== group.controls[secondString].value) {
			return {missmatch : true};
		}
		return null;
	};
}
