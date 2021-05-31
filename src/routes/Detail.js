import React from "react";

export class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    return location.state ? <span>{location.state.title}</span> : null;
  }
}
