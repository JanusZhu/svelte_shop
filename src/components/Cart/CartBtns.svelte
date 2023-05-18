<script>
    export let id;
    import {shop, inventory} from '../Stores/store'
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

    const handleAdd = (id)=> {
        if (cartItems[id] < currentInventory[id]){
            shop.increment(id);
        }
    }

    const handleDelete = (id)=> {
        shop.decrement(id);
    }
</script>
<main>
    <div class="bundle">
        <button on:click={handleDelete(id)}>-</button>
        <input value={cartItems[id]} readonly/>
        <button on:click={handleAdd(id)}>+</button>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bundle {
        display: flex;
        justify-content: center;
        align-items: center;
        width:min-content
    }
    button{
        border: None;
        background: white;
    }
    input {
        width:3rem;
        text-align: center;
    }
</style>