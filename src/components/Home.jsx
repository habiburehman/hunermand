import React from "react";
import Section from "./common/Section";
import { Row, Col } from "antd";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: ${({ align }) => align};
`;

export default function Home() {
  return (
    <>
      <Section
        leftContent={
          <Row>
            <Col span={24}>
              <h1>Empowering Start-up&apos;s to soar Beyond Boundaries</h1>
            </Col>
            <Col span={24}>
              <p>
                At Hunermand, we&apos;re not just another counseling service for
                startups. We&apos;re a dynamic force that fuels innovation,
                propels growth and breaks the barriers holding you back. Prepare
                to embark on an exhilarating journey of entrpreneurial
                trahsformation like no other!
              </p>
            </Col>
          </Row>
        }
      />
      <Heading align="center">Unleashing Your Startup Potential</Heading>
      <Section
        rightContent={
          <p>
            Our team of visionary mentors is on a mission to unlock your
            startup&apos;s true potential. Through our revolutionary counselling
            services, we ignite a spark within you, guiding you towards
            unprecedented achievements and empowering you to reach new heights.
          </p>
        }
      />
      <Heading align="left">
        Tailored Strategies for Unparalleled Success:
      </Heading>
      <p>Gone are the days of one-size-fits-all solutions.</p>
    </>
  );
}
