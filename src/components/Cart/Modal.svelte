<script>
    export let showModal = false;
    export let handleModal
</script>

<main>

    {#if showModal}
    <div class="backdrop" on:click={handleModal} on:keyup/>
        <div class="modal">
            <h3 on:click={handleModal} on:keyup>x</h3>
            <h2>Your shopping bag</h2>
            <div>Cart</div>
        </div>
    {/if}
    
</main>

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .modal{
        color: black;
        width: 35%;
        height: 100%;
        position: fixed;
        background-color: white;
        right:0;
        padding-top:5rem
    }
    h3 {
        position: fixed;
        right: 3rem;
        top:2rem;
        cursor: pointer
    }
</style>