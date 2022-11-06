import { error } from '@sveltejs/kit';
type Fetch = typeof fetch;

export interface Person {
	id: string;
	name: string;
	height: number;
	mass: number;
	hair_color: string;
	eye_color: string;
	skin_color: string;
	url: string;
}

interface PersonWire {
	id: string;
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	eye_color: string;
	skin_color: string;
	url: string;
}

export const hair_color_options = ['blond', 'brown', 'none', 'n/a'];

function wireToApi(item: PersonWire): Person {
	const idMatch = item.url.match(/\/(\d+)\/$/);
	if (idMatch) {
		const id = idMatch[1];
		return {
			...item,
			height: parseInt(item.height),
			mass: parseInt(item.mass),
			id
		};
	} else {
		throw new Error(`Invalid url ${item.url}`);
	}
}

export async function list(fetch: Fetch): Promise<Person[]> {
	const resp = await fetch(`https://swapi.dev/api/people`);
	const items = await resp.json();
	return items.results.map(wireToApi);
}

export async function get(fetch: Fetch, id: string): Promise<Person> {
	const resp = await fetch(`https://swapi.dev/api/people/${id}`);
	if (resp.ok) {
		const item = await resp.json();
		return wireToApi(item);
	} else {
		throw error(404);
	}
}
