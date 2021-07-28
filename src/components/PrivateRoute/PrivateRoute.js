import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";


function PrivateRoute({ children, ...rest }) {
  const [user] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email || window.sessionStorage.get("token") !== undefined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
