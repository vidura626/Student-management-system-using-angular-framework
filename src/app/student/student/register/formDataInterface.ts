export interface FormDataInterface {
  id: string;
  fName: string,
  lName: string,
  nic: string;
  address: AddressInterface,
  contact: ContactInterface[];
  birthday: Date;
  email: string,
  // username:string,
  // password:string,
}


export interface AddressInterface {
  district: string
  line01: string,
  postalCode: number,
  town: string
}

export interface ContactInterface {
  description: string,
  number: number,
}
