import colorMode from "../../Assets/Images/colorMode.png";
import dayMode from "../../Assets/Images/dayMode.png";
import nightMode from "../../Assets/Images/nightMode.png";
import { IThemeConfig } from "../../Theme/themeConfig";
import dark from "../../Theme/themes/dark";
import girly from "../../Theme/themes/girly";
import light from "../../Theme/themes/light";

export const THEME_ARRAY: IThemeConfig[] = [
  {
    themeName: "girly",
    themeColor: "#f1b7ea",
    themeIcon: colorMode,
    themeValue: girly
  },
  {
    themeName: "light",
    themeColor: "#f5f5f5",
    themeIcon: dayMode,
    themeValue: light
  },
  {
    themeName: "dark",
    themeColor: "#4B4453",
    themeIcon: nightMode,
    themeValue: dark
  }
];

export const DEFAULT_THEME = dark;
export const LOCAL_STORAGE_THEME_KEY = "joshi-themes";

export enum LANGUAGE_NAMES {
  HINDI = "हिन्दी",
  ENGLISH = "English",
  GERMAN = "Deutsch"
}
export enum LANGUAGE_NAMES_KEY {
  HINDI = "hn",
  ENGLISH = "en",
  GERMAN = "de"
}
export const DEFAULT_LANGUAGE = LANGUAGE_NAMES_KEY.ENGLISH;

export enum ROUTES {
  HOME = "/",
  FEATURES = "/features",
  REACT_AND_JS_FEATURES = "/features/reactAndJSLearnings",
  UI_FEATURES = "/features/uiLearnings",
  MISCELLANEOUS_FEATURES = "/features/miscellaneousCoolStuff",
  NOT_FOUND = "*"
}
export enum ROUTES_NAME_KEY {
  HOME = "",
  FEATURES = "featuresRoute"
}
export enum DOC_TITLE_NAME {
  HOME = "Avani Joshi | Frontend Developer",
  FEATURES = "Avani Joshi | Frontend Developer | Features",
  NOT_FOUND = "Avani Joshi | Frontend Developer | Not Found"
}

export enum SOCIAL_LINKS {
  GITHUB = "https://github.com/avaniklsjoshi",
  GITLAB = "https://gitlab.com/avaniklsjoshi",
  LINKEDIN = "https://www.linkedin.com/in/avani-joshi-6365b887/",
  TWITTER = "https://twitter.com/avaniklsjoshi/"
}

export const PORTFOLIO_URLS = [
  {
    path: "../../Assets/Portfolio/Avani Joshi Cover letter.pdf",
    name: "Avani Joshi Cover letter.pdf"
  },
  {
    path: "../../Assets/Portfolio/Resume1.pdf",
    name: "Avani Joshi Resume.pdf"
  },
  {
    path: "../../Assets/Portfolio/Avani Joshi Frontend Developer.pdf",
    name: "Avani Joshi Frontend Developer.pdf"
  },
  {
    path: "../../Assets/Portfolio/Avani Joshi Projects Worked on.pdf",
    name: "Avani Joshi Projects Worked on.pdf"
  }
];

export const CARDS_LIST = [
  {
    path: "miscellaneousCoolStuff",
    title: "cardMiscellaneousTitle",
    description: "cardMiscellaneousDescription",
    thumbnail: "../../Assets/Images/launch.png",
    information: "cardMiscellaneousInformation"
  },
  {
    path: "uiLearnings",
    title: "cardUITitle",
    description: "cardUIDescription",
    thumbnail: "../../Assets/Images/design.png",
    information: "cardUIInformation"
  },
  {
    path: "reactAndJSLearnings",
    title: "cardReactAndJSTitle",
    description: "cardReactAndJSDescription",
    thumbnail: "../../Assets/Images/code.png",
    information: "cardReactAndJSInformation"
  }
];
