import React, { ReactElement } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Authenticated from 'components/Protected/Authenticated';
import { routes, modals } from '../routes';

const ModalRouter = (): ReactElement => {
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);

  const modal = modals.find(({ name }) => params.get('modal') === name);

  if (modal) {
    const queries: Map<string, string> = new Map();
    params.forEach((value, key) => {
      if (key !== modal.name) {
        queries.set(key, value);
      }
    });
    return <modal.Component params={queries} />;
  }

  return null;
};

const Router = (
  Component: React.FunctionComponent
): (() => ReactElement) => {
  return () => (
    <Component>
      <Switch>
        {routes.map(({ path, exact, Component: RouteComponent }) => (
          <Authenticated
            key={path}
            path={path}
            exact={exact}
            component={RouteComponent}
          />
        ))}
      </Switch>
      <Route path="/" component={ModalRouter} />
    </Component>
  );
};

export default Router;
