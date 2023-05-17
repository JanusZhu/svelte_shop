<script>
    export let handleModal;
</script>


<main>
    <h1>Janus Shop</h1>
    <div class="cart" on:click={handleModal} on:keyup>
        Cart
    </div>
</main>

<style>
    main{
        padding: 2rem 4rem;
        display:flex;
        justify-content: space-between;
        color: white;
        background-color: black;
        align-items: center;
    }
    .cart {
        cursor:pointer
    }
</style>