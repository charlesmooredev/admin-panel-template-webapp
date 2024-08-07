export enum AppRoutes {
  Home = "/",
  Customers = "/customers",
  Products = "/products",
}

export const appRoutesArray = [
  { name: "Dashboard", route: AppRoutes.Home },
  { name: "Products", route: AppRoutes.Products },
  { name: "Customers", route: AppRoutes.Customers },
];
