import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const Container = styled(Row)`
  flex-direction: column;
`;

const ProfilePic = styled.div`
  background-color: #b564f7;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin-bottom: 16px;
`;

const ProfileName = styled.p`
  font-weight: 700;
  font-size: 1.5em;
  margin: 0px;
`;

const ProfileDesignation = styled.p`
  font-size: 1.5em;
  margin-top: 0px;
  text-align: center;
`;

export default function ProfileCard({ name, designation }) {
  return (
    <Container align="middle">
      <Col>
        <ProfilePic />
      </Col>
      <Col>
        <ProfileName>{name}</ProfileName>
      </Col>
      <Col>
        <ProfileDesignation>{designation}</ProfileDesignation>
      </Col>
    </Container>
  );
}
