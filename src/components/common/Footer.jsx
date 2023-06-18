import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Logo } from "./Header";
import {
  PhoneFilled,
  MailFilled,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Container = styled(Row)`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #000000;
  height: 426px;
  color: #ffffff;
  padding-top: 85px;
`;

const MidsectionHeadings = styled.h4`
  margin: 0px;
  margin-bottom: 40px;
`;

const VerticalContainer = styled(Row)`
  flex-direction: column;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

export default function Footer() {
  return (
    <Container>
      <Col lg={6}>
        <Logo
          style={{ marginLeft: "69px", marginTop: "0px", marginBottom: "0px" }}
        />
      </Col>
      <Col lg={11} style={{ marginTop: "20px" }}>
        <Row justify="space-around">
          <Col>
            <VerticalContainer>
              <Col>
                <MidsectionHeadings>Pages</MidsectionHeadings>
              </Col>
              <Col>
                <h5>Home</h5>
              </Col>
              <Col>
                <h5>Services</h5>
              </Col>
              <Col>
                <h5>Blog</h5>
              </Col>
              <Col>
                <h5>Book a call</h5>
              </Col>
            </VerticalContainer>
          </Col>
          <Col>
            <VerticalContainer>
              <MidsectionHeadings>Service</MidsectionHeadings>
              <Col>
                <h5>Expert Guidance</h5>
              </Col>
              <Col>
                <h5>Networking Opportunities</h5>
              </Col>
              <Col>
                <h5>Business Strategy Development</h5>
              </Col>
              <Col>
                <h5>Funding and Investment Advice</h5>
              </Col>
            </VerticalContainer>
          </Col>
          <Col>
            <VerticalContainer>
              <MidsectionHeadings>Contact</MidsectionHeadings>
              <Col>
                <h5>
                  <PhoneFilled style={{ marginRight: "10px" }} />
                  <FooterLink href="tel:406-555-0120">
                    (406) 555-0120{" "}
                  </FooterLink>
                </h5>
              </Col>
              <Col>
                <h5>
                  <MailFilled style={{ marginRight: "10px" }} />
                  <FooterLink href="mailto:mangcoding123@gmail.com">
                    mangcoding123@gmail.com
                  </FooterLink>
                </h5>
              </Col>
            </VerticalContainer>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={3} style={{ marginTop: "20px" }}>
        <Row>
          <VerticalContainer>
            <MidsectionHeadings>Social Media</MidsectionHeadings>
            <Row gutter={16}>
              <Col>
                <h5>
                  <FacebookOutlined style={{ fontSize: "1.83em" }} />
                </h5>
              </Col>
              <Col>
                <h5>
                  <LinkedinOutlined style={{ fontSize: "1.83em" }} />
                </h5>
              </Col>
            </Row>
          </VerticalContainer>
        </Row>
      </Col>
    </Container>
  );
}
