import React from 'react';
import ReactDOM , {unmountComponentAtNode, render} from 'react-dom';
import { act } from "react-dom/test-utils";
import All from './AllComponent';
import axios from 'axios';
import expect from 'expect';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

it('renders with fake data', async () => {

  const fakeData = {
    hits:[
      {
        title : "title1",
        url : "url1",
        author: "author1",
        points: 100
      }
    ]
  };

  const spy = await jest.spyOn(axios, 'get').mockImplementation(() =>
    Promise.resolve({
      data: fakeData
    })
  );

  await act(async () => {
    await render(<All></All>, container);
  });

  expect(spy).toBeCalled();
  expect(container.querySelector("[data-testid=title]").textContent).toBe("title1");
  expect(container.querySelector("[data-testid=url]").textContent).toBe("url1");
  expect(container.querySelector("[data-testid=author]").textContent).toBe("by author1");
  expect(container.querySelector("[data-testid=points]").textContent).toBe("100 points");

  axios.get.mockRestore();

});