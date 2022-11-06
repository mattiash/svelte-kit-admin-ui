<script lang="ts">
	import Form from '$lib/Forms/Form.svelte';
	import Text from '$lib/Forms/Text.svelte';
	import Number from '$lib/Forms/Number.svelte';
	import type { PageData } from './$types';
	import Select from '$lib/Forms/Select.svelte';
	import Button from '$lib/Button.svelte';
	import { hair_color_options } from '$lib/api/people';
	import { notifyInfo } from '$lib/notifications';

	export let data: PageData;

	function submit() {
		notifyInfo('Submit', 'Not implemented. See console');
		console.log(data.item);
	}
</script>

<h1>Person {data.item.id}</h1>
<Form>
	<Text label="Full name" bind:value={data.item.name} />
	<Number label="Mass" bind:value={data.item.mass} />
	<Number label="Height" bind:value={data.item.height} />
	<Select label="Hair color" bind:value={data.item.hair_color} options={hair_color_options} />
</Form>
<Button on:click={submit}>Submit</Button>
