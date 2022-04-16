import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const Router = [
  { path: '/', element: <Home /> },
  { path: '/dashboard/:id', element: <Dashboard /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '*', element: <ErrorPage /> },
];
export default Router;
