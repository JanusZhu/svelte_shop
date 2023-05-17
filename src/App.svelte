<script>
	import Nav from './components/Nav.svelte'
	import Footer from './components/Footer.svelte'
	import Shop from './components/Shop.svelte'
	import Modal from './components/Cart/Modal.svelte'
	let showModal = false;
	const handleModal = ()=> {
		showModal = !showModal
	}
	
	
</script>

<main>
	<Modal {showModal} {handleModal}/>
	<Nav {handleModal}/>
	<Shop on:open={handleModal}/>
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