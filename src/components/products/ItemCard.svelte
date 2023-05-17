<article class="card">
	<div class="image">
    <slot name="img">

    </slot>
    </div>
    <div>
    <slot name="name">

    </slot>
    </div>
    <div>
    <slot name="price">

    </slot>
    </div>
</article>

<style>
	.card {
		width: 300px;
        height: auto;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
        display: flex;
        flex-direction: column;
	}
    .image {
        width: 300px;
        height:150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: solid 1px rgb(198, 192, 192);
    }

   
</style>