<script>
    import { createEventDispatcher } from 'svelte';
    import ItemCard from './ItemCard.svelte';
    
    import {shop, inventory} from "../Stores/store"
    export let filteredProducts;

    let currentInventory
    inventory.subscribe(value => {
        currentInventory = value
    })
    const dispatch = createEventDispatcher();

    const addToCart = (id) => {
        dispatch('open');
        shop.increment(id)
        console.log(shop)
    }

    
</script>
<main>

  {#each filteredProducts as product (product.id)}
        {#if currentInventory[product.id]}
        <ItemCard>
            <span slot="img">
                <img src={product.image} alt={product.name}/>
            </span>
            
            <span slot="name">{product.name}</span>
            <span slot="price">Price: ${product.price}</span>
            <span slot="inventory">Inventory: {currentInventory[product.id]}</span>
            <span slot="add"><button on:click={addToCart(product.id)}>Add to Cart</button></span>
      
        </ItemCard>
        {/if}
        

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