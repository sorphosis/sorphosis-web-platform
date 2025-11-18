// navbar.component.ts
import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // 👈 ESSENCIAL!
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() visible = false; // 👈 O Input agora é reconhecido

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Bloqueia scroll do body quando o menu está aberto
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:keydown.escape')
  onEscapeKey() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
