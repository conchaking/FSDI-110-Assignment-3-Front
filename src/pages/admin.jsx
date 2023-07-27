import { useState, useEffect } from 'react';
import "./admin.css";
import Dataservice from '../services/dataServices';

function Admin() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    
    // useEffect for Coupons
    useEffect(function(){
        console.log("component loaded");
         loadCoupons();
    },[]);

     function handleText(e) {
        const value = e.target.value;
        const name = e.target.name;

        // #1 Product Copy, Modify Copy, Set Copy
        let copy = {...product}; 
        copy[name] = value;
        setProduct(copy);
     }
        
        // # 2 Coupon Copy, Modify Copy, Set Copy 
    function handleCouponChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    // Save Product Function --> obj
   async function saveProduct() {
    // fix the Product Price to be a Numberpeanu
        let fixedProduct = {...product};
        fixedProduct.price = parseFloat(product.price);

        let service = new Dataservice();
        let response = await service.saveProduct(fixedProduct);

        let copy = [...allProducts];
        copy.push(response);
        setAllProducts(copy);
    }

    // Load Coupons Function 

    async function loadCoupons() {
        //get the coupons from the service
        let service = new Dataservice();
        let coupons = await service.getCoupons(); 
        console.log(coupons);
        setAllCoupons(coupons);
    }

    // Save Coupon Function
    async function saveCoupon() {

        let fixedCoupon = {...coupon};
        fixedCoupon.discount = parseFloat(coupon.discount);

        let service = new Dataservice();
        let response = await service.saveCoupon(fixedCoupon);

        console.log(saveCoupon);

        let copy = [...allCoupons];
        copy.push(response);
        setAllCoupons(copy);

    }


    return (
      <div className="admin page">
        <h1>Store Administration</h1>

        <div className="parent">
            <section className="sec-prods">
            <div className="form">
                <h3>Products</h3>

                <div className="mt-3">
                    <label className="form-label">Title</label>
                    <input onChange={handleText} name="title" className="form-control" type="text"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Category</label>
                    <input onChange={handleText} name="category" className="form-control"type="text"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Image</label>
                    <input onChange={handleText} name="image" className="form-control"type="text"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Price</label>
                    <input onChange={handleText} name="price" className="form-control"type="number"/>
                </div>

                <div>
                    <button onClick={saveProduct}className='btn btn-dark'>
                        Save Product
                    </button>
                </div>
            </div>
                    
            <h3 className='mt-4'>You have {allProducts.length} products</h3>

            {allProducts.map((prod) => (<h5 key={prod._id}>{prod.title} - ${prod.price}</h5> ))}
            </section> 
            
            <section className="sec-coupons">
               <div className='form'>
                <h3>Coupon Codes</h3>

                <div className="mt-3">
                    <label className='form-label'>Code</label>
                    <input onChange={handleCouponChange} name='code' type='text' className='form-control' />
                </div>

                <div className="mt-3">
                    <label className='form-label'>Discount</label>
                    <input onChange={handleCouponChange} name='discount' type='number' className='form-control' />                 
                </div>
                
                <div className="mt-4 text-center">
                    <button onClick={saveCoupon} className="btn btn outline-dark">Save Coupon</button>
                </div>
            </div>

            <h3 className='mt-4'>You have {allCoupons.length} coupons</h3>
            <ul>
                {allCoupons.map(coupon => <li key={coupon._id}>{coupon.code} - {coupon.discount}</li>)}
            </ul>
        </section>
       </div>
    </div>
    );
}

export default Admin;

/**
 * Create the form 
 * Create a function to handle the change on controls
 * Created an state variable and build an object from the change function
 * Console log the object on the click of the save button
 * 
 * Create an array to store the object and added the object from the save function
 * Print the lenght of the array
 * Render info about the objects
 */
