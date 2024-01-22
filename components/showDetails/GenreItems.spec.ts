import { expect, it, describe } from "vitest";
import { mount } from "@vue/test-utils";

import GenreItemVue from "./GenreItem.vue";

// Test to check if GenreItems.vue renders correctly with and without provided data.
describe("GenreItems.vue", () => {
  it("renders correctly with genres", () => {
    const mockGenres = ["Comedy, Romance, Drama"];
    const wrapper = mount(GenreItemVue, { props: { genres: mockGenres } });

    expect(wrapper.text()).toContain("Genres: Comedy, Romance, Drama");
  });

  it("renders N/A without genres", () => {
    const wrapper = mount(GenreItemVue);

    expect(wrapper.text()).toContain("N/A");
  });
});
