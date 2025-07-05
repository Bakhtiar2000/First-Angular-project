import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client';
import {
  APIResponseModel,
  ClientProject,
  Employee,
} from '../../model/interface/role.interface';
import { Client } from '../../model/class/client';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Alert } from "../../reusableComponents/alert/alert";

// Using Default Reactive Form Example in this component
@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, Alert], // You need to import pipe before using it
  templateUrl: './client-project.html',
  styleUrl: './client-project.css',
})
export class ClientProjectComponent implements OnInit {
  // Using reactive Form
  projectForm: FormGroup = new FormGroup({
    // Initial Default values for all the fields
    clientId: new FormControl(0),
    clientProjectId: new FormControl(0),
    projectCost: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    totalEmpWorking: new FormControl(0),
    contactPerson: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
  });

  client = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  firstName = signal('Angular 18'); // Just like useState in react
  projectList = signal<ClientProject[]>([])
  ngOnInit(): void {
    const name = this.firstName();
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject()
  }
  changeName() {
    this.firstName.set('React JS');
  }
  onSaveProject() {
    const formValue = this.projectForm.value;
    // console.log(formValue)
    // debugger;
    this.client
      .addOrUpdateClientProject(formValue)
      .subscribe((res: APIResponseModel) => {
        if (res.result) alert('Project created');
        else alert('Deleted Project');
      });
  }
  getAllEmployee() {
    this.client.getAllEmployees().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }
  getAllClientProject() {
    this.client.getAllClientProjects().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data)
    });
  }
  getAllClient() {
    this.client.getAllEmployees().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }
}
