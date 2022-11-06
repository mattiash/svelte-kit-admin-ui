import type { PageLoad } from './$types';
import { list } from '$lib/api/people';

export const load: PageLoad = async ({ fetch }) => {
	return {
		items: await list(fetch)
	};
};
