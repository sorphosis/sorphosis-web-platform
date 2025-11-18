import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
  imports: [CommonModule]
})
export class ServiceCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon?: string; // optional, SVG or icon class
}
