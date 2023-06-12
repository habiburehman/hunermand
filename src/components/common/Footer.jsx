import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Logo } from "./Header";

const Container = styled(Row)`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #000000;
  height: 426px;
  color: #ffffff;
  padding-top: 85px;
`;

const MidsectionHeadings = styled.h4`
  margin: 0px;
`;

export default function Footer() {
  return (
    <Container>
      <Col span={6}>
        <Logo
          style={{ marginLeft: "69px", marginTop: "0px", marginBottom: "0px" }}
        />
      </Col>
      <Col span={12} style={{ marginTop: "20px" }}>
        <Row justify="space-around">
          <Col>
            <MidsectionHeadings>Pages</MidsectionHeadings>
          </Col>
          <Col>
            <MidsectionHeadings>Service</MidsectionHeadings>
          </Col>
          <Col>
            <MidsectionHeadings>Contact</MidsectionHeadings>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <></>
      </Col>
    </Container>
  );
}
