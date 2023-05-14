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
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}

   
</style>