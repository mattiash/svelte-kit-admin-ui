<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
    import { slide } from 'svelte/transition'
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const rotation = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

    export let title
    export let show = false
</script>

<p class="cursor-pointer font-medium mt-1" on:click={() => {
    show = !show;
    if(show) { 
        rotation.set(0) 
    } else {
        rotation.set(180)
    }
  }}>{title} <span class="text-gray-400"><Fa icon={faChevronUp} style="display: inline-block; margin-right: 3px; margin-top: 2px;" pull="right" rotate={$rotation}></Fa></span></p>
{#if show}
<div class="overflow-hidden" transition:slide={{ duration: 200 }}>
    <ul class="menu-list" >
        <slot />
    </ul>
</div>
{/if}
