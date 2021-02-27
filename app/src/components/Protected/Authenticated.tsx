import React, { FC, ReactElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { storage } from 'lib/utils';

const defaultPath = '/logout';

const Authenticated: FC<RouteProps> = ({
  exact,
  component,
  path,
}): ReactElement => {
  const user = storage.payload;

  if (!user && path !== defaultPath) {
    return <Redirect to={{ pathname: defaultPath }} />;
  }

  if (user && path === defaultPath) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return <Route exact={exact} component={component} path={path} />;
};

export default Authenticated;
