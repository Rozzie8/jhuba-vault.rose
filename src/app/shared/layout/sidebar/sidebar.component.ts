import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

interface SidebarLink {
	label: string;
	route: string;
	icon: string;
}

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [ButtonModule, DrawerModule, RouterLink, RouterLinkActive],
	template: `
		<aside class="fixed inset-y-0 left-0 z-30 hidden w-40 flex-col bg-[#0b1730] p-3 text-white md:flex lg:p-3">
			<a routerLink="/admin/dashboard" class="mb-7 flex items-center justify-center gap-2 rounded-lg bg-white px-2 py-2 text-[#20215e] no-underline lg:mb-8">
				<svg viewBox="0 0 40 40" class="size-8 shrink-0" role="img" aria-label="JHUB Africa logo">
					<circle cx="11" cy="8" r="1.5" fill="#27469b"/><circle cx="17" cy="5" r="1.5" fill="#27469b"/><circle cx="23" cy="5" r="1.5" fill="#27469b"/><circle cx="29" cy="8" r="1.5" fill="#38a94b"/>
					<circle cx="7" cy="14" r="1.8" fill="#27469b"/><circle cx="14" cy="13" r="2" fill="#27469b"/><circle cx="21" cy="12" r="2" fill="#27469b"/><circle cx="28" cy="13" r="2" fill="#e92832"/><circle cx="34" cy="15" r="1.8" fill="#38a94b"/>
					<circle cx="6" cy="21" r="2" fill="#27469b"/><circle cx="13" cy="21" r="2.3" fill="#27469b"/><circle cx="21" cy="21" r="2.4" fill="#27469b"/><circle cx="29" cy="21" r="2.2" fill="#e92832"/><circle cx="35" cy="22" r="1.8" fill="#38a94b"/>
					<circle cx="8" cy="28" r="1.8" fill="#27469b"/><circle cx="15" cy="29" r="2" fill="#27469b"/><circle cx="22" cy="30" r="2" fill="#e92832"/><circle cx="29" cy="29" r="1.8" fill="#38a94b"/><circle cx="34" cy="28" r="1.5" fill="#38a94b"/>
					<circle cx="13" cy="35" r="1.4" fill="#27469b"/><circle cx="20" cy="36" r="1.5" fill="#e92832"/><circle cx="27" cy="34" r="1.5" fill="#38a94b"/>
				</svg>
				<span>
						<span class="block text-sm font-black leading-none tracking-wide">JHUB</span>
						<span class="mt-1 block text-[9px] font-bold tracking-[0.2em] text-slate-500">AFRICA</span>
				</span>
			</a>
			<nav aria-label="Admin navigation" class="flex flex-col gap-1">
				@for (link of links; track link.route) {
					<a
						[routerLink]="link.route"
						routerLinkActive="!bg-blue-600 !text-white"
						[routerLinkActiveOptions]="{ exact: true }"
						class="flex items-center gap-2 rounded-md px-2 py-2 text-[11px] text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:gap-2 lg:px-2 lg:text-[11px]"
					>
						<i [class]="link.icon" aria-hidden="true"></i>
						<span>{{ link.label }}</span>
					</a>
				}
			</nav>
			<div class="mt-auto border-t border-white/10 pt-3">
				<div class="flex items-center gap-2 px-1">
					<span class="grid size-8 shrink-0 place-items-center rounded-full bg-slate-600 text-[10px] font-bold">AU</span>
					<span class="min-w-0"><span class="block truncate text-[10px] font-semibold">Admin User</span><span class="block truncate text-[9px] text-slate-400">Administrator</span></span>
				</div>
			</div>
		</aside>

		<button
			pButton
			type="button"
			icon="pi pi-bars"
			aria-label="Toggle navigation"
			class="fixed left-4 top-4 z-40 border-0 bg-[#0A1329] text-white md:hidden"
			(click)="visible.set(true)"
		></button>

		<p-drawer
			[visible]="visible()"
			(visibleChange)="visible.set($event)"
			[modal]="true"
			position="left"
			styleClass="!w-72 !border-0 !bg-[#0A1329] !text-white"
			[style]="{ width: '18rem' }"
		>
			<ng-template pTemplate="header">
				<a routerLink="/admin/dashboard" class="flex items-center gap-3 text-white no-underline">
					<svg viewBox="0 0 40 40" class="size-11 shrink-0" role="img" aria-label="JHUB Africa logo">
						<circle cx="11" cy="8" r="1.5" fill="#27469b"/><circle cx="17" cy="5" r="1.5" fill="#27469b"/><circle cx="23" cy="5" r="1.5" fill="#27469b"/><circle cx="29" cy="8" r="1.5" fill="#38a94b"/>
						<circle cx="7" cy="14" r="1.8" fill="#27469b"/><circle cx="14" cy="13" r="2" fill="#27469b"/><circle cx="21" cy="12" r="2" fill="#27469b"/><circle cx="28" cy="13" r="2" fill="#e92832"/><circle cx="34" cy="15" r="1.8" fill="#38a94b"/>
						<circle cx="6" cy="21" r="2" fill="#27469b"/><circle cx="13" cy="21" r="2.3" fill="#27469b"/><circle cx="21" cy="21" r="2.4" fill="#27469b"/><circle cx="29" cy="21" r="2.2" fill="#e92832"/><circle cx="35" cy="22" r="1.8" fill="#38a94b"/>
						<circle cx="8" cy="28" r="1.8" fill="#27469b"/><circle cx="15" cy="29" r="2" fill="#27469b"/><circle cx="22" cy="30" r="2" fill="#e92832"/><circle cx="29" cy="29" r="1.8" fill="#38a94b"/><circle cx="34" cy="28" r="1.5" fill="#38a94b"/>
						<circle cx="13" cy="35" r="1.4" fill="#27469b"/><circle cx="20" cy="36" r="1.5" fill="#e92832"/><circle cx="27" cy="34" r="1.5" fill="#38a94b"/>
					</svg>
					<span>
						<span class="block text-base font-black leading-none tracking-wide">JHUB</span>
						<span class="mt-1 block text-[10px] font-bold tracking-[0.25em] text-slate-300">AFRICA</span>
						<span class="mt-1 block text-[9px] font-semibold tracking-wide text-[#83bd32]">VAULT ADMIN</span>
					</span>
				</a>
			</ng-template>

			<nav aria-label="Admin navigation" class="mt-5 flex flex-col gap-1">
				@for (link of links; track link.route) {
					<a
						[routerLink]="link.route"
						routerLinkActive="!bg-blue-600 !text-white"
						[routerLinkActiveOptions]="{ exact: true }"
						class="flex items-center gap-3 rounded px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
						(click)="closeOnMobile()"
					>
						<i [class]="link.icon" aria-hidden="true"></i>
						<span>{{ link.label }}</span>
					</a>
				}
			</nav>
		</p-drawer>
	`,
})
export class SidebarComponent {
	readonly visible = signal(false);
	readonly links: SidebarLink[] = [
		{ label: 'Dashboard', route: '/admin/dashboard', icon: 'pi pi-th-large' },
		{ label: 'Requests', route: '/admin/requests', icon: 'pi pi-inbox' },
		{ label: 'Inventory', route: '/admin/assets', icon: 'pi pi-box' },
		{ label: 'Users', route: '/admin/users', icon: 'pi pi-users' },
		{ label: 'Audit Log', route: '/admin/audit-log', icon: 'pi pi-history' },
		{ label: 'Backups', route: '/admin/backups', icon: 'pi pi-database' },
	];

	closeOnMobile(): void {
		if (globalThis.matchMedia('(max-width: 1023px)').matches) {
			this.visible.set(false);
		}
	}
}
