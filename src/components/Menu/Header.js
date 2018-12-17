import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import NavMenu from "./NavMenu";

class Header extends Component {
  render() {
    return (
      <Menu pointing secondary fluid>
        <Menu.Menu>
          <Menu.Item as="h1" name="boards" value="Boards" />
        </Menu.Menu>
        <Menu.Menu position="right">
          <NavMenu />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
