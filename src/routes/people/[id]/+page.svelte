<script lang="ts">
	import type { PageData } from './$types';
	import { hair_color_options } from '$lib/api/people';
	import { notifyInfo } from '$lib/notifications';
	import { Form, Text, Number, Select, Button } from '$lib/elements';

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
