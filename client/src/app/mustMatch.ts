import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Directive} from "@angular/core";

// custom validator to check that two fields match
export function MustMatch(control: AbstractControl, matchingControl: AbstractControl): ValidatorFn {
  return ():  {[key: string]: any} | null => {

    // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
    //   // return if another validator has already found an error on the matchingControl
    //   return;
    // }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {

      return { mustMatch: true };
    } else {
      return null;
    }
  }
}
