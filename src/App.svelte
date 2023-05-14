<script>
	import Nav from './components/Nav.svelte'
	import Footer from './components/Footer.svelte'
	import Shop from './components/Shop.svelte'
	
	
</script>

<main>
	<Nav/>
	<Shop/>
	<Footer/>
	
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>