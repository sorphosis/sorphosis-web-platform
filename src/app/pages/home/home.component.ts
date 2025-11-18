import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { ClientSectionComponent } from '../../components/client-section/client-section.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";

@Component({
  selector: 'app-home',
  standalone: true, // Assuming this was missing, as per current Angular structure
  imports: [ClientSectionComponent, NavbarComponent, FooterComponent, CommonModule, RouterModule, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showNavbar = false;
  scrollProgress = 0;

  // New properties for the mouse parallax effect
  mouseX = 0;
  mouseY = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const heroHeight = window.innerHeight;

    this.showNavbar = scrollPosition > heroHeight * 0.8;
    this.scrollProgress = Math.min(scrollPosition / heroHeight, 1);
  }

  onMouseMove(event: MouseEvent) {
    if (window.scrollY < window.innerHeight) {
      this.mouseX = event.clientX - 60;
      this.mouseY = event.clientY - 60;
    } else {
      this.mouseX = -300;
      this.mouseY = -300;
    }
  }

  scrollToContent() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}