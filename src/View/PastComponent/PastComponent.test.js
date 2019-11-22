import React from 'react';
import ReactDOM , {unmountComponentAtNode, render} from 'react-dom';
import { act } from "react-dom/test-utils";
import Past from './PastComponent';

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
    render(<Past></Past>, container)    
  }) 
});