<script>
    import product from './data.json';
	let products = product.slice(0,5);
</script>
<main>
    <ul>
  {#each products as product (product.id)}
    <li>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </li>
  {/each}
</ul>
</main>