<script lang="ts">
	import TableSort from '$lib/TableSort.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>People</h1>
<TableSort class="min-w-full" items={data.items}>
	<tr class="text-left" slot="thead">
		<th data-sort="name" data-sort-initial>Name</th>
		<th data-sort="height">Height</th>
		<th data-sort="birth_year">Birth year</th>
	</tr>
	<tr
		on:click={() => goto(`/people/${item.id}`)}
		class="hover:bg-primary-light cursor-pointer"
		slot="tbody"
		let:item
	>
		<td>{item.name}</td>
		<td>{item.height}</td>
		<td>{item.birth_year}</td>
	</tr>
</TableSort>

<a href="/people/X">No such id</a>
