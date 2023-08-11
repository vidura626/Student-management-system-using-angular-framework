import {FormControl} from "@angular/forms";

export class CustomValidators {
  static emailValidator(control: FormControl): { [s: string]: boolean } | null {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(control.value)) {
      return {invalidEmail: true};
    }
    return null;
  }

  static passwordValidator(control: FormControl): { [s: string]: boolean } | null {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(control.value)) {
      return {invalidPassword: true};
    }
    return null;
  }
}
