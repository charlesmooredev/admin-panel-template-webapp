import { appRoutesArray } from '../../../../helpers/AppRoutes.tsx';
import { NavLink } from 'react-router-dom';

export function HeaderSidebar() {
  return (
    <>
      <div className="hidden w-full flex-col space-y-1 border-r-2 border-primary-200 bg-white p-2 lg:flex lg:h-screen lg:w-[250px]">
        {appRoutesArray.map(route => (
          <NavLink
            to={route.route}
            className={({ isActive }) =>
              `${isActive ? 'bg-primary-200 text-black' : 'font-normal text-primary-900 hover:bg-primary-50'} transition-effects flex items-center space-x-2 rounded-lg p-2 text-[1.10rem]`
            }
            key={route.route}
          >
            <div>{route.icon}</div>
            <div>{route.name}</div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
