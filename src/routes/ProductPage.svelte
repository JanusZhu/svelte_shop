<script>
    export let id;
    import products from '../data.json'
    let product = products.find((product)=> product.id == id)

    
    import {shop, inventory} from "../components/Stores/store"


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


    const addToCart = (id) => {
        if (cartItems[id] < currentInventory[id]){
            shop.increment(id);
        }
    }

</script>

<main>
<div class="image"><img src={product.image} alt={product.name}/></div>
<div class="info">
<div class="name"><h2>{product.name}</h2></div>
<div class="price">Price: ${product.price}</div>
<div class="inventory">Inventory: {currentInventory[product.id]}</div>
<div class="add"><button on:click={()=>{addToCart(product.id)}}>Add to Cart</button></div></div>
</main>

<style>
main {
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5rem
}
img {
    width:10rem;
    max-height:15rem;

    
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
h2 {
    text-align: center;
}
.name {
max-width: 15rem
}
.image {
    padding:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
    width:15rem;
    max-height:20rem;
}



</style>