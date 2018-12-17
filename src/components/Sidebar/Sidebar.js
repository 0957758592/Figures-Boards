import React, { Component } from "react";
import { Header, Icon, Divider } from "semantic-ui-react";
import ShapesBoard from "./ShapesBoard";

import { connect } from "react-redux";
import { shapesApi } from "../../api";
import { setShapes } from "../../redux/actions";

class Sidebar extends Component {
  componentWillMount() {
    this.props.setShapes(shapesApi);
  }

  render() {
    return (
      <div>
        <Header as="h4" icon textAlign="center">
          <Icon size="small" name="exchange" />
          DnD Shapes
        </Header>
        <Divider />
        <div className="sidebar">
          <ShapesBoard />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { setShapes }
)(Sidebar);
