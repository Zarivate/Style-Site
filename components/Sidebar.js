import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
  CloseIcon,
  Icon,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./styled/sidebarStyles";

// Component that handles the toggle drop down menu for small screens/mobile users
const Sidebar = ({ $isOpen, toggle }) => {
  return (
    <SidebarContainer $isOpen={$isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="more" onClick={toggle}>
            More
          </SidebarLink>
          <SidebarLink to="details" onClick={toggle}>
            Details
          </SidebarLink>
          <SidebarLink to="test" onClick={toggle}>
            Test
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
