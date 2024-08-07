import { appRoutesArray } from '../../../../helpers/AppRoutes.ts';
import { NavLink } from 'react-router-dom';

export function HeaderSidebar() {
  return (
    <>
      <div
        className="hidden w-full lg:w-[250px] p-2 lg:flex flex-col border-r-2 border-primary-200 space-y-1 lg:h-screen bg-white">
        {appRoutesArray.map((route) => (
          <NavLink
            to={route.route}
            className={`${({ isActive }) =>
              isActive ? 'font-semibold' : 'font-normal'} text-[1.10rem]`}
            key={route.route}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}
