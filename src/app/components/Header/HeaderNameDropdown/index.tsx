import { useCallback, useMemo, useRef, useState } from 'react';
import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import { useOutsideClickFN } from '../../../../helpers/OutsideClickFn.tsx';
import { ChevronDown } from 'react-bootstrap-icons';
import { appRoutesArray } from '../../../../helpers/AppRoutes.ts';
import { NavLink } from 'react-router-dom';

export function HeaderNameDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const chevronCls = useMemo(() => {
    return `${isOpen ? 'rotate-180' : 'rotate-0'} lg:hidden`;
  }, [isOpen]);

  const closeMenuFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClickFN(menuRef, closeMenuFn);

  return (
    <Menu>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className="flex h-[30px] items-center space-x-4">
        <span>App Name</span>
        <ChevronDown className={chevronCls} />
      </MenuButton>
      <Transition
        show={isOpen} appear={true}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MenuItems
          ref={menuRef}
          outsideClick={() => setIsOpen(false)}
          static
          anchor="bottom end"
          className="lg:hidden w-full p-2 flex flex-col border-r-2 border-primary-200 space-y-1 bg-white"
        >
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
        </MenuItems>
      </Transition>
    </Menu>
  );
}