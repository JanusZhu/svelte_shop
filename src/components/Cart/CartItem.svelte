<article class="card">
	<div class="image">
    <slot name="img">

    </slot>
    </div>
    <div class="info">

    <slot name="name">

    </slot>

    <slot name="count">

    </slot>
</div>
<slot name="price">

</slot>



</article>

<style>
    .card {
		width: 20rem;
        height: auto;
        min-height:10rem;
		
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

	}
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:8rem
    }
</style>