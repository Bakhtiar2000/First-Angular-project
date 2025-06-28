import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import {
  APIResponseModel,
  IDesignation,
} from '../../model/interface/role.interface';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterService = inject(Master);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (result: APIResponseModel) => {
        this.designationList = result.data;
        this.isLoader = false;
      },
      (error) => {
        alert('Api error');
        this.isLoader = false;
      }
    );
  }
}
