import { get } from '$lib/api/people';
export const load = async ({ params, fetch }) => {
	return {
		item: await get(fetch, params.id)
	};
};
