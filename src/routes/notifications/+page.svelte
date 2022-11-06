<script lang="ts">
	import { notifyInfo, notifyError } from '$lib/notifications';
	import { Button } from '$lib/elements';
	function addInfoNotification() {
		notifyInfo('Hello', 'This is an info message');
	}

	function addErrorNotification() {
		notifyError('Error', 'This is an error message');
	}
</script>

<main>
	<h1>Notifications</h1>
	<Button on:click={addInfoNotification}>Info notification</Button>
	<Button on:click={addErrorNotification}>Error notification</Button>
</main>
