import { useCallback, useRef, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { useOutsideClickFN } from '../../../../helpers/OutsideClickFn.tsx';

const menuItemCls = 'hover:bg-primary-100 text-black/75 hover:text-black w-full text-left rounded-md p-1';

export function HeaderUser() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenuFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClickFN(menuRef, closeMenuFn);

  return (
    <Menu>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-4">
        <span className="hidden lg:block">Charles Moore</span>
        <img src="/Charles.jpg" alt="Charles Moore" className="aspect-square w-[30px] rounded-full object-cover" />
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
          className="mt-3 w-[200px] space-y-1 rounded-lg border border-primary-100 bg-white p-1 text-[1.05rem] shadow"
        >
          <MenuItem>
            <button className={menuItemCls}>Settings</button>
          </MenuItem>
          <MenuItem>
            <button className={menuItemCls}>Logout</button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
