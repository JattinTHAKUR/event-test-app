import { Component, OnInit } from '@angular/core';

// Replace with your actual event data structure
interface Event {
  date: string;
  from: string;
  to: string;
  voyageStage: string;
  voyageLeg: string;
  event: string;
  position: string;
  fuel: string;
  ROB: string;

}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = []; // Replace with your event data

  constructor() { }

  ngOnInit() {
    // Initialize your event data here
    // This is just an example, replace with your actual data fetching logic
    this.events = [
      {
        date: '2024-01-01',
        from: 'Koh Sichang - THKSI',
        to: 'Matadi - CDMAT',
        voyageStage: 'LADEN',
        voyageLeg: 'OCEAN',
        event: 'Noon-Port',
        position: 'AT PORT',
        fuel: '1.21', //aux engine LFO
        ROB: '375.04'
      },
      {
        date: '2024-01-02',
        from: 'Koh Sichang - THKSI',
        to: 'Matadi - CDMAT',
        voyageStage: 'LADEN',
        voyageLeg: 'OCEAN',
        event: 'Noon-Port',
        position: 'AT PORT',
        fuel: '1.15', //aux engine LFO
        ROB: '373.26'
      },
      {
        date: '2024-01-03',
        from: 'Koh Sichang - THKSI',
        to: 'Matadi - CDMAT',
        voyageStage: 'LADEN',
        voyageLeg: 'OCEAN',
        event: 'Noon-Port',
        position: 'AT PORT',
        fuel: '1.34', //aux engine LFO
        ROB: '371.59'
      },
      {
        date: '2024-01-04',
        from: 'Koh Sichang - THKSI',
        to: 'Matadi - CDMAT',
        voyageStage: 'LADEN',
        voyageLeg: 'OCEAN',
        event: 'Noon-Port',
        position: 'AT PORT',
        fuel: '1.27', //aux engine LFO
        ROB: '369.83'
      }
      // ... other event data
    ];
  }
}