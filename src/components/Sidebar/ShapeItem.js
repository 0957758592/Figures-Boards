import React, { Component } from "react";
import { DragSource } from "react-dnd";

export class ShapeItem extends Component {
  render() {
    console.log(this.props);
    const { connectDragSource, item } = this.props;
    return (
      <div>
        {connectDragSource(<div>{item[0]}</div>)}
        {connectDragSource(<div>{item[1]}</div>)}
        {connectDragSource(<div>{item[2]}</div>)}
        {connectDragSource(<div>{item[3]}</div>)}
        {connectDragSource(<div>{item[4]}</div>)}
        {connectDragSource(<div>{item[5]}</div>)}
      </div>
    );
  }
}

const spec = {
  beginDrag(props) {
    return { item: props.item.key };
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource("shape", spec, collect)(ShapeItem);
// export default ShapeItem
