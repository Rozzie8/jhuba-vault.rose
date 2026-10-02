import { Component, inject } from '@angular/core';
import { RequestStore } from '../../../../../store/request.store';

@Component({
	selector: 'app-kpi-metrics-bar',
	standalone: true,
	template: `
		<section aria-label="Asset metrics" class="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-2">
			@for (metric of metrics; track metric.label) {
				<article class="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-3 sm:gap-2 sm:px-2">
					<span class="grid size-7 shrink-0 place-items-center rounded-lg text-xs {{ metric.tone }}"><i [class]="metric.icon" aria-hidden="true"></i></span>
					<div class="min-w-0"><p class="truncate text-[9px] text-slate-500 sm:text-[10px]">{{ metric.label }}</p><p class="mt-0.5 text-base font-bold leading-none text-[#17213a] sm:text-lg">{{ metric.value() }}</p></div>
				</article>
			}
		</section>
	`,
})
export class KpiMetricsBarComponent {
	private readonly store = inject(RequestStore);
	readonly metrics = [
		{ label: 'Total assets', value: this.store.totalAssets, icon: 'pi pi-box', tone: 'bg-[#eef0fb] text-[#25266d]' },
		{ label: 'Available assets', value: () => Math.max(0, this.store.totalAssets() - this.store.checkedOutCount()), icon: 'pi pi-check-circle', tone: 'bg-emerald-50 text-emerald-600' },
		{ label: 'Checked out', value: this.store.checkedOutCount, icon: 'pi pi-arrow-up-right', tone: 'bg-[#fff0f0] text-[#d94650]' },
		{ label: 'Pending requests', value: this.store.pendingCount, icon: 'pi pi-inbox', tone: 'bg-[#fff5df] text-[#bc8b25]' },
		{ label: 'Overdue', value: this.store.overdueCount, icon: 'pi pi-clock', tone: 'bg-[#f1eafa] text-[#8054a8]' },
	];
}
