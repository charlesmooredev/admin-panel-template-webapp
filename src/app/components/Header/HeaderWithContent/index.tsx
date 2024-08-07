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
      <div className="lg:flex">
        <HeaderSidebar />
        <div className="h-[calc(100vh-60px)] flex-grow overflow-y-auto p-2">{children}</div>
      </div>
    </div>
  );
}
