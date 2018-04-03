// @flow

import React, { Component } from "react";
import styled from "styled-components";

export const _tested = { wordCount };

function wordCount(text: string) {
  return text.split(/\s+/).length;
}

export class App extends Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (wordCount(this.state.value) >= 300) {
      return <div />;
    } else {
      return (
        <Textarea
          autoFocus={true}
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
      );
    }
  }
}

const Textarea = styled.textarea`
  width: 600px;
  height: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;
