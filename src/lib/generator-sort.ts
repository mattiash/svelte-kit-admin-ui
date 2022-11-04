// See https://github.com/sveltejs/kit/issues/885 for possible solution for using
// modules from npm

type CompareResult = number;
type CompareFunction<T> = (a: T, b: T) => CompareResult;

export function compareStrings(sA: string, sB: string) {
	return sA > sB ? 1 : sA < sB ? -1 : 0;
}

export function compareNumbers(sA: number, sB: number) {
	return sA - sB;
}

export function reverse(r: CompareResult) {
	return -r;
}

export function compareStringsCaseInsensitive(sA: string, sB: string) {
	return sA.localeCompare(sB, undefined, {
		sensitivity: 'base'
	}) as CompareResult;
}

export function sortFunction<T>(
	gen: (a: T, b: T) => IterableIterator<CompareResult>
): CompareFunction<T> {
	return (a: T, b: T) => {
		for (let comp of gen(a, b)) {
			if (comp) {
				return comp;
			}
		}

		return 0;
	};
}
