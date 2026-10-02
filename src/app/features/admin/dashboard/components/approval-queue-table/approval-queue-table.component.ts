import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RequestStore } from '../../../../../store/request.store';

@Component({
	selector: 'app-approval-queue-table',
	standalone: true,
	imports: [ButtonModule, DatePipe, RouterLink, TableModule],
	template: `
		<section class="min-w-0 rounded-xl border border-slate-200 bg-white">
			<div class="flex items-center justify-between border-b border-slate-100 px-3 py-3 sm:px-4">
				<h2 class="text-sm font-bold text-[#17213a]">Recent requests</h2>
				<a routerLink="/admin/requests" class="text-[10px] font-semibold text-blue-600 no-underline hover:underline">View all</a>
			</div>

			<p-table [value]="store.pendingRequests()" [loading]="store.loading()" responsiveLayout="scroll">
				<ng-template pTemplate="header">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Asset</th>
						<th scope="col">Requester</th>
						<th scope="col">Submitted</th>
						<th scope="col" class="text-right">Actions</th>
					</tr>
				</ng-template>
				<ng-template pTemplate="body" let-request>
					<tr>
						<td class="text-blue-600">{{ request.id }}</td>
						<td>{{ request.assetName }}</td>
						<td>{{ request.requesterName }}</td>
						<td>{{ request.requestedAt | date: 'mediumDate' }}</td>
						<td class="text-right">
							<div class="flex justify-end gap-2">
								<button pButton type="button" label="Approve" size="small" (click)="store.approveRequest(request.id)"></button>
								<button pButton type="button" label="Reject" severity="secondary" size="small" (click)="store.rejectRequest(request.id)"></button>
							</div>
						</td>
					</tr>
				</ng-template>
				<ng-template pTemplate="emptymessage">
					<tr><td colspan="4" class="py-8 text-center text-slate-500">No pending requests.</td></tr>
				</ng-template>
			</p-table>
		</section>
	`,
})
export class ApprovalQueueTableComponent {
	readonly store = inject(RequestStore);
}
