import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCurrentPath from "../../hooks/useCurrentPath";

const MenuItems = styled(Link)`
  font-size: 1.5em;
  color: #000000;
`;

const styles = {
  active: {
    fontWeight: "bold",
  },
};

const routes = [
  { Home: "/" },
  { About: "/about" },
  { Services: "/services" },
  { Contact: "/contact" },
];

export const Logo = ({ style }) => <h2 style={style}>Hunarmand</h2>;

export default function Header() {
  const currentPath = useCurrentPath();
  return (
    <Row justify="space-between" align="bottom" style={{ marginTop: "100px" }}>
      <Col span={12}>
        <Logo />
      </Col>
      <Col span={12}>
        <Row justify="space-between">
          {routes.map((route) => {
            const key = Object.keys(route)[0];
            const value = route[key];
            return (
              <Col>
                <MenuItems
                  to={value}
                  style={currentPath === value ? styles.active : undefined}
                >
                  {key}
                </MenuItems>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
