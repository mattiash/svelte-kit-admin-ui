<script>
	import { slide } from 'svelte/transition';
	import MenuItem from './MenuItem.svelte';
	import SubMenu from './SubMenu.svelte';
</script>

<div transition:slide={{ duration: 200 }}>
	<aside class="menu">
		<SubMenu title="Test" show={true}>
			<MenuItem title="Index" path="/" re={/^\/$/} />
			<MenuItem title="Colors" path="/colors" />
			<MenuItem title="Slow" path="/slow" />
		</SubMenu>
		<SubMenu title="Star wars" show={true}>
			<MenuItem title="People" path="/people" />
		</SubMenu>
	</aside>
</div>
