import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../Like";

let container;

//------- Helpers -------
/** Render component to be tested before each spec */
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

/** Delete component to be tested after each spec */
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

//-------- Suite --------
describe("Testing Like component", () => {
  /** Test default paragraph content */
  it("Has paragraph Likes: 0 as default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  /** Test like increment on click event */
  it("Increments paragraph counter on like button click", () => {
    const p = container.querySelector("p");
    const likeButton = container.querySelector("#increment");

    act(() => {
      likeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(p.textContent).toBe("Likes: 1");
  });

  /** Test like decrement on click event */
  it("Decrements paragraph counter on dislike button click", () => {
    const p = container.querySelector("p");
    const likeButton = container.querySelector("#decrement");

    act(() => {
      likeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(p.textContent).toBe("Likes: -1");
  });
});
