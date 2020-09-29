<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		font-size: 14px;
		max-width: 56em;
		padding: 73px 2em 4em;
		margin: 0 auto;
		min-height: calc(100vh - 128px);
	}

	@media (min-width: 400px) {
		main {
			font-size: 20px;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot />
</main>

<Footer />