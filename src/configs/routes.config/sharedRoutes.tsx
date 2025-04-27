import { RouteObject } from 'react-router-dom';
import Home from '@/views/Home'; // Adjust path if needed

const sharedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />, 
  },
  // You can add more shared routes later
];

export default sharedRoutes;
