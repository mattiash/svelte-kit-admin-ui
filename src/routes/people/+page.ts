import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	console.log('PageLoad');
	const resp = await fetch(`https://swapi.dev/api/people`);
	const items = await resp.json();
	return {
		items: items.results.map((item) => ({ ...item, id: item.url.match(/\/(\d+)\/$/)[1] }))
	};
};
