import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const resp = await fetch(`https://swapi.dev/api/people`);
	const items = await resp.json();
	return {
		items: items.results.map((item: any) => ({ ...item, id: item.url.match(/\/(\d+)\/$/)[1] }))
	};
};
