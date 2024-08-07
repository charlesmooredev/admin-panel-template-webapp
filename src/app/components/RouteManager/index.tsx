import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "../../../helpers/AppRoutes.ts";
import { DashboardPage } from "../../pages/DashboardPage";
import { CustomersPage } from "../../pages/CustomersPage";
import { ProductsPage } from "../../pages/ProductsPage";

const router = createBrowserRouter([
  { path: AppRoutes.Home, element: <DashboardPage /> },
  { path: AppRoutes.Customers, element: <CustomersPage /> },
  { path: AppRoutes.Products, element: <ProductsPage /> },
]);

export function RouteManager() {
  return <RouterProvider router={router} />;
}
