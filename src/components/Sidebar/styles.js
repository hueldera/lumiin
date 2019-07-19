import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: ${({ collapse }) => (!collapse ? "240px" : "70px")};
  background: #030c2d;
  color: #e8e8e8;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  float: left;
  position: fixed;

  font-size: 17px;

  button {
    margin-top: 10px;
    position: absolute;
  }

  img {
    width: ${({ collapse }) => (!collapse ? "250px" : "150px")};
  }
`;

export const CollapseButton = styled.button`
  background-color: #0f203b;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  color: #66fca2;
  left: 16px;
  transition: all 0.2s;
  &:hover {
    color: #ffffff;
  }
`;

export const Brand = styled.img`
  padding: 50px;
  object-fit: scale-down;
  height: 250px;
`;

export const Menu = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 10px;
  font-weight: ${({ active }) => (active ? `bold` : "none")};
  color: #e8e8e8;

  span {
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: #66fca2;
  }
`;
