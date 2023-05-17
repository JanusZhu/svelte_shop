<article class="card">
	<div class="image">
    <slot name="img">

    </slot>
    </div>

    <slot name="name">

    </slot>

    <slot name="count">

    </slot>
    

</article>

<style>
    .card {
		width: 5rem;
        height: auto;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
        display: flex;
        flex-direction: column;
	}

</style>