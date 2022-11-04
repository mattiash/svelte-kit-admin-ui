import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const resp = await fetch(`https://swapi.dev/api/people/${params.id}`);
	const item = await resp.json();
	console.log(item);
	return {
		item: item
	};
};
