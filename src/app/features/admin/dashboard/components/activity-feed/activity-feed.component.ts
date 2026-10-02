import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ActivityItem {
	icon: string;
	tone: string;
	message: string;
	time: string;
}

@Component({
	selector: 'app-activity-feed',
	standalone: true,
	imports: [RouterLink],
	template: `
		<section class="h-full rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-sm font-bold text-[#17213a]">System activity</h2>
				<a routerLink="/admin/audit-log" class="text-[11px] font-semibold text-[#4b8d36] no-underline hover:underline">View all</a>
			</div>
			<ol class="space-y-0">
				@for (activity of activities; track activity.message) {
					<li class="flex gap-3 border-l border-slate-200 pb-5 pl-4 last:border-transparent last:pb-0">
						<span class="-ml-[1.32rem] grid size-6 shrink-0 place-items-center rounded-full border-2 border-white text-[10px] {{ activity.tone }}"><i [class]="activity.icon" aria-hidden="true"></i></span>
						<div class="min-w-0"><p class="text-xs leading-5 text-slate-700">{{ activity.message }}</p><p class="mt-1 text-[10px] text-slate-400">{{ activity.time }}</p></div>
					</li>
				}
			</ol>
		</section>
	`,
})
export class ActivityFeedComponent {
	readonly activities: ActivityItem[] = [
		{ icon: 'pi pi-check', tone: 'bg-[#eef7e7] text-[#4b8d36]', message: 'A request was approved by Admin User', time: 'Today, 10:42 AM' },
		{ icon: 'pi pi-box', tone: 'bg-[#eef0fb] text-[#25266d]', message: 'New inventory item added to the system', time: 'Today, 9:18 AM' },
		{ icon: 'pi pi-user-plus', tone: 'bg-[#fff5df] text-[#bc8b25]', message: 'A new user account was created', time: 'Yesterday, 4:35 PM' },
		{ icon: 'pi pi-refresh', tone: 'bg-[#fff0f0] text-[#d94650]', message: 'Asset status updated to available', time: 'Yesterday, 2:10 PM' },
	];
}
