import React from "react";
import { Row, Col } from "antd";

export default function Section({ leftContent, rightContent }) {
  return (
    <Row>
      <Col span={12}>
        <Row>{leftContent}</Row>
      </Col>
      <Col span={12}>{rightContent}</Col>
    </Row>
  );
}
