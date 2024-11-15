import { ComponentType } from 'react';
import {
  Home,
  Login,
  Signup,
  ResetPassword,
  WorkspaceSetup,
  WorkspaceAccount,
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
    path: '/login',
    Component: Login,
    exact: true,
  },
  {
    path: '/signup',
    Component: Signup,
    exact: true,
  },
  {
    path: '/resetpassword',
    Component: ResetPassword,
    exact: true,
  },
  {
    path: '/workspace/setup',
    Component: WorkspaceSetup,
    exact: true,
  },
  {
    path: '/workspace',
    Component: WorkspaceAccount,
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
