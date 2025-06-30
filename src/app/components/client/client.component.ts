import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { APIResponseModel } from '../../model/interface/role.interface';

// Using Default Form Example in this component
@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  // Initializing class is easier than interface. So we use class when we need to bind data to the form.
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService); // It works as an alternative to using constructor-based dependency injection (DI). Instead of constructor(private clientService: ClientService) {} we write clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient(); // This method is called when the component is initialized, and it will load the client data.
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data as Client[];
    });
  }

  onSaveClient() {
    // debugger; // This will pause the execution in the browser's developer tools, allowing you to inspect the current state of the application.
    this.clientService
      .addOrUpdateClient(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client Created Successfully!');
          this.loadClient();
          this.clientObj = new Client(); // Resetting the clientObj to a new instance of Client after successful creation to clear the form.
        } else {
          alert(res.message || 'Client Creation Failed!');
        }
      });
  }
  onEditClient(client: Client) {
    this.clientObj = client; // This will copy the properties of the client object into clientObj, allowing you to edit it.
  }
  onDeleteClient(id: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert('Client Deleted Successfully!');
            this.loadClient();
          } else {
            alert(res.message || 'Client Deletion Failed!');
          }
        });
    }
  }
}
