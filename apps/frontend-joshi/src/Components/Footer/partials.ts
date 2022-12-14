import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.textColor};
  box-shadow: 0 -4px 20px -2px grey;
  margin-top: 28px;
}
`;
