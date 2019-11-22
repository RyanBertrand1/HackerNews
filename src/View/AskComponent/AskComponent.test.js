import React from 'react';
import ReactDOM , {unmountComponentAtNode, render} from 'react-dom';
import { act } from "react-dom/test-utils";
import Ask from './AskComponent';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

it('renders without crashing', () => {
  act(() => {
    render(<Ask></Ask>, container)    
  }) 
});