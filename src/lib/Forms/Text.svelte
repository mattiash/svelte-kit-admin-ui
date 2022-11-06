<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<label class="block">
	<span class="text-gray-700">{label}</span>
	<input bind:value type="text" class="mt-1 block w-full" placeholder="" />
</label>
