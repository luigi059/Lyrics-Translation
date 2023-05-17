import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  mobileMenuOpen = false;
  links = [
    { name: 'Discover', to: '/', icon: 'home' },
    { name: 'Around You', to: '/around-you', icon: 'near_me' },
    { name: 'Top Artists', to: '/top-artists', icon: 'supervised_user_circle' },
    { name: 'Top Charts', to: '/top-charts', icon: 'tag' },
  ];
  constructor(private sanitizer: DomSanitizer) {}

  getLogoSrc(): any {
    const imageUrl = '../../../assets/logo.svg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
