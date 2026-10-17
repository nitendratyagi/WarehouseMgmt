import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  isCollapsed = false;
  isMobileMenuOpen = false;
  isClientsExpanded = true;
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleClients() {
    this.isClientsExpanded = !this.isClientsExpanded;
  }
  private router = inject(Router);

logout() {
  localStorage.removeItem('warehousemgmt');
  this.router.navigate(['/login']);
}
}
