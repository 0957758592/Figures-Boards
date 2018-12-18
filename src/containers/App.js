import React, { Component } from "react";
import NavMenu from "../components/Menu/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Board from "../components/Board/Board";
import { Grid, Divider } from "semantic-ui-react";
import { DropTarget } from "react-dnd";

class App extends Component {
  render() {
    const { connectDropTarget, hovered, canDrop } = this.props;

    const dropStyle = {
      border: `1px solid ${canDrop ? "green" : "#ccc"}`,
      backgroundColor: hovered ? "#ccc" : "#fff"
    };
    return (
      <div>
        <NavMenu />

        <Grid celled="internally">
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Sidebar />
            </Grid.Column>

            <Divider vertical />

            <Grid.Column width={13}>
              {connectDropTarget(
                <div style={{ height: "100%", ...dropStyle }}>
                  <Board {...this.props} />
                </div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const spec = {
  drop(props, monitor) {
    const shapesId = monitor.getItem().shapeId;
    // return shapesId;
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  hovered: monitor.isOver()
  // isDragging: monitor.isDragging()
});

export default DropTarget(["shape"], spec, collect)(App);
