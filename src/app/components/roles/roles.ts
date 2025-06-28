import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role.interface';
import { CommonModule } from '@angular/common';

@Component({
  // this is component decorator
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class RolesComponent implements OnInit {
  // oninit is a lifecycle event

  roleList: IRole[] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleList = [
      {
        roleId: 2,
        role: 'sam',
      },
      {
        roleId: 4,
        role: 'Junior Developer',
      },
      {
        roleId: 6,
        role: 'Team Lead',
      },
      {
        roleId: 13,
        role: 'Manager',
      },
      {
        roleId: 31,
        role: 'string',
      },
      {
        roleId: 32,
        role: 'my',
      },
      {
        roleId: 34,
        role: 'Sa',
      },
      {
        roleId: 35,
        role: 'Saurav',
      },
    ];
  }

  // getAllRoles() {
  //   this.http
  //     .get('https://freeapi.miniprojectideas.com/api/clientStrive/getAllRoles')
  //     .subscribe((res: any) => {
  //       this.roleList = res.data;
  //     });
  // }

  // firstName: string = 'Angular';
  // angularVersion = 'Version 20';
  // version: number = 20;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = 'button';
  // selectedState: string = '';

  // showWelcomeAlert(){
  //   alert("Angular alert!")
  // }

  // showMessage(message: string){
  //   alert(message)
  // }
}
