import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/Sign_up/SignUp'
import Login from '../pages/Login/Login'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        }])
    return <RouterProvider router={router} />
}

export default Router