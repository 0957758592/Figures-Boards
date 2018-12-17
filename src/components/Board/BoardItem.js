import React, { Component } from "react";

class BoardItem extends Component {
  state = {
    shapes: [],
    currentBoard: {
      id: "",
      name: ""
    },
    droppable: true
  };

  render() {
    return <div>BoardItem</div>;
  }
}
export default BoardItem;
