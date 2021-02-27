import { ComponentType } from 'react';
import {
  Home,
} from 'domain/index';

interface Route {
  path: string;
  Component: ComponentType;
  exact: boolean;
}

interface Modals {
  name: string;
  Component: ComponentType<{ params?: Map<string, string> }>;
}

export const routes: Route[] = [
  {
    path: '/',
    Component: Home,
    exact: true,
  },
  {
    path: '/logout',
    Component: Home,
    exact: true,
  },
  {
    path: '*',
    Component: Home,
    exact: false,
  },
];

export const modals: Modals[] = [];

export default routes;
