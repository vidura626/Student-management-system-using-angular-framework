import {Component, Input, OnInit} from '@angular/core';
import {ContactInterface, StudentInterface} from "../register/student.interface";
import {StudentService} from "../../../../db/student.service";


@Component({
  selector: 'wije-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  allStudents: StudentInterface[] = [];
  studentTblDataSource: any[] = [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.allStudents = this.studentService.getAllStudents();
    this.setTable();
  }

  setTable() {
    for (const event of this.allStudents) {
      let student = {
        id: event.id,
        name: event.fName.concat(" ").concat(event.lName),
        address:
          event.address.line01.concat(" ")
            .concat(event.address.town).concat(" ")
            .concat(event.address.district).concat(" ")
            .concat(event.address.postalCode.toString()),
        contacts: event.contact,
        nic: event.nic,
        birthday: event.birthday
      }
      this.studentTblDataSource = [...this.studentTblDataSource, student];
    }
    ;
  }


  displayedColumns: string[] = ['id', 'name', 'nic', 'birthday', 'address', 'contact'];
  contactTblDataSource: ContactInterface[] = [];
  showContacts: boolean = false;
  displayedContactColumns: string[] = ["description", "number"];

  viewContacts(element: ContactInterface[]) {
    console.log(element);
    this.contactTblDataSource = [...this.contactTblDataSource, ...element];
    this.showContacts = true;
  }

  back() {
    this.showContacts = !this.showContacts;
    this.contactTblDataSource = [];
    this.showContacts = false;
  }

}
