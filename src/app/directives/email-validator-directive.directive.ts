import {Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator} from "@angular/forms";
import {StudentService} from "../../db/student.service";

@Directive({
  selector: '[wijeEmailValidatorDirective]'
})
export class EmailValidatorDirectiveDirective implements Validator {

  constructor(private studentService:StudentService) {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    for (const allStudent of this.studentService.getAllStudents()) {

    };
    if(control.value.email === "wefgwe"){


      return {
        error:"Not matched"
      }
    }
    return null;
  }


}
