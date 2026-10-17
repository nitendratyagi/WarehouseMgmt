import { Component, inject, OnDestroy, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ClientService } from '../../../core/services/client-service';
import { API_Response } from '../../../core/models/interfaces/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CLIENT_MODEL } from '../../../core/models/classes/client.model';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-client-list',
  styleUrl: './client-list.css',
  templateUrl: './client-list.html',
})
export class ClientList implements OnInit,OnDestroy {
  //clinetList:WritableSignal<CLIENT_MODEL[]>=signal<CLIENT_MODEL[]>([])
  subScription!:Subscription;
  clinetList = signal<CLIENT_MODEL[]>([]);
  clinetService = inject(ClientService);

  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClient() {
 this.subScription=   this.clinetService.getAllClients().subscribe({
      next: (res: API_Response) => {
      },
      error: (err: HttpErrorResponse) => {},
    });
  
  } 
    ngOnDestroy(): void {
   this.subScription.unsubscribe();

}


}
