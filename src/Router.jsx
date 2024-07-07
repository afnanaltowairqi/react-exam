import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import Signin from './pages/Signin'
import Login from './pages/Login'
import Details from './pages/Details'

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/details/:id",
            element: <Details />,
        },
        {
          path: "/Signin",
          element: <Signin />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
      ]);
    return(
        <RouterProvider router={router} />
    );
}
export default Router