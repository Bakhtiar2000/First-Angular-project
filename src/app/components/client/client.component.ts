import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { APIResponseModel } from '../../model/interface/role.interface';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Alert } from "../../reusableComponents/alert/alert";
import { MyButton } from "../../reusableComponents/my-button/my-button";

// Using Default Form Example in this component
@Component({
  selector: 'app-client',
  imports: [FormsModule, DatePipe, JsonPipe, AsyncPipe, Alert, MyButton],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  // Initializing class is easier than interface. So we use class when we need to bind data to the form.
  clientObj: Client = new Client();
  clientService = inject(ClientService); // It works as an alternative to using constructor-based dependency injection (DI). Instead of constructor(private clientService: ClientService) {} we write clientService = inject(ClientService)
  currentDate: Date = new Date();
  clientList: Client[] = [];
  userList$: Observable<any> = new Observable<any>(); // This is an observable. We can directly subscribe it into html. The naming convention of observable includes '$' at its end

  // This method is called when the component is initialized
  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUsers();
  }
  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data as Client[];
    });
  }
  /*
    Observable is used for handling asynchronous data streams — like HTTP requests, user input. Its lazy (unlike promise) means nothing happens until .subscribe is called. Its cancellable (using unsubscribe)
    --------------------------------------------------------------------------------------
    .subscribe() is a method you call on an Observable to execute it and react to its emitted values. Example:
    observable.subscribe({
      next: (data) => {  handle success  },
      error: (err) => {  handle error  },
      complete: () => {  handle completion }
    });
    --------------------------------------------------------------------------------------
    async pipe is used to to automatically subscribe and unwrap the observable. So there is not much code in the ts file. Like userList$ is this file
  */

  onSaveClient(data: string) {
    // debugger; // This will pause the execution in the browser's developer tools, allowing you to inspect the current state of the application.
    console.log(data)
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
