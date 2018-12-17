import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ShapesX from "./ShapesX";

class ShapesBoardX extends Component {
  state = {
    shapes: [],
    droppable: true
  };
  render() {
    return (
      <div>
        <ShapesX {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shapes: state.shapes
});

export default connect(mapStateToProps)(withRouter(ShapesBoardX));
