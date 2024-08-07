import { House, Person, Shop } from 'react-bootstrap-icons';

export enum AppRoutes {
  Home = '/',
  Customers = '/customers',
  Products = '/products',
}

export const appRoutesArray = [
  { name: 'Dashboard', route: AppRoutes.Home, icon: <House size={22} /> },
  { name: 'Products', route: AppRoutes.Products, icon: <Shop size={22} /> },
  { name: 'Customers', route: AppRoutes.Customers, icon: <Person size={22} /> },
];
