// @flow

import React, { Component } from "react";

export class App extends Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <textarea
        autoFocus={true}
        value={this.state.value}
        onChange={event => this.handleChange(event)}
      />
    );
  }
}
