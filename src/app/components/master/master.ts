import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles';
import { DesignationComponent } from '../designation/designation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class MasterComponent {
  currentComponent: string = 'Roles';
  changeTab(tabName: string){
    this.currentComponent= tabName
  }
}
