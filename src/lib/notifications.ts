import { writable } from 'svelte/store';

export const notifications = writable([]);

let notnum = 0;

export function notifyInfo(msg: string) {
	notnum = notnum + 1;
	msg = msg + ' ' + notnum;
	const notification = { msg, type: 'info', id: Date.now() };
	notifications.update((old) => [...old, notification]);
	setTimeout(() => notifications.update((old) => [...old.filter((n) => n !== notification)]), 3000);
}

export function notifyError(msg: string) {
	const notification = { msg, type: 'error' };
	notifications.update((old) => [...old, notification]);
	setTimeout(() => notifications.update((old) => [...old.filter((n) => n !== notification)]), 3000);
}
