import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import { DragSource } from "react-dnd";
// import ShapeItem from "./ShapeItem";

class Shapes extends Component {
  state = {
    shape: [],
    currentShape: {
      id: "",
      positionX: "",
      positionY: "",
      currentPlace: ""
    },
    draggable: true
  };

  displayShapes = (shapes, draggStyle, connectDragSource) =>
    shapes.length > 0 &&
    shapes.map((shape, i) =>
      connectDragSource(
        <div
          key={i}
          onMouseDown={() =>
            this.setState({
              currentShape: {
                id: shape.id
              }
            })
          }
        >
          <Segment
            key={i}
            textAlign="center"
            style={{ cursor: "move", ...draggStyle }}
            draggable="true"
          >
            <Icon name={shape.name} size={shape.size} color={shape.color} />
          </Segment>
        </div>
      )
    );

  render() {
    const { shapes, connectDragSource, isDragging } = this.props;
    const draggStyle = {
      backgroundColor: isDragging ? "#ccc" : "#fff"
    };

    return (
      <div>
        {this.displayShapes(shapes.shapeList, draggStyle, connectDragSource)}
      </div>
    );
  }
}

const spec = {
  beginDrag(props, state) {
    return {
      shapeId: props.shapes.shapeList.key
    };
  },
  endDrag(props, monitor) {
    const sid = props.shapes.shapeList.key;
    const eventSid = monitor.getDropResult();
    console.log(eventSid, sid);// fail
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource("shape", spec, collect)(Shapes);
