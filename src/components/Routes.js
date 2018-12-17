import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BoardItem from "./Board/BoardItem";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => "main_"} />
        <Route path="/board_1" render={props => <BoardItem props={props} />} />
        <Route path="/board_2" component={BoardItem} />
        <Route path="/board_3" component={() => "xxx"} />
        <Route path="/" render={() => "no such routes"} />
      </Switch>
    );
  }
}

export default Routes;
