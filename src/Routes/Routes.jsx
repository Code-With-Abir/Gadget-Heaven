import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Statistics from "../Pages/Statistics";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Explore from "../Pages/Explore";
import ViewDetails from "../Pages/ViewDetails";
import Wishlist from "../Pages/Wishlist";
// import categ from '../assets/Categories.json'



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p className="font-bold text-4xl text-center mt-20 border border-black rounded-md p-4 ">Error...404</p>,
    children:[
      {
        path:'/',
        element:<Home />,
        // loader: () => fetch(`${categ}`)
        
      },
      {
        path:'/statistics',
        element:<Statistics />
      },
      {
        path:'/dashboard',
        element:<Dashboard />
      },
      {
        path:'/explore',
        element:<Explore />
      },
      {
        path:'/view-details/:id',
        element:<ViewDetails />
      },
      {
        path:'/wishlist',
        element:<Wishlist />
      },

    ]
  },
]);

export default routes;
