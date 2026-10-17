import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { API_Response } from '../models/interfaces/common.model';
import { Observable } from 'rxjs';
import { GLOBAL_CONSTANTS } from '../constants/global.constant';
import { environment } from '../../../environments/environment';
import { CLIENT_MODEL } from '../models/classes/client.model';

@Service()
export class ClientService {
http = inject(HttpClient);
  getAllClients(): Observable<API_Response> {
    return this.http.get<API_Response>(
      environment.API_URL + GLOBAL_CONSTANTS.API_METHODS.GET_ALL_CLIENTS
    );
  }

saveClient(obj:CLIENT_MODEL):Observable<API_Response> {
    return this.http.post<API_Response>(environment.API_URL+GLOBAL_CONSTANTS.API_METHODS.SAVE_CLIENT,obj)
}


}
