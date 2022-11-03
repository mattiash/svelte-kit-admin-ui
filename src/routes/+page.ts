import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	console.log('PageLoad');
	const resp = await fetch(`https://swapi.dev/api/people`);
	const items = await resp.json();
	console.log(items);
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
};
