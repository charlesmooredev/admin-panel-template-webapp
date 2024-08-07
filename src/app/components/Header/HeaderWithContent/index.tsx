import { HeaderSidebar } from '../HeaderSidebar';
import { ReactNode } from 'react';
import { HeaderTop } from '../HeaderTop';

interface Props {
  children: ReactNode | ReactNode[];
}

export function HeaderWithContent({ children }: Props) {
  return (
    <div className="w-full">
      <HeaderTop />
      <div className="lg:space-x-2 lg:flex">
        <HeaderSidebar />
        <div className="flex-grow p-2">{children}</div>
      </div>
    </div>
  );
}
