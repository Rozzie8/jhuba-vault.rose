import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/admin-dashboard.component').then(
            (module) => module.AdminDashboardComponent,
          ),
      },
      {
        path: 'requests',
        loadComponent: () =>
          import('./features/admin/requests/admin-requests.component').then(
            (module) => module.AdminRequestsComponent,
          ),
      },
      {
        path: 'assets',
        loadComponent: () =>
          import('./features/admin/assets/admin-assets.component').then(
            (module) => module.AdminAssetsComponent,
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/admin/users/admin-users.component').then(
            (module) => module.AdminUsersComponent,
          ),
      },
      {
        path: 'audit-log',
        loadComponent: () =>
          import('./features/admin/audit-log/admin-audit-log.component').then(
            (module) => module.AdminAuditLogComponent,
          ),
      },
      {
        path: 'backups',
        loadComponent: () =>
          import('./features/admin/backups/admin-backups.component').then(
            (module) => module.AdminBackupsComponent,
          ),
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'admin/dashboard' },
  { path: '**', redirectTo: 'admin/dashboard' },
];