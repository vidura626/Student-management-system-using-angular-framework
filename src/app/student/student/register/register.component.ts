import {Component, OnInit, Output, ViewChild, EventEmitter, Input} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {StudentService} from "../../../../db/student.service";
import {FormDataInterface} from "./formDataInterface";

@Component({
  selector: 'wije-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() dataOutput = new EventEmitter<any>();
  @Input() title: string = "student";

  registerForm!: FormGroup;
  studentsList!: FormDataInterface;
  // @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: new FormControl('', {
        validators:
          [
            Validators.required,
            Validators.pattern(/^(S-[0-9]{3,3})$/)
          ],
        updateOn: "blur"
      }),
      birthday: new FormControl('', {
        validators:
          [
            Validators.required,
            // Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)
          ]
      }),
      nic: new FormControl('',
        {
          validators:
            [
              Validators.required, Validators.minLength(9), Validators.maxLength(12),
              Validators.pattern(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/)
            ],
          updateOn: "blur"
        }
      ),
      fName: new FormControl('', {
        validators:
          [
            Validators.required, Validators.minLength(4), Validators.maxLength(50)
          ],
        updateOn: "blur"
      }),
      lName: new FormControl('', {
        validators:
          [
            Validators.required, Validators.minLength(4), Validators.maxLength(50)
          ],
        updateOn: "blur"
      }),

      gender: new FormControl('', {
        validators:
          [
            Validators.required
          ],
        updateOn: "blur"
      }),

      email: new FormControl('', {
        validators:
          [
            Validators.required, Validators.minLength(10), Validators.maxLength(50),
            Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
          ],
        updateOn: "blur"
      }),

      contacts: this.formBuilder.array([
          this.formBuilder.group({
            description: new FormControl('', {
              validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
              updateOn: "blur"
            }),
            number: new FormControl('', {
              validators: [Validators.required, Validators.maxLength(12)],
              updateOn: "blur"
            })
          })
        ]
      ),

      address: this.formBuilder.group({
        line01: new FormControl('', {
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
          updateOn: "blur"
        }),
        town: new FormControl('', {
          validators: [Validators.required, Validators.maxLength(50)],
          updateOn: "blur"
        }),
        district: new FormControl('', {
          validators: [Validators.required, Validators.maxLength(50)],
          updateOn: "blur"
        }),
        postalCode: new FormControl('', {
          validators: [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
          updateOn: "blur"
        }),
      })
    });

    this.registerForm.patchValue({
        id: 'S-001',
        birthday: new Date(2000, 6, 26),
        nic: 200017802016,
        fName: 'Vidura',
        lName: 'Wijesinghe',
        gender: 'MALE',
        email: 'wijeisnghemap@gmail.com',
        contacts: [
          {
            description: 'home',
            number: '0704436669'
          },
          {
            description: 'personal',
            number: '0762636057'
          },
        ],
      }
    );
    this.registerForm.get('address')?.setValue({
      line01: '57/1, habarakada-west',
      town: 'thawalama',
      district: 'Galle',
      postalCode: '80148',
    })
  }

  get getContacts() {
    return this.registerForm.get("contacts") as FormArray;
  }

  addContact() {
    this.getContacts.push(
      this.formBuilder.group({
        description: new FormControl('', {
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
          updateOn: "blur"
        }),
        number: new FormControl('', {
          validators: [Validators.required, Validators.maxLength(12)],
          updateOn: "blur"
        })
      })
    );
  }

  removeContact(index: number) {
    if (this.getContacts.length != 1) {
      this.getContacts.removeAt(index);
    }
  }

  submitted!: string;
  formData!: FormDataInterface;
  add() {
    if (this.registerForm.valid) {
      this.formData = {
        id: this.registerForm.get('id')?.value,
        fName: this.registerForm.get('fName')?.value,
        lName: this.registerForm.get('lName')?.value,
        email: this.registerForm.get('email')?.value,
        address: this.registerForm.get('address')?.value,
        nic: this.registerForm.get('nic')?.value,
        contact: this.registerForm.get('contacts')?.value,
        birthday: this.registerForm.get('birthday')?.value as Date,
      }
      this.dataOutput.emit(this.formData);
    }
  }

  resetForm(registerForm: FormGroup) {
    registerForm.reset(
      {
        id: 'S001',
        birthday: new Date(),
        nic: '',
        fName: '',
        lName: '',
        gender: '',

        email: '',

        contacts: '',

        address: '',
      }
    );
  }
}
