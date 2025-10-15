import { Component } from '@angular/core';

@Component({
  selector: 'app-client-swiper',
  imports: [],
  templateUrl: './client-swiper.component.html',
  styleUrl: './client-swiper.component.css'
})
export class ClientSwiperComponent {
  clients = [
    { img: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg', name: 'Client 1' },
    { img: 'https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg', name: 'Client 2' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png', name: 'Client 3' }
  ];
  current = 0;

  next() { this.current = (this.current + 1) % this.clients.length; }
  prev() { this.current = (this.current - 1 + this.clients.length) % this.clients.length; }
}
