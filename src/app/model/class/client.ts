// Objects that are going to be bound to the form are to be in the class model. Like POST or PATCH or PUT method's body data.

export class Client {
  clientId: number
  contactPersonName: string
  companyName: string
  address: string
  city: string
  pincode: string
  state: string
  EmployeeStrength: number
  gstNo: string
  contactNo: string
  regNo: string

  constructor() {
    this.clientId = 0
    this.contactPersonName = ''
    this.companyName = ''
    this.address = ''
    this.city = ''
    this.pincode = ''
    this.state = ''
    this.EmployeeStrength = 0
    this.gstNo = ''
    this.contactNo = ''
    this.regNo = ''
  }
}
