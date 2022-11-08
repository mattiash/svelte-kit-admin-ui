<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let title: string;
	export let path: string;
	export let re: RegExp | undefined = undefined;
	let reAuto: RegExp;
	$: reAuto = re ? re : new RegExp(`^${path}\\b`);
</script>

<li
	class="hover:bg-primary-lighter pl-2 cursor-pointer"
	class:bg-primary-light={$page.url.pathname.match(reAuto)}
	on:click={goto(path)}
>
	<a href={path}>{title}</a>
</li>
