import React from "react";

class WindowWidth extends React.Component<any> {
  state = {
    windowWidth: window.innerWidth
  };

  onResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return this.props.children(this.state.windowWidth);
  }
}

// To be used like this:

export default function RenderProps() {
  return (
    <WindowWidth>
      {(width: number) => <div>Window width is: {width}</div>}
    </WindowWidth>
  );
}
