<script>
    import {Router, Route} from "svelte-navigator";
    import Home from "./routes/Home.svelte";
    import ProductPage from "./routes/ProductPage.svelte";
    import Modal from './components/Cart/Modal.svelte'
    import Nav from './components/Nav.svelte'
	import Footer from './components/Footer.svelte'
    let showModal = false;
	const handleModal = ()=> {
		showModal = !showModal
	}
  </script>
  

    
    <Router>
        <Modal {showModal} {handleModal}/>
	    <Nav {handleModal}/>
        <Route path="/">
            <Home {handleModal}/>
        </Route>
        <Route path="products/:id" let:params>
            <ProductPage id={params.id} />
        </Route>
    </Router>