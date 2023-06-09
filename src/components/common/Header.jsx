import React from "react";
import { Row, Col } from "antd";

export default function Header() {
  return (
    <Row justify="space-between" style={{ marginTop: "100px" }}>
      <Col span={12}>
        <span>Hunermand</span>
      </Col>
      <Col span={12}>
        <Row justify="space-between">
          <Col>
            <span>Services</span>
          </Col>
          <Col>
            <span>About</span>
          </Col>
          <Col>
            <span>Contact</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
