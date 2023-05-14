<script>
    import ItemCard from './ItemCard.svelte';
    import product from '../../data.json';
	let products = product.slice();
</script>
<main>

  {#each products as product (product.id)}

        <ItemCard>
            <span slot="img">
                <img src={product.image} alt={product.name}/>
            </span>
            
            <span slot="name">{product.name}</span>
            <span slot="price">Price: {product.price}</span>
      
      <p></p>
      <p></p>
      </ItemCard>

  {/each}

</main>

<style>
    img{
        max-width:10rem;
        max-height:10rem
    }

    main{
        display: grid;
        grid-template-columns: repeat(auto-fill, 400px);
    }
</style>