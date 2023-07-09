import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const Container = styled(Row)`
  flex-direction: column;
`;

const ProfilePic = styled.div`
  background-color: #b564f7;
  background-image: url(${({ path }) => path});
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin-bottom: 16px;
  background-size: cover;
  background-position: center center;
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

export default function ProfileCard({ name, designation, image }) {
  return (
    <Container align="middle">
      <Col>
        <ProfilePic path={image}></ProfilePic>
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
