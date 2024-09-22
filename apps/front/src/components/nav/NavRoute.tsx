import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';
import { FC } from 'react';

export const NavRoute: FC = () => (
  <div id="app" className="h-full flex flex-col">
    <Header />
    <div className="flex-1 flex">
      <Outlet />
    </div>
  </div>
);
