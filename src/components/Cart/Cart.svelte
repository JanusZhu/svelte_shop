<script>
    import {shop, inventory} from '../Stores/store'
    import CartItem from './CartItem.svelte'
    import products from '../../data.json'
    
    let isCheckedOut = false
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

    
    let defaultShop = {};
    for (let product of products) {
        defaultShop[product.id] = 0;
    }
    /*calculate the subtotal price*/
    const calculateSubtotal = (counts)=> {
        let res = 0;
        for(let product of products){
            if (counts[product.id]){
                res += counts[product.id] * Number(product.price)
            }
        }
        return (Math.round(res * 100) / 100).toFixed(2)
    }
    $: total = calculateSubtotal(cartItems);
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
        isCheckedOut = true

    }

    const checkEmpty = () => {
        for (let product of products){
            if(cartItems[product.id] > 0 ){
                return false
            }
        }
        return true
    }
</script>

<main>
    {#if !checkEmpty() && !isCheckedOut}
    <div>
        {#each products as product (product.id)}
        
            {#if cartItems[product.id]}
            <CartItem id ={product.id}>
            <span slot="img">
                <img src={product.image} alt={product.name}/>
            </span>
            
            <span slot="name">{product.name}</span>
            
            <span slot="price">${(Math.round(cartItems[product.id] * product.price*100)/100).toFixed(2)}</span>
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
    {:else}
        <div><h3>Your shopping cart is empty.</h3></div>
    {/if}


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