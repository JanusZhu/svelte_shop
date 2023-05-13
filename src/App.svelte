<script>
	let name = 'Janus';
	let color = 'Black'
	const changeColor = ()=> {
		color == "Black" ? color = "White" : color = "Black";
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Theme color {color}</p>
	<button on:click={changeColor}>Change the color</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>