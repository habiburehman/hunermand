import React from "react";
import Section from "./common/Section";
import { Row, Col } from "antd";
import styled from "styled-components";
import PageMainHeading from "./common/PageMainHeading";
import BusinessConcept from "../assets/business-concept.jpg";

const Heading = styled.h1`
  text-align: ${({ align }) => align};
  color: #a42121;
  margin-bottom: 0px;
  font-size: 2.1em;
`;

const Container = styled(Row)`
  background-size: 100px;
  background: radial-gradient(
    rgba(255, 200, 200, 0.5),
    rgba(255, 200, 200, 0.1)
  );
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Services() {
  return (
    <Row style={{ marginTop: "100px" }}>
      <Col span={24}>
        <Container>
          <Col span={24}>
            <Section
              leftContent={
                <Row>
                  <Col span={24}>
                    <PageMainHeading>
                      <span style={{ color: "#A42121" }}>Empowering</span>{" "}
                      Start-up&apos;s to Soar Beyond Boundaries!
                    </PageMainHeading>
                  </Col>
                  <Col span={24}>
                    <p>
                      At Hunermand, we&apos;re not just another counseling
                      service for startups. We&apos;re a dynamic force that
                      fuels innovation, propels growth and breaks the barriers
                      holding you back. Prepare to embark on an exhilarating
                      journey of entrpreneurial trahsformation like no other!
                    </p>
                  </Col>
                </Row>
              }
              rightContent={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={BusinessConcept}
                    width="400px"
                    height="auto"
                    alt="Business Concept"
                  />
                </div>
              }
            />
          </Col>
          <Col span={24}>
            <Heading align="left">Interactive Tools:</Heading>
          </Col>
          <Col span={18}>
            <p>
              Leverage our innovative problem-solving tools, including goal
              tracking, mood-boards, and note-taking, to stay focused and
              motivated. Set meaningful goals, visually express your ideas,
              capture key insights, and reflect on your progress as you embark
              on your growth journey.
            </p>
          </Col>
          <Col span={24}>
            <Heading align="left">
              Fueling Innovation, Catalyzing Growth:
            </Heading>
          </Col>
          <Col span={18}>
            <p>
              Innovation is the lifeblood of startups, and at Hunarmand, we live
              and breathe it. Our dynamic counselors are trailblazers in their
              fields, armed with the latest industry insights, cutting-edge
              methodologies, and disruptive ideas. Together, we'll fuel your
              innovation engine, propelling your business forward with
              unparalleled momentum.
            </p>
          </Col>
          <Col span={24}>
            <Heading align="left">Seamless Communications:</Heading>
          </Col>
          <Col span={18}>
            <p>
              Stay connected with your mentor through our real-time chat
              feature. Engage in meaningful conversations, seek immediate
              advice, and receive prompt support whenever you need it. Build a
              strong mentor-mentee relationship and collaborate effectively.
            </p>
          </Col>
          <Col span={24}>
            <Heading align="left">
              Unforgettable One-on-One Experiences:
            </Heading>
          </Col>
          <Col span={18}>
            <p>
              Prepare for an unforgettable journey of personal growth and
              transformation. Our one-on-one sessions are immersive, empowering
              experiences where sparks of inspiration ignite and ideas flourish.
              With our expert mentors by your side, you'll receive tailored
              guidance, game-changing insights, and unwavering support
              throughout your entrepreneurial odyssey.
            </p>
          </Col>
          <Col span={24}>
            <Heading align="left">Ignite Your Startup Revolution:</Heading>
          </Col>
          <Col span={18}>
            <p style={{ marginBottom: "2.3em" }}>
              Join the revolution at Hunarmand and witness the extraordinary
              unfold. Together, we'll shatter the boundaries of what's possible,
              rewrite the rules of success, and forge a new era of
              entrepreneurial brilliance. Get ready to ignite your startup
              revolution and leave an indelible mark on the world.
            </p>
          </Col>
        </Container>
      </Col>
    </Row>
  );
}
