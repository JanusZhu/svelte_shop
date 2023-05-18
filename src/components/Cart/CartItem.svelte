<script>
    export let id;
    import CartBtns from './CartBtns.svelte';
</script>
<article >
	<div class="card">
    <div class="image">
    <slot name="img">

    </slot>
    </div>
    <div class="info">

    <slot name="name">

    </slot>



    </div>
    <slot name="price">

    </slot>
</div>
<CartBtns {id}/>



</article>

<style>
    article {
		width: 20rem;
        height: 10rem;
    	box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 3rem 1rem 0rem 1rem;
		margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;


	}
    .card{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:10rem
    }
</style>