import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Register from "./pages/register";

import App from "./App";
import Login from "./pages/login";
import ProtectedRouter from "./components/protectedrouter";
import Payment from "./pages/payment";
import Order from "./pages/order";

const router =createBrowserRouter([
{

    path:"/",
    element: <App/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/products",element:
        
        <ProtectedRouter>
             <Product/>
        </ProtectedRouter>
       


        },
        {path:"/cart",element:<Cart/>},
        {path:"/login",element:<Login/>},
        {path:"/register",element:<Register/>},
        { path:"/payment", element:<Payment />},
        {path:"/order",element:<Order/>}
         
        
    ]
}
])
export default router;