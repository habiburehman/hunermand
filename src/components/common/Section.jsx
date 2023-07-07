import React from "react";
import { Row, Col } from "antd";

export default function Section({ leftContent, rightContent, justify }) {
  return (
    <Row justify={justify}>
      <Col span={12}>{leftContent}</Col>
      <Col span={12}>{rightContent}</Col>
    </Row>
  );
}
