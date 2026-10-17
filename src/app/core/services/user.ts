import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { UserLoginModel } from '../models/classes/user.model';
import { environment } from '../../../environments/environment';
import { GLOBAL_CONSTANTS } from '../constants/global.constant';
import { API_Response } from '../models/interfaces/common.model';

@Service()
export class User {

http=inject(HttpClient);
loginUser(obj:UserLoginModel){
   return this.http.post<API_Response>(environment.API_URL+GLOBAL_CONSTANTS.API_METHODS.LOGIN,obj)

}

}
