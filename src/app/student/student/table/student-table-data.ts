import {ContactInterface} from "../register/student.interface";

export interface StudentTableData {
  id: string,
  name: string,
  address: string,
  contacts: ContactInterface[],
  nic: string,
  birthday: Date,
}
