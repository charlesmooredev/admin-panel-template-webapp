import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: Props) {
  return (
    <div className="w-screen flex justify-center overflow-x-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
}
