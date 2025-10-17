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
      name: 'Figma',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
      type: 'Design'
    },
    {
      name: 'Slack',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
      type: 'Communication'
    },
    {
      name: 'McDonald\'s',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png',
      type: 'Food & Beverage'
    },
    {
      name: 'Figma',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
      type: 'Design Tools'
    },
    {
      name: 'Slack',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
      type: 'Collaboration'
    },
    {
      name: 'McDonald\'s',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png',
      type: 'Retail'
    },
    {
      name: 'McDonald\'s',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png',
      type: 'Retail'
    },
    {
      name: 'McDonald\'s',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png',
      type: 'Retail'
    }
  ];
}