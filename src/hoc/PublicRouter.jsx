import { Redirect, Route } from 'react-router-dom';
//import { useSelector } from 'react-redux';

const PublicRouteHoc = ({ component: Component, path }) => {
 // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Route
      exact
      path={path}
      render={() => (/*isAuthenticated ? <Redirect to="/login" /> :*/ <Component />)}
    />
  );
};

export default PublicRouteHoc;