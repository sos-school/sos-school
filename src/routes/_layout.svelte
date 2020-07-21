<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		font-size: 14px;
		max-width: 56em;
		padding: 73px 2em 0;
		margin: 0 auto;
	}

	@media (min-width: 400px) {
		main {
			font-size: 20px;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>