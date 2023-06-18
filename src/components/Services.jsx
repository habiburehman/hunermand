import React from "react";
import Section from "./common/Section";
import { Row, Col } from "antd";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: ${({ align }) => align};
  color: #a42121;
  margin-bottom: 0px;
`;

export default function Services() {
  return (
    <Row style={{ marginTop: "100px" }}>
      <Col span={24}>
        <Section
          leftContent={
            <Row>
              <Col span={24}>
                <div style={{ fontSize: "42px", fontWeight: "bold" }}>
                  <span style={{ color: "#A42121" }}>Empowering</span>{" "}
                  Start-up&apos;s to Soar Beyond Boundaries!
                </div>
              </Col>
              <Col span={24}>
                <p>
                  At Hunermand, we&apos;re not just another counseling service
                  for startups. We&apos;re a dynamic force that fuels
                  innovation, propels growth and breaks the barriers holding you
                  back. Prepare to embark on an exhilarating journey of
                  entrpreneurial trahsformation like no other!
                </p>
              </Col>
            </Row>
          }
        />
      </Col>
      <Col span={24}>
        <Heading align="center">Unleashing Your Startup Potential:</Heading>
      </Col>
      <Col span={24}>
        <Section
          rightContent={
            <p>
              Our team of visionary mentors is on a mission to unlock your
              startup&apos;s true potential. Through our revolutionary
              counselling services, we ignite a spark within you, guiding you
              towards unprecedented achievements and empowering you to reach new
              heights.
            </p>
          }
        />
      </Col>
      <Col span={24}>
        <Heading align="left">
          Tailored Strategies for Unparalleled Success:
        </Heading>
      </Col>
      <Col span={18}>
        <p>
          Gone are the days of one-size-fits-all solutions. We understand that
          your startup is unique, with its own dreams, challenges, and
          aspirations. Our dedicated mentors take the time to deeply understand
          your vision, crafting tailored strategies that resonate with your
          business's DNA. Brace yourself for a custom roadmap to unparalleled
          success..
        </p>
      </Col>
      <Col span={24}>
        <Heading align="left">Fueling Innovation, Catalyzing Growth:</Heading>
      </Col>
      <Col span={18}>
        <p>
          Innovation is the lifeblood of startups, and at Hunarmand, we live and
          breathe it. Our dynamic counselors are trailblazers in their fields,
          armed with the latest industry insights, cutting-edge methodologies,
          and disruptive ideas. Together, we'll fuel your innovation engine,
          propelling your business forward with unparalleled momentum.
        </p>
      </Col>
      <Col span={24}>
        <Heading align="left">
          Revolutionizing Entrepreneurial Mindsets:
        </Heading>
      </Col>
      <Col span={18}>
        <p>
          We don't just offer advice; we revolutionize mindsets. Our counseling
          services are designed to challenge the status quo, inspiring you to
          think bigger, bolder, and beyond the ordinary. Get ready to unleash
          your inner visionary, break free from limitations, and embrace a
          fearless entrepreneurial spirit that defies expectations.
        </p>
      </Col>
      <Col span={24}>
        <Heading align="left">Unforgettable One-on-One Experiences:</Heading>
      </Col>
      <Col span={18}>
        <p>
          Prepare for an unforgettable journey of personal growth and
          transformation. Our one-on-one sessions are immersive, empowering
          experiences where sparks of inspiration ignite and ideas flourish.
          With our expert mentors by your side, you'll receive tailored
          guidance, game-changing insights, and unwavering support throughout
          your entrepreneurial odyssey.
        </p>
      </Col>
      <Col span={24}>
        <Heading align="left">Ignite Your Startup Revolution:</Heading>
      </Col>
      <Col span={18}>
        <p>
          Join the revolution at Hunarmand and witness the extraordinary unfold.
          Together, we'll shatter the boundaries of what's possible, rewrite the
          rules of success, and forge a new era of entrepreneurial brilliance.
          Get ready to ignite your startup revolution and leave an indelible
          mark on the world.
        </p>
      </Col>
    </Row>
  );
}
