<script>
    export let handleModal;
    import {Link} from 'svelte-navigator'
    import {shop} from '../components/Stores/store'
    import products from '../data.json'
    
    /* get shop info*/ 
    let cartItems 
    shop.subscribe(value => {
        cartItems = value
    })
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
</script>


<main>
    <Link to="/"><h1>Janus Shop</h1></Link>
    <Link to="/"><h2>Products</h2></Link>
    <div class="cart-wrapper">
    <div class="cart" on:click={handleModal} on:keyup>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart"/>
    </div>
    <h3>${total}</h3>
    </div>
</main>

<style>
    main{
        padding: 2rem 4rem;
        display:flex;
        justify-content: space-between;
        color: white;
        background-color: rgb(0, 0, 0);
        align-items: center;
    }
    .cart-wrapper {
        
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:0.5rem 2rem
    }
    .cart-wrapper:hover{
        background-color: darkgray;
    }
    .cart {
        cursor:pointer
    }
    h1,h2 {
        color: white;
        text-decoration: none;
    }
    h3 {
        margin: 0;
        padding: 0;
    }
</style>