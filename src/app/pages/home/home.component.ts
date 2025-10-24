import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { FooterComponent } from '../../components/footer/footer.component'; 
import { ClientSectionComponent } from '../../components/client-section/client-section.component'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,          
    ClientSectionComponent  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavbar = false;

  ngOnInit() {
    // Navbar escondida inicialmente
    this.showNavbar = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Mostra navbar quando scroll > 80vh
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.showNavbar = scrollPosition > window.innerHeight * 0.8;
  }

  scrollToContent() {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}