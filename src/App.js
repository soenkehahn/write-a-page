// @flow

import React, { Component, type Node } from "react";
import styled from "styled-components";

const wordLimit = 300;

export const _tested = { wordCount };

function wordCount(text: string): number {
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

  render(): Node {
    if (wordCount(this.state.value) >= wordLimit) {
      return <Div>Done!</Div>;
    } else {
      return (
        <Textarea
          autoFocus={true}
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          spellCheck={false}
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

const Div = styled.div`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;
