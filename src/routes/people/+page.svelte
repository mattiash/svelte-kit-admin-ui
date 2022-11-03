<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>People</h1>
{#each data.items as item}
	<div><a href={'people/' + item.id}>{item.name}</a></div>
{/each}
