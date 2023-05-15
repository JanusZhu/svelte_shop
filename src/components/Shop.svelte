<script>
  import Items from './products/Items.svelte'
  import Category from './products/Category.svelte'
  import products from '../data.json';

  let filteredProducts = products
  const handleFilter= (category)=>{
    if (category === "all"){
      filteredProducts = products;
    }
    else{
    filteredProducts = products.filter((product) => product.category.includes(category));
    }
  }
</script>

<main>
  <Category {handleFilter}/>
  <Items {filteredProducts}/>

</main>

<style>
  main {
    display: flex;
    flex-direction: flex;
    gap: 20px
  }
</style>