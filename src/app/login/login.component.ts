import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matricule: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';


 constructor(private router: Router) {}




  ngOnInit(): void {

  }
  login() {
    if (this.matricule === 'G404299' && this.password === 'rawdha') {
      this.errorMessage = '';
      this.successMessage = 'Login successful!';
      this.router.navigate(['dashboard']); // Navigate to the /dashboard route
    } else {
      this.successMessage = '';
      this.errorMessage = 'Invalid matricule or password';
    }
  }


}
