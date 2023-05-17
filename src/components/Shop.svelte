<script>
  import Items from './products/Items.svelte'
  import Category from './products/Category.svelte'
  import products from '../data.json';
 
  let selectedCategory = "all"

  let filteredProducts = products
  const handleFilter= (category)=>{
    if (category === "all"){
      filteredProducts = products;
      selectedCategory = 'all'
    }
    else{
    filteredProducts = products.filter((product) => product.category.includes(category));
    selectedCategory = category
    }
  }
</script>

<main>
  <Category {handleFilter} {selectedCategory}/>
  <Items {filteredProducts}/>

</main>

<style>
  main {
    display: flex;
    flex-direction: flex;
    gap: 20px;
    margin-top:2rem;
  }
</style>