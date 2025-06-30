// Objects that are going to come as a response are to be in the interface model. Like GET method's response data.

export interface IRole {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface Employee {
  empName: string;
  empId: string;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
}
