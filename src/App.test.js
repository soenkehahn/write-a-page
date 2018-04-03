// @flow

import React from "react";
import { mount } from "enzyme";
import { App } from "./App";

describe("App", () => {
  it("displays a text area tag", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("textarea")).toExist();
  });

  it("focuses on the text area");

  describe("when over 300 words are written", () => {
    it("removes the text area tag");

    it("shows an end message");
  });
});
