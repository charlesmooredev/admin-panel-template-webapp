import { HeaderUser } from '../HeaderUser';
import { HeaderNameDropdown } from '../HeaderNameDropdown';

export function HeaderTop() {
  return (
    <div className="flex items-center px-2 py-2 border-b-2 border-primary-200 bg-white">
      <div className="w-[calc(100%-200px)]">
        <HeaderNameDropdown />
      </div>
      <div className="w-[200px] flex justify-end">
        <HeaderUser />
      </div>
    </div>
  );
}