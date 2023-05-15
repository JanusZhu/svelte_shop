<script>
    export let handleFilter;
    let categories = ['all',"men's clothing", 'jewelry', 'electronics', "women's clothing"]
</script>
<main>

    {#each categories as category (category)}
         <a class="category" on:click={()=>{handleFilter(category)}}>{category.toUpperCase()}</a>
    {/each}

    
</main>

<style>
    main {
        width:15rem;
        padding-top: 2rem;
        padding-left: 6rem;
        display: flex;
        flex-direction: column;
    }
    .category {
        text-align: left;
        color: black;
    }
</style>