import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function Router() {
    const router = createBrowserRouter([
        {path: '/home', element: <Home />},
        {path: '/', element: <Login />}
    ]);

    return <RouterProvider router={router} />;
}
