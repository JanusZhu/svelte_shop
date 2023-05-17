<script>
    import { createEventDispatcher } from 'svelte';
    import ItemCard from './ItemCard.svelte';
    export let filteredProducts;
    import {shop} from "../Stores/store"
    const dispatch = createEventDispatcher();

    const addToCart = (id) => {
        dispatch('open');
        shop.increment(id)
        console.log(shop)
    }

    
</script>
<main>

  {#each filteredProducts as product (product.id)}

        <ItemCard>
            <span slot="img">
                <img src={product.image} alt={product.name}/>
            </span>
            
            <span slot="name">{product.name}</span>
            <span slot="price">Price: ${product.price}</span>
            <span slot="add"><button on:click={addToCart(product.id)}>Add to Cart</button></span>
      
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