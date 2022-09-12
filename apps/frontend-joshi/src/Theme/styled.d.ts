import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeType: string;
    body: {
      backgroundColor: string;
      url: string;
      textColor: string;
      titleColor: string;
      subTitleColor: string;
      descColor: string;
    };
    header: {
      background: string;
      textColor: string;
    };
    footer: {
      background: string;
      textColor: string;
    };
    section: {
      titleColor: string;
      subTitleColor: string;
      descColor: string;
    };
    link: {
      textColor: string;
    };
    button: {
      background: string;
      textColor: string;
    };
    error: { color: string };
    warning: { color: string };
    info: { color: string };
    success: { color: string };
  }
}
