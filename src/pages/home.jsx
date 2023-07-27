import './home.css';

import {Link} from 'react-router-dom';

function Home() {
    return (
     <div className="home">
        <h1 className='position-absolute'>Welcome to my super amazing online store</h1>

        <Link className='btn btn-primary position-absolute' to="/catalog">Check our catalog &gt;</Link>
        
        <div class="d-flex justify-content-center">
        <img src="/images/fruitpic.jpeg" class="w-50 rounded"></img>
        </div>
     
     </div>
    );
}

export default Home;