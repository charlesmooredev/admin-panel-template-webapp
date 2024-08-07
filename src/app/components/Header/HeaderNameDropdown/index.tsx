import { useCallback, useRef, useState } from 'react';
import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import { useOutsideClickFN } from '../../../../helpers/useOutsideClickFn.tsx';
import { List } from 'react-bootstrap-icons';
import { appRoutesArray } from '../../../../helpers/AppRoutes.tsx';
import { NavLink } from 'react-router-dom';

export function HeaderNameDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenuFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClickFN(menuRef, closeMenuFn);

  return (
    <Menu>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <List size={25} className="mr-1 lg:hidden" />
        <span className="text-[1.10rem]">App Name</span>
      </MenuButton>
      <Transition
        show={isOpen}
        appear={true}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MenuItems
          ref={menuRef}
          static
          anchor="bottom end"
          className="flex w-full flex-col space-y-1 border-r-2 border-primary-200 bg-white p-2 lg:hidden"
        >
          {appRoutesArray.map(route => (
            <NavLink
              to={route.route}
              className={`${({ isActive }) => (isActive ? 'font-semibold' : 'font-normal')} text-[1.10rem]`}
              key={route.route}
            >
              {route.name}
            </NavLink>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
