import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "user",
      data: "data",
    };
  }
  render() {
    const { data, username } = this.state;
    return (
      <div>
        {data}
        {username}
      </div>
    );
  }
}
export default Test;
