<script>

	import Footer from '../components/Footer.svelte'
	import Shop from '../components/Shop.svelte'
	export let handleModal;
	
	
</script>

<main >
	
	<Shop on:open={handleModal} />
	<Footer/>
	
	
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0;
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>