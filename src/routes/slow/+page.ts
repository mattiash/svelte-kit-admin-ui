import type { PageLoad } from './$types';

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const load: PageLoad = async () => {
	await wait(1000);
	return {};
};
