import { Component } from '@angular/core';

interface Client {
  name: string;
  logo: string;
  type: string;
}

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.css']
})
export class ClientSectionComponent {
  clients: Client[] = [
    {
      name: 'Kuik CV',
      logo: '../../../../kuikcv.png',
      type: 'Human Resources'
    },
    {
      name: 'TBPart Automative',
      logo: '../../../../tbpart.png',
      type: 'Manufacturing'
    },
    {
      name: 'Bull Fight Portugal',
      logo: '../../../../bullfight.png',
      type: 'Combat Gear'
    },
    {
      name: 'Decodora',
      logo: '../../../../decodora.png',
      type: 'Interior Design'
    },
  ];
}