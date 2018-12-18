import React, { Component } from "react";
import ShapeItem from "./ShapeItem";

class Shapes extends Component {
  render() {
    const { shapeList } = this.props.shapes;
    return (
      <div>
        {shapeList.length > 0 &&
          shapeList.map(shape => <ShapeItem key={shape.id} shape={shape} />)}
      </div>
    );
  }
}

export default Shapes;
