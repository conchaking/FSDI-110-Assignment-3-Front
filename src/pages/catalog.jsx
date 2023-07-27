import Product from "../components/product";
import Dataservice from "../services/dataServices";
import "./catalog.css";
import { useEffect, useState } from "react";


function Catalog()
{
    const [products,setProducts]= useState ([]);
    const [category, setCategory]= useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    // when the component loads --> do something
    useEffect(function(){
        console.log("component loaded");
         loadCatalog();
    },[]);


    async function loadCatalog() {
        //get the products from the service
        let service = new Dataservice();
        let prods = await service.getProducts(); 
        console.log(prods);
        setProducts(prods);

        let cats = await service.getCategories();
        setCategory(cats);
        setProdsToDisplay(prods);
    }


    function filter(category) {
        console.log(category);
        let list = [];
        for (let i = 0; i < products.length; i++) 
        {
            let prod = products[i];
            if (prod.category === category)
            {
                list.push(prod);
            } 
        }
        console.log(list);
        setProdsToDisplay(list);
    }

    function clearFilters(){
        setProdsToDisplay(products);
    }

    return(
        <div className="catalog">
            <h1>Check our {products.length} new products in our catalog</h1>
            <br />
            {/* {category.map(c => <button onClick={() => filter(c)} key={c} className="btn btn-sm btn-primary btn-filter" >{c}</button>)} */}
             
             <br />
             <button onClick={clearFilters} className="btn btn-sm btn-dark btn-filter">All</button>
             {category.map(c => <button onClick={() => filter(c)} key={c} className="btn btn-sm btn-outline-dark m-1 btn-filter" >{c}</button>)}

             {/* {products.map(p => <Product data={p}/>)} */}

             <br/>
             {prodsToDisplay.map((p) => (
             <Product key={p._id} data={p}/>
             ))}
             
        </div>
    );
}

//creat a product component and render the quantity picker inside of the Product
//Render 5 times the <Product> component
export default Catalog;