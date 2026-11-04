import { Routes } from '@angular/router';
import { authGuard, guestGuard, roleGuard } from './core/guards';
import { Role } from './core/models';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./features/landing-page.component').then(m => m.LandingPageComponent), title: 'JHUB Africa Vault' },
  { path: 'landing', redirectTo: '', pathMatch: 'full' },
  { path: 'auth/login', loadComponent: () => import('./features/auth-page.component').then(m => m.AuthPageComponent), canActivate: [guestGuard] },
  { path: 'auth/register', loadComponent: () => import('./features/auth-page.component').then(m => m.AuthPageComponent), canActivate: [guestGuard] },
  { path: 'admin/login', loadComponent: () => import('./features/auth-page.component').then(m => m.AuthPageComponent), canActivate: [guestGuard] },
  { path: 'catalogue', loadComponent: () => import('./features/catalogue-page.component').then(m => m.CataloguePageComponent) },
  { path: 'requests', loadComponent: () => import('./features/admin-requests-page.component').then(m => m.AdminRequestsPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'assets/:id', loadComponent: () => import('./features/asset-details-page.component').then(m => m.AssetDetailsPageComponent) },
  { path: 'app/dashboard', loadComponent: () => import('./features/innovator-dashboard-page.component').then(m => m.InnovatorDashboardPageComponent), canActivate: [authGuard] },
  { path: 'app/requests', loadComponent: () => import('./features/request-history-page.component').then(m => m.RequestHistoryPageComponent), canActivate: [authGuard] },
  { path: 'app/cart', loadComponent: () => import('./features/request-cart-page.component').then(m => m.RequestCartPageComponent), canActivate: [authGuard] },
  { path: 'app/requests/new', loadComponent: () => import('./features/request-cart-page.component').then(m => m.RequestCartPageComponent), canActivate: [authGuard] },
  
  // Wizard Steps mapping to your component workspace
  { path: 'app/requests/review', loadComponent: () => import('./features/workspace-page.component').then(m => m.WorkspacePageComponent), canActivate: [authGuard] },
  { path: 'app/requests/project', loadComponent: () => import('./features/workspace-page.component').then(m => m.WorkspacePageComponent), canActivate: [authGuard] },
  { path: 'app/requests/team', loadComponent: () => import('./features/workspace-page.component').then(m => m.WorkspacePageComponent), canActivate: [authGuard] },
  
  { path: 'app/requests/submitted', loadComponent: () => import('./features/request-submitted-page.component').then(m => m.RequestSubmittedPageComponent), canActivate: [authGuard] },
  { path: 'app/requests/:id', loadComponent: () => import('./features/request-details-page.component').then(m => m.RequestDetailsPageComponent), canActivate: [authGuard] },
  { path: 'app/loans', loadComponent: () => import('./features/request-history-page.component').then(m => m.RequestHistoryPageComponent), data: { view: 'loans' }, canActivate: [authGuard] },
  { path: 'app/profile', loadComponent: () => import('./features/profile-page.component').then(m => m.ProfilePageComponent), canActivate: [authGuard] },
  { path: 'app/team', loadComponent: () => import('./features/simple-workspace-page.component').then(m => m.SimpleWorkspacePageComponent), canActivate: [authGuard] },
  { path: 'app/settings', loadComponent: () => import('./features/simple-workspace-page.component').then(m => m.SimpleWorkspacePageComponent), canActivate: [authGuard] },
  { path: 'admin/dashboard', loadComponent: () => import('./features/admin-dashboard-page.component').then(m => m.AdminDashboardPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'admin/requests', loadComponent: () => import('./features/admin-requests-page.component').then(m => m.AdminRequestsPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'admin/assets', loadComponent: () => import('./features/admin-assets-page.component').then(m => m.AdminAssetsPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'admin/inventory', loadComponent: () => import('./features/admin-inventory-page.component').then(m => m.AdminInventoryPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'admin/users', loadComponent: () => import('./features/admin-users-page.component').then(m => m.AdminUsersPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'admin/audit-log', loadComponent: () => import('./features/admin-audit-page.component').then(m => m.AdminAuditPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: 'admin/settings', loadComponent: () => import('./features/admin-settings-page.component').then(m => m.AdminSettingsPageComponent), canActivate: [authGuard, roleGuard(Role.ADMIN)] },
  { path: '**', redirectTo: '' }
];