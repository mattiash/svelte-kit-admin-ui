import type { PageLoad } from './$types';
import { get } from '$lib/api/people';
export const load: PageLoad = async ({ params, fetch }) => {
	return {
		item: await get(fetch, params.id)
	};
};
