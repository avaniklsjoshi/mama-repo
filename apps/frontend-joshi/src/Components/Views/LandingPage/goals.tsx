//TODO: i18n from backend, like timeline cards

import "./goals.scss";
import { useTranslation } from "react-i18next";

export default function Goals() {
  const { t } = useTranslation();

  return (
    <div className="goals-container">
      <h2>{t("myInterests")}</h2>
      <ul>
        <li>
          Be able to fully engineer a Web project from start to finish within
          the next year.
        </li>
        <li>Increase unit test coverage on all critical paths to 80%.</li>
        <li>Devops certification</li>
        <li>
          Set up end-to-end testing on all core user journeys by the end of the
          year.
        </li>
        <li>Learn a new programming language, may be Python</li>
        {/* <li>Become a team lead in the next two years</li> */}
        <li>
          Give a presentation on a new coding project at two software
          development conferences next year.
        </li>
      </ul>
    </div>
  );
}
