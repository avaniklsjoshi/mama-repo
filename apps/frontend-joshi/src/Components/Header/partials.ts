import styled from "styled-components";

export const HeaderContainer: any = styled.div`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.text};
  box-shadow: 0 -3px 20px 5px grey;
  backdrop-filter: saturate(50%) blur(8px);
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
`;
