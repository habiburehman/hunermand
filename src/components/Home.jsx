import React from "react";
import Section from "./common/Section";
import { Row, Col } from "antd";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";

const Heading = styled.h1`
  text-align: ${({ align }) => align};
  color: #a42121;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
`;

export default function Home() {
  return (
    <Row style={{ marginTop: "100px" }} justify="center">
      <Col span={24}>
        <Section
          leftContent={
            <Row>
              <Col span={24}>
                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: "bold",
                    color: "#A42121",
                  }}
                >
                  Unlock Your Startup&apos;s Potential
                </div>
              </Col>
              <Col span={24}>
                <p>
                  At Hunarmand, we believe in the power of entrepreneurship. We
                  are here to provide comprehensive support, guidance, and
                  resources to help aspiring entrepreneurs turn their startup
                  dreams into reality. Whether you're just starting out or
                  looking to take your startup to the next level, we have the
                  tools and expertise to support your journey.
                </p>
              </Col>
            </Row>
          }
        />
      </Col>
      <Col span={10}>
        <Heading align="center">
          It all begins with an idea.
          <span style={{ color: "#000000" }}>
            {" "}
            Maybe you want to launch a business. Maybe you want to turn a hobby
            into something more.
          </span>
        </Heading>
      </Col>
      <Col span={24}>
        <Row justify="center">
          <Col span={8}>
            <Heading align="center">
              Discover the Expert Advantages:
              <span style={{ color: "#000000" }}>
                {" "}
                Your path to unparalleled Insight and Growth
              </span>
            </Heading>
          </Col>
        </Row>
      </Col>
      <Col span={10}>
        <Heading align="center" marginbottom="20px">
          Meet The Growth Gurus
        </Heading>
      </Col>
      <Col span={24}>
        <Row justify="space-around">
          <Col>
            <ProfileCard
              name="Fahad Abbas"
              designation="(Product Design & Startup Growth Guru)"
            />
          </Col>
          <Col>
            <ProfileCard
              name="Wamiq A Shad"
              designation="(Finance & Product Specialist)"
            />
          </Col>
          <Col>
            <ProfileCard
              name="Arish Nadeem"
              designation="(Startup & Marketing Guru)"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
