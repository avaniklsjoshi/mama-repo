import React, { useState } from "react";
import Menu from "./menu";
import * as SC from "./partials";
import BackLink from "../Common/backLink";
import "./layout.scss";

interface ILayoutProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactElement;
  routeName: string;
}
export interface IComponentDetails {
  title: string;
  componentName: string;
}

export default function Layout(props: ILayoutProps) {
  const { routeName, children } = props;
  const [activeRouteComponentDetails, setActiveRouteComponentDetails] =
    useState<IComponentDetails>();

  const activeComponent = (data: IComponentDetails) => {
    setActiveRouteComponentDetails(data);
  };

  return (
    <SC.SubRouteContent>
      <BackLink />
      <div className="sub-route-container">
        <div className="left-bar">
          <Menu routeName={routeName} activeComponent={activeComponent} />
        </div>
        <div className="right-bar">
          <div className="right-bar-title">
            {activeRouteComponentDetails?.title}
          </div>
          {React.cloneElement(children, {
            activeRouteComponentDetails: activeRouteComponentDetails
          })}
        </div>
      </div>
    </SC.SubRouteContent>
  );
}
