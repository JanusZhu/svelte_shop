<script>
    import {shop, inventory} from '../Stores/store'
    import CartItem from './CartItem.svelte'
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
    import products from '../../data.json'
    console.log(cartItems)
    
    let defaultShop = {};
    for (let product of products) {
        defaultShop[product.id] = 0;
    }
    /*calculate the subtotal price*/
    const calculateSubtotal = ()=> {
        let res = 0;
        for(let product of products){
            if (cartItems[product.id]){
                res += cartItems[product.id] * Number(product.price)
            }
        }
        return Math.round(res * 100) / 100
    }
    $: total = calculateSubtotal()
    const handleCheckout = ()=> {
        for(let product of products){
            if (cartItems[product.id]){
                inventory.update((n)=>{
                n[product.id] -= cartItems[product.id]
                return n
        })
            }
        }
        shop.set(defaultShop);
    }
</script>

<main>
    <div>
{#each products as product (product.id)}

    {#if cartItems[product.id]}
    <CartItem>
    <span slot="img">
        <img src={product.image} alt={product.name}/>
    </span>
    
    <span slot="name">{product.name}</span>
    <span slot="count">Count: {cartItems[product.id]}</span>
    <span slot="price">${product.price}</span>
    </CartItem>
    {/if}
    

{/each}
</div>

<div>
    <h3>Subtotal: ${total}</h3>
</div>
<div>
    <button on:click={()=>{handleCheckout()}}>Checkout</button>
</div>


</main>

<style>
    main{
        margin-bottom: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 3rem;
        max-height:4.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>