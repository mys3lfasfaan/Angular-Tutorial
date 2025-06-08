import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
import { TextTutorialComponent } from './text-tutorial/text-tutorial.component';
import { GetsetComponent } from './getset/getset.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CounterComponent, EventsComponent, TextTutorialComponent, GetsetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';

  onClick(){
    alert("function 1 Called");
  }
}
