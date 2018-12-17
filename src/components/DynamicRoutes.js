import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

//======================================================================
//-----------DOESN'T BRING ALL ROUTES (ONLY ONE)//----- FAIL---------
//======================================================================

class DynamicRoutes extends Component {
  state = {
    routes: []
  };

  showRoutes = routes =>
    routes.length > 0 &&
    routes.map((route, i) => (
      <Route key={i} path={route.path} component={() => "path" + i} />
    ));

  render() {
    const { routes } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => "start page"} />

          {this.showRoutes(routes.routesApi)}

          <Route path="/" render={() => "no such routes"} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routes: state.routes
});

export default connect(mapStateToProps)(DynamicRoutes);
