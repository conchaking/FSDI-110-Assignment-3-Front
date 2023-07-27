import { createContext} from 'react';


// Context is a description of the data
// Promise / Interface / BluePrint / Plan
// It should not have any implementation 
// 
// 
const DataContext = createContext({
    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {},
});


export default DataContext;