import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  timesCameInside = 0
  timesWentOutside = 0

  handleEvent(event:MouseEvent){
    console.log("function called", event);
    console.log("function called", (event.target as Element).classList);
    console.log("function called", event.target);
    console.log("function called", event.type);

    if (event.type == "mouseenter") this.timesCameInside += 1;
    else if (event.type == "mouseleave") this.timesWentOutside += 1;
  }

  handleEvent2(event:Event){
    console.log(event.type)
    console.log("value: ", (event.target as HTMLInputElement).value)
  }
}
