<script>
    import ItemCard from './ItemCard.svelte';
    export let filteredProducts;
</script>
<main>

  {#each filteredProducts as product (product.id)}

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
        width: 100px;
        max-height:150px
    }

    main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem
    }
</style>