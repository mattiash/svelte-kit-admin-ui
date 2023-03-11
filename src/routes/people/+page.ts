import { list } from '$lib/api/people';

export const load = async ({ fetch }) => {
	return {
		items: await list(fetch)
	};
};
