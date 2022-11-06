<script lang="ts">
	export let label: string;
	export let value: number;
</script>

<label class="block">
	<span class="text-gray-700">{label}</span>
	<input type="number" class="mt-1 block w-full" bind:value />
</label>
