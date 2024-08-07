import { HeaderUser } from '../HeaderUser';
import { HeaderNameDropdown } from '../HeaderNameDropdown';

export function HeaderTop() {
  return (
    <div className="flex items-center border-b-2 border-primary-200 bg-white px-2 py-2">
      <div className="w-[calc(100%-200px)]">
        <HeaderNameDropdown />
      </div>
      <div className="flex w-[200px] justify-end">
        <HeaderUser />
      </div>
    </div>
  );
}
