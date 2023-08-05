import {ContactInterface} from "../register/formDataInterface";

export interface StudentTableData {
  id: string,
  name: string,
  address: string,
  contacts: ContactInterface[],
  nic: string,
  birthday: Date,
}
