import React from "react";
import Section from "./common/Section";
import { Row, Col } from "antd";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import ContactButton from "./common/ContactButton";
import HomeContact from "../assets/home-contact.jpg";
import HomeStartup from "../assets/home-startup.jpg";
import HomeCover from "../assets/home-cover.jpg";

const Heading = styled.h1`
  text-align: ${({ align }) => align};
  color: #a42121;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function Home() {
  return (
    <Row style={{ marginTop: "100px" }} justify="center" gutter={[0, 120]}>
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
          rightContent={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={HomeStartup}
                width="400px"
                height="300px"
                alt="Unlock startup's potential"
              />
            </div>
          }
        />
      </Col>
      <Col span={24}>
        <img src={HomeCover} width="100%" height="580px" alt="Discuss Ideas" />
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
        <Heading align="center" marginbottom="100px">
          Meet The Growth Gurus
        </Heading>
      </Col>
      <Col span={24}>
        <Row justify="space-around" gutter={[0, 42]}>
          <Col span={8}>
            <ProfileCard
              name="Fahad Abbas"
              designation="(Product Design & Startup Growth Guru)"
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Wamiq A Shad"
              designation="(Finance & Product Specialist)"
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Arish Nadeem"
              designation="(Startup & Marketing Guru)"
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Fahad Abbas"
              designation="(Product Design & Startup Growth Guru)"
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Wamiq A Shad"
              designation="(Finance & Product Specialist)"
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Arish Nadeem"
              designation="(Startup & Marketing Guru)"
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Heading align="left">
          Are you ready to take the next step?
          <span style={{ color: "#000000" }}>
            {" "}
            Book a call with us and experience the difference firsthand.
          </span>
        </Heading>
        <p>
          During the call, you'll receive a personalized consultation, gain
          valuable expert insights, receive actionable strategies, benefit from
          customized support, and empower your entrepreneurial journey. Unlock
          your potential and book a call with us today!
        </p>
      </Col>
      <Col span={24} style={{ marginBottom: "2.3em" }}>
        <Section
          leftContent={
            <ButtonContainer>
              <ContactButton size="large" type="primary">
                Contact Us
              </ContactButton>
            </ButtonContainer>
          }
          rightContent={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={HomeContact}
                width="500px"
                height="500px"
                alt="Contact Us"
              />
            </div>
          }
          justify="center"
        />
      </Col>
    </Row>
  );
}
