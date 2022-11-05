<script lang="ts">
	import { notifyInfo, notifyError } from '$lib/notifications';

	function addInfoNotification() {
		notifyInfo('Hello', 'This is an info message');
	}

	function addErrorNotification() {
		notifyError('Error', 'This is an error message');
	}
</script>

<main>
	<h1>Notifications</h1>
	<div class="my-4">
		<button
			class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-md shadow-sm"
			on:click={addInfoNotification}>Info notification</button
		>
	</div>
	<div class="my-4">
		<button
			class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-md shadow-sm"
			on:click={addErrorNotification}
			href="#">Error notification</button
		>
	</div>
</main>
