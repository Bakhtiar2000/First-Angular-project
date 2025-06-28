import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role.interface';
import { Client } from '../model/class/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<APIResponseModel> {
    const mockResponse: APIResponseModel = {
      // I am providing this static data just because the api did not work (Had cors error issue)
      message: '',
      result: true,
      data: [
        {
          clientId: 1,
          companyName: 'ABC Corp',
          contactPersonName: 'John Doe',
          contactNo: '1234567890',
          city: 'New York',
          address: '123 Main St',
          pincode: '10001',
          state: 'NY',
          EmployeeStrength: 100,
          gstNo: 'GST123456',
          regNo: 'REG123456',
        },
        {
          clientId: 2,
          companyName: 'XYZ Inc',
          contactPersonName: 'Jane Smith',
          contactNo: '0987654321',
          city: 'Los Angeles',
          address: '456 Sunset Blvd',
          pincode: '90001',
          state: 'CA',
          EmployeeStrength: 250,
          gstNo: 'GST234567',
          regNo: 'REG234567',
        },
        {
          clientId: 3,
          companyName: 'Acme Corp',
          contactPersonName: 'Alice Johnson',
          contactNo: '5555555555',
          city: 'Chicago',
          address: '789 Windy Rd',
          pincode: '60601',
          state: 'IL',
          EmployeeStrength: 300,
          gstNo: 'GST345678',
          regNo: 'REG345678',
        },
        {
          clientId: 4,
          companyName: 'Tech Solutions',
          contactPersonName: 'Bob Brown',
          contactNo: '4444444444',
          city: 'San Francisco',
          address: '101 Tech Ln',
          pincode: '94101',
          state: 'CA',
          EmployeeStrength: 150,
          gstNo: 'GST456789',
          regNo: 'REG456789',
        },
        {
          clientId: 5,
          companyName: 'Global Enterprises',
          contactPersonName: 'Charlie White',
          contactNo: '3333333333',
          city: 'Miami',
          address: '202 Ocean Dr',
          pincode: '33101',
          state: 'FL',
          EmployeeStrength: 500,
          gstNo: 'GST567890',
          regNo: 'REG567890',
        },
        {
          clientId: 6,
          companyName: 'Innovatech',
          contactPersonName: 'David Green',
          contactNo: '2222222222',
          city: 'Seattle',
          address: '303 Rainy St',
          pincode: '98101',
          state: 'WA',
          EmployeeStrength: 75,
          gstNo: 'GST678901',
          regNo: 'REG678901',
        },
      ],
    };
    return of(mockResponse);
  }

  // getAllClients(): Observable<APIResponseModel> {
  //   return this.http.get<APIResponseModel>(`${environment.API_URL}/getAllClients`);
  // }
  addOrUpdateClient(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      `${environment.API_URL}/AddUpdateClient`,
      obj
    );
  }
  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      `${environment.API_URL}/DeleteClientById?clientId=${id}`
    );
  }
}
