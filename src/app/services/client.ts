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
  getAllEmployees(): Observable<APIResponseModel> {
    const mockResponse: APIResponseModel = {
      message: '',
      result: true,
      data: [
        {
          clientProjectId: 1,
          projectName: 'Smart Inventory System',
          startDate: '2024-03-01',
          expectedEndDate: '2024-10-01',
          leadByEmpId: 101,
          completedDate: '',
          contactPerson: 'John Doe',
          contactPersonContactNo: '1234567890',
          totalEmpWorking: 5,
          projectCost: 15000,
          projectDetails:
            'A full-stack inventory management system integrated with barcode scanning.',
          contactPersonEmailId: 'john.doe@abccorp.com',
          clientId: 1,
        },
        {
          clientProjectId: 2,
          projectName: 'AI Chatbot Support',
          startDate: '2024-05-15',
          expectedEndDate: '2024-11-30',
          leadByEmpId: 104,
          completedDate: '',
          contactPerson: 'Jane Smith',
          contactPersonContactNo: '0987654321',
          totalEmpWorking: 8,
          projectCost: 23000,
          projectDetails:
            'Developing an AI-based customer service chatbot using NLP.',
          contactPersonEmailId: 'jane.smith@xyzinc.com',
          clientId: 2,
        },
        {
          clientProjectId: 3,
          projectName: 'E-commerce Platform',
          startDate: '2024-01-10',
          expectedEndDate: '2024-07-10',
          leadByEmpId: 110,
          completedDate: '2024-07-01',
          contactPerson: 'Alice Johnson',
          contactPersonContactNo: '5555555555',
          totalEmpWorking: 10,
          projectCost: 30000,
          projectDetails:
            'Custom e-commerce platform with integrated payment and delivery tracking.',
          contactPersonEmailId: 'alice.johnson@acmecorp.com',
          clientId: 3,
        },
        {
          clientProjectId: 4,
          projectName: 'Remote Work Portal',
          startDate: '2024-02-20',
          expectedEndDate: '2024-09-01',
          leadByEmpId: 108,
          completedDate: '',
          contactPerson: 'Bob Brown',
          contactPersonContactNo: '4444444444',
          totalEmpWorking: 6,
          projectCost: 18000,
          projectDetails:
            'A secure portal for managing distributed teams and productivity.',
          contactPersonEmailId: 'bob.brown@techsolutions.com',
          clientId: 4,
        },
        {
          clientProjectId: 5,
          projectName: 'Logistics Optimization System',
          startDate: '2024-06-01',
          expectedEndDate: '2024-12-15',
          leadByEmpId: 115,
          completedDate: '',
          contactPerson: 'Charlie White',
          contactPersonContactNo: '3333333333',
          totalEmpWorking: 7,
          projectCost: 25000,
          projectDetails:
            'AI-driven route and delivery scheduling optimization for logistics.',
          contactPersonEmailId: 'charlie.white@globalenterprises.com',
          clientId: 5,
        },
        {
          clientProjectId: 6,
          projectName: 'IoT-Based Energy Monitoring',
          startDate: '2024-04-10',
          expectedEndDate: '2024-11-10',
          leadByEmpId: 120,
          completedDate: '',
          contactPerson: 'David Green',
          contactPersonContactNo: '2222222222',
          totalEmpWorking: 4,
          projectCost: 14000,
          projectDetails:
            'IoT solution to monitor and optimize power consumption in factories.',
          contactPersonEmailId: 'david.green@innovatech.com',
          clientId: 6,
        },
      ],
    };
    return of(mockResponse);
  }

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
  addOrUpdateClientProject(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      `${environment.API_URL}/AddUpdateClientProject`,
      obj
    );
  }
  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      `${environment.API_URL}/DeleteClientById?clientId=${id}`
    );
  }
}
