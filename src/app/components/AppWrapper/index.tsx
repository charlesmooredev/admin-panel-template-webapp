import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: Props) {
  return (
    <div className="flex w-screen justify-center overflow-x-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
}
