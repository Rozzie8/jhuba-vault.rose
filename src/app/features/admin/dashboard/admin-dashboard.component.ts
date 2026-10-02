import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApprovalQueueTableComponent } from './components/approval-queue-table/approval-queue-table.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';
import { DashboardChartsComponent } from './components/dashboard-charts/dashboard-charts.component';
import { KpiMetricsBarComponent } from './components/kpi-metrics-bar/kpi-metrics-bar.component';
import { RequestStore } from '../../../store/request.store';

@Component({
	selector: 'app-admin-dashboard',
	standalone: true,
	imports: [DatePipe, RouterLink, KpiMetricsBarComponent, DashboardChartsComponent, ApprovalQueueTableComponent, ActivityFeedComponent],
	template: `
		<main class="min-w-0 bg-[#f7f9fc] px-3 pt-14 sm:px-4 md:pt-0 xl:px-6">
			<header class="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-1 sm:px-5">
				<div class="flex min-w-0 items-center gap-3 sm:max-w-[160px]">
					<svg viewBox="0 0 670 710" class="size-9 shrink-0" role="img" aria-label="Jomo Kenyatta University of Agriculture and Technology crest">
						<defs>
							<path id="jkuat-top-arc" d="M 77 340 A 260 260 0 0 1 597 340" />
							<path id="jkuat-bottom-arc" d="M 78 343 A 259 259 0 0 0 596 343" />
						</defs>
						<circle cx="337" cy="336" r="303" fill="#83bd32" />
						<circle cx="337" cy="336" r="244" fill="#fff" />
						<text fill="#111" font-size="31" font-weight="700" font-family="Arial, sans-serif" letter-spacing="1.5"><textPath href="#jkuat-top-arc" startOffset="50%" text-anchor="middle">JOMO KENYATTA UNIVERSITY</textPath></text>
						<text fill="#111" font-size="27" font-weight="700" font-family="Arial, sans-serif" letter-spacing="1"><textPath href="#jkuat-bottom-arc" startOffset="50%" text-anchor="middle">OF AGRICULTURE AND TECHNOLOGY</textPath></text>
						<g fill="#ed0712" transform="translate(337 336)">
							<circle r="195" />
							<rect x="-24" y="-226" width="48" height="76" /><rect x="-24" y="-226" width="48" height="76" transform="rotate(30)" />
							<rect x="-24" y="-226" width="48" height="76" transform="rotate(60)" /><rect x="-24" y="-226" width="48" height="76" transform="rotate(90)" />
							<rect x="-24" y="-226" width="48" height="76" transform="rotate(120)" /><rect x="-24" y="-226" width="48" height="76" transform="rotate(150)" />
							<rect x="-24" y="-226" width="48" height="76" transform="rotate(180)" /><rect x="-24" y="-226" width="48" height="76" transform="rotate(210)" />
							<rect x="-24" y="-226" width="48" height="76" transform="rotate(240)" /><rect x="-24" y="-226" width="48" height="76" transform="rotate(270)" />
							<rect x="-24" y="-226" width="48" height="76" transform="rotate(300)" /><rect x="-24" y="-226" width="48" height="76" transform="rotate(330)" />
						</g>
						<circle cx="337" cy="336" r="163" fill="#83bd32" />
						<circle cx="337" cy="336" r="143" fill="#579acb" stroke="#19283a" stroke-width="3" />
						<path d="M198 337 247 281 270 297 309 253 337 278 365 245 403 293 430 275 476 337 476 390 198 390Z" fill="#67554c" stroke="#463b39" stroke-width="5" stroke-linejoin="round" />
						<path d="m247 281 11 5-8 11 17-3 8 9 9-19 12 9 13-40 13 25 15 0 8 18 20-34 10 23 15 3 12 20 13-7 18 36H222Z" fill="#ece8df" stroke="#74645b" stroke-width="3" stroke-linejoin="round" />
						<path d="M235 350 Q337 330 439 350 L432 433 Q388 421 337 439 Q286 421 242 433Z" fill="#fff" stroke="#28211d" stroke-width="8" />
						<path d="M337 350v87M250 363q39-7 76 5v56q-38-12-76-2Zm174 0q-39-7-76 5v56q38-12 76-2Z" fill="none" stroke="#493f38" stroke-width="4" />
						<path d="M293 405q-8-30 4-44 10 15 7 34 4-36 17-43 4 22-7 39 16-24 27-24 0 22-20 40Zm88 0q8-30-4-44-10 15-7 34-4-36-17-43-4 22 7 39-16-24-27-24 0 22 20 40Z" fill="#398746" stroke="#24663a" stroke-width="3" />
						<path d="M46 623 30 596 67 599 44 575 92 578 67 557 111 562 128 583H542L559 562 603 557 578 578 626 575 603 599 640 596 624 623 583 637H87Z" fill="#ed0712" />
						<path d="M104 628H566" stroke="#fff" stroke-width="3" />
						<text x="337" y="660" text-anchor="middle" fill="#fff" font-size="24" font-family="Arial, sans-serif" font-weight="700">TECHNOLOGY FOR DEVELOPMENT</text>
					</svg>
					<div class="min-w-0">
						<p class="truncate text-[11px] font-extrabold uppercase text-[#20215e] sm:text-xs">Jomo Kenyatta University</p>
						<p class="truncate text-[10px] font-semibold uppercase text-slate-500 sm:text-[11px]">of Agriculture and Technology</p>
					</div>
				</div>
				<label class="order-3 flex min-w-0 basis-full items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-400 sm:order-none sm:basis-auto sm:flex-1 sm:max-w-[150px]">
					<i class="pi pi-search text-xs" aria-hidden="true"></i>
					<input type="search" aria-label="Search assets, requests, or users" placeholder="Search assets, requests, users, or anything..." class="min-w-0 flex-1 bg-transparent text-[10px] text-slate-700 outline-none placeholder:text-slate-400" />
				</label>
				<div class="flex items-center gap-3">
					<span class="relative grid size-8 place-items-center text-slate-500" aria-label="Notifications"><i class="pi pi-bell text-sm" aria-hidden="true"></i><span class="absolute right-1 top-1 size-2 rounded-full bg-red-500"></span></span>
					<span class="grid size-8 place-items-center rounded-full border border-slate-200 bg-slate-100 text-[10px] font-bold text-slate-600" aria-hidden="true">AU</span>
					<span class="hidden text-right sm:block"><span class="block text-[10px] font-semibold text-slate-800">Admin User</span><span class="text-[9px] text-slate-500">Administrator</span></span>
					<i class="pi pi-chevron-down hidden text-[9px] text-slate-400 sm:block" aria-hidden="true"></i>
				</div>
			</header>

			<div class="mb-3 flex flex-wrap items-end justify-between gap-3">
				<div>
					<p class="text-[9px] font-bold uppercase text-[#4b8d36]">Admin overview</p>
					<h1 class="mt-0.5 text-lg font-bold text-[#17213a] sm:text-xl">Welcome back, Admin!</h1>
					<p class="mt-0.5 text-[10px] text-slate-500">Here's what's happening with your JHUB Africa Vault system.</p>
				</div>
				<div class="flex flex-wrap items-center gap-2 text-[9px]">
					<span class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-slate-600"><i class="pi pi-calendar text-blue-600" aria-hidden="true"></i>{{ today | date: 'MMM d, y' }}</span>
					<span class="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 font-semibold text-emerald-700"><i class="size-1.5 rounded-full bg-emerald-500" aria-hidden="true"></i>System online</span>
				</div>
			</div>

			@if (store.error(); as error) {
				<p role="status" class="mb-3 flex items-center gap-2 text-[11px] text-slate-500"><i class="pi pi-info-circle text-[#bc8b25]" aria-hidden="true"></i>Live dashboard data is unavailable. Check the API connection.</p>
			}

			<div class="space-y-3">
				<app-kpi-metrics-bar />
				<div class="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(130px,0.72fr)]">
					<app-dashboard-charts class="contents" />
					<section class="rounded-xl border border-slate-200 bg-white p-3">
						<div class="mb-3 flex items-center justify-between">
							<h2 class="text-xs font-bold text-[#17213a] sm:text-sm">Quick actions</h2>
							<i class="pi pi-bolt text-[#83bd32]" aria-hidden="true"></i>
						</div>
						<div class="grid grid-cols-2 gap-2 md:grid-cols-1">
							<a routerLink="/admin/assets" aria-label="Manage assets" class="flex h-9 items-center gap-2 rounded-lg border border-slate-100 px-1.5 text-[10px] font-semibold text-slate-700 no-underline hover:border-blue-200 hover:bg-blue-50 sm:text-xs"><i class="pi pi-box text-blue-600"></i><span>Manage assets</span></a>
							<a routerLink="/admin/requests" aria-label="View requests" class="flex h-9 items-center gap-2 rounded-lg border border-slate-100 px-1.5 text-[10px] font-semibold text-slate-700 no-underline hover:border-emerald-200 hover:bg-emerald-50 sm:text-xs"><i class="pi pi-check-square text-emerald-600"></i><span>View requests</span></a>
							<a routerLink="/admin/users" aria-label="Manage users" class="flex h-9 items-center gap-2 rounded-lg border border-slate-100 px-1.5 text-[10px] font-semibold text-slate-700 no-underline hover:border-violet-200 hover:bg-violet-50 sm:text-xs"><i class="pi pi-users text-violet-600"></i><span>Manage users</span></a>
							<a routerLink="/admin/assets" aria-label="View inventory" class="flex h-9 items-center gap-2 rounded-lg border border-slate-100 px-1.5 text-[10px] font-semibold text-slate-700 no-underline hover:border-amber-200 hover:bg-amber-50 sm:text-xs"><i class="pi pi-database text-amber-600"></i><span>View inventory</span></a>
						</div>
					</section>
				</div>
				<div class="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1.7fr)_minmax(180px,0.8fr)]">
					<app-approval-queue-table />
					<app-activity-feed />
				</div>
			</div>
		</main>
	`,
})
export class AdminDashboardComponent implements OnInit {
	readonly store = inject(RequestStore);
	readonly today = new Date();

	ngOnInit(): void {
		void this.store.loadDashboard();
	}
}
