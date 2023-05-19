<script>
    import { createEventDispatcher } from 'svelte';
    import {Link} from 'svelte-navigator'
    import ItemCard from './ItemCard.svelte';
    import {shop, inventory} from "../Stores/store"
    export let filteredProducts;

    
    /* get shop info*/ 
    let cartItems 
    shop.subscribe(value => {
        cartItems = value
    })
    /* get inventory info*/
    let currentInventory
    inventory.subscribe(value => {
        currentInventory = value
    })

    const dispatch = createEventDispatcher();

    const addToCart = (id) => {
        if (cartItems[id] < currentInventory[id]){
            dispatch('open');
            shop.increment(id);
        }
    }

    
</script>
<main>

  {#each filteredProducts as product (product.id)}
        {#if currentInventory[product.id]}
        <ItemCard>
            <span slot="img">
                <Link to="products/{product.id}"><img src={product.image} alt={product.name}/></Link>
            </span>
            
            <span slot="name">{product.name}</span>
            <span slot="price">Price: ${product.price}</span>
            <span slot="inventory">Inventory: {currentInventory[product.id]}</span>
            <span slot="add"><button on:click={()=>{addToCart(product.id)}}>Add to Cart</button></span>
      
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