import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Shapes from "./Shapes";

class ShapesBoard extends Component {
  state = {
    shapes: [],
    droppable: true
  };
  render() {
    return (
      <div>
        <Shapes {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shapes: state.shapes
});

export default connect(mapStateToProps)(withRouter(ShapesBoard));
