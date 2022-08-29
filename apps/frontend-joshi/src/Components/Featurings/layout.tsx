import BackLink from "../Common/backLink";
import "./layout.scss";
interface LayoutProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="sub-route-content">
      <BackLink />
      <div className="sub-route-container">
        <div className="left-bar">left bar</div>
        <div className="right-bar">
          right bar
          {children}
        </div>
      </div>
    </div>
  );
}
