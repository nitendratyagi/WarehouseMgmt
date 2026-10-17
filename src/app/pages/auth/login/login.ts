import { Component, inject } from '@angular/core';
import { UserLoginModel } from '../../../core/models/classes/user.model';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/services/user';
import { API_Response } from '../../../core/models/interfaces/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  userService = inject(User);
  router = inject(Router);
  loginObj: UserLoginModel = new UserLoginModel();
  onLogin() {
    this.userService.loginUser(this.loginObj).subscribe({
      next: (res: API_Response) => {
        if (res.result) {
          localStorage.setItem('warehousemgmt', JSON.stringify(res.data));
          this.router.navigate(['/admin/Client-List']);
        } else {
          alert(res.message);
        }
      },
      error: (error: HttpErrorResponse) => {},
    });
  }
}
