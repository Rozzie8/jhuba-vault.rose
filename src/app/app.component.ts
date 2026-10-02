import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <app-sidebar class="block h-0" />
    <div class="min-h-screen md:pl-40">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}