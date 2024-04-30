import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UnavailablePage from './pages/UnavailablePage';

export default function Router() {
    const router = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/home', element: <Home />},
        {path: '/unavailable', element: <UnavailablePage />}
    ]);

    return <RouterProvider router={router} />;
}
