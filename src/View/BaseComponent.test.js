import React from 'react';
import ReactDOM , {unmountComponentAtNode, render} from 'react-dom';
import { act } from "react-dom/test-utils";
import Base from './BaseComponent';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

it("test router", () => {

  act( () => {
    render(<MemoryRouter initialEntries={["/submit"]}><Base /></MemoryRouter>, container);
  });

  expect(container.querySelector("[data-testid=pagetitle]").innerHTML).toBe("Submit");

});
