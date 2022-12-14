import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.textColor};
  box-shadow: 0 -3px 20px 5px grey;
  backdrop-filter: saturate(50%) blur(8px);
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
`;

export const HeaderTitle = styled.div`
  color: ${(props) => props.theme.body.titleColor};
}
`;
