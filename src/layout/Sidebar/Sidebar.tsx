import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Container, ItemsBox, MainBox, StyledLogo } from "./Sidebar.styles";
import { toggleMenu } from "../../store/menu/menuSlice";
import { NavLink } from "react-router-dom";
import { FaArchive, FaLightbulb, FaTag, FaTrash } from "react-icons/fa";
import getStandardName from "../../utils/getStandardName";
import { toggleTagsModal } from "../../store/modal/modalSlice";
import { MdEdit } from "react-icons/md";
import { v4 } from "uuid";

const Sidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { isOpen } = useAppSelector((state) => state.menu);
  const { tagsList } = useAppSelector((state) => state.tags);

  const items = [
    { icon: <FaArchive />, title: "Archive", id: v4() },
    { icon: <FaTrash />, title: "Trash", id: v4() },
  ];

  if (pathname === "/404") {
    return null;
  }

  return (
    <Container openMenu={isOpen ? "open" : ""}>
      <MainBox openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>
        {/* NOTE ITEMS */}
        <ItemsBox>
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={"/"}
              state={"notes"}
              className={({ isActive }) =>
                isActive ? "active-item" : "inactive-item"
              }
            >
              <span>
                <FaLightbulb />
              </span>
              <span>Notes</span>
            </NavLink>
          </li>
          {/* TAG ITEMS */}
          {tagsList?.map(({ tagName, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/tag/${tagName}`}
                state={`${tagName}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>
                  <FaTag />
                  <span>{getStandardName(tagName)}</span>
                </span>
              </NavLink>
            </li>
          ))}

          {/* EDIT TAG ITEM */}
          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "edit", view: true }))
            }
          >
            <span>
              <MdEdit />
            </span>
            <span>Edit Notes</span>
          </li>

          {/* OTHER ITEMS */}
          {items.map(({ icon, title, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/${title.toLocaleLowerCase()}`}
                state={`${title}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

export default Sidebar;
