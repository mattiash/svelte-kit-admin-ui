<script lang="ts">
	import { notifications } from '$lib/notifications';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
</script>

<div class="fixed bottom-0 right-0">
	{#each $notifications as notification (notification.id)}
		<div
			animate:flip={{ duration: 500 }}
			in:fade={{ duration: 500, delay: 200 }}
			out:fade={{ duration: 500 }}
			class="{notification.type === 'error'
				? 'bg-red-100 border-red-500 text-red-700'
				: 'bg-green-100 border-green-500 text-green-700'} border-l-4 p-4 m-4"
		>
			<p class="text-sm font-bold">{notification.title}</p>
			<p class="text-sm">{notification.msg}</p>
		</div>
	{/each}
</div>
