import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { setRoutes } from "../../redux/actions";
import { Link, withRouter } from "react-router-dom";

class NavMenu extends Component {
  state = {
    activeItem: "/",
    routes: []
  };

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
    return false;
  };

  componentDidMount() {
    const { routes } = this.state;
    const el = document.getElementsByClassName("dinamicMenuItem");
    for (let i = 0; i < el.length; i++) {
      const attr = el[i].getAttribute("value");
      routes.push({
        name: attr,
        path: attr,
        exact: true
      });
    }
    this.props.setRoutes(routes);
    this.setState({ activeItem: this.props.location.pathname });
  }

  displayMenuItems = () => {
    const boardCount = 3;
    const items = [];
    for (let i = 1; i <= boardCount; i++) {
      items.push(
        <Menu.Item
          as={Link}
          to={`/board_${i}`}
          className="dinamicMenuItem"
          key={i}
          name={`/board_${i}`}
          value={`/board_${i}`}
          active={this.state.activeItem === `/board_${i}`}
          onClick={this.handleItemClick}
          link={true}
          style={{ display: "inline-flex" }}
        />
      );
    }
    return items;
  };

  render() {
    return (
      <span style={{ display: "flex" }}>
        <Menu.Item
          as={Link}
          to="/"
          name="/main"
          active={
            this.state.activeItem === "/" || this.state.activeItem === "/main"
          }
          onClick={this.handleItemClick}
          link={true}
          style={{ display: "inline-flex" }}
        />
        {this.displayMenuItems()}
      </span>
    );
  }
}

export default connect(
  null,
  { setRoutes }
)(withRouter(NavMenu));
