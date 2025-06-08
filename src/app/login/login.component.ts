import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'angular-tutorial';

  onClick(){
    alert("function 2 Called");
  }
}
