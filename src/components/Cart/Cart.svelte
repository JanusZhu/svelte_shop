<script>
    import {shop} from '../Stores/store'
    import CartItem from './CartItem.svelte'
    let cartItems 
    shop.subscribe(value => {
        cartItems = value
    })
    import products from '../../data.json'
    console.log(cartItems)
</script>

<main>
{#each products as product (product.id)}

    {#if cartItems[product.id]}
    <CartItem>
    <span slot="img">
        <img src={product.image} alt={product.name}/>
    </span>
    
    <span slot="name">{product.name}</span>
    <span slot="count">Count: {cartItems[product.id]}</span>
    </CartItem>
    {/if}
    

{/each}
</main>

<style>
    main {
        overflow:visible;
    }
    img {
        width: 1rem;
        height:1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: solid 1px rgb(198, 192, 192);
    }
</style>