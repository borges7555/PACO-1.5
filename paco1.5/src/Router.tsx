import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UnavailablePage from './pages/UnavailablePage';
import Propinas from './pages/Propinas';
import Apoio from './pages/Apoio';
import Disciplina from './pages/Disciplina';

export default function Router() {
    const router = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/home', element: <Home />},
        {path: '/unavailable', element: <UnavailablePage />},
        {path: '/propinas', element: <Propinas />},
        {path: '/apoio', element: <Apoio />},
        {path: '/disciplina', element: <Disciplina />},


    ]);

    return <RouterProvider router={router} />;
}
