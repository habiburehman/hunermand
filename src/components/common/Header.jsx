import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItems = styled(Link)`
  font-size: 1.5em;
  color: #000000;
`;

export const Logo = ({ style }) => <h2 style={style}>Hunermand</h2>;

export default function Header() {
  return (
    <Row justify="space-between" align="bottom" style={{ marginTop: "100px" }}>
      <Col span={12}>
        <Logo />
      </Col>
      <Col span={12}>
        <Row justify="space-between">
          <Col>
            <MenuItems to="/services">Services</MenuItems>
          </Col>
          <Col>
            <MenuItems to="/about">About</MenuItems>
          </Col>
          <Col>
            <MenuItems to="/contact">Contact</MenuItems>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
