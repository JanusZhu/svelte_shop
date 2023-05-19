<script>
    export let showModal = false;
    export let handleModal
    import Cart from './Cart.svelte'
    import {slide} from 'svelte/transition'
    import { quintOut } from 'svelte/easing';
</script>

<main>

    {#if showModal}
    <div class="backdrop" on:click={handleModal} on:keyup/>
        <div class="modal" transition:slide="{{delay: 100, duration: 500, easing: quintOut, axis: 'x'}}">
            <h3 on:click={handleModal} on:keyup>x</h3>
            <h2>Your shopping bag</h2>
            <Cart/>

        </div>
    {/if}
    
</main>

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 9
    }
    .modal{
        color: black;
        width: 35%;
        height: 100%;
        position: fixed;
        background-color: white;
        right:0;
        padding-top:5rem;
        z-index:10;
        overflow-y:scroll;
        display: flex;
        flex-direction: column;
        align-items: felx-start;
    }
    h3 {
        position: fixed;
        right: 1.5rem;
        top:1.5rem;
        cursor: pointer
    }
    h2{
        text-align: center;
    }
</style>