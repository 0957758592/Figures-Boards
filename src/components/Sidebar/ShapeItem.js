import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import { DragSource } from "react-dnd";

class Item extends Component {
  render() {
    const { shape, connectDragSource, isDragging } = this.props;
    console.log("item", this.props);

    const draggStyle = {
      backgroundColor: isDragging ? "#ccc" : "#fff"
    };

    return connectDragSource(
      <div>
        <Segment
          textAlign="center"
          style={{ cursor: "move", ...draggStyle }}
          draggable="true"
        >
          <Icon name={shape.name} size={shape.size} color={shape.color} />
        </Segment>
      </div>
    );
  }
}

const spec = {
  beginDrag(props) {
    return {
      shapeId: props.shape.id
    };
  },
  canDrag(props, monitor) {
    return true;
  },
  endDrag(props, monitor) {
    const shapeId = props.shape.id;
    console.log("You dropped .... into " + monitor.getDropResult());
    //--TODO: put data to board actions
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource("shape", spec, collect)(Item);
