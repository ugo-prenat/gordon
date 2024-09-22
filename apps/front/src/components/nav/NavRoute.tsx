import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';
import { FC } from 'react';

export const NavRoute: FC = () => (
  <div id="navRoute" className="h-full w-full max-w-full flex flex-col">
    <Header />
    <div id="outlet" className="flex-1 flex overflow-auto">
      <Outlet />
    </div>
  </div>
);
