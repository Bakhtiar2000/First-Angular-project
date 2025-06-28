import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {}

  getDesignations(): Observable<APIResponseModel> {
    const mockResponse: APIResponseModel = {
      // I am providing this static data just because the api did not work (Had cors error issue)
      message: '',
      result: true,
      data: [
        { designationId: 26, designation: 'Front end Developer' },
        { designationId: 28, designation: 'Back end Developer' },
        { designationId: 35, designation: 'UI/UX Developer' },
      ],
    };
    return of(mockResponse);
  }

  // getDesignations(): Observable<APIResponseModel> {
  //   return this.http.get<APIResponseModel>(
  //     'https://freeapi.miniprojectideas.com/api/clientStrive/getAllDesignation'
  //   );
  // }
}
