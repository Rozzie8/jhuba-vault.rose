import { Component, inject } from '@angular/core';
import { RequestStore } from '../../../../../store/request.store';

@Component({
	selector: 'app-dashboard-charts',
	standalone: true,
	template: `
		<div class="contents">
			<section class="min-w-0 rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
				<div class="mb-2">
					<h2 class="text-xs font-bold text-[#17213a]">Requests overview</h2>
				</div>
				<svg viewBox="0 0 360 155" class="h-28 w-full" role="img" aria-label="Requests trend over the past six months">
					<g stroke="#e7ebef" stroke-width="1"><path d="M35 20H350M35 55H350M35 90H350M35 125H350" /></g>
					<g fill="#8792a2" font-size="9"><text x="2" y="23">40</text><text x="2" y="58">30</text><text x="2" y="93">20</text><text x="2" y="128">10</text><text x="37" y="148">Apr</text><text x="97" y="148">May</text><text x="157" y="148">Jun</text><text x="217" y="148">Jul</text><text x="277" y="148">Aug</text><text x="332" y="148">Sep</text></g>
					<path d="M38 105 C58 92 70 98 98 84 S135 100 158 75 S190 84 218 61 S254 72 278 48 S314 62 346 33" fill="none" stroke="#83bd32" stroke-width="3" stroke-linecap="round" />
					<path d="M38 116 C64 112 72 109 98 111 S135 100 158 107 S193 93 218 101 S252 86 278 91 S317 78 346 83" fill="none" stroke="#24266e" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4" />
					<g fill="#83bd32"><circle cx="98" cy="84" r="3"/><circle cx="158" cy="75" r="3"/><circle cx="218" cy="61" r="3"/><circle cx="278" cy="48" r="3"/><circle cx="346" cy="33" r="3"/></g>
				</svg>
				<div class="mt-1 flex gap-4 text-[10px] text-slate-500"><span><i class="mr-1 inline-block size-2 rounded-full bg-[#83bd32]"></i>Requests</span><span><i class="mr-1 inline-block size-2 rounded-full bg-[#24266e]"></i>Approved</span></div>
			</section>

			<section class="min-w-0 rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
				<div class="mb-2"><h2 class="text-xs font-bold text-[#17213a]">Asset category distribution</h2></div>
				<div class="flex flex-nowrap items-center justify-center gap-1">
					<svg viewBox="0 0 120 120" class="size-20 shrink-0" role="img" aria-label="Asset categories distribution chart">
						<circle cx="60" cy="60" r="43" fill="none" stroke="#edf0f2" stroke-width="14" />
						<circle cx="60" cy="60" r="43" fill="none" stroke="#83bd32" stroke-width="14" stroke-dasharray="82 188" transform="rotate(-90 60 60)" />
						<circle cx="60" cy="60" r="43" fill="none" stroke="#25266d" stroke-width="14" stroke-dasharray="57 213" stroke-dashoffset="-85" transform="rotate(-90 60 60)" />
						<circle cx="60" cy="60" r="43" fill="none" stroke="#e6a834" stroke-width="14" stroke-dasharray="49 221" stroke-dashoffset="-145" transform="rotate(-90 60 60)" />
						<circle cx="60" cy="60" r="43" fill="none" stroke="#df4a52" stroke-width="14" stroke-dasharray="68 202" stroke-dashoffset="-197" transform="rotate(-90 60 60)" />
						<text x="60" y="57" text-anchor="middle" fill="#17213a" font-size="18" font-weight="700">{{ store.totalAssets() }}</text>
						<text x="60" y="71" text-anchor="middle" fill="#778191" font-size="8">TOTAL ASSETS</text>
					</svg>
					<div class="grid min-w-0 grid-cols-1 gap-y-1 text-[8px] text-slate-600">
						<span><i class="mr-1.5 inline-block size-2 rounded-full bg-[#83bd32]"></i>Electronics</span>
						<span><i class="mr-1.5 inline-block size-2 rounded-full bg-[#25266d]"></i>Furniture</span>
						<span><i class="mr-1.5 inline-block size-2 rounded-full bg-[#e6a834]"></i>Lab equipment</span>
						<span><i class="mr-1.5 inline-block size-2 rounded-full bg-[#df4a52]"></i>Other</span>
					</div>
				</div>
			</section>
		</div>
	`,
})
export class DashboardChartsComponent {
	readonly store = inject(RequestStore);
}
