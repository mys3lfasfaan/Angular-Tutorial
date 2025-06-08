import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.component.html',
  styleUrl: './getset.component.css'
})
export class GetsetComponent {
  name = "";
  displayName = "";
  getNameOnKeyPress(event:Event){
    this.name = (event.target as HTMLInputElement).value;
  }

  setName(){
    this.displayName = this.name;
  }
  getName(){
    alert(`The name is now set as: ` + this.name);
  }
}
