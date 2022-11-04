<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let path: string;
	export let re: RegExp | undefined = undefined;
	let reAuto: RegExp;
	$: reAuto = re ? re : new RegExp(`^${path}\\b`);
</script>

<li class:active={$page.url.pathname.match(reAuto)}>
	<a href={path}>{title}</a>
</li>

<style lang="scss">
	li {
		@apply pl-2;
	}
	.active {
		@apply bg-primary-light;
	}
</style>
