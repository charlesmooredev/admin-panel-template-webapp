import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: Props) {
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
}
