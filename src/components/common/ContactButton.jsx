import styled from "styled-components";
import { Button } from "antd";

const ContactButton = styled(Button)`
  background: #f6b93b;
  padding-left: 50px !important;
  padding-right: 50px !important;
  color: #000000;
  &:hover {
    background-color: #b564f7 !important;
  }
`;

export default ContactButton;
