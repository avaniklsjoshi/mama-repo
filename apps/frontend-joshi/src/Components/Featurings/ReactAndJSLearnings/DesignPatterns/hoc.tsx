import React from "react";

function withWindowWidth(BaseComponent: any) {
  class DerivedClass extends React.Component {
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
      return <BaseComponent {...this.props} {...this.state} />;
    }
  }
  // Extra bits like hoisting statics omitted for brevity
  return DerivedClass;
}

// To be used like this in some other file:

const MyComponent = (props: any) => {
  return <div>Window width is: {props.windowWidth}</div>;
};

export default withWindowWidth(MyComponent);
