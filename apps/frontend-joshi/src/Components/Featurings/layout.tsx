import React, { useState } from "react";
import { FEATURINGS } from "../../Configs/Constants/const";
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
  type ObjectKey = keyof typeof FEATURINGS;

  const { routeName } = props;
  const [activeRouteComponentDetails, setActiveRouteComponentDetails] =
    useState<IComponentDetails>();

  const handleMenuClick = (e: React.SyntheticEvent, item: any) => {
    setActiveRouteComponentDetails(item);
  };

  return (
    <div className="sub-route-content">
      <BackLink />
      <div className="sub-route-container">
        <div className="left-bar">
          {FEATURINGS[routeName as ObjectKey].menu.map(
            (item: any, index: number) => {
              return (
                <button key={index} onClick={(e) => handleMenuClick(e, item)}>
                  {item.title}
                </button>
              );
            }
          )}
        </div>
        <div className="right-bar">
          <div className="right-bar-title">
            {activeRouteComponentDetails?.title}
          </div>
          {React.cloneElement(props.children, {
            activeRouteComponentDetails: activeRouteComponentDetails
          })}
        </div>
      </div>
    </div>
  );
}
