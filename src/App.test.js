// @flow

import React from "react";
import { mount } from "enzyme";
import { App } from "./App";

describe("App", () => {
  let wrapper;
  let textarea;

  beforeEach(() => {
    wrapper = mount(<App />);
    textarea = wrapper.find("textarea");
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("displays a text area tag", () => {
    expect(textarea).toExist();
  });

  it("focuses on the text area", () => {
    expect(textarea.props().autoFocus).toBe(true);
  });

  it("allows to enter text", () => {
    textarea.simulate("change", { target: { value: "foo bar baz" } });
    expect(textarea).toExist();
  });

  describe("when over 300 words are written", () => {
    it("removes the text area tag");

    it("shows an end message");
  });
});
