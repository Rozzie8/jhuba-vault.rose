import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

export interface DashboardMetrics {
	totalAssets: number;
	pendingCount: number;
	checkedOutCount: number;
	overdueCount: number;
}

export interface PendingRequest {
	id: string | number;
	requesterName: string;
	assetName: string;
	requestedAt: string;
}

interface RequestState extends DashboardMetrics {
	pendingRequests: PendingRequest[];
	loading: boolean;
	error: string | null;
}

const initialState: RequestState = {
	totalAssets: 0,
	pendingCount: 0,
	checkedOutCount: 0,
	overdueCount: 0,
	pendingRequests: [],
	loading: false,
	error: null,
};

export const RequestStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store, http = inject(HttpClient)) => {
		const setError = (error: unknown): void => {
			patchState(store, {
				error: error instanceof Error ? error.message : 'An unexpected error occurred.',
			});
		};

		const updateRequest = async (id: PendingRequest['id'], action: 'approve' | 'reject'): Promise<void> => {
			patchState(store, { error: null });
			try {
				await firstValueFrom(
					http.post<void>(`/api/admin/requests/${encodeURIComponent(String(id))}/${action}`, {}),
				);
				patchState(store, {
					pendingRequests: store.pendingRequests().filter((request) => request.id !== id),
					pendingCount: Math.max(0, store.pendingCount() - 1),
				});
			} catch (error: unknown) {
				setError(error);
			}
		};

		return {
			async loadDashboard(): Promise<void> {
				patchState(store, { loading: true, error: null });
				try {
					const [metrics, pendingRequests] = await Promise.all([
						firstValueFrom(http.get<DashboardMetrics>('/api/admin/dashboard/metrics')),
						firstValueFrom(http.get<PendingRequest[]>('/api/admin/requests?status=pending')),
					]);
					patchState(store, {
						...metrics,
						pendingRequests,
						loading: false,
					});
				} catch (error: unknown) {
					patchState(store, { loading: false });
					setError(error);
				}
			},
			approveRequest(id: PendingRequest['id']): Promise<void> {
				return updateRequest(id, 'approve');
			},
			rejectRequest(id: PendingRequest['id']): Promise<void> {
				return updateRequest(id, 'reject');
			},
		};
	}),
);
