<script lang="ts">
	export let label: string;
	export let value: string;
	export let options: string[];
</script>

<label class="block">
	<span class="text-gray-700">{label}</span>
	<select class="block w-full mt-1" bind:value>
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
</label>
