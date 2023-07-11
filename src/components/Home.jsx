import React from "react";
import Section from "./common/Section";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import PageMainHeading from "./common/PageMainHeading";
import ContactButton from "./common/ContactButton";
import HomeContact from "../assets/home-contact.jpg";
import HomeStartup from "../assets/home-startup.jpg";
import HomeCover from "../assets/home-cover.jpg";
import AbdolaMunir from "../assets/abdola-munir.png";
import AbdulHanan from "../assets/abdul-hanan.png";
import ArishNadeem from "../assets/arish-nadeem.png";
import FahadAbbas from "../assets/fahad-abbas.png";
import WamiqShad from "../assets/wamiq-shad.png";
import HejabSyed from "../assets/hejab-syed.png";

const Heading = styled.h1`
  text-align: ${({ align }) => align};
  color: #a42121;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  font-size: 2.1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const DiscoverExpertButtons = styled(Button)`
  background: #a42121;
  color: #ffffff;
  border-radius: 0 !important;
  &:hover {
    background-color: #a42121 !important;
    color: #ffffff !important;
    cursor: default !important;
  }
`;

export default function Home() {
  return (
    <Row style={{ marginTop: "100px" }} justify="center" gutter={[0, 68]}>
      <Col span={24}>
        <Section
          leftContent={
            <Row>
              <Col span={24}>
                <PageMainHeading color="#A42121">
                  Unlock Your Potential With Hunarmand!
                </PageMainHeading>
              </Col>
              <Col span={24}>
                <p>
                  At Hunarmand, we empower aspiring entrepreneurs to turn their
                  startup dreams into reality. Our comprehensive support,
                  guidance, and resources are designed to help you succeed,
                  whether you're starting out or taking your venture to the next
                  level. Not just limited to startups, we also nurture personal
                  and career growth. Unlock your full potential and thrive in
                  all aspects of your journey!
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
                src={HomeStartup}
                width="400px"
                height="auto"
                alt="Unlock startup's potential"
              />
            </div>
          }
        />
      </Col>
      <Col span={24}>
        <img src={HomeCover} width="100%" height="auto" alt="Discuss Ideas" />
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
      <Col span={24}>
        <Section
          leftContent={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <DiscoverExpertButtons size="large">
                Unmatched Expertise
              </DiscoverExpertButtons>
              <p>Inspirational Encounters</p>
            </div>
          }
          rightContent={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>Transformational Growth</p>
              <DiscoverExpertButtons size="large">
                Strategic Networking
              </DiscoverExpertButtons>
            </div>
          }
        />
      </Col>
      <Col span={24}>
        <p style={{ textAlign: "center" }}>
          Your All-in-One Resource for Success
        </p>
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
              image={FahadAbbas}
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Wamiq A Shad"
              designation="(Finance & Product Specialist)"
              image={WamiqShad}
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Arish Nadeem"
              designation="(Startup & Marketing Guru)"
              image={ArishNadeem}
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Abdola Munir"
              designation="(Product Design & Startup Growth Specialist)"
              image={AbdolaMunir}
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Abdul Hannan"
              designation="(Product Specialist)"
              image={AbdulHanan}
            />
          </Col>
          <Col span={8}>
            <ProfileCard
              name="Hejab Syed"
              designation="(Life Coach)"
              image={HejabSyed}
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
                height="auto"
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
