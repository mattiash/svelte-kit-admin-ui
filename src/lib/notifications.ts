import { writable } from 'svelte/store';

interface Notification {
	id: number;
	title: string;
	msg: string;
	type: 'info' | 'error';
}

export const notifications = writable<Notification[]>([]);

let id = 0;
export function notifyInfo(title: string, msg: string) {
	const notification: Notification = { id: id++, title, msg, type: 'info' };
	notifications.update((old) => [...old, notification]);
	setTimeout(() => notifications.update((old) => [...old.filter((n) => n !== notification)]), 3000);
}

export function notifyError(title: string, msg: string) {
	const notification: Notification = { id: id++, title, msg, type: 'error' };
	notifications.update((old) => [...old, notification]);
	setTimeout(() => notifications.update((old) => [...old.filter((n) => n !== notification)]), 3000);
}
