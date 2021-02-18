import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  return (
    <NavContainer>
      {items.map((item) => {
        if (!item.child_items) {
          return (
            <NavItem key={item.ID} className="without_child">
              <Link link={item.url}>{item.title}</Link>
            </NavItem>
          );
        } else {
          const childItems = item.child_items;
          return (
            <NavItemWithChild key={item.ID}>
              <NavItem>
                <Link link={item.url} className="child_menu">{item.title}</Link>
              </NavItem>
              <ChildMenu className="submenu">
                {childItems.map((childItem) => {
                  return (
                    <NavItem key={childItem.ID}>
                      <Link link={childItem.url} className="child_menu_link" >{childItem.title}</Link>
                    </NavItem>
                  );
                })}
              </ChildMenu>
            </NavItemWithChild>
          );
        }
      })}
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  justify-content: center;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  .without_child {
    margin: 0px 1rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  font-size: 1em;
  font-weight: 500;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: .25s ease-out;
  
  transition-property: background,color,opacity;
  & > a {
    display: inline-block;
    color: var(--black);
    line-height: 2em;
    margin-top: 3px;
    :[aria-current="page"] {
      border-bottom: 2px solid;
      border-bottom-color: var(--brand);
    }
    :hover {
      color: var(--brand) !important;
    }
  }
`;

const NavItemWithChild = styled.div`
  position: relative;
  display: inline-block;
  margin: 0px 1rem;

  :hover .submenu {
    visibility: visible;
    opacity: 1;
  }
`;

const ChildMenu = styled.div`
  position: absolute;
  padding: 1rem;
  top: 40px;
  padding-right: 2rem;
  width: 200px;
  text-align: left; 
  font-size: 16px;
  z-index: 3;
  background-color: #fff;
  box-shadow: 0 9px 48px rgb(16 21 23 / 25%);
  border-radius: 7px;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 500ms, visibility 500ms;
  transition: opacity 500ms, visibility 500ms;

  ::before {
    content: "";
    position: absolute;
    top: -3px;
    left: 12px;
    border-radius: 5px;
    background: inherit;
    width: 36px;
    height: 36px;
    transform: rotate(45deg);
    z-index: -1;
  }
`;