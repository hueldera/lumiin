import React from "react";
import ReactDOM from "react-dom";
import BaseRouter from "./routes/BaseRouter";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};


ReactDOM.render( <Auth0Provider
  domain={config.domain}
  client_id={config.clientId}
  redirect_uri={window.location.origin}
  onRedirectCallback={onRedirectCallback}
>
<BaseRouter />
</Auth0Provider>, document.getElementById("root"));
