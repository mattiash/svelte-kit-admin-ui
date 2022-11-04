<script lang="ts">
    import {notifications} from '$lib/notifications'
    import { flip } from 'svelte/animate'
    import { fade } from 'svelte/transition'
</script>

<div>
    {$notifications.map( n => n.msg).join('-')}
</div>
<div class="fixed bottom-0 right-0">
    {#each $notifications as notification (notification.id)}
    <div animate:flip="{{duration: 500}}"
         in:fade="{{duration: 500, delay: 200}}"
         out:fade="{{duration:500}}"
         class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-4"
         >
        <p class="text-sm font-bold">{notification.msg}</p>
        <p class="text-sm">Something not ideal might be happening.</p>
    </div>
    {/each}
</div>
