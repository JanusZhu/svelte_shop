<script>
    export let handleFilter;
    export let selectedCategory
    let categories = ['all',"men's clothing", 'jewelry', 'electronics', "women's clothing"]
</script>
<main>
    <div class="header"><h2>Shop /</h2><h1>{selectedCategory.toUpperCase()}</h1></div>


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
        align-items: flex-start;
    }
    h1, h2 {
        padding: 0;
        text-align: left;
        margin: 0.5rem;
    }
    .header{
        height:150px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 4rem;
    }
    .category {
        text-align: left;
        color: black;
    }
</style>