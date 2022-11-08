<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function click() {
		dispatch('click');
	}
</script>

<button
	class="my-4 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-md shadow-sm"
	on:click={click}><slot /></button
>
