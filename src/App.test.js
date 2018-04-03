// @flow

import React from "react";
import { mount } from "enzyme";
import { App, _tested } from "./App";

describe("App", () => {
  let wrapper;
  let textarea;

  beforeEach(() => {
    wrapper = mount(<App />);
    textarea = () => wrapper.find("textarea");
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("displays a text area tag", () => {
    expect(textarea()).toExist();
  });

  it("focuses on the text area", () => {
    expect(textarea().props().autoFocus).toBe(true);
  });

  it("allows to enter text", () => {
    textarea().simulate("change", { target: { value: "foo bar baz" } });
    expect(textarea()).toExist();
  });

  it("treats newlines as word separators", () => {
    expect(_tested.wordCount("foo\nbar")).toEqual(2);
  });

  describe("when 300 words are written", () => {
    it("removes the text area tag", () => {
      const words = Array(300)
        .fill("foo")
        .join(" ");
      textarea().simulate("change", { target: { value: words } });
      expect(textarea()).not.toExist();
    });

    it("shows an end message");
  });

  describe("when slightly under 300 words are written", () => {
    it("still shows the text area tag", () => {
      const words = Array(299)
        .fill("foo")
        .join(" ");
      textarea().simulate("change", { target: { value: words } });
      expect(textarea()).toExist();
    });
  });
});
