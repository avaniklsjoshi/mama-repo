export interface IWelcomePage {
  welcomeMsg: string;
}
export default function WelcomePage(props: IWelcomePage) {
  const { welcomeMsg } = props;
  return <div>{welcomeMsg}</div>;
}
