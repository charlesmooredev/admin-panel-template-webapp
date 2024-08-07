import { appRoutesArray } from '../../../../helpers/AppRoutes.ts';
import { NavLink } from 'react-router-dom';

export function HeaderSidebar() {
  return (
    <>
      <div className="hidden w-full flex-col space-y-1 border-r-2 border-primary-200 bg-white p-2 lg:flex lg:h-screen lg:w-[250px]">
        {appRoutesArray.map(route => (
          <NavLink
            to={route.route}
            className={`${({ isActive }) => (isActive ? 'font-semibold' : 'font-normal')} text-[1.10rem]`}
            key={route.route}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}
